import "./Expenses.css";
import ExpenseDate from "../ExpenseDate/ExpenseDate";
import Card from "../Card/Card";
function Expenses(props) {
  let expenses = [];

  if (props.expenses.length)
    props.expenses.map(expense =>
      expenses.push(
        <Card key={expense.id} className="expense-item">
          <ExpenseDate date={expense.date} />
          <div className="expense-item__description">
            <h2>{expense.title}</h2>
            <div className="expense-item__price">
              ${expense.amount.toFixed(2)}
            </div>
          </div>
        </Card>
      )
    );
  else expenses = `No expenses found in ${props.year}`;
  return <Card className="Expenses">{expenses}</Card>;
}

export default Expenses;
