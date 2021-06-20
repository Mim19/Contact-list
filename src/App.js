import React, { Component } from 'react';

import UserForm from './components/UserForm/UserForm';

class App extends Component {
  constructor(){
    super()
    this.state = {
      isOpen: false
    }
  }

  showHandler = () => this.setState({
    isOpen: !this.state.isOpen
  });

  render(){
    return(
      <div className="container">
        <h1>Contact List</h1>
          <i className = {`fas fa-lg fa-chevron-${this.state.isOpen ? "down" : "up"}`}  onClick={this.showHandler} /> 
          { this.state.isOpen && <UserForm/> } 
      </div>
    )
  }
}

export default App;
