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
    otherState: 'some other value',
  });

  /**
   * this logs the person state with person array
   * as well as other state.
   */
  console.log(personState);

  const switchNameHandler = () => {
    setPersonState({
      persons: [
        { name: 'Maninder', age: '22' },
        { name: 'Chander', age: '24' },
        { name: 'Muskaan', age: '21' },
      ],
    });

    /**
     * this logs just the person state with person array,
     * other value is not logged.
     * This is because 'setState' in 'useState' hook replaces
     * the state that is defined again while using setState.
     *
     * To overcome this, you can:
     * 1) set otherValue to same value again from previous state; like
      setPersonState({
        persons: [
          { name: 'Maninder', age: '22' },
          { name: 'Chander', age: '24' },
          { name: 'Muskaan', age: '21' },
        ],
        otherState: personState.otherState
      });
     * 2) Or use the 'useState' again to define otherValue.
     */
    console.log(personState);
  };

  /**
   * We will use 'useState' again, this is much more effecient.
   */
  // eslint-disable-next-line
  const [otherState, setOtherState] = useState('some new value');

  console.log(personState, otherState);

  return (
    <div className="App">
      <h1>Hi, this is my beginning in learning react</h1>
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
