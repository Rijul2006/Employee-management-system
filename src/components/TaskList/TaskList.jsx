import React from "react";
import AcceptTask from "./AcceptTask.jsx";
import CompleteTask from "./CompleteTask.jsx";
import NewTask from "./NewTask.jsx";
import FailedTask from "./FailedTask.jsx";

const TaskList = (props)=>{
  const id = props.data.id
  console.log(props.data)
console.log(props.data.tasks)
console.log(Array.isArray(props.data.tasks))
 return (
    <>
    <div className="bg-[#111e3c] mt-7">
      <h1 className="text-amber-50 font-bold text-2xl pt-5 h-fit text-center">Your Tasks</h1>
     <div className=" flex flex-col p-5 mt-5 overflow-auto h-full lg:h-65 items-center" id="items">
      
        {props.data.tasks.map((obj, index)=>{
            if(obj.newTask)
              return <NewTask key={index} id={id} taskId={obj.taskId} data={obj} />
            if(obj.active)
              return <AcceptTask key={index} id={id} taskId={obj.taskId} data={obj} />
            if(obj.completed)
              return <CompleteTask key={index} id={id} taskId={obj.taskId} data={obj}/>
            if(obj.failed)
              return <FailedTask key={index} id={id} taskId={obj.taskId} data={obj} />
            return null
        })}
        
    </div> 
    </div>
    
    </>
 )
}

export default TaskList