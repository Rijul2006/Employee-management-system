import { useContext, useEffect, useState } from 'react'
import './App.css'
import Login from './components/Auth/Login.jsx'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard.jsx'
import AdminDashboard from './components/Dashboard/AdminDashboard.jsx'
import { AuthContext } from './context/AuthProvider.jsx'

function App() {
  const [user, setUser] = useState(null)
  const [loggedInUserData, setLoggedInUserData] = useState(null)
  const [authData] = useContext(AuthContext)

  useEffect(() => {
    const isloggedInUser = localStorage.getItem('loggedInUser')
    if (isloggedInUser) {
      const userData = JSON.parse(isloggedInUser)
      setUser(userData.role)
      setLoggedInUserData(userData.data)
    }
  }, [])


  const handleLogin = (email, password, rememberMe) => {
    if (email === 'admin@gmail.com' && password === '123') {
      setUser('admin')
      if (rememberMe) {
        localStorage.setItem('loggedInUser', JSON.stringify({ role: 'admin' }))
      }
      return
    }

    const employee = authData?.find((e)=> e.email == email && e.password == password)

      if (employee) {
        setUser('employee')
        setLoggedInUserData(employee)
        if (rememberMe) {
          localStorage.setItem(
            'loggedInUser',
            JSON.stringify({ role: 'employee', data: employee })
          )
        }
        return
      }
    

    window.alert('Invalid Credentials')
  }


  return (
    <>
    {!user ? <Login handleLogin = {handleLogin}/>: ''}
    {user == 'admin' ? <AdminDashboard changeUser={setUser}/>:(user == 'employee' ? <EmployeeDashboard data = {loggedInUserData} changeUser={setUser}/>: null) }
    </>
  )
}

export default App
