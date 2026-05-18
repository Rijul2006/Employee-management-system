import React, { useEffect, useState } from "react";

const Header = (props)=>{

    const [user, setUser] = useState('admin')
    
    useEffect(()=>{
      if(props.data){
        setUser(props.data.firstName)
    }  
    },[])
    
    const logOutUser = ()=>{
       localStorage.setItem('loggedInUser', '')
       props.changeUser('')
    }
    return (
        <>
        <div className="flex justify-between p-5">
            <div>
              <h3 className="text-amber-50 font-semibold">Hello, </h3>
              <h1 className="text-amber-50 font-bold text-2xl"> {user}🖐</h1>  
            </div>
          
        <button className="bg-red-800 h-10 w-20 p-1 text-amber-50 rounded hover:bg-red-900"
        onClick = {logOutUser}
        >Log Out</button>

        </div>
        </>
    )
}

export default Header;