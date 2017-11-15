'use strict'

import React, { PureComponent } from 'react'
import Sidebar from 'components/sidebar'
import './css/App.css'
import { Row, Col } from 'antd'

class App extends PureComponent {
  render () {
    return (
      <div className='App'>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Sidebar />
        <Row>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Coluna 1</Col>
          <Col xs={20} sm={16} md={12} lg={8} xl={4}>Coluna 2</Col>
          <Col xs={2} sm={4} md={6} lg={8} xl={10}>Coluna 3</Col>
        </Row>
      </div>
    )
  }
}

export default App
