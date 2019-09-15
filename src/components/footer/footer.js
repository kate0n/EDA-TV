import React from "react"

/* Components */
import { AppStoreButtonWithBorder, GooglePlayButtonWithBorder } from '../appButtons/AppButtons';

import logoWhite from '../../images/logo-white.svg';
import data from '../../data';
import Container from '../container/Container';

/* eslint-disable */
const Footer = () => (
  <footer className='footer'>
    <Container>
      <div className='footer__wrapper'>
        <div>
          <img src={logoWhite} alt='Логотип' width='80' height='48' />
          <AppStoreButtonWithBorder />
          <GooglePlayButtonWithBorder />
        </div>

        <div>
          {data.socialContacts.map((socialContact, index) => {
            return (
            <a href={socialContact.link} target='_blank' key={index}>
              <img src={socialContact.icon} alt={socialContact.alt} width='40' height='40' />
            </a>
            )
          })}
        </div>
      </div>
    </Container>
  </footer>
)

export default Footer;
