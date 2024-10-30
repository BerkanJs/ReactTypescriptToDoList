import React from 'react'
import {Todos} from '../types/Type'

type Props={
  todos:Todos[],
  deleteMessage:(id:number)=>void
}



const ToDo = ({todos,deleteMessage}:Props) => {
  
  return (
    

    <div>

      {

        todos.map((data,index)=>(
     
          <div className='text-2xl min-w-[500px] pt-10 flex items-center justify-between' key={index}>
            {
              data.message
            }

           <span onClick={()=>deleteMessage(data.id)} className='text-2xl font-bold ml-10 cursor-pointer'>X</span>


          </div>
          
        ))




      }





    </div>
  )
}

export default ToDo