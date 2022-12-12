import React from 'react'
import { Link } from 'react-router-dom'
import "./sloc.css"
const Cocomo = () => {
    return (
        <div>

            <div className="home">
                <div>
                    <h1>COCOMO-I</h1>
                </div>
                {/*
        <div>
            <h3>An application software for estimating the software development</h3>
        </div>
        <br/><br/><br/>
        
      <div>
            <h2><u><em>INTRODUCTION</em></u></h2>
            <span>
                <h4>
                    <p>The COCOMO-II Simulator is an application program that is used for cost estimation of a Software
                        to be developed. Software cost estimation invo;ves the determination of estimates of
                        effort,Developement time,and cost of the software going to be developed ny having some
                        contraints from user such as Function points(F.P.) or source lines of code(SLOC)and user will
                        rate 17 cost drivers and 5 scale drivers and will provide labour rate.
                    </p>
                </h4>
            </span>
        </div>
  */}
                <div>

                    <h3><u>Functionalities</u></h3><br />
                    <ul>
                        The COCOMO-I can perform the following functionalities:-
                        <br /><br />

                        <Link to="/function">
                            <button class="button-43" role="button">CALCULATION OF FUNCTION POINT</button>
                        </Link><br />
                        <Link to="/sloc"> <button class="button-43" role="button">CALCULATION OF SOURCE LINES OF CODES(SLOC)</button></Link><br />
                        <Link to="/estimate"><button class="button-43" role="button">ESTIMATION OF EFFORT,DEVELOPEMENT TIME AND COST</button></Link>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Cocomo