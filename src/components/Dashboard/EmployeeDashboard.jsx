import React, { useContext } from "react";  
import { AuthContext } from "../../context/AuthProvider.jsx";
import Header from "../others/Header.jsx";
import TaskListNumbers from "../others/TaskListNumbers.jsx";
import TaskList from "../TaskList/TaskList.jsx";

const EmployeeDashboard = (props) => {
    const [userData] = useContext(AuthContext)
    const currentEmployee = userData?.find((emp) => emp.id === props.data?.id) ?? props.data

    return (
        <>
        <div className="min-h-screen p-10">
          <Header changeUser={props.changeUser} data={currentEmployee}/>
          <TaskListNumbers data={currentEmployee}/>
          <TaskList data={currentEmployee}/>
        </div>
        
        </>
    )
}

export default EmployeeDashboard