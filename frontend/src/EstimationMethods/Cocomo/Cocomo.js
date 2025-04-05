import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import "./sloc.css";

const Cocomo = () => {
  return (
    <div>
      <Helmet>
        <title>COCOMO I Estimation Tool | EstimateUp</title>
        <meta
          name="description"
          content="Use the COCOMO-I model to estimate software development effort, time, and cost. Start with Function Point or SLOC input and get accurate predictions."
        />
        <meta property="og:title" content="COCOMO-I Estimator | EstimateUp" />
        <meta
          property="og:description"
          content="Estimate software project effort and duration using the COCOMO-I model. Includes Function Point and SLOC-based estimation methods."
        />
        <meta property="og:url" content="https://estimate-up.vercel.app/cocomo" />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://estimate-up.vercel.app/cocomo" />
      </Helmet>

      <div>
        <h1 className='t_name'>COCOMO-I</h1>
      </div>
      <div className="home">
        <div>
          <h3><u>Functionalities</u></h3>
          <ul>
            <li>The COCOMO-I can perform the following functionalities:-</li>
            <li>
              <Link to="/function" style={{ textDecoration: 'none' }}>
                <button className="button-43" role="button">CALCULATION OF FUNCTION POINT</button>
              </Link>
            </li>
            <li>
              <Link to="/sloc" style={{ textDecoration: 'none' }}>
                <button className="button-43" role="button">CALCULATION OF SOURCE LINES OF CODES (SLOC)</button>
              </Link>
            </li>
            <li>
              <Link to="/estimate" style={{ textDecoration: 'none' }}>
                <button className="button-43" role="button">ESTIMATION OF EFFORT, DEVELOPMENT TIME AND COST</button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Cocomo;
