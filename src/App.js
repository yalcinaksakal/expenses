import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import "./App.css";
import { useState } from "react";
import ExpenseFilter from "./components/ExpenseFilter/ExpenseFilter";

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

    setExpenses(prevState => [...prevState, newExpense]);
  };
  const filterHandler = e => {
    setFilterYear(e.target.value);
  };
  return (
    <div className="App">
      <h1>Expenses</h1>
      <ExpenseFilter filterHandler={filterHandler} year={filterYear} />
      <Expenses expenses={expensesState} year={filterYear} />

      <NewExpense new={newExpenseHandler} />
    </div>
  );
}

export default App;
