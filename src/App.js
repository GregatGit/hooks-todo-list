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
      <h1>To Do List</h1>
      <Todos />
      <p><span>❌</span> will remove task from list</p>
      <AddTodo />
      <button onClick={handleClick}>Remove All Completed Tasks</button>
    </div>
  )
}

export default connect(null, { deleteCompleted })(App)
