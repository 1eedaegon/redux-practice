const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const number = document.querySelector('span')

let count = 0;

plus.addEventListener('click', ()=>{
  (()=>{
    count = count+1;
    number.innerText=count;
  })()
})
minus.addEventListener('click', ()=>{
  (()=>{
    count = count-1;
    number.innerText=count;
  })()
})