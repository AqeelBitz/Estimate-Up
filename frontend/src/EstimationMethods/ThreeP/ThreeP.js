import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import './ThreeP.css';

function ThreeP() {
  const [tasks, setTasks] = useState([]);
  const [totalTasks, setTotalTasks] = useState(0);
  const [totalEstimation, setTotalEstimation] = useState(0);

  const addTask = () => {
    setTasks([...tasks, { name: '', subtasks: [] }]);
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const addSubtask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].subtasks.push({ optimistic: '', pessimistic: '', mostLikely: '' });
    setTasks(updatedTasks);
  };

  const deleteSubtask = (taskIndex, subtaskIndex) => {
    const updatedTasks = [...tasks];
    updatedTasks[taskIndex].subtasks = updatedTasks[taskIndex].subtasks.filter((_, i) => i !== subtaskIndex);
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
        const o = parseFloat(subtask.optimistic) || 0;
        const m = parseFloat(subtask.mostLikely) || 0;
        const p = parseFloat(subtask.pessimistic) || 0;
        const estimation = (o + 4 * m + p) / 6;
        taskEstimation += estimation;
        totalEstimation += estimation;
      });
      if (taskEstimation > 0) totalTasks += 1;
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
    <main style={{ backgroundColor: 'white', minHeight: '89vh' }}>
      <Helmet>
        <title>Three-Point Estimation | EstimateUp</title>
        <meta name="description" content="Use the Three-Point Estimation technique to accurately estimate your software project timelines with optimism, pessimism, and realistic values." />
        <meta name="keywords" content="Three-Point Estimation, Software Estimation, Project Planning, EstimateUp" />
        
        {/* Open Graph Tags */}
        <meta property="og:title" content="Three-Point Estimation | EstimateUp" />
        <meta property="og:description" content="Use the Three-Point Estimation technique to accurately estimate your software project timelines with optimism, pessimism, and realistic values." />
        <meta property="og:image" content="https://estimate-up.vercel.app/images/preview-image.png" />
        <meta property="og:url" content="https://estimate-up.vercel.app/tp" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://estimate-up.vercel.app/tp" />
      </Helmet>
      <section className="tp-header">
        <h1 className='t_name'>Three-Point Estimation (PERT)</h1>
        <p className='tp_intro'>
          Estimate your project's duration by entering optimistic, pessimistic, and most likely values.
          This tool helps you calculate expected effort using the PERT formula.
        </p>
      </section>

      <section className="tp-estimation">
        <div className="tp_task-container">
          {tasks.map((task, index) => (
            <div key={index} className="task">
              <div className="task-header">
                <input
                  type="text"
                  placeholder="Enter task name (e.g., Develop Login UI)"
                  value={task.name}
                  onChange={(event) => handleTaskChange(index, event)}
                  aria-label={`Task ${index + 1} name`}
                />
                <button onClick={() => deleteTask(index)} aria-label="Delete task">Delete</button>
              </div>

              <div className="subtask-container">
                {task.subtasks.map((subtask, subtaskIndex) => (
                  <div key={subtaskIndex} className="subtask">
                    <input
                      type="number"
                      placeholder="Optimistic estimate (e.g., 2 hrs)"
                      value={subtask.optimistic}
                      onChange={(e) => handleSubtaskChange(index, subtaskIndex, 'optimistic', e)}
                      aria-label="Optimistic estimate"
                    />
                    <input
                      type="number"
                      placeholder="Most likely estimate (e.g., 4 hrs)"
                      value={subtask.mostLikely}
                      onChange={(e) => handleSubtaskChange(index, subtaskIndex, 'mostLikely', e)}
                      aria-label="Most likely estimate"
                    />
                    <input
                      type="number"
                      placeholder="Pessimistic estimate (e.g., 6 hrs)"
                      value={subtask.pessimistic}
                      onChange={(e) => handleSubtaskChange(index, subtaskIndex, 'pessimistic', e)}
                      aria-label="Pessimistic estimate"
                    />
                    <button onClick={() => deleteSubtask(index, subtaskIndex)} aria-label="Delete subtask">
                      <i className="fas fa-trash"></i>
                    </button>
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
            <span className="label">Total Tasks:</span>
            <span className="value">{totalTasks}</span>
          </div>
          <div className="total">
            <span className="label">Total Estimated Time:</span>
            <span className="value">{totalEstimation.toFixed(2)} hrs</span>
          </div>
        </div>

        <div className="button-container">
          <button className='cal_est_btn' onClick={calculateEstimation}>Calculate Estimation</button>
          <button className='res_est_btn' onClick={resetData}>Reset Data</button>
        </div>
      </section>
    </main>
  );
}

export default ThreeP;
