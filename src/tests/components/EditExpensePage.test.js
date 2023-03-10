import React from "react";
import { shallow } from "enzyme";
import { EditExpensePage } from "../../components/EditExpensePage";
import expenses from "../fixtures/expenses";

let startEditExpense, startRemoveExpense, history, wrapper;

beforeEach(()=>{
    startEditExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = { push: jest.fn() };
    wrapper = shallow(<EditExpensePage 
        expense={expenses[0]} 
        startRemoveExpense={startRemoveExpense} 
        startEditExpense={startEditExpense} 
        history={history}/>);
});

test('should render EditExpensePage', ()=>{
    expect(wrapper).toMatchSnapshot();
});

test('should handle editExpense', ()=>{
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startEditExpense).toHaveBeenLastCalledWith(expenses[0].id, expenses[0]);
});

test('should handle removeExpense', ()=>{
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({ id: expenses[0].id });
});