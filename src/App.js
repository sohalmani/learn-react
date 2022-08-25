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

  /**
   * In React, each component should return exactly one element,
   * it cannot return two adjacent elements.
   * To solve this, we can return multiple elements in form of an array,
   * but keep in mind that in case of array, React needs that each element
   * in array should have a unique "key" binded to it so that it can 
   * recognise and update it.
   * In below example, we have give custom keys to components.
   */

  return [
    <AddUser key="add-user-card" onAddUser={handleUserAdd} onError={handleError} />,
    !!usersList.length && <UsersList key="users-list-card" users={usersList} />,
    error && (
      <ErrorModal
        key="error-modal"
        title={error.title}
        message={error.message}
        onConfirm={removeErrorModal}
      />
    ),
  ];
}

export default App;
