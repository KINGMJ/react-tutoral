const user = {
  firstName: "Harper",
  lastName: "Perez",
};

function formatName(user) {
  return user.firstName + " " + user.lastName;
}

const Element = () => {
  return <h1>Hello, {formatName(user)}</h1>;
};

const Demo1 = () => {
  return (
    <div>
      <Element />
    </div>
  );
};

export default Demo1;

/**
 * 1. JSX 的使用，JSX 属性可以使用字符串字面量后者 {} JavaScript表达式
 * 2. JSX 可以防注入攻击。React DOM 在渲染所有输入内容之前，默认会进行转义
 * 3. Babel 会把 JSX 编译为一个名为 React.createElement() 函数调用
 */
