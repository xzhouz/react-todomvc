import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

let Check = styled.span`
  width: 60px;
  height: 100%;
  color: ${props => (props.isCheckAll ? '#777' : '#ddd')};

  &::before {
    content: '>';
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 30px;
    font-weight: 900;
    transform: rotate(90deg) scale(0.7, 1.5);
  }
`

class TodoInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleKeyDown (e) {
    if (e.target.value !== '' && e.keyCode === 13) {
      this.props.submit(e.target.value)
      this.setState({
        value: ''
      })
    }
  }

  handleChange (e) {
    this.setState({
      value: e.target.value
    })
  }

  render () {
    let { className, checkAllOrUncheck, isCheckAll } = this.props
    return (
      <div className={className}>
        <Check className="check"
               onClick={() => checkAllOrUncheck(isCheckAll)}
               isCheckAll={isCheckAll}/>
        <input className="input"
               placeholder="What need to be done?"
               value={this.state.value}
               onChange={this.handleChange.bind(this)}
               onKeyDown={this.handleKeyDown.bind(this)}/>
      </div>
    )
  }
}

TodoInput.propTypes = {
  check: PropTypes.bool,
  checkAll: PropTypes.func,
  submit: PropTypes.func
}

function mapDispatchToProps (dispatch) {
  return {
    submit (text) {
      dispatch({type: 'ADD_TODO', text})
    },
    checkAllOrUncheck (isCheckAll) {
      if (isCheckAll) {
        dispatch({type: 'UNCHECK_ALL_TODO'})
      } else {
        dispatch({type: 'CHECK_ALL_TODO'})
      }
    }
  }
}

function mapStateToProps (state) {
  let todos = state.todos
  return {
    isCheckAll: todos.length > 0 && todos.every(item => item.completed)
  }
}

TodoInput = connect(mapStateToProps, mapDispatchToProps)(TodoInput)

TodoInput = styled(TodoInput)`
  position: relative;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.03) inset;

  .check {
  }

  .input {
    border: none;
    padding: 16px 16px 16px 60px;
    width: 100%;
    font-size: 24px;
    line-height: 33px;
    color: inherit;
  }
`

export default TodoInput
