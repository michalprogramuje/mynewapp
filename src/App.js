import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';

class App extends Component {
  state =
    {userName: 'franek'}

  userNameChangedHandler = (event) => {
    this.setState(
        { userName: event.target.value} )
  }

  switchUserNameHandler = (userName) => {
    this.setState(
        { userName: userName}
     )
  };

  render() {
    return (
      <div className="App">
        <UserInput
            changed = {this.userNameChangedHandler}
        />
        <UserOutput
          userName = {this.state.userName}
        />
        <UserOutput
          userName = {this.state.userName}
          click = {this.switchUserNameHandler.bind(this, 'OtherUserName')}
        />
      </div>
    );
  }
}

export default App;
