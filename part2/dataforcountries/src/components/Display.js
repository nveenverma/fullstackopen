// jshint esversion:6

import React, { useState, useEffect } from 'react';
import Country from './Country';

const Display = ({countries, filter, changeCountry}) => {

  const [showNotes, setShowNotes] = useState([]);

  useEffect(() => {
    setShowNotes(
      countries.filter(
        note => note.name.toLowerCase()
        .includes(filter.toLowerCase())
      )
    );
  }, [countries, filter]);

  if (filter) {

    if (showNotes.length > 10) {
      return ('Too many matches, specify another filter');
    }

    if (showNotes.length === 1) {
      return (
        <Country country={showNotes[0]} />
      );
    }

    return (
        showNotes.map(
          note => <li key={note.name}>
                    {note.name} <button name={note.name} onClick={changeCountry}>show</button>
                  </li>
        )
    );
  } 

  return ('');

}



export default Display;