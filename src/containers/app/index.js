import React, { PureComponent } from 'react'
import Sidebar from 'components/sidebar'
import Header from 'components/header'
import Main from 'src/main'
import { Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'

const Dashboard = () => (
  <h1>Dash</h1>
)

const Participants = () => (
  <h1>Participantes</h1>
)

class App extends PureComponent {
  render () {
    return (
      <div>
        <Header />
        <Sidebar />
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
