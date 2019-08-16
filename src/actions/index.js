export const TODO_TOGGLE = `TODO_TOGGLE`
export const TODO_ADD = `TODO_ADD`
export const DELETE_COMPLETED = `DELETE_COMPLETED`

export function deleteCompleted() {
  return {
    type: DELETE_COMPLETED,
    payload: true
  }
}

export function addTodo(name) {
  const todo = { todo: name, done: false}
  return {
    type: TODO_ADD,
    payload: todo
  }
}

export function toggleTodo(index) {
  return {
    type: TODO_TOGGLE,
    payload: index
  }
}