// jshint esversion:6

import React from 'react';

const Note = ({ note, delNote }) => {
  return (
    <li className='note'>{note.name} {note.number}  
      <button onClick={() => delNote(note.id)}>  
        Delete
      </button>
    </li>
  )
}

export default Note