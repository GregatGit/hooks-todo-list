import { TODO_TOGGLE, TODO_ADD, DELETE_COMPLETED, TODO_DELETE } from '../actions'

const tempTodos = [
  { todo: 'Walk dog', done: false },
  { todo: 'Dishes', done: false },
]

export default function(state = tempTodos, action) {
  const todos = [...state]

  switch (action.type) {
    case TODO_TOGGLE:
      todos[action.payload].done = !todos[action.payload].done

      return todos
    case TODO_ADD:
      return [...todos, action.payload]

    case DELETE_COMPLETED:
      const purgedTodos = []
      for (let i in todos){
        if(!todos[i].done){
          purgedTodos.push(todos[i])
        }
      }
      return purgedTodos

    case TODO_DELETE:
      console.log('boom')
      todos.splice(action.payload, 1)
      return todos
     default:
       return todos 
  }
}
