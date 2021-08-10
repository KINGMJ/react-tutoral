import React from 'react'

const Columns = () => {
  return (
    <React.Fragment>
      <td>Apple</td>
      <td>Orange</td>
      <td>Banana</td>
    </React.Fragment>
  )
}

// 短语法
const Columns1 = () => {
  return (
    <>
      <td>Jack</td>
      <td>Rose</td>
      <td>Mary</td>
    </>
  )
}

// 带 key 的 Fragments
const Glossary = props => {
  return (
    <dl>
      {props.items.map(item => (
        // 没有`key`，React 会发出一个关键警告
        <React.Fragment key={item.id}>
          <dt>{item.term}</dt>
          <dd>{item.description}</dd>
        </React.Fragment>
      ))}
    </dl>
  )
}

const items = [
  { id: 1, term: '地球', description: '简称C-53行星' },
  { id: 2, term: '木卫4', description: '在PKD的小说中经常提到' },
  { id: 3, term: '火星', description: '火星救援' }
]

const Demo13 = () => {
  return (
    <div>
      <table>
        <tbody>
          <tr>
            <Columns />
            <Columns1 />
          </tr>
        </tbody>
      </table>
      <Glossary items={items} />
    </div>
  )
}

export default Demo13

/**
 * 1. Fragments：一个组件返回多个元素
 * 2. 短语法 <> </>，不支持 key 或属性
 * 3. key 是唯一可以传递给 Fragment 的属性。未来我们可能会添加对其他属性的支持，例如事件。
 */
