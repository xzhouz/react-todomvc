import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

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
    let { className, checkAll } = this.props
    return (
      <div className={className}>
        <span className="check"
              onClick={checkAll}></span>
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
  checkAll: PropTypes.func
}

TodoInput = styled(TodoInput)`
  position: relative;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.03) inset;

  .check {
    width: 60px;
    height: 100%;
    color: ${props => (props.check ? '#777' : '#ddd')};
  }

  .check::before {
    content: '>';
    position: absolute;
    left: 15px;
    top: 15px;
    font-size: 30px;
    font-weight: 900;
    transform: rotate(90deg) scale(0.7, 1.5);
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
