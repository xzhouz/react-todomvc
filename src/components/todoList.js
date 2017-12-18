import React from 'react'
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

export default TodoList
