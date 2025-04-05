import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet';

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
        // alert(mult)
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
            <Helmet>
                <title>Software Cost Estimation | EstimateUp</title>
                <meta name="description" content="Estimate the cost, effort, and time of software development using the COCOMO model." />
                <meta name="keywords" content="Software cost estimation, COCOMO, Effort estimation, Time estimation, Software development cost, SLOC, KLOC, Labor rate, Software metrics" />
                <meta property="og:title" content="Software Cost Estimation - EstimateUp" />
                <meta property="og:description" content="Estimate the cost, effort, and time of software development using the COCOMO model." />
                <meta property="og:url" content="https://estimate-up.vercel.app" />
                <meta property="og:type" content="website" />
                <meta property="og:image" content="https://example.com/path-to-your-image.jpg" /> {/* Replace with actual image URL */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Software Cost Estimation - EstimateUp" />
                <meta name="twitter:description" content="Estimate the cost, effort, and time of software development using the COCOMO model." />
                <meta name="twitter:image" content="https://example.com/path-to-your-image.jpg" /> {/* Replace with actual image URL */}
                <script type="application/ld+json">
                    {`
                {
                    "@context": "https://schema.org",
                    "@type": "WebPage",
                    "name": "Software Cost Estimation | EstimateUp",
                    "description": "Estimate the cost, effort, and time of software development using the COCOMO model.",
                    "url": "https://estimate-up.vercel.app"
                }
            `}
                </script>
            </Helmet>
            <div className="main">
                <h1 className="est t_name ">Estimation of Cost,Effort,Time of development of Software</h1>

                <div className='item_container '>
                    Write SLOC:
                    <input type="text" id="sloc" name="sloc" required aria-label="Enter SLOC" />
                    <button className="btn btn-primary" onClick={clicks} aria-label="Calculate KLOC">GET KLOC</button>
                    KLOC=<input type="text" id="kloc" aria-label="Enter KLOC" />
                    <h3 style={{ backgroundColor: '#7e74b4', color: 'white', padding: '5px', fontWeight: 'bold', borderRadius: '15px' }}>Software Cost Drivers</h3>
                    <div className='separate_item'>
                        <strong>Product:</strong>
                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label">Requirement software reliability:</label>
                            <div className="col-sm-5">
                                <select className="form-control" id="cheked">
                                    <option value="0.75">Very low</option>
                                    <option value="0.88">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="1.15">high</option>
                                    <option value="1.40">Very high</option>
                                    <option value="1.50">Extremely high</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="2">Size of application database</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="2" id="2">
                                    <option value="0.75">Very low</option>
                                    <option value="0.94">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="1.08">high</option>
                                    <option value="1.16">Very high</option>
                                    <option value="1.30">Extremely high</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="3">Complexity of the product</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="3" id="3">
                                    <option value="0.75">Very low</option>
                                    <option value="0.85">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="1.15">high</option>
                                    <option value="1.30">Very high</option>
                                    <option value="1.65">Extremely high</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div />
                    <div className='separate_item'>
                        <strong>Hardware attributes:</strong>


                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="4">Run-time performance constraints</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="4" id="4">
                                    <option value="0.75">Very low</option>
                                    <option value="0.88">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="1.15">high</option>
                                    <option value="1.40">Very high</option>
                                    <option value="1.50">Extremely high</option>
                                </select>
                            </div>
                        </div>
                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="5">Memory constraints</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="5" id="5">
                                    <option value="0.75">Very low</option>
                                    <option value="0.88">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="1.15">high</option>
                                    <option value="1.40">Very high</option>
                                    <option value="1.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="6">Volatality of virtual machines environment</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="6" id="6">
                                    <option value="0.75">Very low</option>
                                    <option value="0.88">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="1.15">high</option>
                                    <option value="1.40">Very high</option>
                                    <option value="1.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row items mb-1">

                            <label className="col-sm-6 col-form-label" for="7">Required turnabout time</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="7" id="7">
                                    <option value="0.75">Very low</option>
                                    <option value="0.88">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="1.15">high</option>
                                    <option value="1.40">Very high</option>
                                    <option value="1.50">Extremely high</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className='separate_item'>
                        <strong>Personnel attributes:</strong>
                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="8">Analyst capability</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="8" id="8">
                                    <option value="1.46">Very low</option>
                                    <option value="1.19">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.86">high</option>
                                    <option value="0.71">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="9">Application experience</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="9" id="9">
                                    <option value="1.29">Very low</option>
                                    <option value="1.13">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.91">high</option>
                                    <option value="0.82">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="10">Software engineering capability</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="10" id="10">
                                    <option value="1.42">Very low</option>
                                    <option value="1.17">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.86">high</option>
                                    <option value="0.71">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row items mb-1">
                            <label className="col-sm-6 col-form-label" for="11">Virtual machine exprience</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="11" id="11">
                                    <option value="1.21">Very low</option>
                                    <option value="1.10">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.90">high</option>
                                    <option value="0.71">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div className="form-group row items mb-1 ">
                            <label className="col-sm-6 col-form-label" for="12">Programming language experience</label>
                            <div className="col-sm-5">
                                <select className="form-control" name="12" id="12">
                                    <option value="1.14">Very low</option>
                                    <option value="1.07">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.95">high</option>
                                    <option value="0.71">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="separate_item">
                        <strong>Project attributes:</strong>

                        <div class="form-group row items mb-1">
                            <label class="col-sm-6 col-form-label" for="13">Application of software Engineering methods</label>
                            <div class="col-sm-5">
                                <select class="form-control" name="13" id="13">
                                    <option value="1.24">Very low</option>
                                    <option value="1.10">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.91">high</option>
                                    <option value="0.82">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row items mb-1">
                            <label class="col-sm-6 col-form-label" for="14">Use of software tools</label>
                            <div class="col-sm-5">
                                <select class="form-control" name="14" id="14">
                                    <option value="1.24">Very low</option>
                                    <option value="1.10">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.91">high</option>
                                    <option value="0.82">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>

                        <div class="form-group row items mb-1">
                            <label class="col-sm-6 col-form-label" for="15">Required development schedule</label>
                            <div class="col-sm-5">
                                <select class="form-control" name="15" id="15">
                                    <option value="1.24">Very low</option>
                                    <option value="1.10">low</option>
                                    <option value="1">Nominal</option>
                                    <option value="0.91">high</option>
                                    <option value="0.82">Very high</option>
                                    <option value="0.50">Extremely high</option>
                                </select>
                            </div>
                        </div>
                    </div>


                    <div className="form-group row d-flex justify-content-center">
                        <div className="col-sm-5">
                            <button className="mf_btn" onClick={hey} aria-label="Calculate MF">calculate mf</button>
                        </div>
                        <div className="col-sm-5">
                            <input className="form-control" type="text" id="haha" readOnly />
                        </div>
                    </div>

                </div>

                <div class="item_container">
                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">Select the class type</label>
                        <div class="col-sm-4">
                            <select class="form-control" name="16" id="class">
                                <option value="1">ORGANIC</option>
                                <option value="2">SEMI-DETACHED</option>
                                <option value="3">EMBEDDED</option>
                            </select>
                        </div>
                    </div>

                    <div class="form-group row">
                        <label class="col-sm-4 col-form-label">LABOR RATE:</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" placeholder="labour rate" id="LR" aria-label="Enter LABOR RATE" required />
                        </div>
                        <div class="col-sm-2">
                            $
                        </div>
                    </div>

                    <div class="separate_item">
                        <div class="form-group row">
                            <div class="col-sm-12 offset-sm-2">
                                <button class="mf_btn " onClick={effort} aria-label="Calculate Effort, Time, and Cost">Calculate Effort, Time, and Cost</button>
                            </div>
                        </div>
                        <div class="form-group row pl-5">
                            <label class="col-sm-2 col-form-label">Effort:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="effort" aria-label="Enter Effort" readonly />
                            </div>
                            <div class="col-sm-2">
                                P-M
                            </div>
                        </div>

                        <div class="form-group row pl-5">
                            <label class="col-sm-2 col-form-label">Time of Dev.:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="time" aria-label="Enter Time of Dev" readonly />
                            </div>
                            <div class="col-sm-2">
                                Months
                            </div>
                        </div>

                        <div class="form-group row pl-5">
                            <label class="col-sm-2 col-form-label">Cost:</label>
                            <div class="col-sm-4">
                                <input type="text" class="form-control" id="cost" aria-label="Enter Cost" readonly />
                            </div>
                            <div class="col-sm-2">
                                $
                            </div>
                        </div>
                    </div>
                </div>
                <Link to="/cocomo" className="btn btn-danger mr-2"><i className="fas fa-arrow-left mr-2"></i>Go Back </Link>

            </div>
        </div>


    )
}

export default CEstimate
