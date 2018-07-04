// @flow

import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

let rootElement =  document.getElementById('root')

if (rootElement) {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
} else {
  throw Error('No Root element')
}

