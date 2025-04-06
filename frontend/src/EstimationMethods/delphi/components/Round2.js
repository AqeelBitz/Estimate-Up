import React, { useState, useEffect, useRef } from 'react';
import Header from './Header';
import emailjs from '@emailjs/browser';
import './Delphi.css';

const Round2 = () => {
    const [taskList, setTaskList] = useState([]);
    const headingRef = useRef(null);
    const [round1, setRound1] = useState([]);
    const [round2, setRound2] = useState([]);
    const [e_name, setE_name] = useState([]);
    const [total_effort, setTotal_effort] = useState([]);
    const [total_effort2, setTotal_effort2] = useState([]);
    const [total_avg1, setTotal_avg] = useState(0);
    const [total_avg2, setTotal_avg2] = useState(0);
    const form = useRef();

    useEffect(() => {
        const fetchData = () => {
            const arr = localStorage.getItem("modules");
            const storedEstimationData = JSON.parse(localStorage.getItem("estimationData"));

            const Estimator_name = [];
            for (let i = 0; i < storedEstimationData.length; i++) {
                Estimator_name[i] = storedEstimationData[i].estimator_name;
            }
            setE_name(Estimator_name);

            const round1_estimation = [];
            let est = [];
            for (let i = 0; i < storedEstimationData.length; i++) {
                est = storedEstimationData[i].r1_estimation;
                round1_estimation.push(est);
            }
            setRound1(round1_estimation);
            const mytotal = round1_estimation.map(est => {
                return est.reduce((acc, curr) => acc + Number(curr), 0);
            });
            setTotal_effort(mytotal);

            const count = Estimator_name.reduce((acc, curr) => {
                if (curr) {
                    return acc + 1;
                }
                return acc;
            }, 0);

            const round2_estimation = [];
            let est2 = [];
            for (let i = 0; i < storedEstimationData.length; i++) {
                est2 = storedEstimationData[i].r2_estimation;
                round2_estimation.push(est2);
            }
            setRound2(round2_estimation);
            const mytotal2 = round2_estimation.map(est => {
                return est.reduce((acc, curr) => acc + Number(curr), 0);
            });
            setTotal_effort2(mytotal2);

            const sum1 = mytotal.reduce((acc, curr) => acc + curr, 0);
            const myavg1 = sum1 / count;
            setTotal_avg(myavg1);

            const sum2 = mytotal2.reduce((acc, curr) => acc + curr, 0);
            const myavg2 = sum2 / count;
            setTotal_avg2(myavg2);

            if (arr) {
                const obj = JSON.parse(arr);
                setTaskList(obj);
            }
        };

        fetchData();

        const heading = headingRef.current;
        const headingText = 'Round 2 Estimation Sheet';
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
    }, [e_name, round1, round2, total_avg1, total_avg2, total_effort, total_effort2]);

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
            <Header step={3} />
            <div style={{ marginLeft: '15px' }}>
                <h3 className="dh3" id="round_heading" ref={headingRef}></h3>
                <div className='row d-flex justify-content-between'>
                    <div className='col-8 d-flex'>
                        <h5 style={{ color: '#abfe11', backgroundColor: 'darkred', padding: '0px 6px 0px 6px' }}>
                            Estimators:
                        </h5>
                        {e_name.map((expertName, index) => (
                            <span key={`name-${index}`} style={{ marginRight: '10px' }}>
                                {expertName}
                            </span>
                        ))}
                    </div>
                    <div className='col-4'>Unit: Days</div>
                </div>
            </div>
            <table className="table table-bordered">
                <thead style={{ backgroundColor: 'rgb(67 185 143 / 93%)', color: '#fff', fontSize: '1.1rem' }}>
                    <tr>
                        <th style={{ padding: '0.25rem' }} scope="col">Modules</th>
                        {e_name.map((expertName, index) => (
                            <th style={{ padding: '0.25rem' }} scope="col" key={`header-${index}`}>
                                {expertName}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {taskList.map((obj, i) => (
                        <tr className="table-row" key={`row-${i}`}>
                            <th style={{ padding: '0.25rem' }} scope="row">{obj.Name}</th>
                            {e_name.map((expertName, j) => (
                                <td style={{ padding: '0.25rem' }} key={`cell-${i}-${j}`}>
                                    {round1[j]?.[i] + ", " + round2[j]?.[i]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="table table-bordered">
                <thead style={{ backgroundColor: 'rgb(67 185 143 / 93%)', color: '#fff', fontSize: '1.1rem' }}>
                    <tr>
                        <th style={{ padding: '0.25rem' }}>Estimators</th>
                        <th style={{ padding: '0.25rem' }}>Total Efforts</th>
                        <th style={{ padding: '0.25rem' }}>Highest Effort</th>
                        <th style={{ padding: '0.25rem' }}>lowest Effort</th>
                    </tr>
                </thead>
                <tbody>
                    {e_name.map((expertName, index) => (
                        <tr className="table-row" key={`estimator-${index}`}>
                            <th style={{ padding: '0.25rem' }} scope="row">
                                {expertName}
                            </th>
                            <td style={{ padding: '0.25rem' }}>
                                {total_effort[index] + total_effort2[index]}
                            </td>
                            <td style={{ padding: '0.25rem' }}>
                                {Math.max(...round1[index], ...round2[index])}
                            </td>
                            <td style={{ padding: '0.25rem' }}>
                                {Math.min(...round1[index], ...round2[index])}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <table className="table table-bordered">
                <thead style={{ backgroundColor: 'rgb(67 185 143 / 93%)', color: '#fff', fontSize: '1.1rem' }}>
                    <tr>
                        <th style={{ padding: '0.25rem' }}>Average Effort</th>
                        <th style={{ padding: '0.25rem' }}>Confidence Interval 95%</th>
                        <th style={{ padding: '0.25rem' }}>Standard Error</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td style={{ padding: '0.25rem' }}>{total_avg1 + total_avg2}</td>
                        <td style={{ padding: '0.25rem' }}>-</td>
                        <td style={{ padding: '0.25rem' }}>-</td>
                    </tr>
                </tbody>
            </table>
            <h5 className="d-flex justify-content-center mt-4 dh5" style={{ color: 'rgb(7 122 81)' }}>
                Send this questionnaire to estimators for round 3 estimation
            </h5>

            <form ref={form} onSubmit={sendEmail}>
                <div className="input-group my-3 d-flex justify-content-center">
                    <input name="subject" type="text" value="estimateUp" readOnly hidden />
                    <input name="user_name" value="Muhammad Aqeel" readOnly hidden />
                    <input name="message" type="text" value="https://estimate-up.onrender.com/input_r3" readOnly hidden />

                    <input
                        name="user_email"
                        type="email"
                        className="form-control col-md-4"
                        placeholder="Enter your email"
                        style={{ borderRadius: '15px', color: '#246EB9' }}
                        required
                    />
                    <div>
                        <button className="email-btn" type="submit">
                            Send Email
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Round2;