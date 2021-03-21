const { createStore } = require("redux");

const form = document.querySelector('form');
const input = document.querySelector('input');
const ul = document.querySelector('ul');

const ADD_TODO = "ADD_TODO";
const DEL_TODO = "DEL_TODO";

const addTodo = (text) => {
  return { type: ADD_TODO,  text }
}
const delTodo = (id) => {
  return { type: DEL_TODO, id}
}

const reducer = (state = [], actions) => {
  switch (actions.type) {
    case ADD_TODO:
      const newTodoObj = { text: actions.text, id: Date.now() };
      return [...state, newTodoObj];
    case DEL_TODO:
      const cleanedState = state.filter(todo => todo.id !== parseInt(actions.id));
      return cleanedState;
    default:
      return state;
  }
};
const store = createStore(reducer);
const dispatchAddTodo = (text) => {
  store.dispatch(addTodo(text))
}
const dispatchDelTodo = (e) => {
  const id = parseInt(e.target.parentNode.id);
  store.dispatch(delTodo(id))
}
const drawTodo = () => {
  const toDos = store.getState();
  ul.innerHTML = "";
  toDos.forEach(toDo => {
    const li = document.createElement('li');
    const btn = document.createElement('button')
    btn.innerText = " Delete ";
    btn.addEventListener("click", dispatchDelTodo);
    li.id = toDo.id;
    li.innerText = toDo.text;
    li.appendChild(btn);
    ul.appendChild(li);
  })
}
store.subscribe(drawTodo);
const handleSubmit = event => {
  event.preventDefault();
  const toDo = input.value;
  input.value = "";
  dispatchAddTodo(toDo);
}
form.addEventListener('submit', handleSubmit)
