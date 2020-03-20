// jshint esversion:6

import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({headerContent}) => <h1>{headerContent}</h1>;

const Part = ({p, ex}) => <p>{p} {ex}</p>

const Content = ({parts}) => {
    return (
        <>
            <Part p={parts[0].name} ex={parts[0].exercises} />
            <Part p={parts[1].name} ex={parts[1].exercises} />
            <Part p={parts[2].name} ex={parts[2].exercises} />
        </>
    )
}

const Total = ({parts}) => (
    <p>Number of Exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    )

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
          {
            name: 'Fundamentals of React',
            exercises: 10
          },
          {
            name: 'Using props to pass data',
            exercises: 7
          },
          {
            name: 'State of a component',
            exercises: 14
          }
        ]
      }
  
    return (
      <div>
          <Header headerContent={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))