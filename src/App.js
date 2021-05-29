import Header from 'components/Header'
import { useEffect } from 'react'
import { Route, Switch } from 'react-router'
import productApi from './api/productApi'
import NotFoundPage from './components/NotFound'
import CounterFeature from './features/Counter'
import SongFeature from './features/Song'
import TodoFeature from './features/Todo/'

function App() {
  useEffect(() => {
    const fetchProduct = async () => {
      const productList = await productApi.getAll()
      console.log(productList)
    }
    fetchProduct()
  }, [])
  return (
    <div>
      <Switch>
        <Route path="/" component={Header} exact />
        <Route path="/todos" component={TodoFeature} exact />
        <Route path="/counter" component={CounterFeature} exact />
        <Route path="/songs" component={SongFeature} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default App
