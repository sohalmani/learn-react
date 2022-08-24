import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UsersList from './components/AddUser/UsersList';

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
    </div>
  );
}

export default App;
