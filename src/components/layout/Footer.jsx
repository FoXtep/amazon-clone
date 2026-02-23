import React from 'react';
import { FooterContainer, FooterContent, FooterSection, FooterBottom } from './styles';

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterSection>
          <h4>Get to Know Us</h4>
          <ul>
            <li><a href="#careers">Careers</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#about">About Amazon</a></li>
            <li><a href="#investor">Investor Relations</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Make Money with Us</h4>
          <ul>
            <li><a href="#sell">Sell on Amazon</a></li>
            <li><a href="#advertise">Advertise Your Products</a></li>
            <li><a href="#associates">Amazon Associates</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Amazon Payment Products</h4>
          <ul>
            <li><a href="#amazon-pay">Amazon Pay</a></li>
            <li><a href="#amazon-credit">Amazon Credit</a></li>
          </ul>
        </FooterSection>

        <FooterSection>
          <h4>Let Us Help You</h4>
          <ul>
            <li><a href="#account">Your Account</a></li>
            <li><a href="#help">Help</a></li>
            <li><a href="#returns">Returns Centre</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </FooterSection>
      </FooterContent>

      <FooterBottom>
        <p>&copy; 2024 Amazon Clone. All rights reserved.</p>
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;
