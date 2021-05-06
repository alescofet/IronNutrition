import React from 'react';
import './App.css';
import foods from './foods.json'
import FoodBox from './components/FoodBox';
import Search from './components/Search';
import 'bulma/css/bulma.css';

class App extends React.Component {
  state={
    foods: foods,
    compareFoods: foods

  }

  filterFoods(event){
    const {value} = event.target
    const filteredFoods = this.state.foods.filter((food)=>{return food.name.toLowerCase().includes(value.toLowerCase())})
    this.setState({...this.state, compareFoods: filteredFoods})
    }
  
  

  render(){
  return (
    <div className="App">
     <Search filterFunc={((event)=>this.filterFoods(event))}/>
     <FoodBox foods={this.state.compareFoods}/>
    </div>
  );}
}

export default App;