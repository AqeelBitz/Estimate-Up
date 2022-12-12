import React from 'react'
import { Link } from 'react-router-dom'

const CEstimate = () => {

    function clicks() {
        var a = document.getElementById("sloc").value
        var b = (a / 1000)
        document.getElementById("kloc").value = b
    }
    function hey() {
        var t = document.getElementById("cheked")
        var w = t.options[t.selectedIndex].value
        // document.getElementById("haha").value=w

        var t1 = document.getElementById("2")
        var w1 = t1.options[t1.selectedIndex].value
        //document.getElementById("haha").value=w1

        var t2 = document.getElementById("3")
        var w2 = t2.options[t2.selectedIndex].value

        var t3 = document.getElementById("4")
        var w3 = t3.options[t3.selectedIndex].value

        var t4 = document.getElementById("5")
        var w4 = t4.options[t4.selectedIndex].value

        var t6 = document.getElementById("6")
        var w6 = t6.options[t6.selectedIndex].value

        var t7 = document.getElementById("7")
        var w7 = t7.options[t7.selectedIndex].value

        var t8 = document.getElementById("8")
        var w8 = t8.options[t8.selectedIndex].value

        var t9 = document.getElementById("9")
        var w9 = t9.options[t9.selectedIndex].value

        var t10 = document.getElementById("10")
        var w10 = t10.options[t10.selectedIndex].value

        var t11 = document.getElementById("11")
        var w11 = t11.options[t11.selectedIndex].value

        var t12 = document.getElementById("2")
        var w12 = t12.options[t12.selectedIndex].value

        var t13 = document.getElementById("13")
        var w13 = t13.options[t13.selectedIndex].value

        var t14 = document.getElementById("14")
        var w14 = t14.options[t14.selectedIndex].value

        var t15 = document.getElementById("15")
        var w15 = t15.options[t15.selectedIndex].value

        var mult = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15)
        alert(mult)
        document.getElementById("haha").value = mult

    }
    function effort() {
        // if(document.getElementById("LR").value==NULL){
        //     alert("first enter the labor rate")
        // }
        var a = document.getElementById("class")
        var z = Number(a.options[a.selectedIndex].value)

        if (z === 1) {
            var fact = document.getElementById("haha").value
            var bb = document.getElementById("kloc").value
            var Effort = 2.4 * ((bb) ^ (1.05)) * fact

            document.getElementById("effort").value = Effort
            var time = 2.5 * ((Effort) ^ (0.38))
            document.getElementById("time").value = time
        }

        if (z === 2) {
            var fact = document.getElementById("haha").value
            var bb = document.getElementById("kloc").value
            var Effort = 3.0 * ((bb) ^ (1.12)) * fact
            document.getElementById("effort").value = Effort
            var time = 2.5 * ((Effort) ^ (0.35))
            document.getElementById("time").value = time
        }

        if (z === 3) {
            var fact = document.getElementById("haha").value
            var bb = document.getElementById("kloc").value
            var Effort = 3.6 * ((bb) ^ (1.20)) * fact
            document.getElementById("effort").value = Effort
            var time = 2.5 * ((Effort) ^ (0.32))
            document.getElementById("time").value = time
        }
        var temp_cost = document.getElementById("LR").value
        var temp_ef = document.getElementById("effort").value
        var cost = (temp_cost) * (temp_ef)
        document.getElementById("cost").value = cost
    }


    return (
        <div>
            <div class="main">
                <h1 class="est">Estimation of Cost,Effort,Time of development of Software</h1>
                <hr class="hr" />
                Write SLOC:
                <input type="text" id="sloc" name="sloc" required />
                <button onClick={clicks}>GET KLOC</button>
                KLOC=<input type="text" id="kloc" />
                <br /><br />
                <strong><em>Software Cost Drivers</em></strong><br />
                <p>
                    <strong>Product:</strong><br />

                    <div className='Adjusting'>

                        <label>Requirement software reliability:</label>
                        <select id="cheked">
                            <option value="0.75">Very low</option>
                            <option value="0.88">low</option>
                            <option value="1">Nominal</option>
                            <option value="1.15">high</option>
                            <option value="1.40">Very high</option>
                            <option value="1.50">Extremely high</option>
                        </select>
                    </div>
                    <div className='Adjusting'>
                        <label for="2">Size of application database</label>
                        <select name="2" id="2">
                            <option value="0.75">Very low</option>
                            <option value="0.94">low</option>
                            <option value="1">Nominal</option>
                            <option value="1.08">high</option>
                            <option value="1.16">Very high</option>
                            <option value="1.30">Extremely high</option>
                        </select>
                    </div><br />
                    <div className='Adjusting'>
                        <label for="3">Complexity of the product</label>
                        <select name="3" id="3">
                            <option value="0.75">Very low</option>
                            <option value="0.85">low</option>
                            <option value="1">Nominal</option>
                            <option value="1.15">high</option>
                            <option value="1.30">Very high</option>
                            <option value="1.65">Extremely high</option>
                        </select>
                    </div></p>
                <p>
                    <strong>Hardware attributes:</strong>
                    <br /> <br />

                    <div className='Adjusting'>
                        <label for="4">Run-time performance constraints</label>
                        <select name="4" id="4">
                            <option value="0.75">Very low</option>
                            <option value="0.88">low</option>
                            <option value="1">Nominal</option>
                            <option value="1.15">high</option>
                            <option value="1.40">Very high</option>
                            <option value="1.50">Extremely high</option>
                        </select>
                    </div>
                    <div className='Adjusting'>
                        <label for="5">Memory constraints</label>
                        <select name="5" id="5">
                            <option value="0.75">Very low</option>
                            <option value="0.88">low</option>
                            <option value="1">Nominal</option>
                            <option value="1.15">high</option>
                            <option value="1.40">Very high</option>
                            <option value="1.50">Extremely high</option>
                        </select>
                    </div><br />
                    <div className='Adjusting'>
                        <label for="6">Volatality of virtual machines environment</label>
                        <select name="6" id="6">
                            <option value="0.75">Very low</option>
                            <option value="0.88">low</option>
                            <option value="1">Nominal</option>
                            <option value="1.15">high</option>
                            <option value="1.40">Very high</option>
                            <option value="1.50">Extremely high</option>
                        </select>
                    </div>

                    <div className='Adjusting'>

                        <label for="7">Required turnabout time</label>
                        <select name="7" id="7">
                            <option value="0.75">Very low</option>
                            <option value="0.88">low</option>
                            <option value="1">Nominal</option>
                            <option value="1.15">high</option>
                            <option value="1.40">Very high</option>
                            <option value="1.50">Extremely high</option>
                        </select>
                    </div>
                </p>
                <p>
                    <strong>Personnel attributes:</strong><br />
                    <div className='Adjusting'>
                        <label for="8">Analyst capability</label>
                        <select name="8" id="8">
                            <option value="1.46">Very low</option>
                            <option value="1.19">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.86">high</option>
                            <option value="0.71">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div>

                    <div className='Adjusting'>
                        <label for="9">Application experience</label>
                        <select name="9" id="9">
                            <option value="1.29">Very low</option>
                            <option value="1.13">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.91">high</option>
                            <option value="0.82">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div><br />

                    <div className='Adjusting'>
                        <label for="10">Software engineering capability</label>
                        <select name="10" id="10">
                            <option value="1.42">Very low</option>
                            <option value="1.17">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.86">high</option>
                            <option value="0.71">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div>

                    <div className='Adjusting'>
                        <label for="11">Virtual machine exprience</label>
                        <select name="11" id="11">
                            <option value="1.21">Very low</option>
                            <option value="1.10">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.90">high</option>
                            <option value="0.71">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div>
                    <br />

                    <div className='Adjusting'>
                        <label for="12">Programming language experience</label>
                        <select name="12" id="12">
                            <option value="1.14">Very low</option>
                            <option value="1.07">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.95">high</option>
                            <option value="0.71">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div>
                </p>
                <p>

                    <strong>Project attributes:</strong><br />

                    <div className='Adjusting'>
                        <label for="13">Application of software Engineering methods</label>
                        <select name="13" id="13">
                            <option value="1.24">Very low</option>
                            <option value="1.10">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.91">high</option>
                            <option value="0.82">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div>

                    <div className='Adjusting'>
                        <label for="14">Use of software tools</label>
                        <select name="14" id="14">
                            <option value="1.24">Very low</option>
                            <option value="1.10">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.91">high</option>
                            <option value="0.82">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div>

                    <div className='Adjusting'>
                        <label for="15">Required developement schedule</label>
                        <select name="15" id="15">
                            <option value="1.24">Very low</option>
                            <option value="1.10">low</option>
                            <option value="1">Nominal</option>
                            <option value="0.91">high</option>
                            <option value="0.82">Very high</option>
                            <option value="0.50">Extremely high</option>
                        </select>
                    </div>
                </p>
                <button onClick={hey}>calculate mf</button>
                M.F=
                <input type="text" id="haha" />

                <hr class="hr" />

                <div className='Adjusting'>

                    <label >Select the class type</label>
                    <select name="16" id="class">
                        <option value="1">ORGANIC</option>
                        <option value="2">SEMI-DETACHED</option>
                        <option value="3">EMBEDDED</option>
                    </select>
                </div> <br /><br />
                <p className='Adjusting'>
                    <label htmlFor=""> LABOR RATE:</label><input type="text" placeholder="labour rate" id="LR" required />$
                </p>
                <p><button onClick={effort}>Calculate Effort,time and cost</button></p>
                <div >
                    <label htmlFor="">Effort:</label> <input type="text" id="effort" placeholder="effort" /><label htmlFor=""> P-M</label><br />
                    <label htmlFor="">Time of dev.:</label><input type="text" id="time" placeholder="time" /><label htmlFor="">Months</label><br />
                    <label htmlFor="">Cost:</label><input type="text" id="cost" placeholder="cost" /><label htmlFor=""></label><br />
                    <br />
                </div>
                <hr style={{position: "relative",
                top: "10px",
                border: "none",
                height: "2px",
                backgroundColor: "white",
                // marginBottom: "50px",
                 opacity:"100%"}}/>
                <Link to="/cocomo"><button className='goback'><i style={{ width: '70px' }} className="fas fa-sharp fa-solid fa-left-long"></i></button> </Link>

            </div>
        </div>

    )
}

export default CEstimate
