import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import './myform.css'

const MyForm = () => {

// const [id, setid] = useState("");
// const [mname, setName] = useState("");
// const [fname, setFname] = useState("");
// const [phone, setPhone] = useState("");
// const [email, setEmail] = useState("");
// const [dob, setDob] = useState("");


  

// function handleSubmit(e){
//     e.preventDefault();
  
//       if(email.indexOf("@")<1 || email.lastIndexOf(".")<(email.indexOf("@")<1)+2||(email.lastIndexOf("."))+2>=email.length){
//         alert("invalid email");
//       } 
//       else if(email.length<5||email.length>25){
//         alert("length can not be < 5 or > 25");
//       }
//       else if(phone.length!=11){
//         alert("length should be 11 digits")
//       }
//       else if(fname.length<3||fname.length>20){
//         alert("length can not be < 3 or > 20")
//       }
//       else if(id.length>7){
//         alert("length should be < 7")
//       }
//       else if(!id&&!mname&&!fname&&!phone&&!email&&!dob){
       
//         alert("Please Insert data first!")
//       }
//       else if(!id||!mname||!fname||!phone||!email||!dob){
//         alert("Please fill all fields!")
//       }
//       else{
//     const data = {id,mname,fname,phone,email,dob};
//     let studentDetails = JSON.parse(localStorage.getItem("StudentDetails"))
//     console.log(data);
//     studentDetails.push(data);
//     localStorage.setItem("StudentDetails",JSON.stringify(studentDetails));
//     console.log(studentDetails);
//     if(id&&mname&&fname&&phone&&email&&dob){
       
//         setid("");
//         setName("");
//         setFname("");
//         setPhone("");
//         setEmail("");
//         setDob("");
//     }
// }
  

// }


    return (
        <>
            <div className="form-body">
                <div className="row">
                    <div className="form-holder">
                        <div className="form-content">
                            <div className="form-items">
                                <h3>Student Details</h3>
                                <p>Fill in the data below.</p>
                                <form className="requires-validation" novalidate >

                                    <div className="col-md-12">
                                        <input className="form-control" type="number" name="roll" id='roll_Input' placeholder="Does the system require reliable backup and recovery?"  required />
                                    </div>
                                    
                                    <div className="col-md-12">
                                        <input className="form-control" type="number" name="roll" id='roll_Input' placeholder="Does the system require reliable backup and recovery?"  required />
                                    </div>
                  
                                    <div className="col-md-12">
                                        <input className="form-control" type="number" name="roll" id='roll_Input' placeholder="Does the system require reliable backup and recovery?"  required />
                                    </div>
                                    <div className="col-md-12">
                                        <input className="form-control" type="number" name="roll" id='roll_Input' placeholder="Does the system require reliable backup and recovery?"  required />
                                    </div>

                                   

                                    <div className="form-button mt-3">
                                        <Link to="/function" ><button id="cancel" type="" className="btn btn-danger w-25" style={{marginRight:"225px"}}>Cancel</button></Link>

                                    </div>
                                
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyForm
