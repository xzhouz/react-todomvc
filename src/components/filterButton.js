import React from 'react'

class FilterButton extends React.Component {
  handleClick () {
    this.props.handleClick()
  }

  render () {
    let style = {
      padding: '0 7px',
      fontSize: '14px',
      color: '#777',
      background: '#fff'
    }
    return (
      <button className="button"
              style={style}
              onClick={this.handleClick.bind(this)}>{this.props.children}</button>
    )
  }
}

export default FilterButton
