// jshint esversion:6

import React, { useState } from 'react';
import Note from './components/Note';
import Heading from './components/Heading';

const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-1234567' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]); 
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ showNotes, setShowNotes ] = useState('');

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

  const filterNotes = (e) => {
    setShowNotes(e.target.value);
  }

  const notesToShow = showNotes === ""
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(showNotes.toLowerCase()));
  

  return (
    <div>
      <Heading text="Phonebook" />
      <div>
        filter shown with <input value={showNotes} onChange={filterNotes}/>
      </div>

      <Heading text="add a new" />
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
      <Heading text="Numbers" />
        <ul>
          {/* {persons.map((i, key) => <Note key= {i.name} note={i} />)} */}
          {notesToShow.map((i, key) => <Note key= {i.name} note={i} />)}
        </ul>
    </div>
  )
}

export default App