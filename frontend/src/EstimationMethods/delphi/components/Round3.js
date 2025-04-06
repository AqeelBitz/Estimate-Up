import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
// import './Header.css'
import './Delphi.css'

const Round3 = () => {
    const [taskList, setTaskList] = useState([])
    const headingRef = useRef(null);
    const [round1, setRound1] = useState([])
    const [round2, setRound2] = useState([])
    const [round3, setRound3] = useState([])
    const [e_name, setE_name] = useState([])
    const [total_effort, setTotal_effort] = useState([]);
    const [total_effort2, setTotal_effort2] = useState([]);
    const [total_effort3, setTotal_effort3] = useState([]);
    const [total_avg1, setTotal_avg] = useState(0);
    const [total_avg2, setTotal_avg2] = useState(0);
    const [total_avg3, setTotal_avg3] = useState(0);

    useEffect(() => {
        let arr = localStorage.getItem("modules")
        let storedEstimationData = JSON.parse(localStorage.getItem("estimationData"));
        let Estimator_name = []
        for (let i = 0; i < storedEstimationData.length; i++) {
            Estimator_name[i] = storedEstimationData[i].estimator_name
        }
        setE_name(Estimator_name)
        let round1_estimation = []
        let est = []
        for (let i = 0; i < storedEstimationData.length; i++) {
            est = storedEstimationData[i].r1_estimation;
            round1_estimation.push(est)

        }
        setRound1(round1_estimation)

        let round2_estimation = []
        let est2 = []
        for (let i = 0; i < storedEstimationData.length; i++) {
            est2 = storedEstimationData[i].r2_estimation;
            round2_estimation.push(est2)

        }
        setRound2(round2_estimation)

        let round3_estimation = []
        let est3 = []
        for (let i = 0; i < storedEstimationData.length; i++) {
            est3 = storedEstimationData[i].r3_estimation;
            round3_estimation.push(est3)
        }
        setRound3(round3_estimation)

        const mytotal = round1_estimation.map(est => {
            const total = est.reduce((acc, curr) => acc + Number(curr), 0);
            return total;
        });

        setTotal_effort(mytotal);
        console.log("Total Effort: ", total_effort);

        const count = Estimator_name.reduce((acc, curr) => {
            if (curr) {
                acc = acc + 1;
            }
            return acc;
        }, 0);
        const mytotal2 = round2_estimation.map(est => {
            const total2 = est.reduce((acc, curr) => acc + Number(curr), 0);
            return total2;
        });
        setTotal_effort2(mytotal2);
        console.log("Total Effort2: ", total_effort2);

        const mytotal3 = round3_estimation.map(est => {
            const total3 = est.reduce((acc, curr) => acc + Number(curr), 0);
            return total3;
        });
        setTotal_effort3(mytotal3);
        console.log("Total Effort3: ", total_effort3);



        const sum1 = mytotal.reduce((acc, curr) => acc + curr, 0);
        const myavg1 = sum1 / count;
        setTotal_avg(myavg1);
        console.log("Total Average1: ", total_avg1);

        const sum2 = mytotal2.reduce((acc, curr) => acc + curr, 0);
        const myavg2 = sum2 / count;
        setTotal_avg2(myavg2);
        console.log("Total Average2: ", total_avg2);

        const sum3 = mytotal3.reduce((acc, curr) => acc + curr, 0);
        const myavg3 = sum3 / count;
        setTotal_avg3(myavg3);
        console.log("Total Average3: ", total_avg3);

        if (arr) {
            let obj = JSON.parse(arr)
            // console.log(arr)
            setTaskList(obj)
        }
        const heading = headingRef.current;
        const headingText = 'Round 3 Estimation Sheet';
        let index = 0;
        let typingInterval;
    
        const startTypingAnimation = () => {
          heading.innerHTML = '';
          clearInterval(typingInterval);
    
          typingInterval = setInterval(() => {
            if (index < headingText.length) {
              heading.innerHTML += headingText.charAt(index);
              index++;
            } else {
              clearInterval(typingInterval);
            }
          }, 40);
        };
    
        startTypingAnimation();
    
        return () => {
          clearInterval(typingInterval);
        };
    }, [total_avg1, total_avg2, total_avg3, total_effort, total_effort2, total_effort3])

    function calculateConfidenceInterval(data, confidenceLevel) {
        const mean = data.reduce((sum, value) => sum + value, 0) / data.length;
        const stdError = standardError(data);
        const z = getZScore(confidenceLevel);
        const lowerBound = mean - z * stdError;
        const upperBound = mean + z * stdError;
        return [lowerBound, upperBound];
    }

    function standardError(data) {
        const n = data.length;
        const stdDev = standardDeviation(data);
        return stdDev / Math.sqrt(n);
    }

    function standardDeviation(data) {
        const n = data.length;
        const mean = data.reduce((sum, value) => sum + value, 0) / n;
        const variance = data.reduce((sum, value) => sum + (value - mean) ** 2, 0) / (n - 1);
        return Math.sqrt(variance);
    }

    function getZScore(confidenceLevel) {
        const standardNormalDistribution = {
            '90%': 1.645,
            '95%': 1.96,
            '99%': 2.576,
        };
        return standardNormalDistribution[confidenceLevel];
    }

    //   const data1 = [10, 12, 15, 18, 20];
    const data = e_name.map((experts, index) => {
        return total_effort[index] + total_effort2[index] + total_effort3[index]
    })
    console.log(" data: ", data)
    const confidenceLevel = '95%';
    const [lowerBound, upperBound] = calculateConfidenceInterval(data, confidenceLevel);
    console.log(`Confidence Interval (${confidenceLevel}): [${lowerBound}, ${upperBound}]`);
    let n = data.length;
    let mean = total_avg1 + total_avg2 + total_avg3;
    const standardDeviation1 = Math.sqrt(data.reduce((sum, value) => sum + Math.pow(value - mean, 2), 0) / (n - 1));
    const standardError1 = standardDeviation1 / Math.sqrt(n);
    console.log("SE: ", standardError1.toFixed(2))
    localStorage.setItem("Effort",mean.toFixed(2))
    localStorage.setItem("lowerBound",lowerBound.toFixed(2))
    localStorage.setItem("upperBound",upperBound.toFixed(2))
    localStorage.setItem("SE",standardError1.toFixed(2));
    return (
        <div className="moduleContainer">
            <Header step={4} />
            <div style={{ marginLeft: '15px' }}>
            <h3 className="dh3" id="round_heading" ref={headingRef}></h3>
                <div className='row d-flex justify-content-between'>
                    <div className='col-8 d-flex '>
                    <h5 style={{color: '#abfe11', backgroundColor:'darkred', padding:'0px 6px 0px 6px'}}>Estimators: </h5>
                       {e_name.map((expertName, index) => (
                        <span style={{ marginRight: '10px' }}>{expertName}  </span>
                    ))}</div>
                    <div className='col-4' >Unit: Days </div>
                </div>
            </div>
            <table className="table table-bordered">

                <thead  style={{backgroundColor:'rgb(67 185 143 / 93%)', color:'#fff', fontSize:'1.1rem'}}>
                    <tr>
                        <th style={{ padding: '0.25rem' }}  scope="col">Modules</th>
                        {e_name.map((expertName, index) => (
                            <th  style={{ padding: '0.25rem' }} scope="col" key={index}>
                                {expertName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>

                    {taskList.map((obj, i) => (
                        <tr key={i}>
                            <th style={{ padding: '0.25rem' }}  scope="row">{obj.Name}</th>
                            {e_name.map((expertName, j) => (
                                <td style={{ padding: '0.25rem' }}  key={j}>{round1[j][i] + ", " + round2[j][i] + ", " + round3[j][i]}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <table class="table table-bordered">
                <thead  style={{backgroundColor:'rgb(67 185 143 / 93%)', color:'#fff', fontSize:'1.1rem'}}>
                    <th style={{ padding: '0.25rem' }}>Estimators</th>
                    <th style={{ padding: '0.25rem' }}>Total Efforts</th>
                    <th style={{ padding: '0.25rem' }}>Highest Effort</th>
                    <th style={{ padding: '0.25rem' }}>lowest Effort</th>
                </thead>
                <tbody>
                {e_name.map((expertName, index) => (
                  <tr className="table-row" key={index}>
                    <th style={{ padding: '0.25rem' }} scope="row">
                      {expertName}
                    </th>
                    <td style={{ padding: '0.25rem' }}>{total_effort[index] + total_effort2[index] + total_effort3[index]}</td>
                    <td style={{ padding: '0.25rem' }}>
                      {Math.max(...round1[index], ...round2[index], ...round3[index])}
                    </td>
                    <td style={{ padding: '0.25rem' }}>
                      {Math.min(...round1[index], ...round2[index], ...round3[index])}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <table class="table table-bordered">
                <thead  style={{backgroundColor:'rgb(67 185 143 / 93%)', color:'#fff', fontSize:'1.1rem'}}>
                    <th style={{ padding: '0.25rem' }}>Average Effort</th>
                    <th style={{ padding: '0.25rem' }}>Confidence Interval 95%</th>
                    <th style={{ padding: '0.25rem' }}>Standard Error</th>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '0.25rem' }} >{total_avg1 + total_avg2 + total_avg3}</td>
                        <td style={{ padding: '0.25rem' }} >Confidence Interval ({confidenceLevel}): [{lowerBound.toFixed(2)}, {upperBound.toFixed(2)}]</td>
                        <td style={{ padding: '0.25rem' }}>Standard Error: {standardError1.toFixed(2)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Round3