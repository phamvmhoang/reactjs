import React, { Component } from 'react';
import './App.css';

import AppBar from './componnets/ButtonAppBar';
import Line from './componnets/Line';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppBar title='React ChartJS Sample'/>
        <Line />
      </div>
    );
  }
}

export default App;
