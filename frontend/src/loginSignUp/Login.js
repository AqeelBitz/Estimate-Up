import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import signin_img from '../images/signin.jpg';
import './style.css';

const Login = ({ setIsAuthenticated }) => {
  const cookies = new Cookies();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false); // Success state
  const [showErrorMessage, setShowErrorMessage] = useState(false); // Error state
  const [showWarningMessage, setShowWarningMessage] = useState(false); // Warning state
  const [isLoading, setIsLoading] = useState(false); // Loading state
  const [erroText, setErrorText] = useState("");

  useEffect(() => {
    const toggleImageVisibility = () => {
      const image = document.getElementById('img_container');
      if (image) {
        image.style.display = window.innerWidth <= 768 ? 'none' : 'block';
      }
    };

    toggleImageVisibility(); // Run on mount
    window.addEventListener('resize', toggleImageVisibility);

    return () => {
      window.removeEventListener('resize', toggleImageVisibility);
    };
  }, []);

  function Validation(e) {
    let result = true;
  
    // Clear previous error messages
    setErrorText("");
    setEmailError(false);
    setPasswordError(false);
  
    // Email validation
    if (!email) {
      setErrorText("Please enter an email address.");
      setEmailError(true);
      result = false;
    } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      setErrorText("Please enter a valid email address.");
      setEmailError(true);
      result = false;
    }
  
    // Password validation
    if (!password) {
      setErrorText("Please enter a password.");
      setPasswordError(true);
      result = false;
    }
  
    return result;
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (Validation()) {
      setIsLoading(true); // Show loader
      try {
        const res = await fetch('https://estimate-up.onrender.com/sign-in', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ email: email, password: password })
        });
        const data = await res.json();
        console.log(data);

        if (res.status === 400 || !data) {
          setShowErrorMessage(true); // Show error message
          setTimeout(() => setShowErrorMessage(false), 3000); // Hide after 3 seconds
        } else if (res.status === 200) {
          cookies.set('jwt', data.token);
          localStorage.setItem('isAuthenticated', true);
          localStorage.setItem('token', data.token);
          setIsAuthenticated(true);
          setShowSuccessMessage(true); // Show success message
          setTimeout(() => {
            navigate('/'); // Navigate to home after 2 seconds
          }, 2000);
        }
      } catch (error) {
        setShowWarningMessage(true); // Show warning message
        setTimeout(() => setShowWarningMessage(false), 3000); // Hide after 3 seconds
      } finally {
        setIsLoading(false); // Hide loader
      }
    }
  };

  return (
    <div className='custom-container'>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-md-5 col-lg-5 col-xl-4 my-5">
            <div className="my-container border border-secondary rounded p-3">
              <form method="POST">
                <h3 className="mb-4">Sign In</h3>

                <div className="mb-4 text-start">
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className={`form-control ${emailError ? 'is-invalid' : ''}`}
                    placeholder="Enter email"
                  />
                  {emailError && <div className="invalid-feedback">{erroText}</div>}
                </div>

                <div className="mb-4 text-start">
                  <input
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className={`form-control ${passwordError ? 'is-invalid' : ''}`}
                    placeholder="Enter password"
                  />
                  {passwordError && <div className="invalid-feedback">{erroText}</div>}
                </div>

                <div className="d-grid">
                  <button type="submit" className="btn btn-primary" onClick={handleSubmit} disabled={isLoading}>
                    {isLoading ? 'Loading...' : 'Submit'}
                  </button>
                </div>

                <p className="forgot-password text-right">
                  <Link to="/sign-up">Create Account?</Link>
                </p>
              </form>
            </div>
          </div>

          <div className="col-md-6 col-lg-7 col-xl-8 order-md-first img_container" id='img_container'>
            <img src={signin_img} className="img-fluid" alt="Sample image" style={{ height: '80vh', objectFit: 'contain' }} />
          </div>
        </div>
      </div>

      {/* Success Message */}
      {showSuccessMessage && (
        <MessageCard type="success" message="Login Successful" subMessage="Redirecting to home page..." />
      )}

      {/* Error Message */}
      {showErrorMessage && (
        <MessageCard type="error" message="Login Failed" subMessage="Invalid email or password." />
      )}

      {/* Warning Message */}
      {showWarningMessage && (
        <MessageCard type="warning" message="Network Error" subMessage="Please check your connection." />
      )}

      {/* Loader */}
      {isLoading && (
        <div className="loader-overlay">
          <div className="loader"></div>
        </div>
      )}
    </div>
  );
};

// Reusable MessageCard Component
const MessageCard = ({ type, message, subMessage }) => {
  const iconColor = {
    success: '#269b24',
    error: '#ff4d4d',
    warning: '#ffa500',
  };

  const waveColor = {
    success: '#04e4003a',
    error: '#ff4d4d3a',
    warning: '#ffa5003a',
  };

  return (
    <div className="message-card-overlay">
      <div className={`message-card ${type}`}>
        <svg className="wave" viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0,256L11.4,240C22.9,224,46,192,69,192C91.4,192,114,224,137,234.7C160,245,183,235,206,213.3C228.6,192,251,160,274,149.3C297.1,139,320,149,343,181.3C365.7,213,389,267,411,282.7C434.3,299,457,277,480,250.7C502.9,224,526,192,549,181.3C571.4,171,594,181,617,208C640,235,663,277,686,256C708.6,235,731,149,754,122.7C777.1,96,800,128,823,165.3C845.7,203,869,245,891,224C914.3,203,937,117,960,112C982.9,107,1006,181,1029,197.3C1051.4,213,1074,171,1097,144C1120,117,1143,107,1166,133.3C1188.6,160,1211,224,1234,218.7C1257.1,213,1280,139,1303,133.3C1325.7,128,1349,192,1371,192C1394.3,192,1417,128,1429,96L1440,64L1440,320L1428.6,320C1417.1,320,1394,320,1371,320C1348.6,320,1326,320,1303,320C1280,320,1257,320,1234,320C1211.4,320,1189,320,1166,320C1142.9,320,1120,320,1097,320C1074.3,320,1051,320,1029,320C1005.7,320,983,320,960,320C937.1,320,914,320,891,320C868.6,320,846,320,823,320C800,320,777,320,754,320C731.4,320,709,320,686,320C662.9,320,640,320,617,320C594.3,320,571,320,549,320C525.7,320,503,320,480,320C457.1,320,434,320,411,320C388.6,320,366,320,343,320C320,320,297,320,274,320C251.4,320,229,320,206,320C182.9,320,160,320,137,320C114.3,320,91,320,69,320C45.7,320,23,320,11,320L0,320Z"
            fillOpacity="1"
            fill={waveColor[type]}
          ></path>
        </svg>

        <div className="icon-container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
            strokeWidth="0"
            fill={iconColor[type]}
            stroke="currentColor"
            className="icon"
          >
            <path
              d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM369 209c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0l-111 111-47-47c-9.4-9.4-24.6-9.4-33.9 0s-9.4 24.6 0 33.9l64 64c9.4 9.4 24.6 9.4 33.9 0L369 209z"
            ></path>
          </svg>
        </div>
        <div className="message-text-container">
          <p className="message-text">{message}</p>
          <p className="sub-text">{subMessage}</p>
        </div>
      </div>
    </div>
  );
};

export default Login;