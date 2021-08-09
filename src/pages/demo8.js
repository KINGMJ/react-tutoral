import React from "react";

// 处理单个输入
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("提交的名字" + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字：
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          ></input>
        </label>
        <input type="submit" value="提交"></input>
      </form>
    );
  }
}

// 处理多个输入
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2,
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.name === "isGoing" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <form>
        <label>
          参与：
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange}
          />
        </label>
        <br />
        <label>
          来宾人数：
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange}
          />
        </label>
      </form>
    );
  }
}

const Demo8 = () => {
  return (
    <div>
      <NameForm />
      <br />
      <Reservation />
    </div>
  );
};

export default Demo8;

/**
 * 1. react 中对表单的处理是通过受控组件来完成的。受控组件：控制取值的表单输入元素的组件，这一点跟 vue 的思想是完全不同的，vue 中可以通过 v-model 这个语法糖来
 * 2. 表单元素都是通过 value 来获取值的，像 select 标签，React 不会使用 selected 属性，而是在根 select 标签上使用 value 属性
 * 3. 文件 input 标签，因为它的 value 只读，所以它是 React 中的一个非受控组件
 * 4. 处理多个 input 元素时，可以给每个元素添加 name 属性，并让处理函数根据 event.target.name 的值选择要执行的操作
 */
