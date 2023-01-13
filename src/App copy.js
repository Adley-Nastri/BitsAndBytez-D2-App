import React from 'react';
import { useState } from 'react';
import logo from './logo.svg';
import './App.css';


const Person = (props) => {


  const [age, setAge] = useState(props.age);

  return (


    <>
      <h1>Name: {props.name}</h1>
      <h2>Last name: {props.lastName}</h2>
      <h2>Age: {age}</h2>
      <button onClick={() => setAge((prevAge) => prevAge - 1)}>-</button>
      <button onClick={() => setAge((prevAge) => prevAge + 1)}>+</button>
    </>
    
  )



}


function App() {



  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Person
          name={'Frank'}
          lastName={'Sinatra'}
          age={69}
        />


        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
