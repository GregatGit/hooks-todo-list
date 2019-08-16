import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo, deleteTodo } from '../actions'

const Todos = ({ todos, toggleTodo, deleteTodo }) => {

 const handleCheckBox = (i) => {
    toggleTodo(i)
  }

  const handleDelete = (i) => {
    deleteTodo(i)
  }
  return (
    <ul>
      {todos.map((item, index) => {
        const checked = item.done ? true : false
        
        return (
          <li key={index}>
            <input onChange={() => handleCheckBox(index)} type="checkbox" id={item} name={item} checked={checked} />
            {item.todo}
            <span onClick={() => handleDelete(index)} style={{marginLeft: 10}}>❌</span>
          </li>
        )
      })}
    </ul>
  )
}

const mapStateToProps = (state, ownProps) => {
  return {
    todos: state.todos,
  }
}
export default connect(mapStateToProps, { toggleTodo, deleteTodo })(Todos)
