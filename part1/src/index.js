// jshint esversion:6

import React from 'react'
import ReactDOM from 'react-dom'

const Header = ({headerContent}) => <h1>{headerContent}</h1>;

const Part = ({p, ex}) => <p>{p} {ex}</p>

const Content = ({p1, ex1, p2, ex2, p3, ex3}) => {
    return (
        <>
            <Part p={p1} ex={ex1} />
            <Part p={p2} ex={ex2} />
            <Part p={p3} ex={ex3} />
        </>
    )
}

const Total = ({ex1, ex2, ex3}) => (
    <p>Number of Exercises {ex1 + ex2 +ex3}</p>
    )

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
      name: 'Fundamentals of React',
      exercises: 10
    }
    const part2 = {
      name: 'Using props to pass data',
      exercises: 7
    }
    const part3 = {
      name: 'State of a component',
      exercises: 14
    }
  
    return (
      <div>
          <Header headerContent={course} />
          <Content p1={part1.name} ex1={part1.exercises}
        p2={part2.name} ex2={part2.exercises}
        p3={part3.name} ex3={part3.exercises} />
          <Total ex1 = {part1.exercises} ex2 = {part2.exercises} ex3 = {part3.exercises} />
      </div>
    )
  }

ReactDOM.render(<App />, document.getElementById('root'))