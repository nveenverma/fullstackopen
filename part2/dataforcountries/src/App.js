// jshint esversion:6

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Display from './components/Display';

const App = () => {
  const [notes, setNotes] = useState([]);
  const [searchNote, setSearchNote] = useState('');

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setNotes(response.data);
      });
  }, []);  

  const handleSearchNoteChange = (e) => {
    console.log(e.target.value);
    setSearchNote(e.target.value);
  }

  return (
    <>
    <p>find <input value={searchNote} onChange={handleSearchNoteChange}/></p>
    <Display countries={notes} filter={searchNote} />
    </>
  );
}

export default App;
