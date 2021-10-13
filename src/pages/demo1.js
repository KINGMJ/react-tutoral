import { counterSlice } from '../components/counter/counterSlice'
import store from '../app/store'

const increment = counterSlice.actions.increment()

console.log(counterSlice.actions.increment())
// {type: "counter/increment", payload: undefined}

console.log(store.getState())
// counter: {value: 0}

store.dispatch(increment)
console.log(store.getState())
// counter: {value: 1}

const newState = counterSlice.reducer({ value: 10 }, counterSlice.actions.increment())
console.log(newState)
// value: 11

const Demo1 = () => {
  return <div></div>
}

export default Demo1

/**
 * 1. action 是一个具有 type 字段的普通 js 对象： {type: "counter/increment", payload: undefined}
 *    type 字符串一般写成”域/事件名称“，第一部分为这个action所属的特征或类别；第二部分是发生的具体事情
 *    action 对象的其他字段放在 payload 中
 *
 * 2. reducer 函数，接收当前的 state 和一个 action 对象，必要时决定如何更新状态，并返回新状态 (state, action) => newState
 *
 * 3. store 对象存放当前应用的状态，store 是通过传入一个 reducer 来创建的，并且有一个名为 getState 的方法，它返回当前状态值
 *
 * 4. dispatch 函数，更新 state 的唯一方法是调用 store.dispatch() 并传入一个 action 对象
 *
 * 5. createSlice 函数负责生成 action 类型字符串、action creator 函数和 action 对象的工作
 */
