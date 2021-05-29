import React from 'react'
import { Route, Switch, useRouteMatch } from 'react-router'
import NotFoundPage from '../../components/NotFound'
import ListPage from './pages/ListPage'

function TodoFeature(props) {
  const match = useRouteMatch()
  return (
    <div>
      <Switch>
        <Route path={match.path} component={ListPage} exact />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  )
}

export default TodoFeature
