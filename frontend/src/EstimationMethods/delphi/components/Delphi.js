import React, { useEffect, useState } from 'react';
import CreateTask from '../modals/CreateTask';
import Card from './Card';
// import Questionair from './Questionnaire'; // Removed since it's not used
// import { Link } from 'react-router-dom'; // Removed since it's not used
import Header from './Header';

const Delphi = () => {
    const [modal, setModal] = useState(false);
    const [taskList, setTaskList] = useState([]);

    useEffect(() => {
        let arr = localStorage.getItem("modules");

        if (arr) {
            let obj = JSON.parse(arr);
            setTaskList(obj);
        }
    }, []);

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

    return (
        <div className='delphi-container'>
            <Header />
            <div className='moduleContainer'>
                <div className='d-flex ' style={{ justifyContent: 'center', paddingTop: '5px' }}>
                    <button className="btn mr-2 " style={{ backgroundColor: "#A8EB12", borderRadius: '30px', }} onClick={() => setModal(true)} >Create Module</button>
                </div>
                <div className="dtask-container">
                    {taskList && taskList.map((obj, index) => <Card taskObj={obj} index={index} deleteTask={deleteTask} updateListArray={updateListArray} />)}
                </div>
            </div>
            <CreateTask toggle={toggle} modal={modal} save={saveTask} />
        </div>
    );
};

export default Delphi;
