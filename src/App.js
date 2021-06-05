import React, {Component} from "react";

import EditPopup from "./components/Popup/EditPopup";
import UserForm from "./components/UserForm/UserForm";

class App extends Component {
  constructor(){
    super()
    this.state= {
      down:true,
      up:false
    }
  }
  showHandler = () => { this.setState({
    down: !this.state.down,
    up: !this.state.up
  })}

  render(){
    return(
      <div className="container">

        <h1>Contact List</h1>
        {
          this.state.down && <i className="fas fa-chevron-down fa-lg" onClick={this.showHandler}></i>
        }

        {
          this.state.up && <i className="fas fa-chevron-up fa-lg up" onClick={this.showHandler}></i>
        }

        {
          !this.state.down && <UserForm/>
        }
          </div>
    )
  }
}

export default App;
