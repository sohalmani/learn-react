const AddUser = (props) => {
  const handleAddUserSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleAddUserSubmit}>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username" />
      <label htmlFor="age">Age (Years)</label>
      <input type="text" name="age" id="age" />
      <button type="submit">Add User</button>
    </form>
  );
};

export default AddUser;
