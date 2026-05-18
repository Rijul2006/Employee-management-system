import React, { useState } from "react";
import { CircleUserRound, LockKeyhole } from "lucide-react";

const Login = ({handleLogin})=>{

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [checked, setChecked] = useState(false)
  const submitHandler = (e)=>{
    e.preventDefault()
  }

    return (
        <>
        <div className="min-h-screen flex justify-center items-center ">
          <div className="flex justify-center bg-[#FFFFFF] rounded-xl h-90 w-65">
            <form className="flex flex-col justify-center items-center" 
                onSubmit={(e)=>{
                  submitHandler(e)
                  handleLogin(email, password, checked)
                  setEmail('')
                  setPassword('')
                }}>

                <h1 className="text-3xl m-5 font-semibold text-[#0a162a]">Login</h1>

                <div className="relative">
                  <CircleUserRound className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input required type="email" placeholder="Email" className="pl-10 border p-1 rounded-2xl m-2 outline-none" 
                  value={email}
                  onChange={(e)=>{
                    setEmail(e.target.value)
                  }}
                  />
                </div>

                <div className="relative">
                  <LockKeyhole className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" />

                  <input required type="password" placeholder="Password" className="pl-10 border p-1 rounded-2xl m-2 outline-none"
                  value={password} 
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  />
                </div>

                <div className="options flex items-center gap-7 justify-between">
                     <div className="remember flex items-center">
                         <input type="checkbox" className="h-2.5" 
                         onChange={(e)=>{
                          setChecked(e.target.value)
                         }}
                         />
                         <label className="text-xs">Remember me</label>
                     </div>
                     <p className="text-xs">Forgot Password?</p>
                </div>

                <button className="m-5 bg-blue-900 rounded-xl w-25 text-white p-0.5 hover:bg-blue-800" >Submit</button>
            </form>

          </div>  
        </div>
        
        </>
    )
}

export default Login