import React from 'react'
import { connect } from 'react-redux'

import { toggleTodo } from '../actions'

const Todos = ({ todos, toggleTodo }) => {

 const handleCheckBox = (i) => {
    toggleTodo(i)
  }
  return (
    <ul>
      {todos.map((item, index) => {
        const checked = item.done ? true : false
        
        return (
          <li key={index}>
            <input onChange={() => handleCheckBox(index)} type="checkbox" id={item} name={item} checked={checked} />
            {item.todo}
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
export default connect(mapStateToProps, { toggleTodo })(Todos)
