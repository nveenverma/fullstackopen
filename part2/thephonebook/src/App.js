// jshint esversion:6

import React, { useState } from 'react';
import Filter from './components/Filter';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';

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
      <h2>Phonebook</h2>
      <Filter initialValue={showNotes} onChangeFunc={filterNotes} />

      <h2>add a new</h2>
      <AddContactForm newName={newName} nameChangeFunc={handleNameChange}
        newNumber={newNumber} numberChangeFunc={handleNumberChange}
        submitFunc={addNote} />

      <h2>Numbers</h2>  
      <ContactsList notesList={notesToShow}/>
    </div>
  )
}

export default App