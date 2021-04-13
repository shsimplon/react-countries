// toujours rsc pour faire directement la fonction
import React from 'react';

 // grace a props on arrive à faire passer les donneés de chaque pays individuellement

const Cards = (props) => {

//    declare une variable
    const {country}= props;
//   declare une fonction

// cette function permet davoir le format quon veut sur stack
    function numberFormat(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

// jxs
    return ( 
       
       <li className='card'>
       <img src={country.flag} alt='flag'/>
      <div className='data-container'>
          <ul>
              <li>{country.name}</li>
              <li>{country.capital}</li>
              <li> pop .{numberFormat(country.population)}</li>

          </ul>
      </div>

</li>
      
    );
};

export default Cards;