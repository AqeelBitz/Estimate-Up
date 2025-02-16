import React, { useEffect, useRef } from 'react'
import "./cocomo2.css"

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
        <div>
        <h1 className='t_name'>COCOMO II</h1>
        <div className="container cocomo_container">
        <div className="row">
        <div className="col functionalPoint cocomo2_col">
            <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px', color:'white'}}>Function point method</h2>
            <div className='flex-item' >
                <label htmlFor="fp1">Data transmission</label>
                <input className='cocomo2_input'  id="fp1" type="number" min="0" max="5"  /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp2">Distributed data processing</label>
                <input className='cocomo2_input'   id="fp2" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp3">Performance</label>
                <input className='cocomo2_input'   id="fp3" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp4">Operating restrictions</label>
                <input className='cocomo2_input'    id="fp4" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp5">Transaction frequency</label>
                <input className='cocomo2_input'   id="fp5" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp6">Online data entry</label>
                <input className='cocomo2_input'    id="fp6" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp7">End User Efficiency</label>
                <input className='cocomo2_input'   id="fp7" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp8">Live update</label>
                <input className='cocomo2_input'   id="fp8" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp9">Complexity of processing</label>
                <input className='cocomo2_input'   id="fp9" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp10">Reusability</label>
                <input className='cocomo2_input'   id="fp10" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp11">Ease of installation</label>
                <input className='cocomo2_input'   id="fp11" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp12">Ease of operation</label>
                <input className='cocomo2_input'   id="fp12" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp13">No. of possible installations on various platforms</label>
              
                <input className='cocomo2_input'   id="fp13" type="number" min="0" max="5" /><br />
            </div>
            <div className='flex-item'>
                <label htmlFor="fp14">Ease of change</label>
                <input className='cocomo2_input'   id="fp14" type="number" min="0" max="5" /><br />
            </div>
            
            <button type="submit" role="button" className="fpBtn" ref={fpBtnRef}>Calculate</button>
            <div style={{ padding:'5px', marginTop:'5px'}}>
            <h4 id="fi"></h4>
            <h4 id="ufp" ></h4>
            <h4 id="fp" ></h4>
            </div>
        </div>
        
    <div className="col leftColoumn cocomo2_col">
        
        <div className='leftColumnTable'>
        <h4 className='cocomo2_heading' style={{backgroundColor:'green', borderRadius:'7px', color:'white'}}>External inputs EI</h4>
        <table style={{ width: '100%', margin: "10px 0", borderCollapse: 'collapse' }}>
            <tr>
                <th style={{padding:'5px', backgroundColor:'#ccc'}}> </th>
                <th style={{padding:'5px', backgroundColor:'#ccc'}}> 1-4 </th>
                <th style={{padding:'5px', backgroundColor:'#ccc'}}> 5-15 </th>
                <th style={{padding:'5px', backgroundColor:'#ccc'}}> &gt;15 </th>
            </tr>
            <tr>
                <td style={{padding:'5px', backgroundColor:'#ccc'}}> 0-1</td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI00" type="text" style={{width: '100%'}}/></td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI01" type="text" style={{width: '100%'}}/></td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI02" type="text" style={{width: '100%'}}/></td>
            </tr>
            <tr>
                <td style={{padding:'5px', backgroundColor:'#ccc'}}> 2 </td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI10" type="text" style={{width: '100%'}}/></td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI11" type="text" style={{width: '100%'}}/></td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI12" type="text" style={{width: '100%'}}/></td>
            </tr>
            <tr>
                <td style={{padding:'5px', backgroundColor:'#ccc'}}> &gt;2 </td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI20" type="text" style={{width: '100%'}}/></td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI21" type="text" style={{width: '100%'}}/></td>
                <td style={{padding:'5px'}}><input className='cocomo2_input'   id="EI22" type="text" style={{width: '100%'}}/></td>
            </tr>
        </table>
        </div>
    

        <div className='leftColumnTable'>
        <h4 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px' }}>External Terminals EO</h4>
        <table style={{ borderCollapse: 'collapse', width: '100%', margin: '10px 0px' }}>
          <thead>
            <tr>
              <th style={{padding:'5px', backgroundColor:'#ccc'}}></th>
              <th style={{padding:'5px', backgroundColor:'#ccc'}}>1-4</th>
              <th style={{padding:'5px', backgroundColor:'#ccc'}}>5-19</th>
              <th style={{ padding:'5px', backgroundColor:'#ccc'}}>&gt;19</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ padding:'5px', backgroundColor:'#ccc' }}>0-1</td>
              <td><input className='cocomo2_input'   id="EO00" type="text" style={{ width: '100%' }} /></td>
              <td><input className='cocomo2_input'   id="EO01" type="text" style={{ width: '100%' }} /></td>
              <td><input className='cocomo2_input'   id="EO02" type="text" style={{ width: '100%' }} /></td>
            </tr>
            <tr>
              <td style={{padding:'5px', backgroundColor:'#ccc'}}>2-3</td>
              <td><input className='cocomo2_input'   id="EO10" type="text" style={{ width: '100%' }} /></td>
              <td><input className='cocomo2_input'   id="EO11" type="text" style={{ width: '100%' }} /></td>
              <td><input className='cocomo2_input'   id="EO12" type="text" style={{ width: '100%' }} /></td>
            </tr>
            <tr>
              <td style={{padding:'5px', backgroundColor:'#ccc' }}>&gt;3</td>
              <td><input className='cocomo2_input'   id="EO20" type="text" style={{ width: '100%' }} /></td>
              <td><input className='cocomo2_input'   id="EO21" type="text" style={{ width: '100%' }} /></td>
              <td><input className='cocomo2_input'   id="EO22" type="text" style={{ width: '100%' }} /></td>
            </tr>
          </tbody>
        </table>
      </div>
      

            <div className='leftColumnTable'>
                <h4 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px'}}>ILF internal logical files</h4>
                <table border="1">
                    <tr>
                        <th  style={{padding:'5px', backgroundColor:'#ccc' }}></th>
                        <th  style={{padding:'5px', backgroundColor:'#ccc' }}> 1-19 </th>
                        <th  style={{padding:'5px', backgroundColor:'#ccc' }}> 20-50 </th>
                        <th  style={{padding:'5px', backgroundColor:'#ccc' }}> &gt;50 </th>
                    </tr>
                    <tr>
                        <td  style={{padding:'5px', backgroundColor:'#ccc' }}> 1</td>
                        <td><input className='cocomo2_input'   id="ILF00" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="ILF01" type="text" style={{ width: '100%' }}  /></td>
                        <td><input className='cocomo2_input'   id="ILF02" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                    <tr>
                        <td  style={{padding:'5px', backgroundColor:'#ccc' }}> 2-5 </td>
                        <td><input className='cocomo2_input'   id="ILF10" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="ILF11" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="ILF12" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                    <tr>
                        <td  style={{padding:'5px', backgroundColor:'#ccc' }}> &gt;5 </td>
                        <td><input className='cocomo2_input'   id="ILF20" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="ILF21" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="ILF22" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                </table>
            </div>

            <div className='leftColumnTable'>
                <h4 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px'}}>External Interface EIF Files</h4>
                <table border="1">
                    <tr>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}></th>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}> 1-19 </th>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}> 20-50 </th>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}> &gt;50 </th>
                    </tr>
                    <tr>
                        <td style={{padding:'5px', backgroundColor:'#ccc' }}> 1</td>
                        <td><input className='cocomo2_input'   id="EIF00" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EIF01" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EIF02" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                    <tr>
                        <td style={{padding:'5px', backgroundColor:'#ccc' }}> 2-5 </td>
                        <td><input className='cocomo2_input'   id="EIF10" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EIF11" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EIF12" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                    <tr>
                        <td style={{padding:'5px', backgroundColor:'#ccc' }}> &gt;5 </td>
                        <td><input className='cocomo2_input'   id="EIF20" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EIF21" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EIF22" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                </table>
            </div>

            <div className='leftColumnTable'>
                <h4 className='cocomo2_heading' style={{ backgroundColor: 'green', borderRadius: '7px', color: 'white', padding: '10px'}}>External EQ requests</h4>
                <table border="1">
                    <tr>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}></th>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}> 1-4 </th>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}> 5-19 </th>
                        <th style={{padding:'5px', backgroundColor:'#ccc' }}> &gt;19 </th>
                    </tr>
                    <tr>
                        <td style={{padding:'5px', backgroundColor:'#ccc' }}> 0-1</td>
                        <td><input className='cocomo2_input'   id="EQ00" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EQ01" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EQ02" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                    <tr>
                        <td style={{padding:'5px', backgroundColor:'#ccc' }}> 2-3 </td>
                        <td><input className='cocomo2_input'   id="EQ10" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EQ11" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EQ12" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                    <tr>
                        <td style={{padding:'5px', backgroundColor:'#ccc' }}> &gt;3 </td>
                        <td><input className='cocomo2_input'   id="EQ20" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EQ21" type="text" style={{ width: '100%' }} /></td>
                        <td><input className='cocomo2_input'   id="EQ22" type="text" style={{ width: '100%' }} /></td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
            <hr/>
            <hr/>
            <div className="row">
                <div className="col last3 cocomo2_col">
                    <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px'}}>Factors affecting the exponent in the model</h2>
                    <label for="prec">Novelty (PREC)</label>
                    <select id="prec">
                        <option value="6.2">Complete absence of precedents, completely unpredictable project</option>
                        <option value="4.96">Almost no precedent, largely unpredictable project</option>
                        <option value="3.72">Having a number of precedents</option>
                        <option value="2.48">General introduction to the project</option>
                        <option value="1.24">Significant familiarity with the project</option>
                        <option value="0">Full familiarity with the project</option>
                    </select><br/>
                    <label for="Flex">Development flexibility (FLEX)</label>
                    <select id="Flex">
                        <option value="5.07">Accurate, rigorous development process</option>
                        <option value="4.05">Random indulgence in progress</option>
                        <option value="3.04">Some concessions in progress</option>
                        <option value="2.03">Mostly agreed process</option>
                        <option value="1.01">Some process alignment</option>
                        <option value="0">The customer defined only common goals</option>
                    </select><br/>
                    <label for="Risk">Resolving Risks in the System Architecture (RESL)</label>
                    <select id="Risk">
                        <option value="7">Small (20%)</option>
                        <option value="5.65">Some (40%)</option>
                        <option value="4.24">Frequent (60%)</option>
                        <option value="2.83">В in general (75%)</option>
                        <option value="1.41">Almost complete (90%)</option>
                        <option value="0">Complete (100%)</option>
                    </select><br/>
                    <label for="team">Team cohesion (TEAM)</label>
                    <select id="team">
                        <option value="5.48">Highly hindered interaction</option>
                        <option value="4.38">Somewhat difficult interaction</option>
                        <option value="3.29">Some Consistency</option>
                        <option value="2.19">Increased Consistency</option>
                        <option value="1.1">High Consistency</option>
                        <option value="0">Interaction as a whole</option>
                    </select><br/>
                    <label for="pmat">Development process maturity level (PMAT)</label>
                    <select id="pmat">
                        <option value="7">Level 1 СММ</option>
                        <option value="6.24">Level 1+ СММ</option>
                        <option value="4.68">Level 2 СММ</option>
                        <option value="1.12">Level 3 СММ</option>
                        <option value="1.56">Level 7 СММ</option>
                        <option value="0">Level 5 СММ</option>
                    </select><br/>
                    <h3 id="p"></h3>
                </div>
                <div className="col last3 cocomo2_col">
                    <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px'}}>Early architecture development model</h2>
                    <label for="PERS" style={{marginBottom:'3px', marginRight:'8px'}}>PERS</label>
                    <select id="PERS">
                        <option value="1.62">Very low</option>
                        <option value="1.26">Short</option>
                        <option value="1">Nominal</option>
                        <option value="0.83">High</option>
                        <option value="0.63">Very High</option>
                        <option value="0.5">Ultrahigh</option>
                    </select><br/>
                    <label for="RCPX" style={{marginBottom:'3px', marginRight:'8px'}}>RCPX</label>
                    <select id="RCPX">
                        <option value="0.6">Very low</option>
                        <option value="0.83">Short</option>
                        <option value="1">Nominal</option>
                        <option value="1.33">High</option>
                        <option value="1.91">Very High</option>
                        <option value="2.72">Ultrahigh</option>
                    </select><br/>
                    <label for="RUSE" style={{marginBottom:'3px', marginRight:'8px'}}>RUSE</label>
                    <select id="RUSE">
                        <option value="0.95">Short</option>
                        <option value="1">Nominal</option>
                        <option value="1.07">High</option>
                        <option value="1.15">Very High</option>
                        <option value="1.24">Ultrahigh</option>
                    </select><br/>
                    <label for="PDIF" style={{marginBottom:'3px', marginRight:'8px'}}>PDIF</label>
                    <select id="PDIF">
                        <option value="0.87">Short</option>
                        <option value="1">Nominal</option>
                        <option value="1.29">High</option>
                        <option value="1.81">very High</option>
                        <option value="2.61">Ultrahigh</option>
                    </select><br/>
                    <label for="PREX" style={{marginBottom:'3px', marginRight:'8px'}}>PREX</label>
                    <select id="PREX">
                        <option value="1.33">Very low</option>
                        <option value="1.22">Short</option>
                        <option value="1">Nominal</option>
                        <option value="0.87">High</option>
                        <option value="0.74">very High</option>
                        <option value="0.62">Ultrahigh</option>
                    </select><br/>
                    <label for="FCIL" style={{marginBottom:'3px', marginRight:'10px'}}>FCIL</label>
                    <select id="FCIL">
                        <option value="1.30">Very low</option>
                        <option value="1.10">Short</option>
                        <option value="1">Nominal</option>
                        <option value="0.87">High</option>
                        <option value="0.73">very High</option>
                        <option value="0.62">Ultrahigh</option>
                    </select><br/>
                    <label for="SCED" style={{marginBottom:'3px', marginRight:'4px'}}>SCED</label>
                    <select id="SCED">
                        <option value="1.43">Very low</option>
                        <option value="1.14">Short</option>
                        <option value="1">Nominal</option>
                        <option value="1">High</option>
                        <option value="1">very High</option>
                    </select><br/>
                    <button type="submit" id="meda" role="button" className="button-81 fpBtn" ref={medaBtnRef}>Calculate</button>
                    <h3 id="jobResultMeda"></h3>
                    <h3 id="timeResultMeda"></h3>
                </div>
                <div className="col last3 cocomo2_col">
                    <h2 className='cocomo2_heading' style={{backgroundColor:'green',borderRadius:'7px'}}>Application composition model</h2>
                    <label for="rusePr">%RUSE:</label>
                    <input className='cocomo2_input'   id="rusePr" type="text" placeholder="0"/><br/>
                    <div>
                    <br/>
                    <label for="exp">Experience of the team/developer</label>
                    <select id="exp">
                    <option value="4">Very low</option>
                    <option value="7">Low</option>
                    <option value="13">Rated</option>
                    <option value="25">High</option>
                    <option value="50">Very high</option>
                    </select>
                    </div>
                    <br/>
                    <h5>Screen Forms</h5>
                    <label for="sS" style={{marginRight:'17px'}}>Simple</label>
                    <input className='cocomo2_input'   id="sS" type="text" placeholder="0"/><br/>
                    <label for="mS" style={{marginRight:'7px'}}>Medium</label>
                    <input className='cocomo2_input'   id="mS" type="text" placeholder="0"/><br/>
                    <label for="hS">Complex</label>
                    <input className='cocomo2_input'   id="hS" type="text" placeholder="0"/><br/><br />
                    <h5>Reports</h5>
                    <label for="sD" style={{marginRight:'17px'}}>Simple</label>
                    <input className='cocomo2_input'   id="sD" type="text" placeholder="0"/><br/>
                    <label for="mD" style={{marginRight:'7px'}}>Medium</label>
                    <input className='cocomo2_input'   id="mD" type="text" placeholder="0"/><br/>
                    <label for="hD" >Complex</label>
                    <input className='cocomo2_input'   id="hD" type="text" placeholder="0"/><br/>
                    <label for="mod">Modules in 3rd generation languages</label>
                    <input className='cocomo2_input'   id="mod" type="text" placeholder="0"/><br/>
                    <h3 id="jobResultMdp"></h3>
                    <h3 id="timeResultMdp"></h3>
                </div>
            </div>
        </div>       
    </div>
    )
}

export default Cocomo2
