import React from "react";
import Header from '../others/Header.jsx'
import CreateTask from "../others/CreateTask.jsx";
import AllTasks from '../others/AllTasks.jsx'

const AdminDashboard = (props)=>{
    return (
        
        <div className="min-h-screen p-10">
            <Header changeUser = {props.changeUser}/>
            <CreateTask/>
            <AllTasks/>
        </div>
        
    )
}

export default AdminDashboard