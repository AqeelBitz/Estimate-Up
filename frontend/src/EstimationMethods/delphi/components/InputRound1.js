import React, { useState, useEffect } from 'react'
// import Header from './Header' // Removed since it's not used
import './Delphi.css'

const InputRound1 = () => {
    const [taskList, setTaskList] = useState([]);
    const [estimator, setEstimator] = useState("");
    const [data, setData] = useState([]);
    const [round1, setRound1] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("modules");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    function HandleSubmit(e) {
        e.preventDefault();
        let round1Values = [];
        let temp = true;

        // Get all the input fields in the form
        let inputs = document.querySelectorAll('#round1 input[type="text"]');

        // Loop through the input fields and push the input values to the round1Values array
        inputs.forEach(input => {
            if (input.value === '') {
                temp = false;
            }
            round1Values.push(input.value);
        });

        if (temp === false) {
            alert('Please enter a value for all input fields.');
            return;
        }

        setRound1(round1Values);

        // Create estimation data object
        let estimationData = {
            estimator_name: estimator,
            r1_estimation: round1Values,
            r2_estimation: [], // Placeholder, as you don't use round2 in this component
            r3_estimation: []  // Placeholder, as you don't use round3 in this component
        };

        // Retrieve existing estimation data from localStorage, or initialize as an empty array
        let tmp = JSON.parse(localStorage.getItem("estimationData")) || [];
        tmp.push(estimationData);

        // Store updated estimation data in localStorage
        localStorage.setItem("estimationData", JSON.stringify(tmp));

        // Clear data state or perform any additional operations if needed
        setData(tmp);
    }

    return (
        <div>
            <h2 className='dh4'>Round 1 Estimations</h2>
            <input
                type="text"
                className="form-control col-md-4"
                style={{ marginBottom: '5px' }}
                placeholder='Name of estimator'
                value={estimator}
                onChange={(e) => setEstimator(e.target.value)}
                required
            />
            <form id='round1' onSubmit={HandleSubmit}>
                <table className='table table-bordered table-hover'>
                    <thead className="thead-dark">
                        <tr>
                            <th scope="col" style={{ width: '33%', color: 'white' }}>Module Name</th>
                            <th scope="col" style={{ width: '33%', color: 'white' }}>Description</th>
                            <th scope="col" style={{ width: '33%', color: 'white' }}>Estimation</th>
                        </tr>
                    </thead>
                    {
                        taskList.map((obj, i) => (
                            <tbody style={{ alignItems: 'stretch' }} key={i}>
                                <tr style={{ height: '33px' }}>
                                    <td style={{ padding: '0.25rem' }}>{obj.Name}</td>
                                    <td style={{ maxWidth: '100px', padding: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className='Desc'>{obj.Description}</td>
                                    <td style={{ padding: '0.25rem' }}><input name={'input' + i} type="text" placeholder='input estimation' /></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type='submit' id='save_btn'>Save</button>
                </div>
            </form>
        </div>
    );
}

export default InputRound1;
