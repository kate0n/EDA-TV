import React from "react";

import googlePlayIconWithBorder from '../../images/google-play-icon-with-border.svg';
import googlePlayIcon from '../../images/google-play-icon.svg';
import appStoreIconWithBorder from '../../images/app-store-icon-with-border.svg';
import appStoreIcon from '../../images/app-store-icon.svg';

/* eslint-disable */

export const GooglePlayButtonWithBorder = () => (
    <a href='https://play.google.com/store/apps/details?id=ru.harbordigital.edatvapp' target='_blank'>
      <img src={googlePlayIconWithBorder} alt='Ссылка на Google Play' width='153' height='48' />
    </a>
);

export const AppStoreButtonWithBorder = () => (
  <a href='https://itunes.apple.com/us/app/%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D1%8B-%D0%B5%D0%B4%D0%B0/id1457887085?l=ru&ls=1&mt=8' target='_blank'>
    <img src={appStoreIconWithBorder} alt='Ссылка на App Store' width='153' height='48' />
  </a>
);

export const GooglePlayButton = () => (
    <a href='https://play.google.com/store/apps/details?id=ru.harbordigital.edatvapp' target='_blank'>
      <img src={googlePlayIcon} alt='Ссылка на Google Play' width='200' height='64' />
    </a>
);

export const AppStoreButton= () => (
    <a href='https://itunes.apple.com/us/app/%D1%80%D0%B5%D1%86%D0%B5%D0%BF%D1%82%D1%8B-%D0%B5%D0%B4%D0%B0/id1457887085?l=ru&ls=1&mt=8' target='_blank'>
      <img src={appStoreIcon} alt='Ссылка на App Store' width='200' height='64' />
    </a>
);
