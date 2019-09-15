import React from 'react'

const FeedbackPopUp = ({visibility, name, text, closePopUp }) => (
  <div className='popup' style={{ visibility: visibility}}>
    <button className='popup__close-button' onClick={closePopUp} />
    
    <div className='popup__inner'>
      <p>{name}</p>
      <p>{text}</p>
    </div>
  </div>
)

export default FeedbackPopUp