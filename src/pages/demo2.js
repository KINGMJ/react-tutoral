//函数式组件
// const Welcome = (props) => {
//   return <h1>Hello, {props.name}</h1>;
// };

import React from "react";

//class 组件
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}

const Demo2 = () => {
  return <Welcome name="jack" />;
};

export default Demo2;

/**
 * 1. 函数式组件跟 class 组件在 React 中是等效的
 * 2. 注意：组件名称必须以大写字母开头。React 会将以小写字母开头的组件视为原生 DOM 标签
 * 3. 所有组件都必须像纯函数一样保护它们的 props 不被更改
 */
