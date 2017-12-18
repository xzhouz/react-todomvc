import React from 'react'
import TodoInput from './todoInput'

class Header extends React.Component {
  submit (value) {
    this.props.submit(value)
  }
  render () {
    let titleStyle = {
      color: 'rgba(175, 47, 47, 0.15)',
      fontSize: '100px',
      textAlign: 'center'
    }
    return (
      <div className="header">
        <h1 style={titleStyle}>todos</h1>
        <TodoInput selectAll={this.props.selectAll}
                   submit={this.submit.bind(this)}
                   checkAll={this.props.checkAll}/>
      </div>
    )
  }
}

export default Header
