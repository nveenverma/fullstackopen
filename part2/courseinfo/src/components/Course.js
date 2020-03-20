//jshint esversion:6

import React from 'react'

const Header = ({headerContent}) => <h2>{headerContent}</h2>;

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

export default Course