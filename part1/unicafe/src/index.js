// jshint esversion:6

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({changeFunction, text}) => {
    return (
       <button onClick={changeFunction}>{text}</button>
    )
}

const P = ({text, value}) => <p><b>{text} {value}</b></p>

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const all = good + bad + neutral;
  const avg = (good-bad)/all;
  const positivePercentage = (good/all)*100 + " %";

  const incrementGood = () => setGood(good+1)
  const incrementNeutral = () => setNeutral(neutral+1)
  const incrementBad = () => setBad(bad+1)

  return (
    <div>
      <h1>give feedback</h1>
      <Button changeFunction={incrementGood} text="good" />
      <Button changeFunction={incrementNeutral} text="neutral" />
      <Button changeFunction={incrementBad} text="bad" />

      <h1>statistics</h1>
      <P text="good" value={good}/>
      <P text="neutral" value={neutral}/>
      <P text="bad" value={bad}/>
      <P text="all" value={all}/>
      <P text="average" value={avg} />
      <P text="positive" value={positivePercentage} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)