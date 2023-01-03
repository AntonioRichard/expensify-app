import authReducer from '../../reducers/auth';

test('should login', ()=>{
    const uid = 'test';
    const state = authReducer(undefined, {type: 'LOGIN', uid})
    expect(state).toEqual({uid})
});

test('should logout', ()=>{
    const state = authReducer(undefined, {type: 'LOGOUT'})
    expect(state).toEqual({})
});