import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/my_logo.svg';
import './navbar.css';

const Navbar = ({ isAuthenticated, handleLogout }) => {
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        const toggleImageVisibility = () => {
            const image = document.getElementById('myImage');
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

    const closeNavbar = () => {
        setIsNavOpen(false);
    };

    return (
        <div>
            <nav className="myNavbar sticky-top navbar navbar-expand-lg">
                <div className="container-fluid">
                    <img className="navbar-brand text-light" src={logo} alt="EstimatUp" width={200} height={60} />
                    <button 
                        className="navbar-toggler" 
                        type="button" 
                        onClick={() => setIsNavOpen(!isNavOpen)}
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse ${isNavOpen ? 'show' : ''}`}>
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-light hover-underline-animation" to="/" onClick={closeNavbar}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light hover-underline-animation" to="about" onClick={closeNavbar}>About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active text-light hover-underline-animation" to="service" onClick={closeNavbar}>Services</Link>
                            </li>
                            {isAuthenticated ? (
                                <li className="nav-item">
                                    <button className="mysubmit" type="button" onClick={() => { handleLogout(); closeNavbar(); }}>Logout</button>
                                </li>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link to="/sign-in">
                                            <button className="mysubmit login-btn" type="button" onClick={closeNavbar}>Login</button>
                                        </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/sign-up">
                                            <button className="mysubmit signup-btn" type="button" onClick={closeNavbar}>Sign Up</button>
                                        </Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
