import React from "react";

const FailedTask = ({data})=>{
    return (
        <>
         <div className= "h-fit shrink-0 w-full bg-amber-600 m-5 rounded flex flex-col flex-nowrap p-3 text-amber-50">
            <div className="flex justify-between items-center"> 
              <p className="bg-red-600 w-fit p-1 rounded text-xs text-center">{data.category}</p>
              <p className="text-xs">{data.taskDate}</p>
            </div>
            <p className="font-bold m-2">{data.taskTitle}</p>
            <p className="text-xs m-2">{data.taskDescription}</p>
            <div className="flex gap-3 mt-6">
               <button className="bg-red-500 hover:bg-red-600 text-white p-1.5 rounded text-sm"> Failed</button>
            </div>
         </div>

        </>
    )
}

export default FailedTask