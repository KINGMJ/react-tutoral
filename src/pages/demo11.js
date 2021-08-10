import React, { Suspense, lazy } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

const OtherComponent = lazy(() => import('../components/demo11/OtherComponent'))
const AnotherComponent = lazy(() => import('../components/demo11/AnotherComponent'))

const Demo11 = () => {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/demo11/index" component={OtherComponent}></Route>
          <Route path="/demo11/about" component={AnotherComponent}></Route>
        </Switch>
      </Suspense>
    </Router>
  )
}

export default Demo11

/**
 * 1. 基于路由的代码分割：路由配合 lazy 可以达到跳转路由才加载的效果
 */
