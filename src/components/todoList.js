import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './todoItem'

class TodoList extends React.Component {
  toggle (index) {
    this.props.toggle(index) 
  }
  delete (index) {
    this.props.delete(index)
  }
  render () {
    return (
      <div className="todolist">
        {this.props.todoList.map((value, index) => (<TodoItem todo={value} key={index} index={index} toggle={this.toggle.bind(this)} delete={this.delete.bind(this)}/>))}
      </div>
    )
  }
}

TodoList.propTypes = {
  todoList: PropTypes.array,
  delete: PropTypes.func,
  toggle: PropTypes.func
}

export default TodoList
