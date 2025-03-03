import React, { useState } from 'react';
import './ThreeP.css';

function ThreeP() {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalEstimation, setTotalEstimation] = useState(0);

  const addTask = () => {
    const newTask = { name: '', subtasks: [] };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const addSubtask = (index) => {
    const newSubtask = { optimistic: '', pessimistic: '', mostLikely: '' };
    const updatedTasks = [...tasks];
    updatedTasks[index].subtasks.push(newSubtask);
    setTasks(updatedTasks);
  };

  const deleteSubtask = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks = updatedTasks[taskIndex].subtasks.filter(
      (subtask, i) => i !== subtaskIndex
    );
    setTasks(updatedTasks);
  };

  const handleTaskChange = (index, event) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].name = event.target.value;
    setTasks(updatedTasks);
  };

  const handleSubtaskChange = (taskIndex, subtaskIndex, field, event) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks[subtaskIndex][field] = event.target.value;
    setTasks(updatedTasks);
  };

  const calculateEstimation = () => {
    let totalEstimation = 0;
    let totalTasks = 0;
    tasks.forEach((task) => {
      let taskEstimation = 0;
      task.subtasks.forEach((subtask) => {
        const optimistic = parseFloat(subtask.optimistic) || 0;
        const pessimistic = parseFloat(subtask.pessimistic) || 0;
        const mostLikely = parseFloat(subtask.mostLikely) || 0;
        const estimation = (optimistic + (4 * mostLikely) + pessimistic) / 6;
        taskEstimation += estimation;
        totalEstimation += estimation;
      });
      if (taskEstimation > 0) {
        totalTasks += 1;
      }
    });
    setTotalTasks(totalTasks);
    setTotalEstimation(totalEstimation);
  };

  const resetData = () => {
    setTasks([]);
    setTotalTasks(0);
    setTotalEstimation(0);
  };

  return (
    <div style={{ backgroundColor: 'white', minHeight: '89vh' }}>
      <h1 className='t_name'>Three-Point Estimation</h1>
      <div className="tp-estimation">
        <div className="tp_task-container">
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <div className="task-header">
                <div>
                  <input
                    type="text"
                    placeholder="Task name"
                    value={task.name}
                    onChange={(event) => handleTaskChange(index, event)}
                  />
                </div>
                <div>
                  <button onClick={() => deleteTask(index)}>Delete</button>
                </div>
              </div>
              <div className="subtask-container">
                {task.subtasks.map((subtask, subtaskIndex) => (
                  <div key={subtaskIndex} className="subtask">
                    <div>
                      <input
                        type="number"
                        placeholder="Optimistic"
                        value={subtask.optimistic}
                        onChange={(event) =>
                          handleSubtaskChange(index, subtaskIndex, 'optimistic', event)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Most Likely"
                        value={subtask.mostLikely}
                        onChange={(event) =>
                          handleSubtaskChange(index, subtaskIndex, 'mostLikely', event)
                        }
                      />
                    </div>
                    <div>
                      <input
                        type="number"
                        placeholder="Pessimistic"
                        value={subtask.pessimistic}
                        onChange={(event) =>
                          handleSubtaskChange(index, subtaskIndex, 'pessimistic', event)
                        }
                      />
                    </div>
                    <div>
                      <button onClick={() => deleteSubtask(index, subtaskIndex)}>
                        <i className="fas fa-trash"></i>
                      </button>
                    </div>
                  </div>
                ))}
                <button className='st_btn' onClick={() => addSubtask(index)}>Add Subtask +</button>
              </div>
            </div>
          ))}
          <button className='t_btn' onClick={addTask}>Add Task +</button>
        </div>
        <div className="total-container">
          <div className="total">
            <div className="label">Total Tasks:</div>
            <div className="value">{totalTasks}</div>
          </div>
          <div className="total">
            <div className="label">Total Estimation:</div>
            <div className="value">{totalEstimation.toFixed(2)}</div>
          </div>
        </div>
        <div className="button-container">
          <button className='cal_est_btn' onClick={calculateEstimation}>Calculate Estimation</button>
          <button className='res_est_btn' onClick={resetData}>Reset Data</button>
        </div>
      </div>
    </div>


  );
}

export default ThreeP;
