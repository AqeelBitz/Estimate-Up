import React, { useState, useEffect } from 'react'
import Header from './Header'
// import './ques.css'
import './Delphi.css'

const InputRound1 = () => {
    const [taskList, setTaskList] = useState([])
    const [estimator, setEstimator] = useState("")
    const [data, setData] = useState([]);
    const [round1, setRound1] = useState([])
    const [round2, setRound2] = useState([])
    const [round3, setRound3] = useState([])
    
    useEffect(() => {

        let arr = localStorage.getItem("modules")

        if (arr) {
            let obj = JSON.parse(arr)
            // console.log(arr)
            setTaskList(obj)
        }

    }, [])
    // const frm = document.getElementById('form')

    // console.log(frm['input'].value)

    function HandleSubmit(e){
        e.preventDefault();
        let round1Values = [];
        let temp =true;

        // Get all the input fields in the form
        let inputs = document.querySelectorAll('#round1 input[type="text"]');
      
        // Loop through the input fields and push the input values to the round1Values array
        inputs.forEach(input => {
            if (input.value === '') {
                temp =false;
              }
          round1Values.push(input.value);
        });
        if(temp==false){
            alert('Please enter a value for all input fields.');
            return;
        }
        
        setRound1(round1Values);
        let estimationData = {};
        estimationData['estimator_name']=estimator
        estimationData['r1_estimation']=round1Values
        estimationData['r2_estimation']=round2
        estimationData['r3_estimation']=round3


          let tmp=data;
          tmp.push(estimationData)
          localStorage.setItem("estimationData", JSON.stringify(tmp));
          setData(data);
        // localStorage.setItem("round1", JSON.stringify(round1))
        console.log(round1);
        
    }
    return (
        <div>
        <h2 className='dh4'>Round 1 Estimations</h2>
        <input type="text" class="form-control col-md-4" style={{marginBottom:'5px'}} placeholder='Name of estimator' value={estimator} onChange={(e)=>{setEstimator(e.target.value)}} required/>
            <form id='round1' onSubmit={HandleSubmit}>
                <table className='table table-bordered table-hover'>
                    <thead class="thead-dark">
                        <tr>
                            <th scope="col" style={{ width: '33%', color:'white' }}>Module Name</th>
                            <th scope="col" style={{ width: '33%', color:'white'}}>Description</th>
                            <th scope="col" style={{ width: '33%', color:'white' }}>Estimation</th>
                        </tr>
                    </thead>
                    {
                        taskList.map((obj, i) => (
                            <tbody style={{ alignItems: 'stretch' }}>
                                <tr style={{ height: '33px' }}>
                                    <td style={{ padding: '0.25rem'}}>{obj.Name}</td>
                                    <td  style={{ maxWidth: '100px', padding: '0.25rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }} className='Desc'>{obj.Description}</td>
                                    <td style={{ padding: '0.25rem'}}><input name={'input'+i} type="text" placeholder='input estimation'  /></td>
                                </tr>
                            </tbody>
                        ))
                    }
                </table>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button type='submit' id='save_btn' >Save</button>
                </div>
            </form>
        </div>
    )
}

export default InputRound1