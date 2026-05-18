import React, { createContext, useEffect, useState } from "react";  
import { getLocalStorage } from "../utils/localStorage.jsx";
import { setLocalStorage } from "../utils/localStorage.jsx";

export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    // localStorage.clear()
    const [userData, setUserData] = useState([])

    useEffect(()=>{
        if(!localStorage.getItem('employees')){
        setLocalStorage()    
        }
        const {employees} = getLocalStorage()
        setUserData(employees)
    },[])
   

    return (
        <>
           <AuthContext.Provider value={[userData,setUserData]}>
            {children}
            </AuthContext.Provider>
        </>
    )
}

export default AuthProvider