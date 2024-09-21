import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './homepage/Homepage'
import CompanyList from './companies/CompanyList'
import CompanyDetail from './companies/CompanyDetails'
import JobsList from './jobs/JobList'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Profile from './profiles/Profile'
import NavBar from './navbar/Nav'
import JoblyApi from './api'
import {BrowserRouter, Routes, Route} from 'react-router-dom'




function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const [token, setToken] = useState("")
  const [errors, setErrors] = useState([])

  useEffect(() => {
    console.log(token)

    async function getCurrentUser(){
      console.log(token)
      if(token){
        try {
          let {username} = jwt.decode(token);
          JoblyApi.token = token;
          let currentUser = await JoblyApi.getCurrentUser(username)
          setCurrentUser(currentUser)
        }catch(e) {
          setErrors(e)
        }
      }
    }
  },[token])




  async function signup(data) {
    try {
      let token = await JoblyApi.signup(data);
      setToken(token);
      return { success: true };
    } catch (errors) {
      console.error("signup failed", errors);
      return { success: false, errors };
    }
  }

  async function login(data) {
    try{
      let token = await JoblyApi.login(data);
      setToken(token);
      return {success: true };
    }catch(errors){
      console.error("login failed", errors);
      return { success: false, errors }
    }
  }





  return (
    <>
    
    
    <BrowserRouter >
      <NavBar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='companies' element={<CompanyList />} />
        <Route path='companies/:handle' element={<CompanyDetail />} />
        <Route path='jobs' element={<JobsList />} />
        <Route path='login' element={<Login login={login} />} />
        <Route path='signup' element={<SignUp  signup={signup} />}  />
        <Route path='profile' element={<Profile />} />


      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
