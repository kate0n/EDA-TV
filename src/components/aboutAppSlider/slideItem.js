import React from 'react';

/* Components */
import { AppStoreButtonWithBorder, GooglePlayButtonWithBorder } from '../appButtons/appButtons';
import phone from '../../images/phone6.png';

  const dots =  [1,2,3,4,5,6,7,8];

const Slide = ({ title, decs, activeSlideIndex, togglActiveSlide }) => {
  return (
    <div className='about-app__slide'>

      <img src={phone} width='443px' heoght='700px' alt='Мокап приложения'/>
      
      <div  className='about-app__slide__description'>
        <h4>{title}</h4>

        <p>{decs}</p>

        <div className='about-app__slide__control'>
          <ol>
          {dots.map((dot, index) => (
            <li className={activeSlideIndex === index ? 'active' : null} key={index} onClick={() => togglActiveSlide(index)}>
              {dot}
            </li>
          ))}
          </ol>
        </div>
      
        <div className='about-app__slide__description__buttons'>
            <AppStoreButtonWithBorder />
            <GooglePlayButtonWithBorder />
        </div>
        
      </div>

    </div>
  )
};

export default Slide;