import React, { useState } from 'react';
import Slider from 'react-slick';

/* Components */
import Slide from './slideItem';
import Container from '../container/container';

import rightArrow from '../../images/right-arrow.svg';
import leftArrow from '../../images/left-arrow.svg';
import data from '../../data';


export const AboutAppSlider = () => {
  const [ activeSlide, setActiveSlide ] = useState(0)

  const togglCurrentSlideIndex = e =>{ 
    setActiveSlide(e);
    console.log('slider', activeSlide);
  };

  const settings = {
    fade: true,
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <img src={rightArrow} className='next' id='nextSlide' alt='Следующий' />,
    prevArrow: <img src={leftArrow} className='prev' id='prevSlide' alt='Предыдущий'/>,
    afterChange: togglCurrentSlideIndex
  };
  return (
  <Container>
    <section className='about-app'>
      <Slider {...settings}>
        {data.aboutApp.map((item, index) => (
          <Slide title={item.title} decs={item.description} key={index} activeSlideIndex={activeSlide} togglActiveSlide={togglCurrentSlideIndex}/>
        ))}
      </Slider>
    </section>
  </Container>
  )
}

export default AboutAppSlider;