import React from 'react'

class Clock extends React.Component {
  constructor(props) {
    super(props)
    this.state = { date: new Date() }
  }

  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId)
  }

  tick() {
    this.setState({
      date: new Date()
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

const Demo3 = () => {
  return <Clock />
}

export default Demo3

/**
 * 1. 使用 this.setState() 来更新 state，不要直接修改 state
 * 2. 构造函数式唯一可以给 this.state 赋值的地方
 * 3. state 的更新可能是异步的，不要依赖它们的值来更新下一个状态
 * 4. 数据是向下流动的
 */
