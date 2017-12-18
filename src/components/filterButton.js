import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

class FilterButton extends React.Component {
  handleClick () {
    this.props.handleClick()
  }

  render () {
    let { children, className } = this.props
    return (
      <button className={className}
              onClick={this.handleClick.bind(this)}>{children}</button>
    )
  }
}

FilterButton.propTypes = {
  handleClick: PropTypes.func
}

FilterButton = styled(FilterButton)`
  padding: 0 7px;
  font-size: 14px;
  color: #777;
  background: #fff;
`

export default FilterButton
