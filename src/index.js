import {createStore} from "redux";

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const number = document.querySelector('span')

number.innerText = 0;
// Counter reducer
const counterModifier = (count=0, actions) => {
  console.log(count, actions);
  if( actions.type === "PLUS" ) {
    return count + 1;
  }
  if( actions.type === "MINUS") { 
    return count - 1;
  }
  return count;
}
const counterStore = createStore(counterModifier);
const counterOnChange = () => {
  number.innerText = counterStore.getState()
}
const handlePlus = () => {
  counterStore.dispatch({type: "PLUS"})
}
const handleMinus = () => {
  counterStore.dispatch({type: "MINUS"})
}
counterStore.subscribe(counterOnChange)


plus.addEventListener('click', handlePlus)
minus.addEventListener('click', handleMinus)