const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
    case 'TOGGLE_TODO':
      var index = action.index
      if (index < state.length) {
        let newState = state.slice()
        newState[index].completed = !newState[index].completed
        return newState
      }
    case 'DELETE_TODO':
      var index = action.index
      let newState = state.slice()
      newState.splice(index, 1) 
      return newState
    case 'CLEAR_TODO':
      return state.filter((item) => !item.completed)
    case 'CHECK_ALL_TODO':
      return state.map(item => {
        item.completed = true
        return item
      })
    case 'UNCHECK_ALL_TODO':
      return state.map(item => {
        item.completed = false
        return item
      })
    default:
      return state
  }
}

export default todos
