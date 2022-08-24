import { useState } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const handleUsernameChange = (event) => {
    setEnteredUsername(event.target.value);
  };

  const handleAgeChange = (event) => {
    setEnteredAge(event.target.value);
  };

  const handleAddUserSubmit = (event) => {
    event.preventDefault();

    if (enteredUsername.trim().length === 0 && enteredAge.trim().length === 0) {
      props.onError({
        title: 'Empty!',
        message: 'Please enter a value in empty fields',
      });

      return;
    }

    if (+enteredAge < 1) {
      props.onError({
        title: 'Incorrect Age!',
        message: 'Please enter a valid age (> 0)',
      });

      return;
    }

    props.onAddUser(enteredUsername, enteredAge);
    setEnteredUsername('');
    setEnteredAge('');
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUserSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
          value={enteredUsername}
          onChange={handleUsernameChange}
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          type="text"
          name="age"
          id="age"
          value={enteredAge}
          onChange={handleAgeChange}
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
