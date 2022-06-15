import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
  let expenses = props.items;

  const [filteredYear, setFilteredYear] = useState('2020');

  const handleFilterChange = (selectedYear) => {
    setFilteredYear(selectedYear);
  }

  expenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  // Store content message for no expenses
  let expensesContent = <p>No expenses found!</p>;

  // If there are expenses, store all of them 
  // in a variable and output in JSX
  if (expenses.length > 0) {
    expensesContent = expenses.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))
  }

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={handleFilterChange} />
      {expensesContent}
    </Card>
  );
};

export default Expenses;
