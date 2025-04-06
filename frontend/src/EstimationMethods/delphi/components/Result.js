import React, { useEffect, useState, useRef } from "react";
import Header from './Header'
// import ResultChart from './ResultChart'
import './Delphi.css'

const Result = () => {
    const [standardError, setStandardError] = useState();
    const headingRef = useRef(null);
    const [upperBound, setUpperBound] = useState();
    const [lowerBound, setLowerBound] = useState();
    const [effort, setEffort] = useState();
  
    useEffect(() => {
      const SE = localStorage.getItem('SE');
      const upperBound = localStorage.getItem('upperBound');
      const lowerBound = localStorage.getItem('lowerBound');
      const effort = localStorage.getItem("Effort");
  
      setStandardError(SE);
      setUpperBound(upperBound);
      setLowerBound(lowerBound);
      setEffort(effort);
  
      const heading = headingRef.current;
      const headingText = 'Final Estimated Cost of the Project is';
      let index = 0;
      let typingInterval;
  
      const startTypingAnimation = () => {
        heading.innerHTML = '';
        clearInterval(typingInterval);
  
        typingInterval = setInterval(() => {
          if (index < headingText.length) {
            heading.innerHTML += headingText.charAt(index);
            index++;
          } else {
            clearInterval(typingInterval);
          }
        }, 40);
      };
  
      startTypingAnimation();
  
      return () => {
        clearInterval(typingInterval);
      };
    }, []);
  
    return (
      <div>
        <Header step={5} />
        <div className="result-container">
          <div>
            <div className="container">
              <div className="row">
                <div className="col">
                  <div className="bg1 p-4 my-3 shadow">
                  <h3 className="dh3" id="round_heading" ref={headingRef} aria-live="polite">
                  {headingRef.current ? headingRef.current.innerHTML : 'Final Estimated Cost of the Project is'}
                </h3>                
                    <h1 className="text-center display-4 text-primary mb-5 dh1">
                      {effort} days
                    </h1>
                    <h3 className="text-center mb-2 dh3">Confidence Interval:</h3>
                    <h3 className="text-center mb-2 dh3">
                      <span className="text-primary font-weight-bold">{lowerBound}</span> -{" "}
                      <span className="text-primary font-weight-bold">{upperBound}</span> days
                    </h3>
                    <h3 className="text-center mb-2 dh3">Standard Error:</h3>
                    <h3 className="text-center mb-2 dh3">
                      <span className="text-primary font-weight-bold">{standardError}</span>{" "}
                      days
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Result;