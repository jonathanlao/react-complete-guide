import ExpenseItem from "./ExpenseItem";
import Card from "./Card"
import "./ExpenseList.css"

const ExpenseList = props => {
  const expenseList = props.expenses.map((expense) => (
    <ExpenseItem
      title={expense.title}
      amount={expense.amount}
      date={expense.date}
    ></ExpenseItem>
  ));

  return (
    <Card className="expenses">
      {expenseList}
    </Card>
  );
}

export default ExpenseList;
