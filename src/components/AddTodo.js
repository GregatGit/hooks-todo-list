import React, { useState } from 'react'
import { connect } from 'react-redux'

import { addTodo } from '../actions'

const AddTodo = ({ addTodo, todos }) => {
  const [todo, setTodo] = useState('')
  const [warning, setWarning] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (todo.length < 3) return

    // check if the name is free
    for (let i in todos){
      if (todos[i].todo === todo){
        setWarning(`${todo} already there`)
        setInterval(() => {
          setWarning('')
        }, 1300);
        setTodo('')
        return
      }
    }

    addTodo(todo)
    setTodo('')
    
  }
  const handleChange = (e) => {
    setTodo(e.target.value)
  }
  return (
    <div>
      <h2>Add Todo</h2>
      <form type="submit" onSubmit={handleSubmit} >
      <label>Task (3 to 15 characters):</label>
      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="3"
        maxLength="15"
        size="15"
        onChange={handleChange}
        value={todo}
      />
      <button>Add</button>
      </form>
      <div style={{color: "red", textAlign: 'center'}}>{warning}</div>
    </div>
  )
}
const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos
  }
}
export default connect(mapStateToProps, { addTodo })(AddTodo)
