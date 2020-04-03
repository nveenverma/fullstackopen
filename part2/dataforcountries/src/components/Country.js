// jshint esversion:6

import React from 'react';
import Weather from './Weather';

const Country = ({country}) => {

  const capital = country.capital;

  return (
    <>
      <h1>{country.name}</h1>
      <p>capital {capital}</p>
      <p>population {country.population}</p>
      <h2>Spoken languages</h2>
      <ul>
        {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img alt={`flag of country ${country.name}`} src={country.flag} height="100" width="100"/>

      <Weather city={capital} />

    </>
  )

}

export default Country;