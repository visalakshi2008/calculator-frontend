import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Calculator from "./components/calculator";

class App extends Component {
  render() {
    return (
      <div>
        <Calculator />
      </div>
    );
  }
}

export default App;
