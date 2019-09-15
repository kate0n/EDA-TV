import React from "react"

/* Components */
import Container from '../container/Container';
import { GooglePlayButtonWithBorder } from '../appButtons/AppButtons';

import logo from '../../images/logo.svg';

/* eslint-disable */
const Header = () => (
  <Container>
    <header className='header'>
      <img src={logo} alt='Логотип' width='83' height='50' />
      <GooglePlayButtonWithBorder />
    </header>
  </Container>
)

export default Header
