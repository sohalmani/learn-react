import { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Mani', age: '21' },
      { name: 'Chander', age: '24' },
      { name: 'Muskaan', age: '20' },
    ],
  });

  // eslint-disable-next-line
  const [otherState, setOtherState] = useState('some new value');

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Maninder', age: '22' },
        { name: 'Chander', age: '24' },
        { name: 'Muskaan', age: '21' },
      ],
    });
  };

  return (
    <div className="App">
      <h4>This was from old version. We will start from new version now.</h4>
      <h1>Hi, this is my beginning in learning react.</h1>
      <p>This is really exciting...</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      <Person
        name={personState.persons[1].name}
        age={personState.persons[1].age}
      >
        Chander loves to exercise.
      </Person>
      <Person
        name={personState.persons[2].name}
        age={personState.persons[2].age}
      />
    </div>
  );
}

export default App;
