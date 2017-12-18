import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

let Tick = styled.span`
  position: absolute;
  left: 8px;
  top: 50%;
  border: 1px solid #eee;
  width: 30px;
  height: 30px;
  box-sizing: border-box;
  border-radius: 15px;
  transform: translateY(-50%);
  ${props => props.completed ? 'border: solid 1px #ddd;' : ''}
  &::before,
  &::after {
    content: '';
    display: ${props => props.completed ? 'block' : 'none'};
    background: #5fa;
  }

  &::before {
    width: 60%;
    height: 2px;
    transform-origin:  100% 0;
    transform: translate(5px, 5px) rotate(-60deg);
  }

  &::after {
    width: 25%;
    height: 2px;
    transform-origin:  0 0;
    transform: translate(8px, 13px) rotate(30deg);
  }
`

let Cross = styled.span`
  display: none;
  position: absolute;
  right: 8px;
  top: 50%;
  width: 20px;
  height: 20px;
  transform: translateY(-50%);

  &::before,
  &::after {
    content: '';
    display: block;
    position: absolute;
    left: 0;
    top: 50%;
    width: 100%;
    height: 2px;
    border-radius: 1px;
    background: #faa;
  }

  &::before {
    transform: translateY(-50%) rotate(45deg);
  }
  &::after {
    transform: translateY(-50%) rotate(-45deg);
  }
`

class TodoItem extends React.Component {
  handleToggle () {
    this.props.toggle(this.props.index)
  }

  handleDelete () {
    this.props.delete(this.props.index)
  }

  render () {
    let { todo, className } = this.props
    return (
      <div className={className}>
        <Tick completed={todo.completed} onClick={this.handleToggle.bind(this)}/>
        {todo.action}
        <Cross className="cross" onClick={this.handleDelete.bind(this)}/>
      </div>
    )
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object,
  delete: PropTypes.func,
  toggle: PropTypes.func
}

TodoItem = styled(TodoItem)`
  position: relative;
  padding: 15px 60px;
  font-size: 24px;
  line-height: 28px;
  color: #4d4d4d;
  background: #fff;
  ${props => props.todo.completed ? 'color: #d9d9d9;text-decoration: line-through;' : ''}

  &:hover >.cross {
    display: block;
  }
`

export default TodoItem
