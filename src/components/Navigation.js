import React from 'react';
import { NavLink } from "react-router-dom";
// navlink =creer des liens avce pour aller d'une page à une autre page
const Navigation = () => {
    return (
        <div className='navigation'>
            <NavLink exact to="/" activeClassName="nav-active">Accueil</NavLink>
            <NavLink exact to="a-propos" activeClassName="nav-active">À propos</NavLink>


            
        </div>
    );
};

export default Navigation;