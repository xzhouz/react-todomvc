import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducer from './reducer/index'
import App from './app'

let store = createStore(reducer)

ReactDom.render((
  <Provider store={store}>
    <App/>
  </Provider>),
  document.getElementById('root')
) 

if (module.hot) {
    module.hot.accept();
}
