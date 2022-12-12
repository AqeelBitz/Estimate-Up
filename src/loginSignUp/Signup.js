import React,  { useState } from 'react'
import {useNavigate} from "react-router-dom"
import './style.css'



const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({fname:"", lname:"", email:"", password:""})

  let name, value;

  const handleInput =(e)=>{
    name = e.target.name;
    value = e.target.value;
    setUser({...user, [name]:value})
  }
  const PostData= async (e)=>{
    e.preventDefault();
     const {fname, lname, email, password} = user;
     const res = await fetch("/register", {
      method: "POST",
      headers:{
        "Content-Type":"application/json" 
      },
      body: JSON.stringify({fname, lname, email, password})
     })
     const data = await res.json();

     if(data.status === 422 || !data){
      window.alert("Invalid Registration")
      console.log("Invalid Registration")
     }
     else{
      window.alert("Registration Successfull")
      console.log("Registration Successfull")
      navigate("/sign-in")
     }



  }
  return (
    <div className='mymain'>
    <div className='mycontainer'>
    <form method='POST'>
      <h3>Sign Up</h3>

      <div className="mb-3 text-start">
        <label>First name</label>
        <input value={user.fname} onChange={handleInput} name="fname" type="text" className="form-control" placeholder="First name"/>
      </div>

      <div className="mb-3 text-start">
        <label>Last name</label>
        <input value={user.lname} onChange={handleInput} name="lname" type="text" className="form-control" placeholder="Last name" />
      </div>

      <div className="mb-3 text-start">
        <label>Email address</label>
        <input value={user.email} onChange={handleInput} name="email" type="email" className="form-control" placeholder="Enter email"/>
      </div>

      <div className="mb-3 text-start">
        <label>Password</label>
        <input value={user.password} onChange={handleInput} name="password" type="password" className="form-control" placeholder="Enter password"/>
      </div>

      <div className="d-grid">
        <button type="submit" className="btn btn-primary" onClick={PostData}>
          Sign Up
        </button>
      </div>
      <p className="forgot-password ">
        Already registered <a href="/sign-in">sign in?</a>
      </p>
    </form>
    </div>
    </div>

  )
}

export default Signup



