import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    person: [
      { name: 'max', age: 28},
      { name: 'menu', age: 30},
      { name: 'matt', age: 30}
    ]
  }

  switchNameHandler = (newName) => {
    // alert('was clicked');
    // Don't do this: this.state.person[0].name = "heyoo";
    this.setState({
      person: [
        { name: newName, age: 28},
        { name: 'menuhehe', age: 30},
        { name: 'matt', age: 27},
      ]})
  }

  nameChangedHandler = (event) => {
    this.setState({
      person: [
        { name: 'Matt', age: 28},
        { name: event.target.value, age: 30},
        { name: 'matt', age: 27},
      ]})
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    return (
      <div className="App">
        <h1>Hi there</h1>
        <p>This is really working !</p>
        <button
        style={style}
        onClick={() => this.switchNameHandler("Mateuszek")}>Switch Name</button>
        <Person
          name={this.state.person[0].name}
          age={this.state.person[0].age}  />
        <Person
          name={this.state.person[1].name}
          age={this.state.person[1].age}
          click={this.switchNameHandler.bind(this, "kamilek")}
          changed={this.nameChangedHandler}>my Hobbies: Racing!</Person>
        <Person
          name={this.state.person[2].name}
          age={this.state.person[2].age}/>
      </div>
    );
  }
}

export default App;
