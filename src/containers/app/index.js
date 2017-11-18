import React, { PureComponent } from 'react'
import Sidebar from 'components/sidebar'
import Header from 'components/header'
import 'antd/dist/antd.css'

class App extends PureComponent {
  render () {
    return (
      <div className='App'>
        <Header />
        <Sidebar />
      </div>
    )
  }
}

export default App
