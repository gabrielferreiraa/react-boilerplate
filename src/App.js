import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import { Row, Col } from 'antd'

class App extends Component {
  render () {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h1 className='App-title'>Welcome to React</h1>
        </header>
        <p className='App-intro'>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
