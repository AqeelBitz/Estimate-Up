import React, { useState } from 'react';
import EditTask from '../modals/EditTask'

const Card = ({ taskObj, index, deleteTask, updateListArray }) => {
    const [modal, setModal] = useState(false);

    const colors = [
        {
            primaryColor: "#2681ff",
            secondaryColor: "#d4e5fa"
        },
        {
            primaryColor: "#FEDF1B",
            secondaryColor: "#f2ef85"
        },
        {
            primaryColor: "#36f21d",
            secondaryColor: "#b1e3aa"
        },
        {
            primaryColor: "#ff4336",
            secondaryColor: "#f0b4b4"
        },
        {
            primaryColor: "#B964F7",
            secondaryColor: "#bfb6db"
        }
    ]

    const toggle = () => {
        setModal(!modal);
    }

    const updateTask = (obj) => {
        updateListArray(obj, index)
    }

    const handleDelete = () => {
        deleteTask(index)
        localStorage.removeItem(index)

    }
    const storedEstimationData = JSON.parse(localStorage.getItem("estimationData"));
    console.log("Stored ", storedEstimationData)

    return (
        <div class="card-wrapper mr-5">
            <div class="card-top" style={{ "background-color": colors[index % 5].primaryColor }}></div>
            <div class="task-holder mb-2" style={{}}>
                <span class="card-header" style={{ "background-color": colors[index % 5].secondaryColor}}>{taskObj.Name}</span>
                <div className=' card-text'>
                    <p className="mt-2 ">{taskObj.Description}</p>
                </div>

                <div style={{ "position": "absolute", "right": "29px", "bottom": "20px" }}>
                    <i class="far fa-edit mr-3" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer", textShadow: "0.2px 0.1px #000" }} onClick={() => setModal(true)}></i>
                    <i class="fas fa-trash-alt" style={{ "color": colors[index % 5].primaryColor, "cursor": "pointer", textShadow: "0.2px 0.1px #000" }} onClick={handleDelete}></i>
                </div>
            </div>
            <EditTask modal={modal} toggle={toggle} updateTask={updateTask} taskObj={taskObj} />

        </div>
    );
};

export default Card;