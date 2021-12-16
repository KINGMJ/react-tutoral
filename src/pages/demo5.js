import React from 'react'

// 使用 if 来进行条件渲染
function UserGreeting(props) {
  return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
  return <h1>Please sign up!</h1>
}

function Greeeting(props) {
  const isLoggedIn = props.isLoggedIn
  if (isLoggedIn) {
    return <UserGreeting />
  }
  return <GuestGreeting />
}

// 使用元素变量来进行条件渲染
function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Logout</button>
}

class LoginControl extends React.Component {
  constructor(props) {
    super(props)
    this.handleLoginClick = this.handleLoginClick.bind(this)
    // 如果使用了箭头函数就不需要 bind this
    // https://zh-hans.reactjs.org/docs/react-without-es6.html#autobinding
    // this.handleLogoutClick = this.handleLogoutClick.bind(this)
    this.state = { isLoggedIn: false }
  }

  handleLoginClick() {
    this.setState({ isLoggedIn: true })
  }

  handleLogoutClick() {
    this.setState({ isLoggedIn: false })
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn
    // let button;
    // if (isLoggedIn) {
    //   button = <LogoutButton onClick={this.handleLogoutClick} />;
    // } else {
    //   button = <LoginButton onClick={this.handleLoginClick} />;
    // }

    // return (
    //   <div>
    //     <Greeeting isLoggedIn={isLoggedIn} />
    //     {button}
    //   </div>
    // );

    // 使用三目运算符
    return (
      <div>
        <Greeeting isLoggedIn={isLoggedIn} />
        {isLoggedIn ? <LogoutButton onClick={e => this.handleLogoutClick(e)} /> : <LoginButton onClick={this.handleLoginClick} />}
      </div>
    )
  }
}

// 使用与运算符&&来进行控制
function Mailbox(props) {
  const unreadMessages = props.unreadMessages
  return (
    <div>
      <h1>Hello!</h1>
      {unreadMessages.length > 0 && <h2>You have {unreadMessages.length} unread messages.</h2>}
    </div>
  )
}

const messages = ['React', 'Re: React']
const Demo5 = () => {
  return (
    <div>
      <Greeeting isLoggedIn={true} />
      <br />
      <LoginControl />
      <br />
      <Mailbox unreadMessages={messages} />
    </div>
  )
}

export default Demo5

/**
 * 条件渲染的几种方式：
 * 1. React 中的条件渲染与 Js 一直，可以利用 if 等运算符去处理
 * 2. 使用元素变量来控制渲染
 * 3. 使用与运算符 &&
 * 4. 使用三目运算符
 */
