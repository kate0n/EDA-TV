import React, { useState } from 'react'

import Slider from 'react-slick';
import FeedbackCardItem from './feedbackCardItem';
import FeedbackPopUp from './feedbackPopUp';
import data from '../../data';
import rightArrow from '../../images/right-arrow.svg';
import leftArrow from '../../images/left-arrow.svg';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <img src={rightArrow} className='nextFeedback' id='nextFeedback' alt='Следующий' />,
  prevArrow: <img src={leftArrow} className='prevFeedback' id='prevFeedback' alt='Предыдущий'/>,
};

const changeSlidesToShow = () => {
  
}

const FeedbackSlider= () => {
  const [ visibility, setVisibility ] = useState('hidden');
  const [ feedbackIndex, setFeedbackIndex ] = useState(0);

  const showPopUp = (index) => {
    setFeedbackIndex(index);
    setVisibility('visible');
  };

  const closePopUp = () => {
    setVisibility('hidden');
  };

  return (
    <section className='feedbacks'>
      <Slider {...settings}>
      {data.feedbacks.map((feedback, index) => (
        <FeedbackCardItem
          name={feedback.name}
          text={feedback.text}
          key={index}
          from={feedback.from}
          showPopUp={showPopUp}
          index={index} />
      ))}
      </Slider>
      <div className='feedback-fade'></div>
      <FeedbackPopUp
        visibility={visibility}
        name={data.feedbacks[feedbackIndex].name}
        text={data.feedbacks[feedbackIndex].text}
        closePopUp={closePopUp} />
    </section>
  )
}

export default FeedbackSlider