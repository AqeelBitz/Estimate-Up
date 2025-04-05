import React, { useState } from 'react';
import CoverSection from '../components/CoverSection';
import Footer from '../components/Footer';
import InfoSection from '../components/InfoSection';
import { aboutObj, discoverObj, signupObj } from '../components/InfoSection/Data';
import Services from '../components/Services';
import Sidebar from '../components/Sidebar';
import './pages.css'

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      
      <CoverSection />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
      
      <Services />
      <Footer />
    </>
  );
};

export default Home;