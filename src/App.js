import React from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import 'bulma/css/bulma.css';

function App() {
  return (
    <div className="App">
     <FoodBox foods={foods}/>
    </div>
  );
}

export default App;