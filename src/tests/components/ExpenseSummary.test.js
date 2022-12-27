import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseSummary} from '../../components/ExpenseSummary';
import expenses from '../fixtures/expenses';

test("should render text for viewing multiple expenses",()=>{
    const wrapper = shallow(<ExpenseSummary expenses={expenses}/>)
    expect(wrapper).toMatchSnapshot();
});

test("should render text for viewing single expense",()=>{
    const wrapper = shallow(<ExpenseSummary expenses={[expenses[0]]}/>)
    expect(wrapper).toMatchSnapshot();
});