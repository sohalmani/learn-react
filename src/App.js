/**
 * All hooks start from 'use' keyword.
 * useState being the most used.
 */
import { useState } from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  /**
   * useState returns an array, containing:
   * the state itself;
   * and a function to change that state.
   */
  const [personState, setPersonState] = useState({
    persons: [
      { name: 'Mani', age: '21' },
      { name: 'Chander', age: '24' },
      { name: 'Muskaan', age: '20' },
    ],
    otherState: 'some other value',
  });

  console.log(personState);

  const switchNameHandler = () => {
    /**
     * Don't do this 👇
     *
     * personState.persons[0].name = "Maninder";
     *
     * 👆 This is going to throw error. Use react
     * setState method instead to change state.
     */
    setPersonState({
      persons: [
        { name: 'Maninder', age: '22' },
        { name: 'Chander', age: '24' },
        { name: 'Muskaan', age: '21' },
      ],
    });

    console.log(personState);
  };
  return (
    <div className="App">
      <h1>Hi, this is my beginning in learning react</h1>
      <p>This is really exciting...</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personState.persons[0].name}
        age={personState.persons[0].age}
      />
      {/* 
        Properties passed as attributes are accessible
        within components itself.
      */}
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
