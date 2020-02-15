import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'))





// class Header extends React.Component {
//     render() {
//         return (
//             <div>
//                 <h1>{this.props.title}</h1>
//                 <h2>{this.props.subtitle}</h2>
//             </div>
//         );
//     }
// }


// class Options extends React.Component {
//     render() {
//         return (
//         <div>
//         <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//             {
//                 this.props.options.map((option) => <Option key={option} optionText={option}/>)
//             }        
//         </div>
//         );   
//     }
// }










//import './utils.js';
// import subtract, { square, add } from './utils.js';

// console.log('app.js is running!');
// console.log(square(4));
// console.log(add(100, 23));

// import isSenior, { isAdult, canDrink } from './person.js'


// console.log(isAdult(10));
// console.log(isAdult(25));
// console.log(canDrink(65));
// console.log(canDrink(8));
// console.log(isSenior(65));

// console.log(subtract(100,80));