function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    <li key={number.toString()}>{number}</li>
  ));
  return <ul>{listItems}</ul>;
}

function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList2(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) => (
    // key 应该在数组的上下文中被指定
    <ListItem key={number.toString()} value={number} />
  ));
  return <ul>{listItems}</ul>;
}

// 在 JSX 中嵌入 map
function NumberList3(props) {
  const numbers = props.numbers;
  return (
    <ul>
      {numbers.map((number) => (
        <ListItem key={number.toString()} value={number} />
      ))}
    </ul>
  );
}

const numbers = [1, 2, 3, 4, 5];

const Demo7 = () => {
  return (
    <div>
      <NumberList numbers={numbers} />
      <br />
      <NumberList2 numbers={numbers} />
      <br />
      <NumberList3 numbers={numbers} />
    </div>
  );
};

export default Demo7;

/**
 * 1. 列表必须有 key
 * 2. key 的值最好是一个独一无二的字符串。通常使用数据的id来作为元素的key
 * 3. 使用索引 index 作为 key 的话，会导致性能变差，还可能引起组件状态的问题
 * 4. 如果不显示指定 key 值， React 将默认使用索引用作为列表项目的 key 值
 * 5. 元素的 key 只有放在就近的数组上下文中才有意义，一个好的经验法则是：在 map() 方法中的元素需要设置 key 属性
 * 6. key 只是在兄弟节点之间必须唯一
 * 7. key 不会传递给组件，如果 props 中传递 key 给子组件，是获取不到的。所以组件中需要使用 key 属性的值，用其他的名字
 *
 * key 的这些特性跟 vue 是一样的
 */
