import React from 'react'
import { Link } from 'react-router-dom'
import "./sloc.css"
const Cocomo = () => {
  return (
    <div>
      <div>
        <h1 className='t_name'>COCOMO-I</h1>
      </div>
      <div className="home">
        <div>
          <h3><u>Functionalities</u></h3>
          <ul>
            <li>The COCOMO-I can perform the following functionalities:-</li>
            <li>
              <Link to="/function" style={{textDecoration:'none'}}>
                <button class="button-43" role="button">CALCULATION OF FUNCTION POINT</button>
              </Link>
            </li>
            <li>
              <Link to="/sloc" style={{textDecoration:'none'}}>
                <button class="button-43" role="button">CALCULATION OF SOURCE LINES OF CODES(SLOC)</button>
              </Link>
            </li>
            <li>
              <Link to="/estimate" style={{textDecoration:'none'}}>
                <button class="button-43" role="button">ESTIMATION OF EFFORT,DEVELOPEMENT TIME AND COST</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>

  )
}

export default Cocomo