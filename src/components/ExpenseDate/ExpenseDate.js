import "./ExpenseDate.css";

function Date(props) {
  const date = props.date.toLocaleString("en-US", {
    month: "long",
    day: "2-digit",
  });

  const year = props.date.getFullYear();
  return (
    <div className="Date">
      <div>{date}</div>
      <div>{year}</div>
    </div>
  );
}
export default Date;
