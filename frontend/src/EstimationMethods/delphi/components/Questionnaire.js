import React, { useState, useEffect, useRef } from 'react';
// import './ques.css';
import Header from './Header';
import emailjs from '@emailjs/browser';
import './Delphi.css'

const Questionnaire = () => {
  const [taskList, setTaskList] = useState([]);
  const form = useRef();

  useEffect(() => {
    let arr = localStorage.getItem('modules');

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }
  }, []);

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
      <Header step={1} />
      <form>
        <table className="table table-bordered table-hover">
          <thead>
            <tr >
              <th scope="col" style={{ width: '33%', color:'white', backgroundColor:'#717871',fontWeight:'bold' }}>
                Module Name
              </th>
              <th scope="col" style={{ width: '33%', color:'white', backgroundColor:'#717871',fontWeight:'bold'  }}>
                Description
              </th>
              <th scope="col" style={{ width: '33%', color:'white', backgroundColor:'#717871',fontWeight:'bold'  }}>
                Estimation
              </th>
            </tr>
          </thead>
          {taskList.map((obj, i) => (
            <tbody style={{ alignItems: 'stretch' }}>
              <tr style={{ height: '33px' }}>
                <td>{obj.Name}</td>
                <td
                  style={{
                    maxWidth: '100px',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                  className="Desc"
                >
                  {obj.Description}
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </form>
      <h5 className="d-flex justify-content-center mt-4 dh5" style={{color: 'rgb(7 122 81)' }}>
      Send this questionnaire to estimators for round 1 estimation
      </h5>

      <form action="" ref={form} onSubmit={sendEmail}>
        <div className="input-group my-3 d-flex justify-content-center">
          <input name="subject" type="text" value={'estimateUp'} hidden />
          <input name="user_name" value={'Muhammad Aqeel'} hidden />
          <input name="message" type="text" value={'https://estimate-up.onrender.com/input_r1'} hidden />

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
  );
};

export default Questionnaire;
