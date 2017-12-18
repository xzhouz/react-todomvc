import React from 'react'
import PropTypes from 'prop-types'
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
  filterAll () {
    this.props.filter(0)
  }
  filterActive () {
    this.props.filter(2)
  }
  filterCompleted () {
    this.props.filter(1)
  }
  render () {
    let { size, className, showClear, clear } = this.props
    let style = {}
    if (!showClear) {
      style.opacity = '0'
    }
    return (
      <footer className={className}>
        <span className="size">{size} items left</span>
        <Filter>
          <FilterButton handleClick={this.filterAll.bind(this)}>All</FilterButton>
          <FilterButton handleClick={this.filterActive.bind(this)}>Active</FilterButton>
          <FilterButton handleClick={this.filterCompleted.bind(this)}>Completed</FilterButton>
        </Filter>
        <ClearButton onClick={clear} className="clear" style={style}>Clear completed</ClearButton>
      </footer>
    )
  }
}

Footer.propTypes = {
  size: PropTypes.number,
  showClear: PropTypes.bool,
  clear: PropTypes.func
}

Footer = styled(Footer)`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 40px;
  background: #fff;
`

export default Footer
