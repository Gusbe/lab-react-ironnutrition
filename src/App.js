import React, { Component } from 'react';
import 'bulma/css/bulma.css'; 
import './App.css';

import FoodBox from './components/FoodBox';

import foods from './data/foods.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        <FoodBox food={foods[2]} />
      </div>
    );
  }
}

export default App;
