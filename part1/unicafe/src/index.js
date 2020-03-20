// jshint esversion:6

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({changeFunction, text}) => {
    return (
       <button onClick={changeFunction}>{text}</button>
    )
}

const Statistic = ({text, value}) => <p><b>{text} {value}</b></p>

const Statistics = ({good, bad, neutral, all, avg, positivePercentage}) => {

        if (all === 0) {
            return (
                <p>No feedback given</p>
            )
        }
        return (
            <>
            <Statistic text="good" value={good}/>
            <Statistic text="neutral" value={neutral}/>
            <Statistic text="bad" value={bad}/>
            <Statistic text="all" value={all}/>
            <Statistic text="average" value={avg} />
            <Statistic text="positive" value={positivePercentage} />
            </>
        )  
    }

const App = () => {

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
            <Statistics good={good} bad={bad} neutral={neutral} 
            all={all} avg={avg} positivePercentage={positivePercentage} />
        </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)