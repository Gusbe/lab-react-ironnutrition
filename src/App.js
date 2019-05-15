import React, { Component } from 'react';
import 'bulma/css/bulma.css'; 
import './App.css';

import FoodBox from './components/FoodBox';

import foods from './data/foods.json'

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          foods.map( (oneFood, index) => {
            return (
              <FoodBox food={foods[index]} />
            );
          })
        }
      </div>
    );
  }
}

export default App;
