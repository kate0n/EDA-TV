import React from "react";

/* Components */
import { AppStoreButton, GooglePlayButton } from '../appButtons/appButtons';

export const DownloadAppBlock = ({ recipeTitle, url }) => (
    <section className='download-app-block'>
      <h3>Посмотреть полный рецепт<br/> {recipeTitle} <br/> в мобильном приложении</h3>
      <div>
        <AppStoreButton />
        <GooglePlayButton />
      </div>
      {/* eslint-disable-next-line */}
      <p>Или перейти на страницу рецепта на <a href={url} target='_blank'><u> сайте</u></a></p>
    </section>
)

export default DownloadAppBlock;