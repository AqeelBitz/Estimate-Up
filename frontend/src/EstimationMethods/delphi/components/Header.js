import React, { useEffect, useState } from 'react';
// import CreateTask from '../modals/CreateTask'; // Removed since it's not used
// import Card from './Card'; // Removed since it's not used
import { Link } from 'react-router-dom';
// import './Header.css';
import './Delphi.css';

const Header = ({ step }) => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("modules");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

    // If you don't use these functions, remove them
    /*
    const deleteTask = (index) => {
        let tempList = taskList;
        tempList.splice(index, 1);
        localStorage.setItem("modules", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const updateListArray = (obj, index) => {
        let tempList = taskList;
        tempList[index] = obj;
        localStorage.setItem("modules", JSON.stringify(tempList));
        setTaskList(tempList);
        window.location.reload();
    };

    const toggle = () => {
        setModal(!modal);
    };

    const saveTask = (taskObj) => {
        let tempList = taskList;
        tempList.push(taskObj);
        localStorage.setItem("modules", JSON.stringify(tempList));
        setTaskList(taskList);
        setModal(false);
    };
    */

    return (
        <div className='delphi-container'>
            <div className="header text-center">
                <h2 className='dh2'>Delphi Estimation</h2>
                <div className='d-flex justify-content-center'>
                    {step === 5 ? 
                        <Link to='/round3'>
                            <button className="btn btn-back">Back</button>
                        </Link> 
                        : step === 4 ? 
                        <Link to='/round2'>
                            <button className="btn btn-back">Back</button>
                        </Link> 
                        : step === 3 ? 
                        <Link to='/round1'>
                            <button className="btn btn-back">Back</button>
                        </Link> 
                        : step === 2 ? 
                        <Link to='/ques'>
                            <button className="btn btn-back">Back</button>
                        </Link> 
                        : step === 1 ? 
                        <Link to='/delphi'>
                            <button className="btn btn-back">Back</button>
                        </Link> 
                        : ""
                    }
                    {step === 4 ? 
                        <Link to='/result'>
                            <button className="btn btn-next">Next</button>
                        </Link> 
                        : step === 3 ? 
                        <Link to='/round3'>
                            <button className="btn btn-next">Next</button>
                        </Link> 
                        : step === 2 ? 
                        <Link to='/round2'>
                            <button className="btn btn-next">Next</button>
                        </Link> 
                        : step === 1 ? 
                        <Link to='/round1'>
                            <button className="btn btn-next">Next</button>
                        </Link> 
                        : step === 5 ? "" : 
                        <Link to='/ques'>
                            <button className="btn btn-next">Next</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Header;
