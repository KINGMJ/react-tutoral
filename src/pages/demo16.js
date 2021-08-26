import React, { useState, useEffect } from 'react'

const Example = () => {
  // useState 是一个 Hook， 类似 vue 的 composition api，setXXX 是用来改变state的值的
  const [count, setCount] = useState(0)

  // 相当于 componentDidMount 和 componentDidUpdate:
  useEffect(() => {
    // 使用浏览器的 API 更新页面标题
    document.title = `You clicked ${count} times`
  })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  )
}

const ChatAPI = {
  subscribeToFriendStatus(id, handle) {
    console.log('组件渲染时执行')
    handle(true)
  },
  unsubscribeFromFriendStatus(id, handle) {
    console.log('组件销毁后执行')
    handle(false)
  }
}

const FriendStatus = props => {
  const [isOnline, setIsOnline] = useState(null)
  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }

  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })

  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

const Demo16 = () => {
  return (
    <div>
      <Example />
      <FriendStatus friend="{id: 1}" />
    </div>
  )
}

export default Demo16

/**
 * 1. Hook 不能在 class 组件中使用，所以这种方案更倾向于函数式编程
 * 2. useState 方法的返回值是当前 state 和一个 更新 state 的函数
 * 3. Effect Hook 可以让我们在函数组件中执行副作用操作
 */
