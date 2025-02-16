import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import signin_img from '../images/signin.jpg';
import './style.css';

const Login = ({ setIsAuthenticated }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  function Validation(e) {
    let result = true;
    if (!email) {
      setEmailError(true);
      result = false;
    }
    if (!password) {
      setPasswordError(true);
      result = false;
    }
    return result;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validation()) {
      const res = await fetch('https://estimate-up.onrender.com/sign-in', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ email: email, password: password })
      });
      const data = await res.json();
      console.log(data);
      cookies.set('jwt', data.token);
      localStorage.setItem('isAuthenticated', true);
      localStorage.setItem('token', data.token);


      if (res.status === 400 || !data) {
        console.log('empty');
        setEmailError(true);
        setPasswordError(true);
      }
      else {
        setIsAuthenticated(true);
        navigate('/');
        console.log('Login Successful');
        window.alert('Login Successful')
      }
    }
  }

  return (
    <div className="container">
      <div className="row d-flex justify-content-center align-items-center">
        <div className="col-md-5 col-lg-5 col-xl-4 my-5">
          <div className="my-container border border-secondary rounded p-3">
            <form method="POST">
              <h3 className="mb-4">Sign In</h3>

              <div className="mb-4 text-start">
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  className={`form-control ${emailError ? 'is-invalid' : ''}`}
                  placeholder="Enter email"
                />
                {emailError && <div className="invalid-feedback">Please enter a valid email address.</div>}
              </div>

              <div className="mb-4 text-start">
                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                  placeholder="Enter password"
                />
                {passwordError && <div className="invalid-feedback">Please enter a valid password.</div>}
              </div>

              <div className="d-grid">
                <button type="submit" className="btn btn-primary" onClick={handleSubmit}>
                  Submit
                </button>
              </div>

              <p className="forgot-password text-right">
                <Link to="/sign-up">Create Account?</Link>
              </p>
            </form>
          </div>
        </div>

        <div className="col-md-6 col-lg-7 col-xl-8 order-md-first img_container">
          <img src={signin_img} className="img-fluid" alt="Sample image" style={{height:'100vh', objectFit: 'cover'}} />
        </div>
      </div>
    </div>
  );
};

export default Login;
