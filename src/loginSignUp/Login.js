import React, {} from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './style.css'



const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit= async (e)=>{
    e.preventDefault();
    const res = await fetch("/sing-in",{
      method:"POST",
      header:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({email,password})

    })
    const data = res.json();
    if(res.status === 400 || !data){
      console.log("empty")
      window.alert("Invalid Credentials")
    }
    else{
      window.alert("Login Successful")
      navigate("/")
    }
  }
  return (
    <div className='mymain'>      
    <div className='mycontainer'>
    <form method='POST'>
      <h3>Sign In</h3>

      <div className="mb-3 text-start">
        <label>Email address</label>
        <input
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
          type="email"
          className="form-control"
          placeholder="Enter email"
        />
      </div>

      <div className="mb-3 text-start">
        <label>Password</label>
        <input
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
          type="password"
          className="form-control"
          placeholder="Enter password"
        />
      </div>


      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <p className="forgot-password text-right">
        <Link to='/sign-up'>Create Account?</Link>
      </p>
     
    </form>
    </div>
    </div>

  )
}

export default Login


