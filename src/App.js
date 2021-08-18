import React from 'react';
import Expenses from './components/Expenses';

function App() {
  const expenses = [
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

  // --> This below is the latest syntax for JSX.
  //     No need to imports React, works out of the box.

  // return (
  //   <div>
  //     <h2>Let's get started!</h2>
  //     <Expenses items={expenses} />
  //   </div>
  // );

  // --> This below is how JSX works under the hood.
  //     We need to import React for this.

  return React.createElement(
    'div',
    {},
    React.createElement(
      'h2',
      {},
      "Let's get started!",
      React.createElement(Expenses, { items: expenses })
    )
  );

  // If you look closely to syntax above,
  // you will understand why we need one root element,
  // and why we cannot return two siblings at once.
}

export default App;
