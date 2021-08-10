import { Switch, Route } from 'react-router-dom'
import Demo1 from './pages/demo1'
import Demo2 from './pages/demo2'
import Demo3 from './pages/demo3'
import Demo4 from './pages/demo4'
import Demo5 from './pages/demo5'
import Demo6 from './pages/demo6'
import Demo7 from './pages/demo7'
import Demo8 from './pages/demo8'
import Demo9 from './pages/demo9'
import Demo10 from './pages/demo10'
import Demo11 from './pages/demo11'
import Demo12 from './pages/demo12'

const routes = [
  {
    path: '/demo1',
    component: Demo1
  },
  {
    path: '/demo2',
    component: Demo2
  },
  {
    path: '/demo3',
    component: Demo3
  },
  {
    path: '/demo4',
    component: Demo4
  },
  {
    path: '/demo5',
    component: Demo5
  },
  {
    path: '/demo6',
    component: Demo6
  },
  {
    path: '/demo7',
    component: Demo7
  },
  {
    path: '/demo8',
    component: Demo8
  },
  {
    path: '/demo9',
    component: Demo9
  },
  {
    path: '/demo10',
    component: Demo10
  },
  {
    path: '/demo11',
    component: Demo11
  },
  {
    path: '/demo12',
    component: Demo12
  }
]

function App() {
  return (
    <Switch>
      {routes.map((route, index) => (
        <Route key={index} {...route} />
      ))}
    </Switch>
  )
}

export default App
