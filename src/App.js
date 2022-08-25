import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';

function App() {
  const [usersList, setUsersList] = useState([]);
  const [error, setError] = useState();

  const handleUserAdd = (uName, uAge) => {
    setUsersList((prevUsersList) => {
      return [
        ...prevUsersList,
        { id: Math.random().toString(), name: uName, age: uAge },
      ];
    });
  };

  const handleError = (errObj) => {
    setError({
      title: errObj.title,
      message: errObj.message,
    });
  };

  const removeErrorModal = (event) => {
    event.stopPropagation();
    setError(null);
  };

  return (
    <div>
      <AddUser onAddUser={handleUserAdd} onError={handleError} />
      {usersList.length && <UsersList users={usersList} />}
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={removeErrorModal}
        />
      )}
    </div>
  );
}

export default App;
