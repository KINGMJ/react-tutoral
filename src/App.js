import { Switch, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const demoCount = 30

/**
 * 生成demo的路由
 * @param {*} demoCount
 */
const generateDemoRoutes = demoCount => {
  const demoRoutes = []
  for (let i = 1; i <= demoCount; i++) {
    demoRoutes.push({
      path: `/demo${i}`,
      component: lazy(() => import(`./pages/demo${i}`))
    })
  }
  return demoRoutes
}

const routes = generateDemoRoutes(demoCount)

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        {routes.map((route, index) => (
          <Route key={index} {...route} />
        ))}
      </Switch>
    </Suspense>
  )
}

export default App
