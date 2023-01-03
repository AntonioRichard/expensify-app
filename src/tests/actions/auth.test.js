import { login, logout } from '../../actions/auth'

test('set up login action', () => {
    const uid = 'test';
    const action = login(uid);
    expect(action).toEqual({
      type: 'LOGIN',
      uid
    });
});

test('set up logout action', () => {
    const action = logout();
    expect(action).toEqual({type: 'LOGOUT'});
});