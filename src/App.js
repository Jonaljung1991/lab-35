import React, { Component } from 'react';
import List from './list'
import './App.css';
import EditAbleList from "./EditAbleList";
import TransformText from "./tranformtext";

class App extends Component {
  render() {
    return (
      <div className="App">
        <TransformText />
        <EditAbleList />
      </div>
    );
  }
}

export default App;
