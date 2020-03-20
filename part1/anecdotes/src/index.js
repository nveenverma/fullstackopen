// jshint esversion:6

import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const Button = ({text, changeFunction}) => {
  return ( 
    <button onClick={changeFunction}>{text}</button>
  )
}

const Header = ({text}) => <h1>{text}</h1>

const App = ({quotes}) => {
  const [selected, setSelected] = useState(0);
  const arrLen = quotes.length;  
  const [votes, setVotes] = useState(Array(arrLen).fill(0));

  const changeSelected = () => setSelected(Math.floor(Math.random() * arrLen))
  const addVote = (sel) => {
    const copy = [...votes];
    copy[sel] += 1;
    const changeVotes = () => setVotes(copy)
    return changeVotes
  }

  const maxVotes = Math.max(...votes);  
  
  return (
    <>
    <div>
      <Header text="Anecdote of the day" />
      {quotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button text="vote" changeFunction={addVote(selected)} />
      <Button text="next anecdote" changeFunction={changeSelected} />
    </div>
    <div>
      <Header text="Anecdote with most votes" />
      {quotes[votes.indexOf(maxVotes)]}
      <p>has {maxVotes} votes</p>
    </div>

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