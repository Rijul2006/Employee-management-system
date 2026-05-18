import React, { useContext } from "react";
import {AuthContext} from '../../context/AuthProvider.jsx'

const AllTasks = ()=>{

    const [data, setData] = useContext(AuthContext)

    return (
        
        <div className="bg-[#111e3c]">
        <div className=" p-5 mt-5 rounded h-fit text-2xl text-amber-50 font-bold">Employee Tasks</div>
        <div className=" p-5 rounded overflow-auto h-fit lg:h-40" id="tasks">
              {data.map((obj, idx)=>{
                return <div className="bg-amber-500 mb-2 p-2" >
                    <h3>{obj.firstName}</h3>
                    <div className="flex gap-2">
                        <button className="bg-blue-500 hover:bg-blue-600 text-white p-1.5 mt-1 rounded text-xs width-fit lg:text-sm lg:w-fit md:w-fit">New Task:{obj.taskCounts.newTask}</button>
                        <button className="bg-purple-600 hover:bg-purple-700 text-white p-1.5 mt-1 rounded text-xs width-fit lg:text-sm lg:w-fit md:w-fit">Accepted Tasks:{obj.taskCounts.active} </button>
                         <button className="bg-green-600 hover:bg-green-700 text-white p-1.5 mt-1 rounded text-xs width-fit lg:text-sm lg:w-fit md:w-fit">Completed Tasks:{obj.taskCounts.completed}</button>
                        <button className="bg-red-500 hover:bg-red-600 text-white p-1.5 mt-1 rounded text-xs width-fit lg:text-sm lg:w-fit md:w-fit"> Failed Task:{obj.taskCounts.failed}</button>
                    </div>
                </div>
              })}
        </div>  
        </div>
        
        
        
    )
}

export default AllTasks