import React from 'react'
// Context 可以让我们无须明确地传遍每一个组件，就能将值深入传递进组件树。
// 为当前的 theme 创建一个 context（“light”为默认值）。
const ThemeContext = React.createContext('light')

const ToolBar = () => {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  static contextType = ThemeContext
  render() {
    return <Button theme={this.context}></Button>
  }
}

const Button = props => {
  return <button>{props.theme}</button>
}

const Demo12 = () => {
  return (
    // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
    // 无论多深，任何组件都能读取这个值。
    // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
    <ThemeContext.Provider value="dark">
      <ToolBar />
    </ThemeContext.Provider>
  )
}

export default Demo12

/**
 * Context：共享全局数据
 */
