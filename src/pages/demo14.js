// 包含关系
const FancyBorder = props => {
  return <div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>
}

const WelcomeDialog = props => {
  return (
    // 该 JSX 标签所有内容都会作为一个 children prop 传递给 FancyBorder组件
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Welcome</h1>
      <p className="Dialog-message">Thank you for visiting our spacecraft!</p>
    </FancyBorder>
  )
}

// 不使用 prop.children，自行约定。类似 vue 的 slot name
const SplitPane = props => {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">{props.left}</div>
      <div className="SplitPane-right">{props.right}</div>
    </div>
  )
}
const Contacts = () => <div>Contacts</div>
const Chat = () => <div>Chat</div>

// 特例关系
const Dialog = props => {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">{props.title}</h1>
      <p className="Dialog-message">{props.message}</p>
    </FancyBorder>
  )
}

const WelcomeDialog2 = () => {
  return <Dialog title="Welcome" message="Thank you for visiting our spacecraft!" />
}

const Demo14 = () => {
  return (
    <div>
      <WelcomeDialog />
      <SplitPane left={<Contacts />} right={<Chat />}></SplitPane>
      <WelcomeDialog2 />
    </div>
  )
}
export default Demo14

/**
 * 1. 组合 vs 继承，组件层面并不需要使用继承来构建。如果想要在组件间复用非 UI 的功能，建议将其提取为一个单独的 Javascript 模块，如函数、对象或者类
 * 2. 包含关系，类似 vue 里的 slot 功能，使用 prop.children 传递内容
 */
