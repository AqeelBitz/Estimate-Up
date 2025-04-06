import React from 'react';
import Video from '../../videos/video.mp4';
import {
  CoverContainer,
  CoverBg,
  VideoBg,
  CoverContent,
  CoverH1,
  CoverP
} from './CoverElements';

const CoverSection = () => {

  return (
    <CoverContainer>
      <CoverBg>
        <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
      </CoverBg>
      <CoverContent>
        <CoverH1>EstimateUp - Smart Software Cost Estimation</CoverH1>
        <CoverP>
          Easily estimate software development costs using trusted techniques like Function Point Analysis, COCOMO, Delphi, and Three-Point Estimation. 
          Save time, reduce project risk, and plan with confidence using EstimateUp.
        </CoverP>
      </CoverContent>
    </CoverContainer>
  );
};

export default CoverSection;
