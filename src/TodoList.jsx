import React from 'react'
import Todoitem from './Todoitem';

function TodoList({todos, toggleComplete, deleteTodo}) {
  return (
    <ul className="list">
      {todos.length===0 && <p>There is no To Do item</p>}
      {
        todos.map((todo)=>(
        <Todoitem key={todo.id} {...todo}
         toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
        ))
      }
    </ul>
  );
}
export default TodoList;
