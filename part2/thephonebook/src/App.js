// jshint esversion:6

import React, { useState } from 'react';
import Note from './components/Note';

const App = () => {
  const [ persons, setPersons] = useState([{ name: 'Arto Hellas' }]); 
  const [ newName, setNewName ] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      name: newName
    };

    persons.map(i => i.name).includes(newName) ?
    alert(`${newName} is already added to phonebook`):
    setPersons(persons.concat(noteObject));

    setNewName('');
  };
  
  const handleNoteChange = (e) => {
    console.log(e.target.value);
    setNewName(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNoteChange}/>
        </div>
        <div>
          <button type="submit" onClick={addNote}>add</button>
        </div>
      </form>
      <h2>Numbers</h2>
        <ul>
          {persons.map((i, key) => <Note key= {i.name} note={i} />)}
        </ul>
    </div>
  )
}

export default App