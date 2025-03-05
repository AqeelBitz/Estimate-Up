import React from 'react';
//import Icon1 from '../../images/svg-4.svg';
import Icon1 from '../../images/svg-4.svg';
import Icon2 from '../../images/svg-5.svg';
import Icon3 from '../../images/svg-6.svg';
//import ThreePoint from '../EstimationMethods/ThreeP/ThreeP'
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { ServicesContainer, ServicesH1, ServicesWrapper, ServiceLink, ServicesCard, ServicesIcon, ServicesH2, ServicesP } from './ServicesElements';

const Services = () => {
  return (

    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>

        <ServiceLink to="/tp">
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServiceLink to="/tp">Three Point</ServiceLink>
            <ServicesP>
              Ensures that managers minimize exposure to loss, and it lessens the risk of wasted resources.
            </ServicesP>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/fp'>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServiceLink to='/fp'>Functional Point</ServiceLink>
            <ServicesP>The process of sizing software based on the number of business functions. </ServicesP>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/cocomo'>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServiceLink to='/cocomo'>Cocomo 1</ServiceLink>
            <ServicesP>Predicts the efforts and schedule of a software product based on the size of the software.</ServicesP>
          </ServicesCard>
        </ServiceLink>


        <ServiceLink to='/cocomo2'>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServiceLink to='/cocomo2'>Cocomo 2</ServiceLink>
            <ServicesP>Estimate the cost, effort and schedule.</ServicesP>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/delphi'>
          <ServicesCard>
            <ServicesIcon src={Icon2} />
            <ServiceLink to='/delphi'>Delphi</ServiceLink>
            <ServicesP>Estimate the likelihood and outcome of future events.</ServicesP>
          </ServicesCard>
        </ServiceLink>

      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
