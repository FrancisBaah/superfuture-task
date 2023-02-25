import React from 'react'

const User = ({id,title, body}) => {
  return (
    <div>
      <li>{id}</li>
      <li>{title}</li>
      <li>{body}</li>
    </div>
  )
}

export default User
