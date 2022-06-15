import { useState } from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);

  const startEditing = () => {
    setIsEditing(true);
  };

  const stopEditing = () => {
    setIsEditing(false);
  };

  const saveExpensesData = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  // Toggle the form to add expense and start editing
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditing}>Add New expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpensesData={saveExpensesData}
          onCancel={stopEditing}
        />
      )}
    </div>
  );
};

export default NewExpense;
