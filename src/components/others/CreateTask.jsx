import React, { useContext, useState } from "react";
import {AuthContext} from '../../context/AuthProvider.jsx'
const CreateTask = ()=>{
   
    const [userData, setUserData] = useContext(AuthContext)
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [assignTo, setAssignTo] = useState('')
    const [category, setCategory] = useState('')
    const [description, setDescription] = useState('')

    const submitHandler = (e)=>{
    e.preventDefault()

    const task = {
        taskId: Date.now(),
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle: title,
        taskDescription: description,
        taskDate: date,
        category: category
    }

    const updatedEmployees = userData.map((elem) => {
        if (assignTo === elem.firstName) {
            return {
                ...elem,
                tasks: [...elem.tasks, task],
                taskCounts: {
                    ...elem.taskCounts,
                    newTask: elem.taskCounts.newTask + 1,
                },
            }
        }

        return elem
    })

    setUserData(updatedEmployees)
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    setTitle('')
    setDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
}

    return (
        <>
         <div className="bg-[#111e3c] p-5 rounded text-white">
                <form 
                onSubmit={(e)=>{
                    submitHandler(e)
                }}
                >
                    <div className="flex">
                        <div className="flex flex-col w-[50%]">
                           <label htmlFor="title" className="text-sm">Task Title</label>
                           <input required type="text" placeholder="Make a UI design" id="title" className="border-2 rounded p-1 text-xs w-[60%] mb-2 outline-none"
                           value={title}
                           onChange={(e)=>{
                            setTitle(e.target.value)
                           }}/>
                           <label htmlFor="date" className="text-sm">Date</label>
                           <input required type="date" placeholder="Make a UI design" id="date" className="border-2 rounded p-1 text-xs w-[60%] mb-2 outline-none"
                            value={date}
                            onChange={(e)=>{
                            setDate(e.target.value)
                           }}
                           />
                           <label htmlFor="assign" className="text-sm">Assign to</label>
                           <input required type="text" placeholder="employee name" id="assign" className="border-2 rounded p-1 text-xs w-[60%] mb-2 outline-none"
                            value={assignTo}
                            onChange={(e)=>{
                            setAssignTo(e.target.value)
                           }}
                           />
                           <label htmlFor="category" className="text-sm">Category</label>
                           <input required type="text" placeholder="design, dev, etc." id="category" className="border-2 rounded p-1 text-xs w-[60%] mb-2 outline-none"
                            value={category}
                            onChange={(e)=>{
                            setCategory(e.target.value)
                           }}
                           />
                        </div>   
                        <div className="w-[50%] flex flex-col items-center">
                          <label htmlFor="description">Description</label>
                          <textarea required name="" id="description" className="border-2 rounded p-1 text-xs h-[80%] w-full mb-2 outline-none"
                           value={description}
                           onChange={(e)=>{
                            setDescription(e.target.value)
                           }}
                          ></textarea>
                          <button className="bg-white w-25 hover:bg-gray-200 text-black rounded-xl">Create Task</button>
                        </div>
                    </div>
                 
                </form>
                
            </div>
        </>
    )
}

export default CreateTask