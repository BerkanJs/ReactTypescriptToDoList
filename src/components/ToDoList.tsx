import React from 'react'
import ToDo from './ToDo'
import {Todos} from '../types/Type'

type Props={
  todos:Todos[],
  deleteMessage:(id:number)=>void

}

const ToDoList = ({todos,deleteMessage}:Props) => {
  return (

    <div className='w-full h-[200px] flex items-center justify-center flex-wrap '>
    <ToDo deleteMessage={deleteMessage} todos={todos}/>

    </div>
  )
}

export default ToDoList