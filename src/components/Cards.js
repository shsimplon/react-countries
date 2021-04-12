// toujours rsc pour faire directement la fonction
import React from 'react';

const Cards = (props) => {

    // grace a props on arrive à faire passer les donneés de chaque pays individuellement
    const {country}= props;
    console.log(country)
    return ( 
       
       <li className='card'>
       <img src={country.flag} alt='flag'/>
      <div className='data-container'>
          <ul>
              <li>{country.name}</li>
              <li>{country.capital}</li>
              <li> pop .{country.population}</li>

          </ul>
      </div>

</li>
      
    );
};

export default Cards;