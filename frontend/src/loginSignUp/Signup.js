import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import './style.css'
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import signup_img from '../images/signup.jpg';



const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser] = useState({ fname: "", lname: "", email: "", password: "" })
  const [err, setError] = useState(false)

  let name, value;

  function Validation() {
    let result = true;
    if (!user.fname) {
      setError(true)
      result = false;
    }
    if (!user.lname) {
      setError(true)
      result = false;
    }
    if (!user.email) {
      setError(true)
      result = false;
    }
    if (!user.password) {
      setError(true)
      result = false;
    }
    if (user.fname.length < 3 || user.lname.length < 3) {
      toast.warning('name length can not be <3 !', {
        position: 'top-right'
      })
      result = false;

    }
    if (!/^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(user.email)) {
      toast.warning('Email is invalid !', {
        position: 'top-right'
      })
      result = false;
      // console.log('inside')

    }
    return result;
  }
  const handleInput = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value })
  }
  const PostData = async (e) => {
    e.preventDefault();
    const { fname, lname, email, password } = user;
    if (Validation()) {
      const res = await fetch("https://estimate-up.onrender.com/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ fname, lname, email, password })
      })
      const data = await res.json();

      if (data.status === 422 || !data) {
        toast.error("Invalid Registration", {
          position: 'top-right'
        })
        console.log("Invalid Registration")
      }
      else {
        toast.success('Registered successfully.', {
          position: 'top-right'
        })
        console.log("Registration Successfull")
        navigate("/sign-in")
      }
    }
  }
  return (
    <div className="container">
    <div className="row align-items-center">
      <div className="col-md-5 col-lg-5 col-xl-4 my-5 border border-secondary rounded p-3 my-container">
        <form method='POST'>
          <h3 className="mb-4">Sign Up</h3>
  
          <div className="mb-3">
            <input value={user.fname} onChange={handleInput} name="fname" type="text" className="form-control rounded" placeholder="First name" />
            {err && !user.fname ? <div className="text-danger mt-2">This field cannot be empty!</div> : ""}
          </div>
  
          <div className="mb-3">
            <input value={user.lname} onChange={handleInput} name="lname" type="text" className="form-control rounded"  placeholder="Last name" />
            {err && !user.lname ? <div className="text-danger mt-2">This field cannot be empty!</div> : ""}
          </div>
  
          <div className="mb-3">
            <input value={user.email} onChange={handleInput} name="email" type="email" className="form-control rounded" placeholder="Enter email" />
            {err && !user.email ? <div className="text-danger mt-2">This field cannot be empty!</div> : ""}
          </div>
  
          <div className="mb-3">
            <input value={user.password} onChange={handleInput} name="password" type="password" className="form-control rounded" placeholder="Enter password" />
            {err && !user.password ? <div className="text-danger mt-2">This field cannot be empty!</div> : ""}
          </div>
  
          <div className="d-grid mt-4">
            <button type="submit" className="btn btn-primary" onClick={PostData}>Sign Up</button>
          </div>
  
          <p className="forgot-password text-center mt-3">
            Already registered? <Link to="/sign-in">Sign in here</Link>
          </p>
        </form>
      </div>
  
      <div className="col-md-6 col-lg-7 col-xl-8 order-md-first img_container">
        <img src={signup_img} className="img-fluid" alt="Sample image" style={{height:'100vh', objectFit: 'cover'}} />
      </div>
    </div>
  
    <ToastContainer />
  </div>
  
  
  
  )
}

export default Signup



