// jshint esversion:6

import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({headerContent}) => <h1>{headerContent}</h1>;

const Part = ({p, ex}) => <p>{p} {ex}</p>

const Content = ({parts}) => {
  return (
      <>
      {parts.map((i, key) => <Part key={key} p={i.name} ex={i.exercises} />)}
      </>
  )
}

const Total = ({parts}) => {
  const totalEx = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <p><b>total of {totalEx} exercises</b></p>
  )
}

const Course = ({content}) => {
  return (
    <div>
      <Header headerContent={content.name} />
      <Content parts={content.parts} />
      <Total parts={content.parts} />
    </div>
  )
}

const App = () => {
  const course = {
    id: 1,
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10,
        id: 1
      },
      {
        name: 'Using props to pass data',
        exercises: 7,
        id: 2
      },
      {
        name: 'State of a component',
        exercises: 14,
        id: 3
      },
      {
        name: 'Redux',
        exercises: 11,
        id: 4
      }
    ]
  }
  
  return (
    <div>
      <Course content={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))