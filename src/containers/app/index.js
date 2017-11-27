import React, { PureComponent } from 'react'
import Sidebar from 'components/sidebar'
import Toolbar from 'components/toolbar'
import Header from 'components/header'
import Main from 'src/main'
import Table from 'components/table'
import { Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

const Dashboard = () => (
  <h1>Dash</h1>
)

const Participants = () => (
  <Table />
)

class App extends PureComponent {
  render () {
    return (
      <div>
        <Header />
        <Sidebar />
        <Toolbar />
        <Main>
          <Switch>
            <Route exact path='/' component={Dashboard} />
            <Route path='/dashboard' component={Dashboard} />
            <Route path='/participantes' component={Participants} />
          </Switch>
        </Main>
      </div>
    )
  }
}

export default App
