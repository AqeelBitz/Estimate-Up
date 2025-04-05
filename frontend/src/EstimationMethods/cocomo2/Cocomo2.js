import React, { useEffect, useRef } from 'react'
import "./cocomo2.css"
import { Helmet } from 'react-helmet';

const Cocomo2 = () => {
    const medaBtnRef = useRef(null);
    const fpBtnRef = useRef(null);
  
    let FP = 0;
    let correctFP = 0;

    useEffect(() => {
        if (fpBtnRef.current) {
            fpBtnRef.current.addEventListener('click', () => {
                FP = 0;
                correctFP = 0;
                let sumCoeffCorrComplexity = 0;
                for (let i = 1; i < 15; i++) {
                    let curr = +document.getElementById('fp' + i).value;
                    sumCoeffCorrComplexity += curr;
                }

                let EI = [[3, 3, 4], [3, 4, 6], [4, 6, 6]];
                let EO = [[4, 4, 5], [4, 5, 7], [5, 7, 7]];
                let ILF = [[7, 7, 10], [7, 10, 15], [10, 15, 15]];
                let EIF = [[5, 5, 7], [5, 7, 10], [7, 10, 10]];
                let EQ = [[3, 3, 4], [3, 4, 6], [4, 6, 6]];

                for (let i = 0; i < 3; i++) {
                    for (let j = 0; j < 3; j++) {
                        FP += +document.getElementById('EI' + i + j).value * EI[i][j] +
                            +document.getElementById('EO' + i + j).value * EO[i][j] +
                            +document.getElementById('ILF' + i + j).value * ILF[i][j] +
                            +document.getElementById('EIF' + i + j).value * EIF[i][j] +
                            +document.getElementById('EQ' + i + j).value * EQ[i][j];
                    }
                }

                correctFP = FP * (0.65 + 0.01 * sumCoeffCorrComplexity);
                 let x1 = document.getElementById('fp')
                 let x2 = document.getElementById('ufp')
                 let x3 = document.getElementById('fi')
                 x1.style.backgroundColor = 'greeen'
                 x2.style.backgroundColor = 'greeen'
                 x3.style.backgroundColor = 'greeen'
                 

                document.getElementById('fp').innerHTML = 'Function points without compensation: ' + FP.toFixed(2);
                document.getElementById('ufp').innerHTML = 'Function points with correction: ' + correctFP.toFixed(2);
                document.getElementById('fi').innerHTML = 'Correction factor:' + sumCoeffCorrComplexity.toFixed(2);
            });

        }
        if (medaBtnRef.current) {
            medaBtnRef.current.addEventListener('click', () => {
                const p = countP();
                document.getElementById('p').innerHTML = 'P = ' + p;

                const eArch = counteArch(p);
                let procRUSE = +document.getElementById('rusePr').value;
                let PROD = document.getElementById('exp');
                PROD = PROD.options[PROD.selectedIndex].value;
                let screenForms = +document.getElementById('sS').value +
                    +document.getElementById('mS').value * 2 +
                    +document.getElementById('hS').value * 3;
                let docs = +document.getElementById('sD').value * 2 +
                    +document.getElementById('mD').value * 5 +
                    +document.getElementById('hD').value * 8;
                let modules = +document.getElementById('mod').value * 10;

                const FPper = FP / 100;
                const kLOC = FPper * 30 * 64 + FPper * 10 * 21 + FPper * 60 * 53;
                const size = screenForms + docs + modules;
                const MdpJob = (size * ((100 - procRUSE) / 100)) / PROD;
                const medaJob = 2.45 * eArch * Math.pow(kLOC / 1000, p);

                document.getElementById('jobResultMeda').innerHTML = 'Labor costs (person/month): ' + medaJob.toFixed(2);
                document.getElementById('timeResultMeda').innerHTML = 'Time(month):' + (3.0 * Math.pow(medaJob, 0.33 + 0.2 * (p - 1.01))).toFixed(2);
                document.getElementById('jobResultMdp').innerHTML = 'Labor costs (person/month):' + MdpJob;
                document.getElementById('timeResultMdp').innerHTML = 'Time(month):' + (3 * Math.pow(MdpJob, 0.33 + 0.2 * (p - 1.01))).toFixed(2);
            });
        }
    })

    function countP() {
        let prec = document.getElementById('prec');
        prec = +prec.options[prec.selectedIndex].value;
        let flex = document.getElementById('Flex');
        flex = +flex.options[flex.selectedIndex].value;
        let risk = document.getElementById('Risk');
        risk = +risk.options[risk.selectedIndex].value;
        let team = document.getElementById('team');
        team = +team.options[team.selectedIndex].value;
        let pmat = document.getElementById('pmat');
        pmat = +pmat.options[pmat.selectedIndex].value;

        return ((prec + flex + risk + team + pmat) / 100 + 1.01).toFixed(2);
    }

    function counteArch(p) {
        let PERS = document.getElementById('PERS');
        PERS = +PERS.options[PERS.selectedIndex].value;
        let RCPX = document.getElementById('RCPX');
        RCPX = +RCPX.options[RCPX.selectedIndex].value;
        let RUSE = document.getElementById('RUSE');
        RUSE = +RUSE.options[RUSE.selectedIndex].value;
        let PDIF = document.getElementById('PDIF');
        PDIF = +PDIF.options[PDIF.selectedIndex].value;
        let FCIL = document.getElementById('FCIL');
        FCIL = +FCIL.options[FCIL.selectedIndex].value;
        let SCED = document.getElementById('SCED');
        SCED = +SCED.options[SCED.selectedIndex].value;
        let PREX = document.getElementById('PREX');
        PREX = +PREX.options[PREX.selectedIndex].value;

        return (PERS * RCPX * RUSE * PDIF * FCIL * SCED * PREX).toFixed(2);
    }
    
    return (
        <div className="cocomo2-calculator">
            
        <Helmet>
        <title>COCOMO II Calculator | Software Cost Estimation Tool</title>
        <meta name="description" content="Advanced COCOMO II calculator for software project estimation. Calculate function points, labor costs, and project timelines using the proven COCOMO II model." />
        <meta name="keywords" content="COCOMO II, software estimation, project planning, function points, cost estimation, software metrics" />
        <meta property="og:title" content="COCOMO II Calculator | Software Cost Estimation Tool" />
        <meta property="og:description" content="Calculate software project costs and timelines using the COCOMO II estimation model" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="COCOMO II Calculator" />
        <meta name="twitter:description" content="Advanced software project estimation tool using COCOMO II model" />
        <link rel="canonical" href="https://yourwebsite.com/cocomo2-calculator" />
    </Helmet>
        
        <header>
                <h1 className='t_name'>COCOMO II Software Cost Estimation Calculator</h1>
            </header>
            
            <main className="container cocomo_container">
                <section className="row">
                    <article className="col functionalPoint cocomo2_col">
                        <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px', color:'white'}}>Function Point Method</h2>
                        <p className="calculator-description">Calculate software size using function point analysis to estimate project complexity.</p>
                        
                        <div className='flex-item' >
                            <label htmlFor="fp1">Data transmission</label>
                            <input className='cocomo2_input' id="fp1" type="number" min="0" max="5" aria-label="Data transmission complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp2">Distributed data processing</label>
                            <input className='cocomo2_input' id="fp2" type="number" min="0" max="5" aria-label="Distributed data processing complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp3">Performance</label>
                            <input className='cocomo2_input' id="fp3" type="number" min="0" max="5" aria-label="Performance requirements complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp4">Operating restrictions</label>
                            <input className='cocomo2_input' id="fp4" type="number" min="0" max="5" aria-label="Operating restrictions complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp5">Transaction frequency</label>
                            <input className='cocomo2_input' id="fp5" type="number" min="0" max="5" aria-label="Transaction frequency complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp6">Online data entry</label>
                            <input className='cocomo2_input' id="fp6" type="number" min="0" max="5" aria-label="Online data entry complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp7">End User Efficiency</label>
                            <input className='cocomo2_input' id="fp7" type="number" min="0" max="5" aria-label="End user efficiency complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp8">Live update</label>
                            <input className='cocomo2_input' id="fp8" type="number" min="0" max="5" aria-label="Live update complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp9">Complexity of processing</label>
                            <input className='cocomo2_input' id="fp9" type="number" min="0" max="5" aria-label="Processing complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp10">Reusability</label>
                            <input className='cocomo2_input' id="fp10" type="number" min="0" max="5" aria-label="Reusability complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp11">Ease of installation</label>
                            <input className='cocomo2_input' id="fp11" type="number" min="0" max="5" aria-label="Installation ease complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp12">Ease of operation</label>
                            <input className='cocomo2_input' id="fp12" type="number" min="0" max="5" aria-label="Operation ease complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp13">No. of possible installations on various platforms</label>
                            <input className='cocomo2_input' id="fp13" type="number" min="0" max="5" aria-label="Multi-platform installation complexity rating" /><br />
                        </div>
                        <div className='flex-item'>
                            <label htmlFor="fp14">Ease of change</label>
                            <input className='cocomo2_input' id="fp14" type="number" min="0" max="5" aria-label="Change ease complexity rating" /><br />
                        </div>
                        
                        <button type="submit" role="button" className="fpBtn" ref={fpBtnRef} aria-label="Calculate function points">Calculate</button>
                        <div className="results-section" style={{ padding:'5px', marginTop:'5px'}}>
                            <h3 id="fi" aria-live="polite"></h3>
                            <h3 id="ufp" aria-live="polite"></h3>
                            <h3 id="fp" aria-live="polite"></h3>
                        </div>
                    </article>
                    
                    <article className="col leftColoumn cocomo2_col">
                        <section className='leftColumnTable'>
                            <h3 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px', color:'white'}}>External Inputs (EI)</h3>
                            <table style={{ width: '100%', margin: "10px 0", borderCollapse: 'collapse' }} aria-label="External inputs complexity matrix">
                                <thead>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="col">Data Elements</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="col">1-4</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="col">5-15</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="col">&gt;15</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="row">0-1</th>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI00" type="text" style={{width: '100%'}} aria-label="EI simple complexity input"/></td>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI01" type="text" style={{width: '100%'}} aria-label="EI medium complexity input"/></td>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI02" type="text" style={{width: '100%'}} aria-label="EI high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="row">2</th>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI10" type="text" style={{width: '100%'}} aria-label="EI simple complexity input"/></td>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI11" type="text" style={{width: '100%'}} aria-label="EI medium complexity input"/></td>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI12" type="text" style={{width: '100%'}} aria-label="EI high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="row">&gt;2</th>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI20" type="text" style={{width: '100%'}} aria-label="EI simple complexity input"/></td>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI21" type="text" style={{width: '100%'}} aria-label="EI medium complexity input"/></td>
                                        <td style={{padding:'5px'}}><input className='cocomo2_input' id="EI22" type="text" style={{width: '100%'}} aria-label="EI high complexity input"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    
                        <section className='leftColumnTable'>
                            <h3 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px' }}>External Outputs (EO)</h3>
                            <table style={{ borderCollapse: 'collapse', width: '100%', margin: '10px 0px' }} aria-label="External outputs complexity matrix">
                              <thead>
                                <tr>
                                  <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="col">Data Elements</th>
                                  <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="col">1-4</th>
                                  <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="col">5-19</th>
                                  <th style={{ padding:'5px', backgroundColor:'#ccc'}} scope="col">&gt;19</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <th style={{ padding:'5px', backgroundColor:'#ccc' }} scope="row">0-1</th>
                                  <td><input className='cocomo2_input' id="EO00" type="text" style={{ width: '100%' }} aria-label="EO simple complexity input"/></td>
                                  <td><input className='cocomo2_input' id="EO01" type="text" style={{ width: '100%' }} aria-label="EO medium complexity input"/></td>
                                  <td><input className='cocomo2_input' id="EO02" type="text" style={{ width: '100%' }} aria-label="EO high complexity input"/></td>
                                </tr>
                                <tr>
                                  <th style={{padding:'5px', backgroundColor:'#ccc'}} scope="row">2-3</th>
                                  <td><input className='cocomo2_input' id="EO10" type="text" style={{ width: '100%' }} aria-label="EO simple complexity input"/></td>
                                  <td><input className='cocomo2_input' id="EO11" type="text" style={{ width: '100%' }} aria-label="EO medium complexity input"/></td>
                                  <td><input className='cocomo2_input' id="EO12" type="text" style={{ width: '100%' }} aria-label="EO high complexity input"/></td>
                                </tr>
                                <tr>
                                  <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">&gt;3</th>
                                  <td><input className='cocomo2_input' id="EO20" type="text" style={{ width: '100%' }} aria-label="EO simple complexity input"/></td>
                                  <td><input className='cocomo2_input' id="EO21" type="text" style={{ width: '100%' }} aria-label="EO medium complexity input"/></td>
                                  <td><input className='cocomo2_input' id="EO22" type="text" style={{ width: '100%' }} aria-label="EO high complexity input"/></td>
                                </tr>
                              </tbody>
                            </table>
                        </section>
                          
                        <section className='leftColumnTable'>
                            <h3 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px'}}>Internal Logical Files (ILF)</h3>
                            <table border="1" aria-label="Internal logical files complexity matrix">
                                <thead>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">Record Types</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">1-19</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">20-50</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">&gt;50</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">1</th>
                                        <td><input className='cocomo2_input' id="ILF00" type="text" style={{ width: '100%' }} aria-label="ILF simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="ILF01" type="text" style={{ width: '100%' }} aria-label="ILF medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="ILF02" type="text" style={{ width: '100%' }} aria-label="ILF high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">2-5</th>
                                        <td><input className='cocomo2_input' id="ILF10" type="text" style={{ width: '100%' }} aria-label="ILF simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="ILF11" type="text" style={{ width: '100%' }} aria-label="ILF medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="ILF12" type="text" style={{ width: '100%' }} aria-label="ILF high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">&gt;5</th>
                                        <td><input className='cocomo2_input' id="ILF20" type="text" style={{ width: '100%' }} aria-label="ILF simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="ILF21" type="text" style={{ width: '100%' }} aria-label="ILF medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="ILF22" type="text" style={{ width: '100%' }} aria-label="ILF high complexity input"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className='leftColumnTable'>
                            <h3 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px'}}>External Interface Files (EIF)</h3>
                            <table border="1" aria-label="External interface files complexity matrix">
                                <thead>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">Record Types</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">1-19</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">20-50</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">&gt;50</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">1</th>
                                        <td><input className='cocomo2_input' id="EIF00" type="text" style={{ width: '100%' }} aria-label="EIF simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EIF01" type="text" style={{ width: '100%' }} aria-label="EIF medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EIF02" type="text" style={{ width: '100%' }} aria-label="EIF high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">2-5</th>
                                        <td><input className='cocomo2_input' id="EIF10" type="text" style={{ width: '100%' }} aria-label="EIF simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EIF11" type="text" style={{ width: '100%' }} aria-label="EIF medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EIF12" type="text" style={{ width: '100%' }} aria-label="EIF high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">&gt;5</th>
                                        <td><input className='cocomo2_input' id="EIF20" type="text" style={{ width: '100%' }} aria-label="EIF simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EIF21" type="text" style={{ width: '100%' }} aria-label="EIF medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EIF22" type="text" style={{ width: '100%' }} aria-label="EIF high complexity input"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>

                        <section className='leftColumnTable'>
                            <h3 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px'}}>External Inquiries (EQ)</h3>
                            <table border="1" aria-label="External inquiries complexity matrix">
                                <thead>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">File Types</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">1-4</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">5-19</th>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="col">&gt;19</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">0-1</th>
                                        <td><input className='cocomo2_input' id="EQ00" type="text" style={{ width: '100%' }} aria-label="EQ simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EQ01" type="text" style={{ width: '100%' }} aria-label="EQ medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EQ02" type="text" style={{ width: '100%' }} aria-label="EQ high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">2-3</th>
                                        <td><input className='cocomo2_input' id="EQ10" type="text" style={{ width: '100%' }} aria-label="EQ simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EQ11" type="text" style={{ width: '100%' }} aria-label="EQ medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EQ12" type="text" style={{ width: '100%' }} aria-label="EQ high complexity input"/></td>
                                    </tr>
                                    <tr>
                                        <th style={{padding:'5px', backgroundColor:'#ccc' }} scope="row">&gt;3</th>
                                        <td><input className='cocomo2_input' id="EQ20" type="text" style={{ width: '100%' }} aria-label="EQ simple complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EQ21" type="text" style={{ width: '100%' }} aria-label="EQ medium complexity input"/></td>
                                        <td><input className='cocomo2_input' id="EQ22" type="text" style={{ width: '100%' }} aria-label="EQ high complexity input"/></td>
                                    </tr>
                                </tbody>
                            </table>
                        </section>
                    </article>
                </section>
                
                <hr aria-hidden="true"/>
                <hr aria-hidden="true"/>
                
                <section className="row">
                    <article className="col last3 cocomo2_col">
                        <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px', color: 'white'}}>Scale Factors Affecting Exponent</h2>
                        <p>These factors determine the non-linear relationship between size and effort in the COCOMO II model.</p>
                        
                        <div className="form-group">
                            <label htmlFor="prec">Novelty (PREC)</label>
                            <select id="prec" aria-describedby="precHelp">
                                <option value="6.2">Complete absence of precedents, completely unpredictable project</option>
                                <option value="4.96">Almost no precedent, largely unpredictable project</option>
                                <option value="3.72">Having a number of precedents</option>
                                <option value="2.48">General introduction to the project</option>
                                <option value="1.24">Significant familiarity with the project</option>
                                <option value="0">Full familiarity with the project</option>
                            </select>
                            <small id="precHelp" className="form-text">Measures project team's experience with similar projects</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="Flex">Development flexibility (FLEX)</label>
                            <select id="Flex" aria-describedby="flexHelp">
                                <option value="5.07">Accurate, rigorous development process</option>
                                <option value="4.05">Random indulgence in progress</option>
                                <option value="3.04">Some concessions in progress</option>
                                <option value="2.03">Mostly agreed process</option>
                                <option value="1.01">Some process alignment</option>
                                <option value="0">The customer defined only common goals</option>
                            </select>
                            <small id="flexHelp" className="form-text">Measures flexibility in meeting specified requirements</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="Risk">Resolving Risks in the System Architecture (RESL)</label>
                            <select id="Risk" aria-describedby="riskHelp">
                                <option value="7">Small (20%)</option>
                                <option value="5.65">Some (40%)</option>
                                <option value="4.24">Frequent (60%)</option>
                                <option value="2.83">В in general (75%)</option>
                                <option value="1.41">Almost complete (90%)</option>
                                <option value="0">Complete (100%)</option>
                            </select>
                            <small id="riskHelp" className="form-text">Measures risk resolution in architecture and design</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="team">Team cohesion (TEAM)</label>
                            <select id="team" aria-describedby="teamHelp">
                                <option value="5.48">Highly hindered interaction</option>
                                <option value="4.38">Somewhat difficult interaction</option>
                                <option value="3.29">Some Consistency</option>
                                <option value="2.19">Increased Consistency</option>
                                <option value="1.1">High Consistency</option>
                                <option value="0">Interaction as a whole</option>
                            </select>
                            <small id="teamHelp" className="form-text">Measures team's ability to work together effectively</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="pmat">Development process maturity level (PMAT)</label>
                            <select id="pmat" aria-describedby="pmatHelp">
                                <option value="7">Level 1 СММ</option>
                                <option value="6.24">Level 1+ СММ</option>
                                <option value="4.68">Level 2 СММ</option>
                                <option value="1.12">Level 3 СММ</option>
                                <option value="1.56">Level 7 СММ</option>
                                <option value="0">Level 5 СММ</option>
                            </select>
                            <small id="pmatHelp" className="form-text">Measures organizational process maturity</small>
                        </div>
                        
                        <h3 id="p" aria-live="polite"></h3>
                    </article>
                    
                    <article className="col last3 cocomo2_col">
                        <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px', color: 'white'}}>Early Architecture Model</h2>
                        <p>Estimates effort for projects where architectural design is a primary focus.</p>
                        
                        <div className="form-group">
                            <label htmlFor="PERS">Personnel Capability (PERS)</label>
                            <select id="PERS" aria-describedby="persHelp">
                                <option value="1.62">Very low</option>
                                <option value="1.26">Short</option>
                                <option value="1">Nominal</option>
                                <option value="0.83">High</option>
                                <option value="0.63">Very High</option>
                                <option value="0.5">Ultrahigh</option>
                            </select>
                            <small id="persHelp" className="form-text">Measures team capability and experience</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="RCPX">Product Reliability and Complexity (RCPX)</label>
                            <select id="RCPX" aria-describedby="rcpxHelp">
                                <option value="0.6">Very low</option>
                                <option value="0.83">Short</option>
                                <option value="1">Nominal</option>
                                <option value="1.33">High</option>
                                <option value="1.91">Very High</option>
                                <option value="2.72">Ultrahigh</option>
                            </select>
                            <small id="rcpxHelp" className="form-text">Measures product reliability and complexity requirements</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="RUSE">Required Reusability (RUSE)</label>
                            <select id="RUSE" aria-describedby="ruseHelp">
                                <option value="0.95">Short</option>
                                <option value="1">Nominal</option>
                                <option value="1.07">High</option>
                                <option value="1.15">Very High</option>
                                <option value="1.24">Ultrahigh</option>
                            </select>
                            <small id="ruseHelp" className="form-text">Measures required software reusability</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="PDIF">Platform Difficulty (PDIF)</label>
                            <select id="PDIF" aria-describedby="pdifHelp">
                                <option value="0.87">Short</option>
                                <option value="1">Nominal</option>
                                <option value="1.29">High</option>
                                <option value="1.81">very High</option>
                                <option value="2.61">Ultrahigh</option>
                            </select>
                            <small id="pdifHelp" className="form-text">Measures platform difficulty and volatility</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="PREX">Personnel Experience (PREX)</label>
                            <select id="PREX" aria-describedby="prexHelp">
                                <option value="1.33">Very low</option>
                                <option value="1.22">Short</option>
                                <option value="1">Nominal</option>
                                <option value="0.87">High</option>
                                <option value="0.74">very High</option>
                                <option value="0.62">Ultrahigh</option>
                            </select>
                            <small id="prexHelp" className="form-text">Measures team experience with similar projects</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="FCIL">Facilities (FCIL)</label>
                            <select id="FCIL" aria-describedby="fcilHelp">
                                <option value="1.30">Very low</option>
                                <option value="1.10">Short</option>
                                <option value="1">Nominal</option>
                                <option value="0.87">High</option>
                                <option value="0.73">very High</option>
                                <option value="0.62">Ultrahigh</option>
                            </select>
                            <small id="fcilHelp" className="form-text">Measures quality of development tools and environment</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="SCED">Required Schedule (SCED)</label>
                            <select id="SCED" aria-describedby="scedHelp">
                                <option value="1.43">Very low</option>
                                <option value="1.14">Short</option>
                                <option value="1">Nominal</option>
                                <option value="1">High</option>
                                <option value="1">very High</option>
                            </select>
                            <small id="scedHelp" className="form-text">Measures schedule constraints and compression</small>
                        </div>
                        
                        <button type="submit" id="meda" role="button" className="button-81 fpBtn" ref={medaBtnRef} aria-label="Calculate early architecture model">Calculate</button>
                        <div className="results-section">
                            <h3 id="jobResultMeda" aria-live="polite"></h3>
                            <h3 id="timeResultMeda" aria-live="polite"></h3>
                        </div>
                    </article>
                    
                    <article className="col last3 cocomo2_col">
                        <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px', color: 'white'}}>Application Composition Model</h2>
                        <p>Estimates effort for projects using rapid application development and prototyping.</p>
                        
                        <div className="form-group">
                            <label htmlFor="rusePr">Reuse Percentage (%RUSE):</label>
                            <input className='cocomo2_input' id="rusePr" type="text" placeholder="0" aria-label="Reuse percentage"/>
                            <small className="form-text">Percentage of components being reused</small>
                        </div>
                        
                        <div className="form-group">
                            <label htmlFor="exp">Experience of the team/developer</label>
                            <select id="exp" aria-describedby="expHelp">
                                <option value="4">Very low</option>
                                <option value="7">Low</option>
                                <option value="13">Rated</option>
                                <option value="25">High</option>
                                <option value="50">Very high</option>
                            </select>
                            <small id="expHelp" className="form-text">Measures team experience with similar applications</small>
                        </div>
                        
                        <fieldset>
                            <legend>Screen Forms</legend>
                            <div className="form-group">
                                <label htmlFor="sS">Simple</label>
                                <input className='cocomo2_input' id="sS" type="text" placeholder="0" aria-label="Number of simple screen forms"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mS">Medium</label>
                                <input className='cocomo2_input' id="mS" type="text" placeholder="0" aria-label="Number of medium complexity screen forms"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hS">Complex</label>
                                <input className='cocomo2_input' id="hS" type="text" placeholder="0" aria-label="Number of complex screen forms"/>
                            </div>
                        </fieldset>
                        
                        <fieldset>
                            <legend>Reports</legend>
                            <div className="form-group">
                                <label htmlFor="sD">Simple</label>
                                <input className='cocomo2_input' id="sD" type="text" placeholder="0" aria-label="Number of simple reports"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="mD">Medium</label>
                                <input className='cocomo2_input' id="mD" type="text" placeholder="0" aria-label="Number of medium complexity reports"/>
                            </div>
                            <div className="form-group">
                                <label htmlFor="hD">Complex</label>
                                <input className='cocomo2_input' id="hD" type="text" placeholder="0" aria-label="Number of complex reports"/>
                            </div>
                        </fieldset>
                        
                        <div className="form-group">
                            <label htmlFor="mod">Modules in 3rd generation languages</label>
                            <input className='cocomo2_input' id="mod" type="text" placeholder="0" aria-label="Number of modules in 3GL"/>
                            <small className="form-text">Number of modules written in 3GL like C, Java, etc.</small>
                        </div>
                        
                        <div className="results-section">
                            <h3 id="jobResultMdp" aria-live="polite"></h3>
                            <h3 id="timeResultMdp" aria-live="polite"></h3>
                        </div>
                    </article>
                </section>
            </main>
        </div>       
    )
}

export default Cocomo2