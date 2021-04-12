import React, { useEffect, useState } from 'react';
import axios from "axios"
import Cards from './Cards';

 // Cest ne nom de la variable et c'est la ou on stochera les données
    // setData: cest la ou acctualise nous données
    // useeffect = est utilisé pour empecher le renvoi de la requette à l'infini donc il fait une fois la requette fecsh puis s'arrette

const Countries = () => {

   
    const[data, setData] = useState ([]);

    useEffect(()=> {   

 
    axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
    .then((res) => setData(res.data));
  



},[] );


    return (
        <div className="countries">
       <ul className="counties-list">
           {data.map((country)=> (

// crrer une props qui s'appelle country donc on vient d'envoyer les donnes de country vers cards
<Cards country={country} key={country.name}/>
           
            ) )}
       </ul>
        </div>
    );
};

export default Countries;