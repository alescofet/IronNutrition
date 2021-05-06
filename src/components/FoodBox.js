import React from 'react';

class FoodBox extends React.Component {
    state={
        foods: this.props.foods,
        todaysFood:[]

    }
    actualizeFood(event,index){
       const {value} = event.target
       const stateCopy = {...this.state}
       stateCopy.foods[index].quantity = value
        this.setState(stateCopy)
    }
    addFood(name,calories,quantity){
        const stateCopy = {...this.state}
        stateCopy.todaysFood.push({name,calories,quantity})
        this.setState(stateCopy)
    }
  render() {
    const foodBox = this.props.foods.map((food, index) => {
      return (
        <div className="box" key={index}>
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={food.image} alt={food.name} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{food.name}</strong> <br />
                  <small>{food.calories}</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" placeholder="0" /*value={quantity}*/ onChange={(event)=>(this.actualizeFood(event, index))}/>
                </div>
                <div className="control">
                  <button className="button is-info" onClick={(event)=>(this.addFood(food.name,food.calories,food.quantity))}>+</button>
                </div>
              </div>
            </div>
          </article>
        </div>
      );
    })
    const allCalories = this.state.todaysFood.map((food)=>{return food.calories*food.quantity})
    const sumCalories = allCalories.reduce((a, b) => {
        return a + b;
      }, 0);
    const todayFood = this.state.todaysFood.map((food)=>{
        return(
            food.quantity > 0 
            ?
            <li>
            {food.quantity} {food.name} = {food.calories * food.quantity} cal
            </li>
            :
            <li></li>
        )
    })
    
    return( 
    <div className="columns">
    <div className="column">
    {foodBox}
    </div>
    <div className="column">
    <h1>Today's Food</h1>
    <ul>
    {todayFood}
    <li>Total: {sumCalories} Cals</li>
    </ul>
    </div>
    </div>
    )}
}
 
export default FoodBox; 
