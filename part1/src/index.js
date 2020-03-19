// jshint esversion:6

import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({headerContent}) => <h1>{headerContent}</h1>;

const Content = ({p1, ex1, p2, ex2, p3, ex3}) => {
    return (
        <>
            <p>{p1} {ex1}</p>
            <p>{p2} {ex2}</p>
            <p>{p3} {ex3}</p>
        </>
    )
}

const Total = ({ex1, ex2, ex3}) => (
    <p>Number of Exercises {ex1 + ex2 +ex3}</p>
    )

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header headerContent={course} />
      <Content p1={part1} ex1={exercises1}
        p2={part2} ex2={exercises2}
        p3={part3} ex3={exercises3} />
    <Total ex1 = {exercises1} ex2 = {exercises2} ex3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))