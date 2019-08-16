import React from 'react'
import { connect } from 'react-redux'

import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import { deleteCompleted } from './actions'



function App({ deleteCompleted }) {
  const handleClick = () => {
    console.log('boom')
    deleteCompleted()
  }
  return (
    <div>
      To Do List
      <Todos />
      <AddTodo />
      <button onClick={handleClick}>Remove Completed</button>
    </div>
  )
}

export default connect(null, { deleteCompleted })(App)
