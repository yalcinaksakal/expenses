import "./ExpenseFilter.css";
import Card from "../Card/Card";
const ExpenseFilter = props => {
  return (
    <Card className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={props.filterHandler} value={props.year}>
          <option value="ALL">ALL</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
        </select>
      </div>
    </Card>
  );
};

export default ExpenseFilter;
