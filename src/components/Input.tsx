import React ,{useState} from 'react'


type IProps={
  todo:string,
  setTodo:React.Dispatch<React.SetStateAction<string>>,
  addMessage:()=>void
}

const Input = ({todo,setTodo,addMessage}:IProps) => {


  return (
    <div>
       <div className='w-full h-[200px] flex items-center justify-center space-x-10'>
        <input value={todo} onChange={e=>setTodo(e.target.value)} className='text-3xl p-4 rounded-xl shadow-xl' type="text" placeholder='bir şeyler yazabilirsin...' />
        <button onClick={addMessage}  className='text-3xl py-3 px-7 shadow-xl rounded-xl text-white cursor-pointer bg-slate-300 hover:scale-110 duration-300'>Ekle</button>
        </div>




    </div>
  )
}

export default Input