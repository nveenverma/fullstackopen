// jshint esversion:6

import React from 'react';

const Country = ({country}) => {

  return (
    <>
      <h1>{country.name}</h1>
      <p>capital {country.capital}</p>
      <p>population {country.population}</p>
      <h2>languages</h2>
      <ul>
        {country.languages.map(lang => <li key={lang.name}>{lang.name}</li>)}
      </ul>
      <img alt={`flag of country ${country.name}`} src={country.flag} height="100" width="100"/>
    </>
  )

}

export default Country;