import React from 'react';
import { shallow } from 'enzyme';
import {LoginPage} from '../../components/LoginPage';

test('should render LoginPage correctly', () => {
  const wrapper = shallow(<LoginPage />);
  expect(wrapper).toMatchSnapshot();
});

test('should startlogin on button click', ()=>{
  const onStartLoginSpy = jest.fn();
  const wrapper = shallow(<LoginPage startLogin={onStartLoginSpy}/>);
  wrapper.find('button').simulate('click');
  expect(onStartLoginSpy).toHaveBeenCalled();
});