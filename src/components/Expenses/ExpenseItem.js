import Card from '../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  let title = props.title;

  const clickHandler = () => {
    title = 'Updated';
    console.log(title);
  };

  // Title does not update in above way
  // as we just change title value but
  // the component does not re-render.

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
      <button onClick={clickHandler}>Click Title</button>
    </Card>
  );
};

export default ExpenseItem;
