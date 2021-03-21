const { createStore } = require("redux");

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";
const DATE = Date.now();

const reducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_TODO:
      return [...state, { text: actions.payload, id: DATE }];
    case DEL_TODO:
      return state.filter(todo => todo.id !== actions.payload.id)
    default:
      return state;
  }
};
const store = createStore(reducer);
const addTodo = (text) => store.dispatch({ type: ADD_TODO, payload: text })
const handleSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  addTodo(toDo);
}
form.addEventListener('click', handleSubmit)
