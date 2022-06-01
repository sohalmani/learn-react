import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  // Create a method that accepts the 
  // expenses as parameter. Bind it to 
  // the component as a prop.
  const saveExpensesData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    }
    
    props.onAddExpense(expenseData);
  }

  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpensesData={saveExpensesData} />
    </div>
  );
};

export default NewExpense;
