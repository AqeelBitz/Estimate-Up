import React, { useState, useEffect } from 'react'
// import Header from './Header' // Removed since it's not used
import './Delphi.css'

const InputRound3 = () => {
    const [taskList, setTaskList] = useState([]);
    const [estimator, setEstimator] = useState("");
    const [round3, setRound3] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("modules");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    function HandleSubmit(e) {
        e.preventDefault();
        let round3Values = [];
        let temp = true;

        // Get all the input fields in the form
        let inputs = document.querySelectorAll('#round3 input[type="text"]');

        // Loop through the input fields and push the input values to the round3Values array
        inputs.forEach(input => {
            if (input.value === '') {
                temp = false;
            }
            round3Values.push(input.value);
        });

        if (!temp) {
            alert('Please enter a value for all input fields.');
            return;
        }

        setRound3(round3Values);
        updateEstimationData(estimator, round3Values);
    }

    function updateEstimationData(estimatorName, round3Estimations) {
        // Retrieve the estimation data from local storage
        const estimationData = JSON.parse(localStorage.getItem("estimationData"));

        // Find the estimator with the matching name
        const estimatorIndex = estimationData.findIndex(
            (estimator) => estimator.estimator_name === estimatorName
        );

        // Update the round 3 estimations for the matching estimator
        if (estimatorIndex !== -1) {
            estimationData[estimatorIndex].r3_estimation = round3Estimations;
        }

        // Store the updated estimation data in local storage
        localStorage.setItem("estimationData", JSON.stringify(estimationData));
    }

    return (
        <div>
            <h2 className='dh4'>Round 3 Estimations</h2>
            <input
                type="text"
                className="form-control col-md-4"
                placeholder='Name of estimator'
                style={{ marginBottom: '5px' }}
                value={estimator}
                onChange={(e) => setEstimator(e.target.value)}
                required
            />
            <form id='round3' onSubmit={HandleSubmit}>
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
                                    <td>{obj.Name}</td>
                                    <td style={{ maxWidth: '100px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className='Desc'>{obj.Description}</td>
                                    <td><input name={'input' + i} type="text" placeholder='input estimation' /></td>
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

export default InputRound3;
