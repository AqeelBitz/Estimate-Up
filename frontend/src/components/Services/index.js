import React from 'react';
import Icon1 from '../../images/threepoint.png';
import Icon2 from '../../images/functionpoint.png';
import Icon3 from '../../images/cocomo.png';
import Icon4 from '../../images/cocomo2.png';
import Icon5 from '../../images/delphi.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServiceLink,
  ServicesCard,
  ServicesCardInner,
  ServicesIcon,
  ServicesH2,
  ServicesP,
} from './ServicesElements';

const Services = () => {
  return (
    <ServicesContainer id='services'>
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServiceLink to="/tp">
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon1} />
              <ServicesH2>Three Point</ServicesH2>
              <ServicesP>
                Ensures that managers minimize exposure to loss, and it lessens the risk of wasted resources.
              </ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/fp'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon2} />
              <ServicesH2>Functional Point</ServicesH2>
              <ServicesP>The process of sizing software based on the number of business functions.</ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/cocomo'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon3} />
              <ServicesH2>Cocomo 1</ServicesH2>
              <ServicesP>Predicts the efforts and schedule of a software product based on the size of the software.</ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/cocomo2'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon4} />
              <ServicesH2>Cocomo 2</ServicesH2>
              <ServicesP>Estimate the cost, effort and schedule.</ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/delphi'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon5} />
              <ServicesH2>Delphi</ServicesH2>
              <ServicesP>Estimate the likelihood and outcome of future events.</ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;