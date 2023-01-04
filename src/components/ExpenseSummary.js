import React from "react";
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import selectExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import numeral from "numeral";

export const ExpenseSummary = (props)=> {
    const expenseCount = props.expenses.length;
    const expenseTotal = numeral(getExpensesTotal(props.expenses) / 100).format('$0,0.00');
    return (
      <div className="page-header">
       <div className="content-container">
          <h2 className="page-header__title">
           Viewing <span>{expenseCount === 1 ? '1 expense' : expenseCount +" expenses"}</span> totalling <span>{expenseTotal}</span>
           <div className="page-header__actions">
            <Link className="button" to="/create">Add Expense</Link>
           </div> 
          </h2>
        </div>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
      expenses: selectExpenses(state.expenses, state.filters)
    };
  };

export default connect(mapStateToProps)(ExpenseSummary);