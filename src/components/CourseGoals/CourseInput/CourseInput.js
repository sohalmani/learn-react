import React, { useState } from 'react';

import Button from '../../UI/Button/Button';
import './CourseInput.css';

const CourseInput = (props) => {
  const [enteredValue, setEnteredValue] = useState('');

  // Invoke state for managing validation
  const [isValid, setIsValid] = useState(true);

  const goalInputChangeHandler = (event) => {
    setIsValid(true);

    // Set valid if user inputs
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    // Set valid if no value, prevent adding goal
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    
    props.onAddGoal(enteredValue);
  };


  // Add styles conditionally based on if the user input is valid
  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? 'red' : 'black' }}>Course Goal</label>
        <input
          type="text"
          style={{
            borderColor: !isValid ? 'red' : '#ccc',
            backgroundColor: !isValid ? 'salmon' : 'transparent',
          }}
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Goal</Button>
    </form>
  );
};

export default CourseInput;
