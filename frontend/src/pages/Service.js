import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import Services from '../components/Services';

const Service = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Services />
    </>
  );
};

export default Service;




