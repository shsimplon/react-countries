import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./styles/index.scss"

// fait moi un rendu de mon app 
// scritmode pour eviter les problemes
// toute l'app se dérole dans app
// dans rendre on app qui va appeler un composant qui se trouve dans app.js
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);


