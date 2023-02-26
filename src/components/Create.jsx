import React from 'react'

const Create = ({onAdd}) => {
    const onSubmit = (e)=>{
        e.preventDefault()
        onAdd(e.target.title.value, e.target.body.value);
        e.target.title.value = '';
        e.target.body.value = '';
    }
  return (
    <div>
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
