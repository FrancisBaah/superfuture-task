import React from 'react'

const User = ({id,title, body}) => {
  return (
    <div>
      <h1 className='round'>{id}</h1>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  )
}

export default User
