import React from 'react';
import Icon1 from '../../images/threepoint.png';
import Icon2 from '../../images/functionpoint.png';
import Icon3 from '../../images/cocomo.png';
import Icon4 from '../../images/cocomo2.png';
import Icon5 from '../../images/delphi.png';
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
      <ServicesH1>Software Cost Estimation Techniques</ServicesH1>
      <ServicesWrapper>
        <ServiceLink to="/tp">
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon1} alt="Three-Point Estimation icon" />
              <ServicesH2>Three-Point Estimation</ServicesH2>
              <ServicesP>
                Improve accuracy by using optimistic, pessimistic, and most likely estimates to minimize risk and resource waste.
              </ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/fp'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon2} alt="Function Point Analysis icon" />
              <ServicesH2>Function Point Analysis</ServicesH2>
              <ServicesP>
                Estimate software size by analyzing business functionalities and user interactions to improve planning and budgeting.
              </ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/cocomo'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon3} alt="COCOMO Model icon" />
              <ServicesH2>COCOMO Model (Basic)</ServicesH2>
              <ServicesP>
                Calculate effort, cost, and project duration based on software size using the original COCOMO algorithm.
              </ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/cocomo2'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon4} alt="COCOMO II Model icon" />
              <ServicesH2>COCOMO II Model</ServicesH2>
              <ServicesP>
                Advanced model for estimating modern software projects with greater flexibility, accuracy, and scalability.
              </ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>

        <ServiceLink to='/delphi'>
          <ServicesCard>
            <ServicesCardInner>
              <ServicesIcon src={Icon5} alt="Delphi Estimation icon" />
              <ServicesH2>Delphi Estimation</ServicesH2>
              <ServicesP>
                Gather expert consensus to estimate software cost and effort through multiple anonymous feedback rounds.
              </ServicesP>
            </ServicesCardInner>
          </ServicesCard>
        </ServiceLink>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

export default Services;
