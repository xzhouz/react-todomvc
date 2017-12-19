import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import styled from 'styled-components'

import FilterButton from './filterButton'

let Filter = styled.span`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 250px;
`

let ClearButton = styled.span`
  &:hover {
    text-decoration: underline;
    cursor: pointer;
  } 
`

class Footer extends React.Component {
  render () {
    let { size, className, showClear, clear, filter } = this.props
    let style = {}
    if (!showClear) {
      style.opacity = '0'
    }
    return (
      <footer className={className}>
        <span className="size">{size} items left</span>
        <Filter>
          <FilterButton handleClick={() => filter('ALL')}>All</FilterButton>
          <FilterButton handleClick={() => filter('ACTIVE')}>Active</FilterButton>
          <FilterButton handleClick={() => filter('COMPLETED')}>Completed</FilterButton>
        </Filter>
        <ClearButton onClick={clear} className="clear" style={style}>Clear completed</ClearButton>
      </footer>
    )
  }
}

function mapStateToProps (state) {
  let todos = state.todos
  return {
    size: todos.length,
    showClear: todos.some((item) => item.completed)
  }
}

function mapDispatchToProps (dispatch) {
  return {
    filter (type) {
      dispatch({type})
    },
    clear () {
      dispatch({type: 'CLEAR_TODO'})
    }
  }
}

Footer = connect(mapStateToProps, mapDispatchToProps)(Footer)

Footer.propTypes = {
  size: PropTypes.number,
  showClear: PropTypes.bool,
  clear: PropTypes.func,
  filter: PropTypes.func
}

Footer = styled(Footer)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background: #fff;
`

export default Footer
