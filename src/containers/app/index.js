import React, { PureComponent } from 'react'
import Sidebar from 'components/sidebar'
import 'antd/dist/antd.css'

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
