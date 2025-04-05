import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin, FaArrowUp } from 'react-icons/fa';
import { 
  FooterContainer, 
  FooterWrapper, 
  FooterLinksContainer, 
  FooterLinksWrapper, 
  FooterLinkItems, 
  FooterLinkTitle, 
  FooterLink, 
  SocialMedia, 
  SocialMediaWrapper, 
  WebsiteRights, 
  SocialIcons, 
  SocialIconLink, 
  BackToTop,
  FooterContent,
  FooterDescription,
  FooterDivider
} from './FooterElements';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContent>
          <FooterLinksContainer>
            <FooterLinksWrapper>
              <FooterLinkItems>
                <FooterLinkTitle>Estimation Methods</FooterLinkTitle>
                <FooterLink to='/tp'>Three Point</FooterLink>
                <FooterLink to='/fp'>Function Point</FooterLink>
                <FooterLink to='/cocomo'>COCOMO</FooterLink>
                <FooterLink to='/cocomo2'>COCOMO II</FooterLink>
                <FooterLink to='/delphi'>Delphi</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Company</FooterLinkTitle>
                <FooterLink to='/howitswork'>How it Works</FooterLink>
                <FooterLink to='/terms'>Terms of Service</FooterLink>
                <FooterLink to='/about'>About Us</FooterLink>
              </FooterLinkItems>

              <FooterLinkItems>
                <FooterLinkTitle>Resources</FooterLinkTitle>
                <FooterLink to='/blog'>Blog</FooterLink>
                <FooterLink to='/tutorials'>Tutorials</FooterLink>
                <FooterLink to='/documentation'>Documentation</FooterLink>
                <FooterLink to='/faq'>FAQ</FooterLink>
              </FooterLinkItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>

          <FooterDivider />

          <FooterDescription>
            EstimateUp is a modern estimation platform designed to streamline software project planning using techniques like COCOMO, Function Point Analysis, and Delphi. Trusted by developers and managers alike.
          </FooterDescription>

          <SocialMedia>
            <SocialMediaWrapper>
              <WebsiteRights>
                © {new Date().getFullYear()} EstimateUp. All rights reserved.
              </WebsiteRights>
              <SocialIcons>
                <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="/" target="_blank" aria-label="LinkedIn">
                  <FaLinkedin />
                </SocialIconLink>
              </SocialIcons>
            </SocialMediaWrapper>
          </SocialMedia>
        </FooterContent>

        <BackToTop onClick={toggleHome} aria-label="Back to top">
          <FaArrowUp />
        </BackToTop>
      </FooterWrapper>
    </FooterContainer>
  );
};

export default Footer;