import { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from './ExpensesChart';
import ExpensesList from './ExpensesList';
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

  return (
    <Card className="expenses">
      <ExpensesFilter selectedYear={filteredYear} onFilterChange={handleFilterChange} />
      <ExpensesChart expenses={expenses} />
      <ExpensesList items={expenses} />
    </Card>
  );
};

export default Expenses;
