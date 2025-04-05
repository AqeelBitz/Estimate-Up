import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import Home from '../pages/Home';
import About from '../pages/About';
import HowItsWork from '../pages/HowItsWork';
import Terms from '../pages/Terms';
import Cocomo from '../EstimationMethods/Cocomo/Cocomo';
import FunctionF from '../EstimationMethods/Cocomo/FunctionF';
import Sloc from '../EstimationMethods/Cocomo/Sloc';
import CEstimate from '../EstimationMethods/Cocomo/CEstimate';
import Cocomo2 from '../EstimationMethods/cocomo2/Cocomo2';
import Login from '../loginSignUp/Login';
import Signup from '../loginSignUp/Signup';
import FunctionPoint from '../EstimationMethods/Fp/Fp';
import ThreePoint from '../EstimationMethods/ThreeP/ThreeP';
import Services from '../components/Services';
import Questionnaire from '../EstimationMethods/delphi/components/Questionnaire';
import Delphi from '../EstimationMethods/delphi/components/Delphi';
import Round1 from '../EstimationMethods/delphi/components/Round1';
import Round2 from '../EstimationMethods/delphi/components/Round2';
import Round3 from '../EstimationMethods/delphi/components/Round3';
import InputRound1 from '../EstimationMethods/delphi/components/InputRound1';
import InputRound2 from '../EstimationMethods/delphi/components/InputRound2';
import InputRound3 from '../EstimationMethods/delphi/components/InputRound3';
import Result from '../EstimationMethods/delphi/components/Result';
import Analytics from '../Analytics';
import Blog from '../pages/Blog';
import Tutorials from '../pages/Tutorials';
import Documentation from '../pages/Documentation';
import FAQ from '../pages/FAQ';

const Router1 = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleLogout = async () => {
    const token = localStorage.getItem('token') || sessionStorage.getItem('token');

    try {
        const response = await fetch('https://estimate-up.onrender.com/logout', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${token}`,
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            localStorage.removeItem('token');
            sessionStorage.removeItem('token');
            setIsAuthenticated(false);
        } else {
            console.error('Logout failed:', response.statusText);
        }
    } catch (error) {
        console.error('Logout error:', error);
    } finally {
        localStorage.removeItem('token');
        sessionStorage.removeItem('token');
        setIsAuthenticated(false);
    }
  };

  return (
    <Router>
      <Analytics /> {/* Tracks page views automatically */}
      <Navbar isAuthenticated={isAuthenticated} handleLogout={handleLogout} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/sign-up" element={<Signup setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/about" element={<About />} />
        <Route path="/howitswork" element={<HowItsWork />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/service" element={<Services />} />
        <Route path="/input_r1" element={<InputRound1 />} />
        <Route path="/input_r2" element={<InputRound2 />} />
        <Route path="/input_r3" element={<InputRound3 />} />
        
        {/* Public resource pages (available without authentication) */}
        <Route path="/blog" element={<Blog />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/faq" element={<FAQ />} />

        {isAuthenticated ? (
          <>
            <Route path="/fp" element={<FunctionPoint />} />
            <Route path="/tp" element={<ThreePoint />} />
            <Route path="/delphi" element={<Delphi />} />
            <Route path="/round1" element={<Round1 />} />
            <Route path="/round2" element={<Round2 />} />
            <Route path="/round3" element={<Round3 />} />
            <Route path="/ques" element={<Questionnaire />} />
            <Route path="/result" element={<Result />} />
            <Route path="/cocomo" element={<Cocomo />} />
            <Route path="/function" element={<FunctionF />} />
            <Route path="/sloc" element={<Sloc />} />
            <Route path="/estimate" element={<CEstimate />} />
            <Route path="/cocomo2" element={<Cocomo2 />} />
          </>
        ) : (
          <Route path="*" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
        )}
      </Routes>
    </Router>
  );
};

export default Router1;