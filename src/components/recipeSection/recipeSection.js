import React, { useState } from "react"

/* Components */
import Container from "../container/Container"
import DownloadAppBlock from "./downloadAppBlock"

import data from "../../data"

const RecipeSection = () => {
  const [recipeIndex, setRecipeIndex] = useState(0)

  const togglRecipe = () => {
    recipeIndex < data.recipies.length - 1
      ? setRecipeIndex(recipeIndex + 1)
      : setRecipeIndex(0)
  }

  return (
    <Container>
      <h1>Мобильное приложение телеканала Еда</h1>

      <section className="section-recipe">
        <div className="section-recipe__title">
          <h3>{data.recipies[recipeIndex].title}</h3>
          <span onClick={() => togglRecipe()}>Показать другой</span>
        </div>

        <div className="section-recipe__header-text">
          <span>{data.recipies[recipeIndex].author}</span>
          <span>
            Время приготовления: {data.recipies[recipeIndex].timeForCooking}
          </span>
          <span>
            Потребуется {data.recipies[recipeIndex].incridients.length + 1}{" "}
            ингредиентов
          </span>
        </div>

        <div className="section-recipe__card">
          <img src={data.recipies[recipeIndex].img} alt="Фото блюда" />
          <div className="section-recipe__card__ingredients">
            <h4>Ингридиенты</h4>
            {data.recipies[recipeIndex].incridients
              .slice(0, 8)
              .map((incridient, index) => (
                <span key={index}>{incridient}</span>
              ))}
            <span>
              <a href={data.recipies[recipeIndex].url} target="_blank">
                И еще {data.recipies[recipeIndex].incridients.length - 8}{" "}
                ингредиентов
              </a>
            </span>
          </div>
        </div>

        <div className="section-recipe__instruction">
          <h4>Способ приготовления</h4>
          <div className="section-recipe__instruction__steps">
            <img
              src={data.recipies[recipeIndex].cookingMethod.img}
              alt="Первый этап приготовления"
              width="164px"
              height="164px"
            />
            <p>{data.recipies[recipeIndex].cookingMethod.text}</p>
          </div>
        </div>

        <div className="fade"></div>

        <DownloadAppBlock
          url={data.recipies[recipeIndex].url}
          recipeTitle={data.recipies[recipeIndex].title}
        />
      </section>
    </Container>
  )
}

export default RecipeSection
