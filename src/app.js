import React from 'react'
import styled from 'styled-components'
import Header from './components/header'
import TodoList from './components/todoList'
import Footer from './components/footer'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      todoList: [],
      filter: 0,
      checkAll: false
    }
  }
  submit (value) {
    let todoList = this.state.todoList.concat()
    todoList.push({action: value, completed: false})
    this.setState({
      todoList
    })
  }
  toggle (index) {
    let todoList = this.state.todoList
    if (todoList[index]) {
      todoList[index].completed = !todoList[index].completed
      this.setState({todoList}, () => {
        this.setState({
          checkAll: this.isCheckAll()
        })
      })
    }
  }
  isCheckAll () {
    let todoList = this.state.todoList
    return todoList.length > 0 && todoList.every(item => item.completed)
  }
  delete (index) {
    let todoList = this.state.todoList
    if (todoList.length > index && index >= 0) {
      todoList.splice(index, 1)
      this.setState({todoList}, () => {
        this.setState({
          checkAll: this.isCheckAll()
        })
      })
    }
  }
  filter (flag) {
    this.setState({
      filter: flag
    })
  }
  clear () {
    this.setState({
      todoList: this.state.todoList.filter((item) => !item.completed)
    })
  }
  checkAll () {
    if (this.state.todoList.length === 0) return
    let completed = !this.state.checkAll
    this.setState({
      todoList: this.state.todoList.map((item) => {
        item.completed = completed
        return item
      })
    })
    this.state.checkAll = completed
  }
  render () {
    let state = this.state
    let filter = state.filter
    let todoList
    if (filter === 0) {
      todoList = state.todoList
    } else if (filter === 1) {
      todoList = state.todoList.filter((item => item.completed))
    } else if (filter === 2) {
      todoList = state.todoList.filter((item => !item.completed))
    } else {
      alert('filter number wrong!')
    }
    let showClear = state.todoList.findIndex(item => item.completed) > -1 ? true : false
    return (
      <div className="app">
        <Header submit={this.submit.bind(this)}
                checkAll={this.checkAll.bind(this)}
                check={this.state.checkAll}></Header>
        <TodoList todoList={todoList}
                  toggle={this.toggle.bind(this)}
                  delete={this.delete.bind(this)}/>
        <Footer size={this.state.todoList.length}
                filter={this.filter.bind(this)}
                clear={this.clear.bind(this)}
                showClear={showClear}/>
      </div>
    )
  }
}

App = styled(App)`
  margin: 0 auto;
  width: 550px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2), 0 25px 50px rgba(0, 0, 0, 0.1);
`

export default App
