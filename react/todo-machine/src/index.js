import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/index.js';
import './index.css';

// function App(props) {
//   return (
//     <h1>{props.saludo}, {props.nombre}</h1>
//   )
// }

// function withSaludo(WrapperComponent) {
//   return function WrappedComponentWithSaludo (saludo) {
//     return function ComponenteDeVerdad(props) {
//       return (
//         <React.Fragment>
//           <WrapperComponent {...props} saludo={saludo} />
//           <p>Estamos acompañando al WrappedComponent</p>
//         </React.Fragment>
//       );
//     }
//   }
// }

// const AppWithSaludo = withSaludo(App)("Hola");

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
