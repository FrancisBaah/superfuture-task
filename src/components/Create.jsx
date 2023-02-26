import React from 'react'
import '../index.css'

const Create = ({onAdd}) => {
    const onSubmit = (e)=>{
        e.preventDefault()
        onAdd(e.target.title.value, e.target.body.value);
        e.target.title.value = '';
        e.target.body.value = '';
    }
  return (
    <div className='createItem'>
      <form onSubmit={onSubmit}>
        <h2>create resource</h2>
        <input placeholder='title' name='title' />
        <input placeholder='body' name='body' />
        <button onSubmit={onSubmit}>create</button>
        <hr />
      </form>
    </div>
  )
}

export default Create
