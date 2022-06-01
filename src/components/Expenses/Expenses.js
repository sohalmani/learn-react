import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const expenses = props.items;

  // Instead of printing items one by one, 
  // call a map function and return the items in an Array. 
  // React can even render components in form of array, 
  // like {[<ExpenseItem />, <ExpenseItem />, <ExpenseItem />]}
  // which is same as calling <ExpenseItem /> in JSX itself.
  return (
    <Card className="expenses">
      {expenses && expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
