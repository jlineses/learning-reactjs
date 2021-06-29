import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';



class App extends Component {

  state = {
    persons : [
      { name: "Max", age: "29" },
      { name: "Manu", age: "31" },
      { name: "Stephanie", age: "26" }
    ]
  }

  render() {
    return (
      <div className="App">
        <h1>Person Directory:</h1>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}/>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}/>
      </div>
    );
  }
}

export default App;
