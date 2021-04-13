import { useState } from "react";
import Card from "../Card/Card";
import "./NewExpense.css";

const NewExpense = props => {
  //   const [title, setTitle] = useState("");
  //   const [amount, setAmount] = useState("");
  //   const [date, setDate] = useState("");

  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangedHandler = e => {
    setUserInput(prevState => {
      return { ...prevState, title: e.target.value };
    });
    // setUserInput({ ...userInput, title: e.target.value });
  };
  const amountChangedHandler = e => {
    setUserInput(prevState => {
      return { ...prevState, amount: +e.target.value };
    });
  };
  const dateChangedHandler = e => {
    setUserInput(prevState => {
      return { ...prevState, date: new Date(e.target.value) };
    });
  };

  const submitHandler = e => {
    e.preventDefault();
    props.new({ ...userInput });
    setUserInput({ ...userInput, title: "", amount: "" });
    props.cancel();
  };

  return (
    <Card className="new-expense">
      <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__control">
            <label>Title</label>
            <input
              type="text"
              onChange={titleChangedHandler}
              value={userInput.title}
              autoFocus
            />
          </div>
          <div className="new-expense__control">
            <label>Amount</label>
            <input
              type="number"
              min="0.01"
              step="0.01"
              onChange={amountChangedHandler}
              value={userInput.amount}
            />
          </div>
          <div className="new-expense__control">
            <label>Date</label>
            <input
              type="date"
              min="2019-01-01"
              max="2022-12-31"
              onChange={dateChangedHandler}
            />
          </div>
        </div>
        <div className="new-expense__actions">
          <button onClick={props.cancel}>CANCEL</button>
          <button type="submit">ADD</button>
        </div>
      </form>
    </Card>
  );
};

export default NewExpense;
