import React, { Suspense } from 'react'
// import OtherComponent from "../components/demo11/OtherComponent";

const OtherComponent = React.lazy(() => import('../components/demo11/OtherComponent'))
const AnotherComponent = React.lazy(() => import('../components/demo11/AnotherComponent'))

const Demo10 = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
        <AnotherComponent />
      </Suspense>
    </div>
  )
}

export default Demo10

/**
 * 1. React.lazy 与 Suspense 可以动态引入组件，暂不支持服务端渲染
 * 2. React.lazy 接受一个函数，这个函数需要动态地调用 import()。它必须返回一个Promise
 */
