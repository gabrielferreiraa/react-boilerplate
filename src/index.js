import React from 'react'
import { render } from 'react-dom'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from 'stores/configure-store'

import App from 'containers/app'
import registerServiceWorker from './registerServiceWorker'

const store = configureStore()
const rootElement = document.querySelector('[data-js="app"]')

const renderApp = Component => {
  render(
    <Provider store={store}>
      <Component />
    </Provider>
    , rootElement)
}

renderApp(App)

registerServiceWorker()
