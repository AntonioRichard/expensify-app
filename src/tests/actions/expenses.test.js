import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { startAddExpense, addExpense, editExpense, removeExpense, setExpenses } from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';
jest.useFakeTimers();

const createMockStore = configureMockStore([thunk]);
const uid = 'thisismytestuid';

beforeEach(()=>{
  const expensesData = {};
  expenses.forEach(({id, description, note, amount, createdAt})=>{
    expensesData[id] = { description, note, amount, createdAt };
  })
  database.ref(`users/${uid}/expenses`).set(expensesData);
});

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '123abc' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '123abc'
  });
});

test('should setup edit expense action object', () => {
  const action = editExpense('123abc', { note: 'New note value' });
  expect(action).toEqual({
    type: 'EDIT_EXPENSE',
    id: '123abc',
    updates: {
      note: 'New note value'
    }
  });
});

test('should setup add expense action object with provided values', () => {
  const action = addExpense(expenses[2]);
  expect(action).toEqual({
    type: 'ADD_EXPENSE',
    expense: expenses[2]
  });
});

test('should setup set expense action object with data', ()=>{
  const action = setExpenses(expenses);
  expect(action).toEqual({
    type: 'SET_EXPENSES',
    expenses
  });
});

// test('should add expense to database and store', async (done) =>{
//   const store = createMockStore({});
//   const expenseData = {
//     description: 'Mouse',
//     amount: 3000,
//     note: '',
//     createdAt: 1000
//   };

//   store.dispatch(startAddExpense(expenseData)).then(async ()=>{
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'ADD_EXPENSE',
//       expense: {
//         id: expect.any(String),
//         ...expenseData
//       }
//     })

//     return await database.ref(`expenses/${actions[0].expense.id}`).once('value');
//   }).then((snapshot)=>{
//     expect(snapshot.val()).toEqual(expenseData);
//     done();
//   });
// });

// test('should add expense with defaults to database and store', ()=>{
//   const store = createMockStore({});
//   const expenseData = {
//     description: '',
//     amount: 0,
//     note: '',
//     createdAt: 0
//   };

//   store.dispatch(startAddExpense({})).then(()=>{
//     const actions = store.getActions();
//     expect(actions[0]).toEqual({
//       type: 'ADD_EXPENSE',
//       expense: {
//         id: expect.any(String),
//         ...expenseData
//       }
//     })

//     return database.ref(`expenses/${actions[0].expense.id}`).once('value');
//   }).then((snapshot)=>{
//     expect(snapshot.val()).toEqual(expenseData);
//   });
// });