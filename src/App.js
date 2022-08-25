import React, { useState } from 'react';

import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import ErrorModal from './components/UI/ErrorModal';
import Wrapper from './components/Helpers/Wrapper';

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

  /**
   * Using Wrapper component here will return only children,
   * as Wrapper component itself return only children
   */

  return (
    <Wrapper>
      <AddUser onAddUser={handleUserAdd} onError={handleError} />
      {!!usersList.length && <UsersList key="users-list-card" users={usersList} />}
      {error && (
        <ErrorModal
          key="error-modal"
          title={error.title}
          message={error.message}
          onConfirm={removeErrorModal}
        />)}
    </Wrapper>
  );
}

export default App;
