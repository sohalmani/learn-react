import { useState } from 'react';
import './ExpenseForm.css';

const ExpenseForm = () => {
  /**
   * The below method was to use multiple
   * useState methods to manage state.
   */

  // const [enteredTitle, setEnteredTitle] = useState('');

  // const titleChangeHandler = (event) => {
  //   setEnteredTitle(event.target.value);
  // };

  // const [enteredAmount, setEnteredAmount] = useState('');

  // const amountChangeHandler = (event) => {
  //   setEnteredAmount(event.target.value);
  // };

  // const [enteredDate, setEnteredDate] = useState('');

  // const dateChangeHandler = (event) => {
  //   setEnteredDate(event.target.value);
  // };

  /**
   * Now, in below method we will use a
   * single state to manage all inputs.
   */

  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: '',
  });

  const titleChangeHandler = (event) => {
    /**
     * The below method is not recommended.
     * React schedules state updates. If we
     * have a lot of state changes there may
     * be cases where the state object we
     * receive below is not up-to-date.
     */

    // setUserInput({
    //   ...userInput,
    //   enteredTitle: event.target.value,
    // });

    /**
     * Using below method ensures we always
     * have an updated prevsious state.
     * NOTICE: We still cannot spread userInput
     * array afterwards. Doing that will override
     * changed value.
     */

    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredAmount: event.target.value,
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput({
      ...userInput,
      enteredDate: event.target.value,
    });
  };

  /**
   * Note: Notice we spread the userInput object
   * before we change any value. This is because
   * spreading it before does not bring back the
   * old value. Rather changing it afterwards makes
   * sure we override the old value, thus ensuring
   * we always have new updated value.
   */

  return (
    <form action="">
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label htmlFor="title">Title</label>
          <input type="text" id="title" onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label htmlFor="amount">Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            id="amount"
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label htmlFor="date">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            id="date"
            onChange={dateChangeHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
