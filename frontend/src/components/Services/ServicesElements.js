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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjusted for larger cards */
  align-items: stretch;
  gap: 20px;
  padding: 0 20px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const ServicesCard = styled.div`
  width: 240px; /* Increased card width */
  height: 320px; /* Increased card height */
  background-image: linear-gradient(163deg, #00ff75 0%, #3700ff 100%);
  border-radius: 20px;
  transition: all 0.3s;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;

  &:hover {
    box-shadow: 0px 0px 30px 1px rgba(0, 255, 117, 0.30);
  }
`;

export const ServicesCardInner = styled.div`
  width: 240px; /* Increased inner card width */
  height: 320px; /* Increased inner card height */
  background-color: #42565b; /* Updated background color */
  border-radius: 20px;
  transition: all 0.2s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;

  &:hover {
    transform: scale(0.98);
    border-radius: 20px;
  }
`;

export const ServicesIcon = styled.img`
  width: 120px; /* Increased image size */
  height: 120px; /* Increased image size */
  margin-bottom: 15px; /* Adjusted margin */
`;

export const ServicesH2 = styled.h2`
  font-size: 1.4rem; /* Increased font size */
  color: white;
  margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-weight: normal;
    font-size: 0.8rem;
    text-align: center;
    color: white;
`;

export const ServiceLink = styled(Link)`
  font-size: 1.1rem; /* Increased font size */
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    color: #01bf71;
    transition: 0.3s ease-in-out;
  }
`;