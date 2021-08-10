import React from 'react'

const Button = props => {
  function handleClick(e) {
    e.preventDefault()
    console.log('The link was clicked')
  }
  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = { isToggleOn: true }

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.setState(prevState => ({
      isToggleOn: !prevState.isToggleOn
    }))
  }

  render() {
    return <button onClick={this.handleClick}>{this.state.isToggleOn ? 'ON' : 'OFF'}</button>
  }
}

const Demo4 = () => {
  return (
    <div>
      <Toggle />
      <br />
      <Button />
    </div>
  )
}

export default Demo4

/**
 * 1. React 的事件命名采用小驼峰式，而不是纯小写
 * 2. 使用 JSX 语法时需要传入一个函数作为一个事件处理函数，而不是一个字符串
 * 3. 不能通过返回 false 的方式阻止默认行为，必须显式地使用 preventDefault
 * 4. e 是一个合成事件，不用担心跨浏览器的兼容问题
 * 5. 在 class 组件中需要注意 this 的指向问题：
 *     a. 通过在构造函数中 bind this
 *     b. 使用实验性的 public class fields 语法
 *     c. 在回调中使用箭头函数
 */
