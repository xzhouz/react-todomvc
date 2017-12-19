import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import TodoInput from './todoInput'

let Title = styled.h1`
  color: rgba(175, 47, 47, 0.15);
  font-size: 100px;
  text-align: center;
`

class Header extends React.Component {
  submit (value) {
    this.props.submit(value)
  }
  render () {
    let { className } = this.props
    return (
      <div className={className}>
        <Title>todos</Title>
        <TodoInput/>
      </div>
    )
  }
}

Header.propTypes = {
  check: PropTypes.bool,
  checkAll: PropTypes.func
}


export default Header
