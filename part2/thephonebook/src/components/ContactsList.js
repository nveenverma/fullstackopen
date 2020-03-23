//jshint esversion:6

import React from 'react';
import Note from './Note';

const ContactsList = ({notesList}) => {
  return (
    <ul>
      {notesList.map((i, key) => <Note key= {i.name} note={i} />)}
    </ul>
    )
} 

export default ContactsList
