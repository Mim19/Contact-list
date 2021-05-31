import React from "react";
import UserForm from "./components/UserForm/UserForm";


class App extends React.Component {
  render(){
    return(
      <div className="container">
        <h1>Contact List</h1>
        <UserForm/>
      </div>
    )
  }
}

export default App;
