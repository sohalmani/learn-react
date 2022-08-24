import React, { useState } from 'react';

import AddUser from './components/AddUser/AddUser';
import UsersList from './components/AddUser/UsersList';
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

  const removeErrorModal = () => {
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
          onClick={removeErrorModal}
        />
      )}
    </div>
  );
}

export default App;
