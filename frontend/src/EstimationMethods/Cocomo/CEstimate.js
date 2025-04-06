import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const CEstimate = () => {
    const clicks = () => {
        const a = document.getElementById("sloc").value;
        const b = (a / 1000);
        document.getElementById("kloc").value = b;
    };

    const hey = () => {
        const t = document.getElementById("cheked");
        const w = t.options[t.selectedIndex].value;

        const t1 = document.getElementById("2");
        const w1 = t1.options[t1.selectedIndex].value;

        const t2 = document.getElementById("3");
        const w2 = t2.options[t2.selectedIndex].value;

        const t3 = document.getElementById("4");
        const w3 = t3.options[t3.selectedIndex].value;

        const t4 = document.getElementById("5");
        const w4 = t4.options[t4.selectedIndex].value;

        const t6 = document.getElementById("6");
        const w6 = t6.options[t6.selectedIndex].value;

        const t7 = document.getElementById("7");
        const w7 = t7.options[t7.selectedIndex].value;

        const t8 = document.getElementById("8");
        const w8 = t8.options[t8.selectedIndex].value;

        const t9 = document.getElementById("9");
        const w9 = t9.options[t9.selectedIndex].value;

        const t10 = document.getElementById("10");
        const w10 = t10.options[t10.selectedIndex].value;

        const t11 = document.getElementById("11");
        const w11 = t11.options[t11.selectedIndex].value;

        const t12 = document.getElementById("2");
        const w12 = t12.options[t12.selectedIndex].value;

        const t13 = document.getElementById("13");
        const w13 = t13.options[t13.selectedIndex].value;

        const t14 = document.getElementById("14");
        const w14 = t14.options[t14.selectedIndex].value;

        const t15 = document.getElementById("15");
        const w15 = t15.options[t15.selectedIndex].value;

        const mult = (w * w1 * w2 * w3 * w4 * w6 * w7 * w8 * w9 * w10 * w11 * w12 * w13 * w14 * w15);
        document.getElementById("haha").value = mult;
    };

    const effort = () => {
        const a = document.getElementById("class");
        const z = Number(a.options[a.selectedIndex].value);
        const fact = document.getElementById("haha").value;
        const bb = document.getElementById("kloc").value;
        let calculatedEffort;
        let calculatedTime;

        if (z === 1) {
            calculatedEffort = 2.4 * (Math.pow(bb, 1.05)) * fact;
            calculatedTime = 2.5 * (Math.pow(calculatedEffort, 0.38));
        } else if (z === 2) {
            calculatedEffort = 3.0 * (Math.pow(bb, 1.12)) * fact;
            calculatedTime = 2.5 * (Math.pow(calculatedEffort, 0.35));
        } else if (z === 3) {
            calculatedEffort = 3.6 * (Math.pow(bb, 1.20)) * fact;
            calculatedTime = 2.5 * (Math.pow(calculatedEffort, 0.32));
        }

        document.getElementById("effort").value = calculatedEffort;
        document.getElementById("time").value = calculatedTime;

        const tempCost = document.getElementById("LR").value;
        const tempEf = document.getElementById("effort").value;
        const cost = (tempCost) * (tempEf);
        document.getElementById("cost").value = cost;
    };

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
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="Software Cost Estimation - EstimateUp" />
                <meta name="twitter:description" content="Estimate the cost, effort, and time of software development using the COCOMO model." />
                <script type="application/ld+json">
                    {JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "WebPage",
                        "name": "Software Cost Estimation | EstimateUp",
                        "description": "Estimate the cost, effort, and time of software development using the COCOMO model.",
                        "url": "https://estimate-up.vercel.app"
                    })}
                </script>
            </Helmet>

            <div className="main">
                <h1 className="est t_name">Estimation of Cost, Effort, Time of development of Software</h1>

                <div className="item_container">
                    Write SLOC:
                    <input type="text" id="sloc" name="sloc" required aria-label="Enter SLOC" />
                    <button className="btn btn-primary" onClick={clicks} aria-label="Calculate KLOC">GET KLOC</button>
                    KLOC=<input type="text" id="kloc" aria-label="KLOC result" readOnly />

                    <h3 style={{ backgroundColor: '#7e74b4', color: 'white', padding: '5px', fontWeight: 'bold', borderRadius: '15px' }}>Software Cost Drivers</h3>
                    <div className="separate_item">
                    <strong>Product:</strong>
                    <div className="form-group row items mb-1">
                      <label htmlFor="cheked" className="col-sm-6 col-form-label">Requirement software reliability:</label>
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
                      <label htmlFor="size-db" className="col-sm-6 col-form-label">Size of application database:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="2" name="size-db">
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
                      <label htmlFor="complexity" className="col-sm-6 col-form-label">Complexity of the product:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="3" name="complexity">
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
                  
                  <div className="separate_item">
                    <strong>Hardware attributes:</strong>
                    <div className="form-group row items mb-1">
                      <label htmlFor="runtime" className="col-sm-6 col-form-label">Run-time performance constraints:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="4" name="runtime">
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
                      <label htmlFor="memory" className="col-sm-6 col-form-label">Memory constraints:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="5" name="memory">
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
                      <label htmlFor="volatility" className="col-sm-6 col-form-label">Volatility of virtual machines environment:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="6" name="volatility">
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
                      <label htmlFor="turnabout" className="col-sm-6 col-form-label">Required turnabout time:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="7" name="turnabout">
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
                  
                  <div className="separate_item">
                    <strong>Personnel attributes:</strong>
                    <div className="form-group row items mb-1">
                      <label htmlFor="analyst" className="col-sm-6 col-form-label">Analyst capability:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="8" name="analyst">
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
                      <label htmlFor="experience" className="col-sm-6 col-form-label">Application experience:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="9" name="experience">
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
                      <label htmlFor="engineering" className="col-sm-6 col-form-label">Software engineering capability:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="10" name="engineering">
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
                      <label htmlFor="vm-experience" className="col-sm-6 col-form-label">Virtual machine experience:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="11" name="vm-experience">
                          <option value="1.21">Very low</option>
                          <option value="1.10">low</option>
                          <option value="1">Nominal</option>
                          <option value="0.90">high</option>
                          <option value="0.71">Very high</option>
                          <option value="0.50">Extremely high</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row items mb-1">
                      <label htmlFor="language" className="col-sm-6 col-form-label">Programming language experience:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="12" name="language">
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
                  
                  <div className="separate_item">
                    <strong>Project attributes:</strong>
                    <div className="form-group row items mb-1">
                      <label htmlFor="methods" className="col-sm-6 col-form-label">Application of software Engineering methods:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="13" name="methods">
                          <option value="1.24">Very low</option>
                          <option value="1.10">low</option>
                          <option value="1">Nominal</option>
                          <option value="0.91">high</option>
                          <option value="0.82">Very high</option>
                          <option value="0.50">Extremely high</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row items mb-1">
                      <label htmlFor="tools" className="col-sm-6 col-form-label">Use of software tools:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="14" name="tools">
                          <option value="1.24">Very low</option>
                          <option value="1.10">low</option>
                          <option value="1">Nominal</option>
                          <option value="0.91">high</option>
                          <option value="0.82">Very high</option>
                          <option value="0.50">Extremely high</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-group row items mb-1">
                      <label htmlFor="schedule" className="col-sm-6 col-form-label">Required development schedule:</label>
                      <div className="col-sm-5">
                        <select className="form-control" id="15" name="schedule">
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
                <div className="item_container">
                <div className="form-group row">
                  <label htmlFor="class" className="col-sm-4 col-form-label">Select the class type</label>
                  <div className="col-sm-4">
                    <select className="form-control" id="class">
                      <option value="1">ORGANIC</option>
                      <option value="2">SEMI-DETACHED</option>
                      <option value="3">EMBEDDED</option>
                    </select>
                  </div>
                </div>
      
                <div className="form-group row">
                  <label htmlFor="LR" className="col-sm-4 col-form-label">LABOR RATE:</label>
                  <div className="col-sm-4">
                    <input type="text" className="form-control" placeholder="labour rate" id="LR" aria-label="Enter LABOR RATE" required />
                  </div>
                  <div className="col-sm-2">$</div>
                </div>
      
                <div className="separate_item">
                  <div className="form-group row">
                    <div className="col-sm-12 offset-sm-2">
                      <button className="mf_btn" onClick={effort} aria-label="Calculate Effort, Time, and Cost">Calculate Effort, Time, and Cost</button>
                    </div>
                  </div>
                  
                  <div className="form-group row pl-5">
                    <label htmlFor="effort" className="col-sm-2 col-form-label">Effort:</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="effort" aria-label="Effort result" readOnly />
                    </div>
                    <div className="col-sm-2">P-M</div>
                  </div>
      
                  <div className="form-group row pl-5">
                    <label htmlFor="time" className="col-sm-2 col-form-label">Time of Dev.:</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="time" aria-label="Time of Development result" readOnly />
                    </div>
                    <div className="col-sm-2">Months</div>
                  </div>
      
                  <div className="form-group row pl-5">
                    <label htmlFor="cost" className="col-sm-2 col-form-label">Cost:</label>
                    <div className="col-sm-4">
                      <input type="text" className="form-control" id="cost" aria-label="Cost result" readOnly />
                    </div>
                    <div className="col-sm-2">$</div>
                  </div>
                </div>
              </div>
      
              <Link to="/cocomo" className="btn btn-danger mr-2">
                <i className="fas fa-arrow-left mr-2"></i>Go Back
              </Link>
            </div>
          </div>
        );
      };
      
      export default CEstimate;