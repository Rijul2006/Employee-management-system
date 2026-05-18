import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvider";

const NewTask = (props) => {
    const [userData, setUserData] = useContext(AuthContext);

    const handleAccept = (empId, taskId) => {
        let loggedInEmployeeUpdatedData = null;

        const updatedData = userData.map((employee) => {
            if (employee.id == empId) {
                const updatedTasks = employee.tasks.map((task) => {
                    if (task.taskId == taskId) {
                        return { ...task, active: true, newTask: false, completed: false, failed: false };
                    }
                    return task;
                });

                const updatedEmployeeObj = {
                    ...employee,
                    tasks: updatedTasks,
                    taskCounts: {
                        ...employee.taskCounts,
                        active: (employee.taskCounts.active || 0) + 1,
                        newTask: (employee.taskCounts.newTask || 0) - 1
                    }
                };

                loggedInEmployeeUpdatedData = updatedEmployeeObj; 
                return updatedEmployeeObj;
            }
            return employee;
        });

        
        setUserData(updatedData);

        localStorage.setItem('employees', JSON.stringify(updatedData));
        

        if (loggedInEmployeeUpdatedData) {
            localStorage.setItem(
                'loggedInUser', 
                JSON.stringify({ role: 'employee', data: loggedInEmployeeUpdatedData })
            );
        }

    };

    const handleFailed = (empId, taskId)=>{
        let loggedInUserObj = null
        const updatedData = userData.map((employee)=>{
            if(employee.id == empId){
                const updatedTasks = employee.tasks.map((task)=>{
                    if(task.taskId == taskId){
                        return {...task, active: false, newTask: false, completed: false, failed: true}
                    }
                    return task
                })

                const updatedTaskObj = {
                    ...employee,
                    tasks:updatedTasks,
                    taskCounts:{
                        ...employee.taskCounts,
                        newTask: (employee.taskCounts.newTask || 0) - 1,
                        failed:(employee.taskCounts.failed || 0) + 1
                    }
                }

                loggedInUserObj = updatedTaskObj
                return updatedTaskObj

            }
            return employee
        })

        setUserData(updatedData);

        localStorage.setItem('employees', JSON.stringify(updatedData));
        

        if (loggedInUserObj) {
            localStorage.setItem(
                'loggedInUser', 
                JSON.stringify({ role: 'employee', data: loggedInUserObj })
            );
        }

    }

    return (
        <>
        <div className="shrink-0 h-fit w-full bg-amber-600 m-5 rounded flex flex-col flex-nowrap p-3 text-amber-50">
            <div className="flex justify-between items-center"> 
                  <p className="bg-red-600 w-fit p-1 rounded text-xs text-center">{props.data.category}</p>
                  <p className="text-xs">{props.data.taskDate}</p>
            </div>
            <p className="font-bold m-2">{props.data.taskTitle}</p>
            <p className="text-xs m-2">{props.data.taskDescription}</p> 
            <div className="flex gap-3 mt-6">

               <button id="active" className="bg-blue-500 hover:bg-blue-600
                text-white p-1.5 rounded text-sm"
               onClick={() => handleAccept(props.id, props.taskId)}
               > 
               Accept Task
               </button>

               <button  className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded text-sm"
                onClick={()=>handleFailed(props.id, props.taskId)}> 
                    Mark As Failed  
               </button>
              
               
            </div>
        </div>
        </>
    );
};

export default NewTask;