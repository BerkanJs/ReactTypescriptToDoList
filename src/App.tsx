import { useState } from 'react'
import Input from './components/Input.js'
import ToDoList from './components/ToDoList.js'
import {Todos} from './types/Type'

function App() {
  const[todo,setTodo]=useState<string>('')
   const[todos,setTodos]=useState<Todos[]>([])
   const addMessage=()=>{
    if(todo) setTodos([...todos,{message:todo,id:todos.length+1}])
   }
   const deleteMessage=(id:number)=>{
    setTodos(todos.filter(todo=>todo.id!=id))
  }
  


  return (
    
    <div >
      <Input addMessage={addMessage} todo={todo} setTodo={setTodo}/>
      <ToDoList deleteMessage={deleteMessage} todos={todos}/>



   
    </div>
  )
}

export default App
