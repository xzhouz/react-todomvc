import React from 'react'
import styled from 'styled-components'
import Header from './components/header'
import TodoList from './components/todoList'
import Footer from './components/footer'

class App extends React.Component {
  render () {
    return (
      <div className="app">
        <Header/>
        <TodoList/>
        <Footer/>
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
