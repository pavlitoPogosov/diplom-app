import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { CssBaseline } from '@mui/material'

import { App } from './App'
import { setupReduxStore } from './redux/store'

import './index.css'

const reduxStore = setupReduxStore()

ReactDOM.render(
  <Router>
    <Provider store={reduxStore}>
      <App />
      <CssBaseline />
    </Provider>
  </Router>,
  document.getElementById('root')
)
