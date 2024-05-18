import React,{useState,useEffect} from "react"
import './styles.css'
import NewForm from "./NewForm";
import TodoList from "./TodoList";

function App() {
  const[todos,setTodos]=useState(
    localStorage.getItem('ITEMS')
    ?JSON.parse(localStorage.getItem('ITEMS'))
    :[]
  );
  useEffect(()=>{
    localStorage.setItem('ITEMS',JSON.stringify(todos));
  },[todos]);
  function toggleComplete(id,isCompleted){
    let tmpTodos =[...todos];
    tmpTodos=tmpTodos.map(todo=>{
      if(todo.id===id){
        todo.completed=!isCompleted
      }
      return todo
    })
    setTodos(tmpTodos)
  }

  function deleteTodo(id){
    let tmpTodos=[...todos];
    tmpTodos=tmpTodos.filter(todo=>todo.id!==id)
    setTodos(tmpTodos)
  }
  console.log(todos); 
  return (
    <>
    <NewForm setTodos={setTodos} todos={todos}/>
    <h1 className="header">Todo List</h1>
    <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App;
