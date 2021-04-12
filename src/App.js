// taper rsc : on aura diractement la function

import React from 'react';
import { BrowserRouter , Switch , Route } from "react-router-dom"
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
// browserrouter c'est lui qui va soccupéer de toute les route c'est pour cela on la mis dans app=il englobe toute lapp
// switch c'est les rotes ne sont pas bonne nous ramene vers erreur 404
// exact = c'est un dire apres / tu me donne que accueil 

const App = () => {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Home} /> 



      <Route path="/a-propos" exact component={About} /> 

      <Route component={NotFound}/>

      


    </Switch>
    </BrowserRouter>
  );
};

export default App;