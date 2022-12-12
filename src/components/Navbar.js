import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {
  return (
    <div >
    
    <nav className="myNavbar sticky-top navbar navbar-expand-lg">
    <div className="container-fluid ">
      <a className="navbar-brand text-light " href="#">EstimateUp</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active text-light nav-item hover-underline-animation" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item ">
          <Link className="nav-link active text-light nav-item hover-underline-animation" aria-current="page" to="about">About</Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link active text-light nav-item hover-underline-animation" aria-current="page" to="contact">Contact</Link>
      </li>
        
          <li className=" dropdown">
            <Link className="nav-link dropdown-toggle text-light hover-underline-animation" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Estimation Techniques
            </Link>
            <ul className="dropdown-menu ">
              <li><Link className="dropdown-item text-light nav-item hover-underline-animation" to="delphi">Dephi</Link></li>
              <li><Link className="dropdown-item text-light nav-item hover-underline-animation" href="#">Three Point</Link></li>
              <li><Link className="dropdown-item text-light nav-item hover-underline-animation" href="#">Functional Point</Link></li>
              <li><Link className="dropdown-item text-light nav-item hover-underline-animation" to="cocomo">COCOMO I</Link></li>
              <li><Link className="dropdown-item text-light nav-item hover-underline-animation" to="cocomo2">COCOMO II</Link></li>
            </ul>
          </li>
    
        </ul>
        <form className="d-flex" >

          <Link to='/sign-in'><button className="btn mysubmit " type="submit">Login</button></Link>
        </form>
      </div>
    </div>
  </nav>
  <Outlet />
    </div>
  )
}

export default Navbar
