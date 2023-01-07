import React from "react";
import { useNavigate } from "react-router-dom"
import './RecipeCard.css'

const RecipeCard = ({ recipe }) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/recipe/${recipe.recipe_id}`)
  }

  return (
    <div className="recipe-card">
      <div className="recipe-pic">
      <img src={recipe.image_url} />
      </div>
      <h3>{recipe.recipe_name}</h3>
      <div className="recipeCard-button">
        <button className="more-btn" onClick={handleClick}>See More</button>
      </div>
    </div>
  );
};

export default RecipeCard