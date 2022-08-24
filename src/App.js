import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UsersList from './components/AddUser/UsersList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [usersList, setUsersList] = useState([]);

  const handleUserAdd = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [...prevUsersList, { id: Math.random().toString(), name: uName, age: uAge }];
    });
  }

  return (
    <div>
      <AddUser onAddUser={handleUserAdd} />
      <UsersList users={usersList} />
      <ErrorModal title="An Error Occured!" message="Something went wrong!" />
    </div>
  );
}

export default App;
