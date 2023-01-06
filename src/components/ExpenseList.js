import ExpenseItem from "./ExpenseItem";

function ExpenseList (props) {
  return (
    <div>
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        ></ExpenseItem>
      ))}
    </div>
  );
}

export default ExpenseList;
