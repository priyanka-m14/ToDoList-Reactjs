import React,{useState} from 'react'

export default function NewForm({setTodos,todos}) {
  const[newItem,setNewItem] = useState("");
  function handleSubmit(e){
    e.preventDefault()

    setTodos([...todos,{
      id:crypto.randomUUID(),
      title: newItem,
      completed:false
    }])
    setNewItem("")
  }
  return (
    <form onSubmit={handleSubmit} className="new-item-form">
      <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input value={newItem} onChange={(event)=> {setNewItem(event.target.value)}} type="text" id="item" />
      </div>
      <button className="btn">Add</button>
    </form>
  )
}
