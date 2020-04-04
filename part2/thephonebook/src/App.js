// jshint esversion:6

import React, { useState, useEffect } from 'react';
import Filter from './components/Filter';
import AddContactForm from './components/AddContactForm';
import ContactsList from './components/ContactsList';
import Notification from './components/Notification';
import noteService from './services/notes';

const App = () => {
  const [ persons, setPersons] = useState([]);
  const [ newName, setNewName ] = useState('');
  const [ newNumber, setNewNumber ] = useState('');
  const [ showNotes, setShowNotes ] = useState('');
  const [ errorMessage, setErrorMessage ] = useState({
        message: null,
        category: null
      });

  useEffect(() => {
    console.log("effect");
    noteService
      .getAll()
      .then(initNotes => {
        setPersons(initNotes)
      })
  }, []);
  

  const addNote = (e) => {
    e.preventDefault();
    const noteObject = {
      name: newName,
      number: newNumber
    };

    const containsName = persons.map(i => i.name).includes(newName);

    if (containsName) {
      const id = persons.filter(person => person.name === newName)[0].id;
  
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new number`)) {
        noteService
          .update(noteObject, id)
          .then(returnedNote => {
            const newPersons = persons.map(person => person.id !== id ? person : returnedNote);
            const mess = {
              message: `${noteObject.name}'s contact is updated on the phonebook`,
              category: 'success'
            }
            setErrorMessage(mess);
            setTimeout(() => {
              setErrorMessage({ ...errorMessage, message:null })
            }, 5000);
            setPersons(newPersons);
          })
          .catch(error => {
            const mess = {
              message : `${noteObject.name}'s contact is already deleted from the phonebook`,
              category: 'error' 
            }
            setErrorMessage(mess);
            setTimeout(() => {
              setErrorMessage({ ...errorMessage, message: null})
            }, 5000);
            setPersons(persons.filter(person => person.id !== id));
          })
      }

    } else {
        noteService
          .create(noteObject)
          .then(returnedNote => {
            const mess = {
              message: `${noteObject.name} is added to the phonebook`,
              category: 'success'
            }
            setErrorMessage(mess);
            setTimeout(() => {
              setErrorMessage({ ...errorMessage, message:null })
            }, 5000);
            setPersons(persons.concat(returnedNote))
          })
    }

    setNewName('');
    setNewNumber('');

  }
  
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
  
  const delNote = id => {
    const targetNote = persons.find(person => person.id === id);
    let result = window.confirm(`Delete ${targetNote.name} ?`);
    
    if (result) {
      noteService
      .deleteNote(id)
      .then(res => {
        const mess = {
          message : `${targetNote.name}'s contact is deleted from the phonebook`,
          category : 'success'
        }
        setErrorMessage(mess);
        setTimeout(() => {
          setErrorMessage({ ...errorMessage, message:null });
        }, 5000);
        setPersons(persons.filter(person => person.id !== id));
      }) 
    } 
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification errorMessage={errorMessage} />
      <Filter initialValue={showNotes} onChangeFunc={filterNotes} />

      <h2>add a new</h2>
      <AddContactForm newName={newName} nameChangeFunc={handleNameChange}
        newNumber={newNumber} numberChangeFunc={handleNumberChange}
        submitFunc={addNote} />

      <h2>Numbers</h2>  
      <ContactsList notesList={notesToShow} delNote={delNote} />
    </div>
  )
}

export default App