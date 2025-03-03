import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ServicesContainer = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #010606;
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const ServicesH1 = styled.h1`
  font-size: 2.5rem;
  color: white;
  margin-bottom: 40px;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 30px;
  }

  @media screen and (max-width: 480px) {
    font-size: 1.8rem;
    margin-bottom: 20px;
  }
`;

export const ServicesWrapper = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  align-items: stretch; /* Ensures equal height */
  gap: 20px;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 10px;
  height: 400px; /* Fixed height for uniformity */
  width: 100%;
  padding: 20px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-in-out;
  text-align: center;

  &:hover {
    transform: scale(1.05);
  }

  @media screen and (max-width: 480px) {
    height: 350px; /* Adjust for smaller screens */
    padding: 15px;
  }
`;

export const ServicesIcon = styled.img`
  width: 140px;
  height: 140px;
  margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
  font-size: 1.2rem;
  color: black;
  margin-bottom: 10px;
  flex-grow: 1; /* Ensures uniform alignment */
`;

export const ServicesP = styled.p`
  font-size: 1rem;
  text-align: center;
  color: black;
  flex-grow: 1;
`;

export const ServiceLink = styled(Link)`
  font-size: 1.3rem;
  margin-bottom: 10px;
  color: black;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;
