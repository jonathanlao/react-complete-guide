import ExpenseItem from "./ExpenseItem";
import Card from "./Card";
import ExpensesFilter from "./ExpensesFilter";
import "./ExpenseList.css";
import { useState } from "react";

const ExpenseList = (props) => {
  const [filteredYear, setFilteredYear] = useState('2020')

  const expenseList = props.expenses
    // .filter(expense =>
    //   expense.date.getFullYear().toString() === filteredYear
    // )
    .map(expense => (
    <ExpenseItem
      key={expense.title} // Don't fully understand this yet
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));

  const filterExpensesHandler = year => {

  }

  return (
    <Card className="expenses">
      <ExpensesFilter year={filteredYear} onFilterExpenses={filterExpensesHandler} />
      {expenseList}
    </Card>
  );
};

export default ExpenseList;
