console.log('App.js is running');

// if statement
// ternary operators
// logical operator 

// JSX - JavaScript XML
const app = {
  title: 'Indicision App',
  subtitle: 'Put your life in the hand of a computer',
  options: [1, 2]
}
// const template = (
//   <div>
//     <h1>{app.title}</h1>
//     {app.subtitle && <p>{app.subtitle}</p>}
//     <p>{app.options.length > 0 ? `Here your options: ${app.options.length}` : `No options: ${app.options.length}`}</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// );

// function getLocation(location) {
//   if(location) {
//     return <p>Location: {location}</p>;
//   }
// }
// const user = {
//   name: 'Tuan Hoang',
//   age: 34,
//   location: 'Lynnwood'
// }

// const templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//   </div>
// );

let count = 0;

const addOne = () => {
  count++;
  renderCounterApp();
  console.log('addOne');
}

const minusOne = () => {
  count--
  renderCounterApp();
  console.log('minusOne');
}

const reset = () => {
  count = 0;
  renderCounterApp();
  console.log('reset')
}

const appRoot = document.getElementById('app');

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={minusOne}>-1</button>
      <button onClick={reset}>reset</button>
    </div>
  );
  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();