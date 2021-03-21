import {createStore} from "redux";

const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const number = document.querySelector('span')

number.innerText = 0;
const PLUS = 'plus'
const MINUS = 'minus'

// Counter reducer  
const counterModifier = (count=0, actions) => {
  switch(actions.type) {
    case PLUS:
      return count + 1;
    case MINUS:
      return count - 1;
    default:
      return count;
  }
}
const counterStore = createStore(counterModifier);
const counterOnChange = () => {
  number.innerText = counterStore.getState()
}
const handlePlus = () => {
  counterStore.dispatch({type: PLUS})
}
const handleMinus = () => {
  counterStore.dispatch({type: MINUS})
}
counterStore.subscribe(counterOnChange)


plus.addEventListener('click', handlePlus)
minus.addEventListener('click', handleMinus)