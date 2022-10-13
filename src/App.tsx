import history from '@history'
import { ConnectedRouter } from 'connected-react-router'
import { FC, Suspense } from 'react'
import { Provider } from 'react-redux'
import createStore from './store'
import Routes from './Routes'

# Ini juga komentar jadi tolong jangan di komentari lagi
const App: FC = () => {
  const store = createStore()

  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <Suspense fallback={<p>loading</p>}>
          <Routes />
        </Suspense>
      </ConnectedRouter>
    </Provider>
  )
}

export default App
