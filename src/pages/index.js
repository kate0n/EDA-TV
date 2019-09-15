import React from "react"

import Layout from "../components/layout"
import RecipeSection from '../components/recipeSection/recipeSection';
import AboutAppSlider from '../components/aboutAppSlider/aboutAppSlider';
import FeedbackSection from '../components/feedbackSection/feedbackSection';

import '../styles/main.scss';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const IndexPage = () => (
  <Layout>
    <RecipeSection />
    <AboutAppSlider />
    <FeedbackSection />
  </Layout>
)

export default IndexPage
