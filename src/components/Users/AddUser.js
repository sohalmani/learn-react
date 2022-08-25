/**
 * useRef is React builtin method used particulary for
 * reading values. Its shortens the code for that.
 * For manipulating DOM and state, it is recommended to
 * useState, although useRef can be used but it is not
 * made for that purpose.
 */ 
import { useRef } from 'react';

import Card from '../UI/Card';
import Button from '../UI/Button';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  /**
   * useRef creates a reference to and element
   * such that upon referenceing to that element, 
   * it returns the actual DOM node of that element
   */
  const nameInputRef = useRef();
  const ageInputRef = useRef();

  const handleAddUserSubmit = (event) => {
    event.preventDefault();

    const enteredUsername = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

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

    nameInputRef.current.value = '';
    ageInputRef.current.value = '';
  };

  /**
   * React has provided a special built-in prop 
   * called 'ref' which is used to reference to
   * the element. It is available for all elements
   */

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUserSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" ref={nameInputRef} />
        <label htmlFor="age">Age (Years)</label>
        <input type="text" name="age" id="age" ref={ageInputRef} />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
};

export default AddUser;
