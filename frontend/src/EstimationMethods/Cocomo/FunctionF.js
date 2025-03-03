import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'


const FunctionF = () => {

    function UFP() {
        var x = Number(document.getElementById("wf").value)
        if (x === 1) {
            var temp1 = 3
            var temp2 = 4
            var temp3 = 3
            var temp4 = 7
            var temp5 = 5
        }
        else if (x === 2) {
            var temp1 = 4
            var temp2 = 5
            var temp3 = 4
            var temp4 = 10
            var temp5 = 7
        }
        else {
            if (x === 3) {
                var temp1 = 6
                var temp2 = 7
                var temp3 = 6
                var temp4 = 15
                var temp5 = 10
            }
        }
        var p = Number(document.getElementById("in").value)
        var q = Number(document.getElementById("out").value)
        var r = Number(document.getElementById("inq").value)
        var s = Number(document.getElementById("files").value)
        var t = Number(document.getElementById("ext_int").value)

        var UFP = ((temp1 * p) + (temp2 * q) + (temp3 * r) + (temp4 * s) + (temp5 * t))
        document.getElementById("UFP").value = UFP

    }

    function func() {
        const questions = [
            "Does the system require reliable backup and recovery?",
            "Are data communications required?",
            "Are there distributed processing functions?",
            "Is performance critical?",
            "Will the system run in an existing, heavily utilized operational environment?",
            "Does the system require online data entry?",
            "Does the online data entry require the input transaction to be built over multiple screens or operations?",
            "Are the inputs, outputs, files, or inquiries complex?",
            "Are the master files updated?",
            "Is the internal processing complex?",
            "Is the code designed to be reusable?",
            "Are conversion and installation included in the design?",
            "Is the system designed for multiple installations in different organizations?",
            "Is the application designed to facilitate change and ease of use by users?"
        ];

        var sum = 0;

        for (var i = 0; i < questions.length; i++) {
            var count = i + 1;
            var value = Number(prompt(`[${count}/15] ${questions[i]} (0-5)`));

            if (isNaN(value) || value < 0 || value > 5) {
                alert("Please enter a value between 0 and 5 for each question.");
                return;
            }

            sum += value;
        }

        document.getElementById("res").value = sum;
    }



    function getffp() {

        var temp = Number(document.getElementById("res").value)
        var perm = Number(document.getElementById("UFP").value)
        var result = (perm * (0.65 + (0.01 * temp)))

        document.getElementById("F_P").value = result

    }
    return (
        <div>
            <div className="main">
                <h1 className='t_name'>FUNCTION POINT CALCULATOR</h1>
                <br />
                <div class="table-container">
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3 style={{ fontWeight: 'bold', color: 'aqua', backgroundColor: '#3f4044e8', width: '30%', borderRadius: '20px' }}>Step-01</h3><br /><br />
                    </div>
                    <table class="data-table">
                        <thead>
                            <tr>
                                <th>S.No</th>
                                <th>Function Types</th>
                                <th>Simple</th>
                                <th>Average</th>
                                <th>Complex</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Number of User Inputs</td>
                                <td>3</td>
                                <td>4</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Number of User Outputs</td>
                                <td>4</td>
                                <td>5</td>
                                <td>7</td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Number of User Inquiries</td>
                                <td>3</td>
                                <td>4</td>
                                <td>6</td>
                            </tr>
                            <tr>
                                <td>4</td>
                                <td>Number of Files</td>
                                <td>7</td>
                                <td>10</td>
                                <td>15</td>
                            </tr>
                            <tr>
                                <td>5</td>
                                <td>Number of External Interfaces</td>
                                <td>5</td>
                                <td>7</td>
                                <td>10</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <br />
                <br />
                <div style={{ color: 'green' }}>
                    --Read the above table.Choose the appropriate weighting factor (i.e.simple,complex or average) and fill its S.no iin the box,and then fill in the function types--

                </div>


                <div className="fact"><strong><h3>
                    <table className="fact">
                        <tr>
                            <th>1. Simple</th>
                            <th >2. Average</th>
                            <th >3. Complex</th>
                        </tr>
                    </table>
                    <br />
                    <div style={{ fontWeight: 'bold' }}>
                        Write the S.No of the weighting factor in the box
                        <input type="text" id="wf" placeholder="weighting factor" />
                    </div>
                </h3></strong>
                </div>

                <div >
                    <p className='Adjusting'>
                        <input type="text" id="in" placeholder="Number of User Inputs" />
                    </p>
                    <p className='Adjusting'>
                        <input type="text" id="out" placeholder="Number of User Outputs" />
                    </p>
                    <p className='Adjusting'>
                        <input type="text" id="inq" placeholder="Number of Inquiries" />
                    </p>
                    <p className='Adjusting'>
                        <input type="text" id="files" placeholder="Number of Files" />
                    </p>
                    <p className='Adjusting'>
                        <input type="text" id="ext_int" placeholder="Number of External Interfaces" />
                    </p>
                </div><br />
                <button className="button-43" role="button" onClick={UFP}> click me to get UFP</button>
                <br /><br />
                <div style={{ color: '#00fa00' }}>
                    UFP=<input type="text" id="UFP" />
                </div>
                <hr style={{
                    position: "relative",
                    top: "10px",
                    border: "none",
                    height: "2px",
                    backgroundColor: "white",
                    // marginBottom: "50px",
                    opacity: "100%"
                }} />
                <br />
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <h3 style={{ fontWeight: 'bold', color: 'aqua', backgroundColor: '#3f4044e8', width: '30%', borderRadius: '20px' }}>Step-02</h3><br /><br />
                </div>
                <div>
                    <em><strong style={{ color: 'green' }}>--Assign a value of importance to each question. Questions will be asked in the promppt window. write answers only within 0 to 5 where Zero being of low importance and 5 being of high importance.--</strong></em>
                    <strong><h3>Click on the below button for adding the complexity factors</h3></strong>
                    <p>
                        <button className="button-43 res" role="button" onClick={func}>CLICK HERE TO OPEN THE PROMPT WINDOW</button>
                    </p>
                    <p style={{ color: '#00fa00' }}>
                        D.I=<input type="text" id="res" className="res" />
                    </p>
                </div>
                <button className="button-43" role="button" onClick={getffp} >CALCULATE FP</button><br />
                <br /><input type="text" id="F_P" placeholder="FP is " readOnly/>
                <br /><br />
            </div>
            <div className='btn-box'>
                <div>
                    <Link to="/cocomo" className="btn btn-danger" style={{display:'flex'}}>
                        <div>
                            <i className="fas fa-arrow-left"></i>
                        </div>
                        <div>
                            Go Back
                        </div>
                    </Link>
                </div>
                <div>
                    <Link to="/sloc" className="btn btn-primary" style={{display:'flex'}}>
                        <div>
                            Source Lines of Code
                        </div>
                        <div>
                            <i className="fas fa-arrow-right"></i>
                        </div>
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default FunctionF

