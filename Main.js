// import App from './src/App.js';

// var root = document.getElementById('root');

// var render = async function () {
//   root.innerHTML = await App();
// };
// render();

const users = [
  { name: 'John', age: 30 },
  { name: 'Jane', age: 30 },
  { name: 'Mike', age: 30 },
];

const strings = JSON.stringify(users);

localStorage.setItem('users', strings);

console.log(users);
console.log(strings);
