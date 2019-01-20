import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi there</h1>
        <Person name="Max" age="28" />
        <Person name="Maxii" age="280">my Hobbies: Racing!</Person>
        <Person name="Evani" age="2988"/>
      </div>
    );
  }
}

export default App;
