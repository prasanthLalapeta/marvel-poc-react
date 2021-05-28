import React from 'react';
import { Container } from './styles';

const Footer = () => {
  return (
    <Container>
      <a href="http://marvel.com">Data provided by Marvel. © 2020 MARVEL</a>
      <a href="https://prasanthlalapeta.com/" target="_blank">UI Design & Developed by <span className="company-name">Prasanth Lalapeta</span></a>
    </Container>
  )
}

export default Footer;
