
import React, { useState } from 'react';
import InfoSection from '../components/InfoSection';
import { aboutObj, discoverObj } from '../components/InfoSection/Data';
import Sidebar from '../components/Sidebar';

const About = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <InfoSection {...aboutObj} />
      <InfoSection {...discoverObj} />
    </>
  );
};

export default About;