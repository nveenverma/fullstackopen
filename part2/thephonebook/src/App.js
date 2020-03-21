// jshint esversion:6

import React, { useState } from 'react';
import Note from './components/Note';

const App = () => {
  const [ persons, setPersons] = useState([
    { 
      name: 'Arto Hellas',
      number: '040-1234567'
    }
  ]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      name: newName,
      number: newNumber
    };

    persons.map(i => i.name).includes(newName) ?
    alert(`${newName} is already added to phonebook`):
    setPersons(persons.concat(noteObject));

    setNewName('');
    setNewNumber('');
  };
  
  const handleNameChange = (e) => {
    setNewName(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNewNumber(e.target.value);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
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