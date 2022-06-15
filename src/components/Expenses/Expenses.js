import Card from '../UI/Card';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  const expenses = props.items;
  
  // Add "key" so that React uniquely identifies 
  // the component and only updates that instead of 
  // updating all components.
  return (
    <Card className="expenses">
      {expenses && expenses.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </Card>
  );
};

export default Expenses;
