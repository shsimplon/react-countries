import React, { useEffect, useState } from 'react';
import axios from "axios"
import Cards from './Cards';

 

const Countries = () => {

//    récuperer les data de la pi
    const[data, setData] = useState ([]);
    // classé les pays selon la population
    const [sortedData, setSortedData] = useState([]);
    // jouer une seule fois 
    const [playOnce, setPlayOnce] = useState(true);
    // afficher les pays les plus pouplé dynamiquement au lieu de mettre directement 40 sans la variable rangeValue
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState("");
    const radios = ["Africa", "America", "Asia", "Europe", "Oceania"];

    useEffect(()=> {   

        if (playOnce) {
 
    axios.get("https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag")
    .then((res) => { 
   setData(res.data);                       
    setPlayOnce(false);
        });
    }
  
    const sortedCountry = () => {
    // pour utilisé la fonction sorted il faut le metttre en objet
        const countryObj = Object.keys(data).map((i) => data[i]);
        const sortedArray = countryObj.sort((a, b) => {
          return b.population - a.population;
        });
        sortedArray.length=rangeValue;
        setSortedData(sortedArray);
    };
    sortedCountry();

},[data , rangeValue, playOnce]);





return (
    <div className="countries">
      <div className="sort-container">
        <input
          type="range"
          min="1"
          max="250"
          value={rangeValue}
          onChange={(e) => setRangeValue(e.target.value)}
        />
        <ul>
          {radios.map((radio) => {
            return (
              <li key={radio}>
                <input
                  type="radio"
                  value={radio}
                  id={radio}
                  checked={radio === selectedRadio}
                  onChange={(e) => setSelectedRadio(e.target.value)}
                />
                <label htmlFor={radio}>{radio}</label>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="cancel">
        {selectedRadio && (
          <h5 onClick={() => setSelectedRadio("")}>Annuler recherche</h5>
        )}
      </div>
      <ul className="countries-list">
        {sortedData
          .filter((country) => country.region.includes(selectedRadio))
          .map((country) => (
            <Cards country={country} key={country.name} />
          ))}
      </ul>
    </div>
  );
};





export default Countries;

// on a changé data par {sortedData.map} pour pouvoir récuperer les pays selon la population
