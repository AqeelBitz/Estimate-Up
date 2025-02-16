import React, { useState, useEffect, useRef } from 'react'
import Header from './Header'
import emailjs from '@emailjs/browser';
// import './ques.css';
import './Delphi.css'

const Round1 = () => {
    const form = useRef();
    const headingRef = useRef(null);
    const [taskList, setTaskList] = useState([]);
    const [round1, setRound1] = useState([]);
    const [e_name, setE_name] = useState([]);
    const [total_effort, setTotal_effort] = useState([]);
    const [total_avg, setTotal_avg] = useState(0);

    useEffect(() => {
        let arr = localStorage.getItem("modules");

        const storedEstimationData = JSON.parse(localStorage.getItem("estimationData"));

        const Estimator_name = storedEstimationData.map(data => data.estimator_name);
        console.log("Estimator Name: ", Estimator_name);
        setE_name(Estimator_name);

        const round1_estimation = storedEstimationData.map(data => data.r1_estimation);
        console.log("round1 estimation: ", round1_estimation);
        setRound1(round1_estimation);

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

        const sum = mytotal.reduce((acc, curr) => acc + curr, 0);
        const myavg = sum / count;
        setTotal_avg(myavg);
        console.log("Total Average: ", total_avg);

        let r1 = localStorage.getItem("round1")

        if (arr) {
            let obj = JSON.parse(arr)
            setTaskList(obj)
        }
        const heading = headingRef.current;
        const headingText = 'Round 1 Estimation Sheet';
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

    }, [])
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
        .sendForm('service_pq53424', 'template_p948of8', form.current, 'nubP-LiQC58-CncTW')
        .then(
          (result) => {
            console.log(result.text);
            window.alert('Email sent successfully!');
          },
          (error) => {
            console.log(error.text);
            window.alert('Failed to send email. Please try again later.');
          }
        );
        e.target.reset();
      };
    

    return (
        <div className="moduleContainer">
            <Header step={2} />
            <div style={{ marginLeft: '15px' }}>
            <h3 className="dh3" id="round_heading" ref={headingRef}></h3>
                <div className='row d-flex justify-content-between'>
                    <div className='col-8 d-flex '>
                     <h5 style={{color: '#abfe11', backgroundColor:'darkred', padding:'0px 6px 0px 6px'}}>Estimators: </h5>
                      {e_name.map((expertName, index) => (
                        <span style={{ marginRight: '10px' }}>{expertName}  </span>
                    ))}</div>
                    <div className='col-4' >Date: </div>
                </div>
            </div>
            <table class="table table-bordered">
                <thead style={{ backgroundColor: 'rgb(67 185 143 / 93%)', color: '#fff', fontSize: '1.1rem' }}>
                    <tr >
                        <th style={{ padding: '0.25rem' }} scope="col">Modules</th>
                        {e_name.map((expertName, index) => (
                            <th style={{ padding: '0.25rem' }} scope="col" key={index}>
                                {expertName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((obj, i) => (
                        <tr className="table-row" key={i}>
                            <th style={{ padding: '0.25rem' }} scope="row">{obj.Name}</th>
                            {e_name.map((expertName, j) => (
                                <td style={{ padding: '0.25rem' }} key={j}>{Number(round1[j][i])}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <table class="table table-bordered">
                <thead style={{ backgroundColor: 'rgb(67 185 143 / 93%)', color: '#fff', fontSize: '1.1rem' }}>
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
                            <td scope="col" style={{ padding: '0.25rem' }} key={index}>{total_effort[index]}</td>
                            <td scope="col" style={{ padding: '0.25rem' }} key={index}>{Math.max(...round1[index])}</td>
                            <td scope="col" style={{ padding: '0.25rem' }} key={index}>{Math.min(...round1[index])}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table class="table table-bordered">
                <thead style={{ backgroundColor: 'rgb(67 185 143 / 93%)', color: '#fff', fontSize: '1.1rem' }}>
                    <th style={{ padding: '0.25rem' }}>Average Effort</th>
                    <th style={{ padding: '0.25rem' }}>Confidence Interval 95%</th>
                    <th style={{ padding: '0.25rem' }}>Standard Error</th>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '0.25rem' }} >{total_avg}</td>
                        <td style={{ padding: '0.25rem' }}>-</td>
                        <td style={{ padding: '0.25rem' }}>-</td>
                    </tr>
                </tbody>
            </table>
            <h5 className="d-flex justify-content-center mt-4 dh5" style={{ color: 'rgb(7 122 81)' }}>
                Send this questionnaire to estimators for round 2 estimation
            </h5>
            <form action="" ref={form} onSubmit={sendEmail}>
                <div className="input-group my-3 d-flex justify-content-center">
                    <input name="subject" type="text" value={'estimateUp'} hidden />
                    <input name="user_name" value={'Muhammad Aqeel'} hidden />
                    <input name="message" type="text" value={'https://estimate-up.onrender.com/input_r2'} hidden />

                    <input
                        name="user_email"
                        type="email"
                        className="form-control col-md-4"
                        placeholder="Enter your email"
                        style={{ borderRadius: '15px', color: '#246EB9' }}
                    />
                    <div>
                        <button
                            className="email-btn"
                            type="submit"
                        >
                            Send Email
                        </button>
                    </div>
                </div>
            </form>

        </div>
    )
}

export default Round1