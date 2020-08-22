import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  
  return (
    <div className="App">
      <header className="App-header">
       <p style={{color:'red',fontSize:'50px'}}>Creating React App</p>
       <Person name="munna" job="actress"></Person>
       <Person name="sumon" job="Teacher"></Person>
       <Person name="afia kabir" job="Tik-tok konna"></Person>
      </header>
    </div>
  );
}

function Person(props){
  return(
    <div style={{border:'2px solid gold',width:'400px',margin:'10px',color:'green'}}>
      <h1>My name: {props.name}</h1>
      <p>My Profession:{props.job}</p>
    </div>
  )
}

export default App;
