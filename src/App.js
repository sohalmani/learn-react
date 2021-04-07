import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, this is my beginning in learning react</h1>
      <p>This is really exciting...</p>
      <Person name="Mani" age="21" />
      {/* 
        Properties passed as attributes are accessible
        within components itself.
      */}
      <Person name="Chander" age="24">
        Chander loves to exercise.
      </Person>
      <Person name="Muskaan" age="20" />
    </div>
  );
}

export default App;
