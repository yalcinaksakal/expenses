import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";
import ExpensesChart from "./components/ExpensesChart/ExpensesChart";
const expenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expensesState, setExpenses] = useState(expenses);

  const [filterYear, setFilterYear] = useState("ALL");

  const newExpenseHandler = newExpense => {
    newExpense.id = `e${expensesState.length + 1}`;
    if (!newExpense.date) newExpense.date = new Date();
    setExpenses(prevState => [...prevState, newExpense]);
  };
  const filterHandler = e => {
    setFilterYear(e.target.value);
  };

  const [showNewExpenseEl, setNewExpenseEl] = useState(false);

  const newExpense = () => {
    setNewExpenseEl(prevState => !prevState);
  };

  const exp = year => {
    return year === "ALL"
      ? expensesState
      : expensesState.filter(exp => exp.date.getFullYear() === +year);
  };

  return (
    <div className="App">
      <h1>Expenses</h1>
      {showNewExpenseEl ? (
        <NewExpense new={newExpenseHandler} cancel={newExpense} />
      ) : (
        <button onClick={newExpense}>Add Expense</button>
      )}
      <ExpenseFilter filterHandler={filterHandler} year={filterYear} />
      <ExpensesChart className="chart" expenses={exp(filterYear)} />
      <Expenses expenses={exp(filterYear)} year={filterYear} />
    </div>
  );
}

export default App;
