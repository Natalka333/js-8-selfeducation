// import {add,sum} from './01-gallery'
// console.log(add(5,6));
// console.log(sum(2,8));

// или так импортировать ,усли больше 5 функций например

// import *as data from './01-gallery'
// console.log(data);
// console.log(data.sum(5,8));



localStorage.setItem('KEY', JSON.stringify([1,2,3]));
console.log(JSON.parse(localStorage.getItem('KEY')));

const btnLocal = document.querySelector('.js-local');
const btnSession = document.querySelector('.js-session');

btnLocal.addEventListener('click', () => {
localStorage.setItem('local', 'test local');
});
btnSession.addEventListener('click', () => {
    sessionStorage.setItem('session', 'test session'); 
})

console.log(sessionStorage.getItem('session'));