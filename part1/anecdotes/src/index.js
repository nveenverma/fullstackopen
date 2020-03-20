// jshint esversion:6

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, changeFunction}) => {
  return ( 
    <button onClick={changeFunction}>{text}</button>
  )
}

const App = ({quotes}) => {
  const [selected, setSelected] = useState(0);
  const arrLen = quotes.length;  
  const changeSelected = () => setSelected(Math.floor(Math.random() * arrLen))
  
  return (
    <>
    <div>
      {quotes[selected]}
    </div>
    <Button text="next anecdote" changeFunction={changeSelected} />
    </>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App quotes={anecdotes} />,
  document.getElementById('root')
)