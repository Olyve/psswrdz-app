import React, { Component } from 'react';
import './App.css';
import Password from './components/password';

// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  render() {
    return (
      <div className="App">
        <Password />
      </div>
    );
  }
}

export default App;
