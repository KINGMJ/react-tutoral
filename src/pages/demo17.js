import React, { useState, useEffect } from 'react'

const ChatAPI = {
  subscribeToFriendStatus(friendId, handleStatusChange) {
    console.log('好友上线')
    handleStatusChange({ isOnline: true })
  },

  unsubscribeToFriendStatus(friendId, handleStatusChange) {
    console.log('好友下线')
    handleStatusChange({ isOnline: false })
  }
}

// 自定义 hook
const useFriendStatus = friendId => {
  const [isOnline, setIsOnline] = useState(null)
  useEffect(() => {
    function handleStatusChange(status) {
      setIsOnline(status.isOnline)
    }

    ChatAPI.subscribeToFriendStatus(friendId, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeToFriendStatus(friendId, handleStatusChange)
    }
  })
  return isOnline
}

const FriendStatus = props => {
  const isOnline = useFriendStatus(props.friend.id)
  if (isOnline === null) {
    return 'Loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}

const FriendListItem = props => {
  const isOnline = useFriendStatus(props.friend.id)
  return <li style={{ color: isOnline ? 'green' : 'black' }}>{props.friend.name}</li>
}

const Demo17 = () => {
  return (
    <div>
      <FriendStatus friend="{id: 1}" />
      <FriendListItem friend="{id: 1}" />
    </div>
  )
}

export default Demo17

/**
 * 1. 自定义Hook，类似 vue 的合成事件
 */
