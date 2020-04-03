// jshint esversion:6

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Filter from './components/Filter';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ showNotes, setShowNotes ] = useState('');

  useEffect(() => {
    console.log("effect");
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('Promise fullfilled');
        setPersons(response.data);        
      })
  }, []);
  

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      name: newName,
      number: newNumber
    };

    persons.map(i => i.name).includes(newName) ?
    alert(`${newName} is already added to phonebook`):
    axios
      .post('http://localhost:3001/persons', noteObject)
      .then(response => {
        setPersons(persons.concat(noteObject));
      })

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