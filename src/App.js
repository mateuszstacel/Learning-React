import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {


  state = {
    person: [
      { id: '1', name: 'max', age: 28},
      { id: '1', name: 'menu', age: 30},
      { id: '1', name: 'matt', age: 30}
    ],
    showPersons: false
  }

  nameChangedHandler = (event, id) => {
  const personIndex = this.state.person.findIndex( p => {
    return p.id === id;
  });

  const person = {
    ...this.state.person[personIndex]
  }

  person.name = event.target.value;

  const persons = [...this.state.person];
  persons[personIndex] = person;

    this.setState({ person: persons });
  }

  deletePersonHandler = (personIndex) => {
    const persons = [...this.state.person]
    persons.splice(personIndex, 1);
    this.setState({person: persons})

  }

  tooglePersonsHandler = () => {
    const doesShow = this.state.showPersons
    this.setState({showPersons: !doesShow});
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;
    if(this.state.showPersons) {
      persons = (
        <div>
          {this.state.person.map((person, index) => {
            return <Person
             click={() => this.deletePersonHandler(index)}
             name={person.name}
             age={person.age}
             key={person.id}
             changed={(event) => this.nameChangedHandler(event, person.id)}/>
          })}
         </div>
      );
    }


    return (
      <div className="App">
        <h1>Hi there</h1>
        <p>This is really working !</p>
        <button
          style={style}
          onClick={this.tooglePersonsHandler}>Toggle Persons</button>
          {persons}
      </div>
    );
  }
}

export default App;
