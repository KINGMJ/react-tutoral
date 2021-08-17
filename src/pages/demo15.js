import React from 'react'

const DataSource = {
  getComments() {
    return [
      { id: 1, content: '评论1' },
      { id: 2, content: '评论2' },
      { id: 3, content: '评论3' }
    ]
  },
  addChangeListener() {
    //
  },

  removeChangeListener() {
    //
  }
}

const withSubscription = (WrappedComponent, selectData) => {
  return class extends React.Component {
    constructor(props) {
      super(props)
      this.handleChange = this.handleChange.bind(this)
      this.state = {
        data: selectData(DataSource, props)
      }
    }

    componentDidMount() {
      DataSource.addChangeListener(this.handleChange)
    }

    componentWillUnmount() {
      DataSource.removeChangeListener(this.handleChange)
    }

    handleChange() {
      this.setState({
        data: selectData(DataSource, this.props)
      })
    }

    render() {
      return <WrappedComponent data={this.state.data} {...this.props} />
    }
  }
}

const CommentList = props => {
  return (
    <div>
      {props.data.map(comment => (
        <Comment comment={comment} key={comment.id} />
      ))}
    </div>
  )
}

const Comment = props => <p>{props.comment.content}</p>

const CommentListWithSubscription = withSubscription(CommentList, DataSource => DataSource.getComments())

const Demo14 = () => {
  return (
    <div>
      <CommentListWithSubscription />
    </div>
  )
}

export default Demo14

/**
 * 1. HOC 组件，一种组件设计模式，利用高阶函数来完成的
 * 2. 在 HOC 组件中，不要改变原组件
 * 3. HOC 应该透传与自身无关的 props
 * 4. Refs 不会被传递
 */
