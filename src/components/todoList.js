import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import TodoItem from './todoItem'

class TodoList extends React.Component {
  render () {
    return (
      <div className="todolist">
        {this.props.todoList.map((value, index) => (<TodoItem todo={value} key={index} index={index}/>))}
      </div>
    )
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  delete: PropTypes.func,
  toggle: PropTypes.func
}

function filterTodos (todos, filter) {
  switch (filter) {
    case 'ALL':
      return todos
    case 'ACTIVE':
      return todos.filter((item) => !item.completed)
    case 'COMPLETED':
      return todos.filter((item) => item.completed)
    default:
      return todos
  }
}

function mapStateToProps (state) {
  return {
    todoList: filterTodos(state.todos, state.filter)
  }
}

TodoList = connect(mapStateToProps)(TodoList)

export default TodoList
