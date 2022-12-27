import React from "react";
import { connect } from "react-redux";
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from "numeral";

export const ExpenseSummary = (props)=> {
    const expenseCount = props.expenses.length;
    const expenseTotal = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
    return (
        <h3>
        Viewing {expenseCount === 1 ? "1 expense" : expenseCount +" expenses"} totalling {expenseTotal}
        </h3>
 );
};

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };

export default connect(mapStateToProps)(ExpenseSummary);