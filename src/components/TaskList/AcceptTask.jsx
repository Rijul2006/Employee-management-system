import React, { useContext } from "react";
import {AuthContext} from '../../context/AuthProvider.jsx'

const AcceptTask = (props)=>{

    const [userData, setUserData] = useContext(AuthContext)

    const handleComplete = (empId, taskId)=>{
        let loggedInUserUpdated = null
        const updatedUserData = userData.map((employee)=>{
            if(employee.id == empId){
                const updatedTasks = employee.tasks.map((task)=>{
                    if(task.taskId == taskId){
                        return {
                            ...task,
                            active:false, newTask: false, completed:true, failed: false
                        }
                    }
                    return task
                })

                const updatedObj = {
                    ...employee,
                    tasks:updatedTasks
                    ,
                    taskCounts:{
                        ...employee.taskCounts,
                        active:(employee.taskCounts.active || 0 )-1,
                        completed:(employee.taskCounts.completed || 0 )+1
                    }
                }
                loggedInUserUpdated = updatedObj
                return updatedObj
            }
            return employee
        })
        setUserData(updatedUserData)
        localStorage.setItem('employees', JSON.stringify({ role: 'employee', data: loggedInUserUpdated }))

        if(loggedInUserUpdated){
            localStorage.setItem('loggedInUser',JSON.stringify(loggedInUserUpdated))
        }
    }

    return (
        <>
         <div className= "h-fit shrink-0 w-full bg-amber-600 m-5 rounded flex flex-col flex-nowrap p-3 text-amber-50">
              <div className="flex justify-between items-center"> 
                  <p className="bg-red-600 w-fit p-1 rounded text-xs text-center">{props.data.category}</p>
                  <p className="text-xs">{props.data.taskDate}</p>
              </div>
              <p className="font-bold m-2">{props.data.taskTitle}</p>
              <p className="text-xs m-2">{props.data.taskDescription}</p>
              <div className="flex gap-3 mt-6">
                <button className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 rounded text-sm">Task Accepted </button>
                
                <button className="bg-green-600 hover:bg-green-700 text-white p-1.5 rounded text-sm"
                onClick={()=>{
                    handleComplete(props.id, props.taskId)
                }}
                >Complete Task</button>
            
              </div>
         </div>
        </>
    )
}

export default AcceptTask