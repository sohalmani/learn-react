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

  // filter the expenses based on 
  // the year we have in state at all times
  expenses = expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear
  });

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={handleFilterChange} />
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
