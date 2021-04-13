import "./Expenses.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";

function Expenses(props) {
  const expenses = [];
  props.expenses.map(expense =>
    expenses.push(
      <div key={expense.date} className="expense-item">
        <ExpenseDate date={expense.date} />
        <div className="expense-item__description">
          <h2>{expense.title}</h2>
          <div className="expense-item__price">
            ${expense.amount.toFixed(2)}
          </div>
        </div>
      </div>
    )
  );

  return <div className="Expenses">{expenses}</div>;
}

export default Expenses;
