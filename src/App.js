import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: null
    };
  }

  render() {
    return (
      <div className="App">
        <h1>Hello React App</h1>
      </div>
    );
  }
}

export default App;
