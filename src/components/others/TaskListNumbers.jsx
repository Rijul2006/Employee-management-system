import React from "react";

const TaskListNumbers = ({data})=>{
    return (
    <>
    
        <div className="flex gap-2 m-3 overflow-x-auto w-[95%] md:w-full lg:w-full" id='list'>
            <div className="bg-blue-50 rounded-2xl p-5 w-60">
              <h2 className="text-4xl font-bold text-blue-600">
                {data.taskCounts.newTask}
              </h2>
              <p className="text-blue-600 mt-2">Assigned Tasks</p>
            </div>

            <div className="bg-green-50 rounded-2xl p-5 w-60">
              <h2 className="text-4xl font-bold text-green-600">
                {data.taskCounts.completed}
              </h2>
              <p className="text-green-600 mt-2">Tasks Completed</p>
            </div>
                
            <div className="bg-purple-50 rounded-2xl p-5 w-60">
              <h2 className="text-4xl font-bold text-purple-600">
                {data.taskCounts.active}
              </h2>
              <p className="text-purple-600 mt-2">Tasks Accepted</p>
            </div>

            <div className="bg-red-50 rounded-2xl p-5 w-60">
              <h2 className="text-4xl font-bold text-red-600">
                {data.taskCounts.failed}
              </h2>
              <p className="text-red-600 mt-2">Tasks Failed</p>
            </div>

        </div>
    </>
    )
}

export default TaskListNumbers;