//jshint esversion:6

import React from 'react';
import Note from './Note';

const ContactsList = ({notesList, delNote}) => {
  return (
    <ul>
      {notesList.map((i, key) => 
        <Note key= {i.name} note={i} delNote={delNote} />
      )}
    </ul>
    )
} 

export default ContactsList
