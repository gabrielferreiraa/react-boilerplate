'use strict'

import React, { PureComponent } from 'react'
import './css/App.css'
import Sidebar from 'components/sidebar'

class App extends PureComponent {
  render () {
    return (
      <div className='App'>
        <Sidebar />
      </div>
    )
  }
}

export default App
