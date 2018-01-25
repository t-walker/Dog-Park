import React, { Component } from 'react';

import 'bootstrap/dist/css/bootstrap.css';

import Main from './components/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Main />
        </div>
      </div>
    );
  }
}

export default App;
