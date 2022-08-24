import Card from '../UI/Card';

import classes from './AddUser.module.css';

const AddUser = (props) => {
  const handleAddUserSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Card className={classes.input}>
      <form onSubmit={handleAddUserSubmit}>
        <label htmlFor="username">Username</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="age">Age (Years)</label>
        <input type="text" name="age" id="age" />
        <button type="submit">Add User</button>
      </form>
    </Card>
  );
};

export default AddUser;
