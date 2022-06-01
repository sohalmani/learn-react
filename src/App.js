import { useState } from 'react';

import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

// create dummy data as a separate array outside component
const DUMMY_EXPENSES = [
  {
    id: 'e1',
    title: 'Toilet Paper',
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: 'e2',
    title: 'New TV',
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: 'e3',
    title: 'Car Insurance',
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: 'e4',
    title: 'New Desk (Wooden)',
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  // Pass dummy data to useState hook to manage and alter data
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  // Upon adding new expense, update the expenses array created 
  // above using hook. Note, use a function that gets the prev snapshot of data 
  // inside state updating function rather than passing data 
  // directly inside the function like setExpenses([expense, ...prevExpenses]).
  // This ensures you always have updated data when updating state
  const handleAddExpense = (expense) => {
    setExpenses((prevExpenses) => [expense, ...prevExpenses]);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense onAddExpense={handleAddExpense} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
