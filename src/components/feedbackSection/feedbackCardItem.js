import React, { Fragment } from 'react';

import AppleLogo from '../../images/apple-logo.svg';
import AndroidLogo from '../../images/android-logo.svg';

const FeedbackCardItem = ({ name, text, from, index, showPopUp }) => (
  <section className='feedbacks__card-item'>
    <Fragment>
      <p>{name}</p>

      <p>
        {text.length > 173 ?
        <Fragment>
          {text.slice(0, 173)}
          <div className='feedbacks__card-item__read-more' onClick={() => showPopUp(index)}>
            &nbsp;ещё
          </div> 
        </Fragment>
        :
        text
        }
      </p>
    </Fragment>

    <p>
      {from === 'IOS' ? 
        <img src={AppleLogo} width='17px' height='21px' alt='Apple Logo' /> :
        <img src={AndroidLogo} width='19px' height='22px' alt='Android Logo' />
      }
      <a href='https://itunes.apple.com/us/app/%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D1%8B-%D0%B5%D0%B4%D0%B0/id1457887085?l=ru&ls=1&mt=8'>
        Открыть в магазине приложений
      </a>
    </p>

  </section>
)

export default FeedbackCardItem;