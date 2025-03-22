import React, { useState } from 'react';
import Video from '../../videos/video.mp4';
import { CoverContainer, CoverBg, VideoBg, CoverContent, CoverH1, CoverP, CoverBtnWrapper, Button, ArrowForward, ArrowRight } from './CoverElements';

const CoverSection = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>Easier Estimation, More Savings</CoverH1>
        <CoverP>Sign up for a new account today and enjoy our awesome features.</CoverP>

      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
