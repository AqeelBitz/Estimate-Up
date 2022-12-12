import React from 'react'
import { Link } from 'react-router-dom';

const Sloc = () => {
    function calc() {
        var a, b, c, S;

        a = Number(document.getElementById("askfp").value)
        b = document.getElementById("language_factor")
        c = b.options[b.selectedIndex].value
        S = a * c
        document.getElementById("result_sloc").value = S
    }
    return (
        <div>
            <div className="main">
                <h1>Source Lines of Code(SLOC) Calculator</h1>
                <br />
                {/** <div>
                        <h3><em>Description:</em></h3>
                        <hr/>
                            Source lines of code(SLOC) also known as lines of code(LOC) is a software metric used to measure the size of the computer program by counting the number of lines in  the text of the program's source code.SLOC is typically used to predict the amount of effort that will be required to develop a program as well as to estimate programming productivity or maintainability once the software is produced.
                    </div>
                */}
                <div>
                    {/**<h2><em>Uses Of Function Points:</em></h2>
                        <hr/>
                            Function points are used to estimate many different costs in developing a particular piece of software.some estimates may include the following
                            <ul>
                                <li>Calculation of function point(F.P.)</li>
                                <li>Estimation of Cost for Software Developement</li>
                                <li>Estimation of Effort(in Person-Month i.e. P-M)</li>
                                <li>Number of pages for doucmentation of function points</li>
                            </ul><br/>
                            
                                ***<em>These estimates will vary based upon thee language that you choose to develop for software with.We have a constant language factor each language.</em>
                                */}
                </div><br />
                <h2><em>Calculate the source lines of code:</em></h2>
                <hr style={{position: "relative",
                    // top: "20px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "white",
                    marginBottom: "50px", opacity:"100%"}}/>
                <form>
                    <div>
                        <div className='Adjusting'>
                            <label>FUNCTION POINT: </label>
                            <input type="text" id="askfp" />
                        </div>
                        <div className='Adjusting'>
                            <label>LANGUAGE USED:</label>
                                <select name="list" id="language_factor">
                                    <option value="null" >Language</option>
                                    <option value="97" >C </option>
                                    <option value="53">JAVA</option>
                                    <option value="50">C++</option>
                                    <option value="46">J2EE</option>
                                    <option value="61">COBOL</option>
                                    <option value="54">C#</option>
                                    <option value="34">HTML</option>
                                    <option value="57">.NET</option>
                                    <option value="37">ORACLE</option>
                                    <option value="21">SQL</option>
                                </select>
                        </div>
                        <em style={{ color: 'yellow' }}>**The language factors used for the calculation are taken on the basis of average value.</em>
                    </div><br />
                    <div>
                        <button className="button-43" type='submit' role="button" onClick={calc} style={{ width: "12em", height: '3em' }}>Calculate SLOC</button>
                        {/**  <input type="submit" value="Calculate SLOC" onClick={calc}/>*/}
                    </div>
                    <p>
                        <div style={{color:'#00fa00'}}>
                            <label style={{marginRight:'20px'}} htmlFor="">The SLOC is:</label>
                            <input type="text" id="result_sloc" />

                        </div></p>
                    <p>
                        <Link to='/estimate'><button className="button-43" type='submit' role="button" onClick={calc} style={{ width: "17em" }}>Estimate Effort,Time,Cost</button></Link>
                        {/**  <input type="submit" value="Estimate Effort,Time,Cost" onclick="location.href='estimate.html';"/> 
                                                 <input type="button" onclick="window.location.href='estimate.html';" value="Estimate Effort,Cost,Time"/>*/}
                    </p>
                </form>
                <hr style={{position: "relative",
                top: "10px",
                border: "none",
                height: "2px",
                backgroundColor: "white",
                // marginBottom: "50px",
                 opacity:"100%"}}/>
                <Link to="/cocomo"><button className='goback'><i style={{width:'70px'}} className="fas fa-sharp fa-solid fa-left-long"></i></button></Link>
            </div>
        </div>
    )
}

export default Sloc
