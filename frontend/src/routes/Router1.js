import React,{useState, useEffect} from 'react'
import '../components/fontawesome/FontIndex'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from '../components/Navbar';
import Home from '../pages/Home'
import About from '../pages/About'
// import Contact from '../pages/Contact'
// import Contact from '../pages/Contact'
import HowItsWork from '../pages/HowItsWork'
import Terms from '../pages/Terms'
// import Delphi from '../EstimationMethods/delphi/delphi'
import Cocomo from '../EstimationMethods/Cocomo/Cocomo';
import FunctionF from '../EstimationMethods/Cocomo/FunctionF';
import Sloc from '../EstimationMethods/Cocomo/Sloc';
import CEstimate from '../EstimationMethods/Cocomo/CEstimate';
import Cocomo2 from '../EstimationMethods/cocomo2/Cocomo2';
import Login from '../loginSignUp/Login';
import Signup from '../loginSignUp/Signup';
import MyForm from '../components/MyForm';
import FunctionPoint from '../EstimationMethods/Fp/Fp'
import ThreePoint from '../EstimationMethods/ThreeP/ThreeP'
// import Logout from '../loginSignUp/Logout'
import Services from '../components/Services';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import Questionnaire from '../EstimationMethods/delphi/components/Questionnaire'
import Delphi from '../EstimationMethods/delphi/components/Delphi';
import Round1 from '../EstimationMethods/delphi/components/Round1'
import Round2 from '../EstimationMethods/delphi/components/Round2'
import Round3 from '../EstimationMethods/delphi/components/Round3'
import InputRound1 from '../EstimationMethods/delphi/components/InputRound1'
import InputRound2 from '../EstimationMethods/delphi/components/InputRound2'
import InputRound3 from '../EstimationMethods/delphi/components/InputRound3'
import Result from '../EstimationMethods/delphi/components/Result';


const Router1 = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  useEffect(() => {
    // Check if token exists in localStorage or sessionStorage
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);
  const handleLogout = async () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('token');

    try {
      // Remove token from localStorage or sessionStorage
      localStorage.removeItem('token');
      sessionStorage.removeItem('token');
  
      // Send request to server to log out
      const response = await fetch('/api/logout', {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}` // Replace `token` with the actual token value
        }
      });
  
      if (response.ok) {
        setIsAuthenticated(false);
        window.alert("logged out!")
      } else {
        // Handle error response
      }
    } catch (error) {
      // Handle network error
    }
  };
  

  return (
    <BrowserRouter class='element'>
      <Routes>
      <Route exact path='/input_r1' element={<InputRound1 />}/>
      <Route exact path='/input_r2' element={<InputRound2 />}/>
      <Route exact path='/input_r3' element={<InputRound3 />}/>
        <Route exact path="/" element={<Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />}>
          <Route path="/sign-in" element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
          <Route path="/sign-up" element={<Signup setIsAuthenticated={setIsAuthenticated}/>} />
          <Route exact path="/"  index element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/howitswork" element={<HowItsWork />} />
              <Route exact path="/terms" element={<Terms />} />
              <Route exact path="/service" element={<Services/>} />

          {isAuthenticated ? (
            <>
              <Route exact path="/form" element={<MyForm/>} />
              <Route exact path="/fp" element={<FunctionPoint/>} />
              <Route exact path="/tp" element={<ThreePoint/>} />
              <Route exact path='/delphi' element={<Delphi />}/>
              <Route exact path='/round1' element={<Round1 />}/>
              <Route exact path='/round2' element={<Round2 />}/>
              <Route exact path='/round3' element={<Round3 />}/>
              <Route exact path='/ques' element={<Questionnaire/>}/>
              <Route exact path='/result' element={<Result/>}/>
              <Route exact path="/cocomo" element={<Cocomo />} />
              <Route exact path="/function" element={<FunctionF />} />
              <Route exact path="/sloc" element={<Sloc/>} />
              <Route exact path="/estimate" element={<CEstimate/>} />
              <Route exact path="/cocomo2" element={<Cocomo2/>} />
            </>
          ) : (
            <>
              <Route path='*' element={<Login setIsAuthenticated={setIsAuthenticated}/>} />
            </>
          )}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router1
