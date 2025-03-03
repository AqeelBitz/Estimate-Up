import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};
  padding: 80px 0;

  @media screen and (max-width: 768px) {
    padding: 60px 0;
  }

  @media screen and (max-width: 480px) {
    padding: 40px 0;
  }
`;

export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Flexible grid */
  align-items: center;
  column-gap: 30px;
  row-gap: 50px;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: center;
  }
`;

export const Column1 = styled.div`
  padding: 0 15px;
`;

export const Column2 = styled.div`
  padding: 0 15px;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
`;

export const TopLine = styled.p`
  color: #01bf71;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};

  @media screen and (max-width: 768px) {
    font-size: 36px;
  }

  @media screen and (max-width: 480px) {
    font-size: 28px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 768px) {
    justify-content: center;
  }
`;

export const ImgWrap = styled.div`
  max-width: 500px;
  display: flex;
  justify-content: center;
`;

export const Img = styled.img`
  width: 100%;
  height: auto;
  max-width: 100%;
  border-radius: 10px; /* Optional for better aesthetics */
`;
