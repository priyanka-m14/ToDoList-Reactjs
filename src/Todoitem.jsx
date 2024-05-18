import React from 'react'

function Todoitem({id,completed,title,toggleComplete,deleteTodo}) {
  return (
    <li>
          <label>
            <input type="checkbox" checked={completed} 
            onChange={()=>toggleComplete(id,completed)}/>
             {title}
          </label>
          <button className="btn btn-danger" onClick={()=>deleteTodo(id)} >Delete</button>
      </li>
  );
}
export default Todoitem;