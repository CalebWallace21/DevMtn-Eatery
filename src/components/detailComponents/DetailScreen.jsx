import React from 'react'
import {useParams} from 'react-router-dom'
import {useEffect, useState} from 'react'
import axios from 'axios'
import './DetailScreen.css'


const DetailScreen = () => {
  const {id} = useParams()
  const [recipe, setRecipe] = useState({});
  
  useEffect(() => {
    axios.get(`https://recipes.devmountain.com/recipes/${id}`)
    .then((res) => {
      setRecipe(res.data)
    })
  }, [])

  return (
    <section>
      {/* Welcome to the details page! This page will be reusable. Follow instructions to know what to do here. */}
      <div className="details-top">
      <h1>{recipe.recipe_name}</h1>
      <img src={recipe.image_url} />
      </div>

      <div className="info-section">
      <div className="ingredient-section">
      <h2>Recipe</h2>
      <h3>Prep Time: {recipe.prep_time}</h3>
      <h3>Cook Time: {recipe.cook_time}</h3>
      <h3>Serves: {recipe.serves}</h3>
      <br/>
      <h2>Ingredients</h2>
      {recipe.ingredients && recipe.ingredients.map((ingred, index) => {
        return <h3>{ingred.quantity} {ingred.ingredient}</h3>
      })}
      </div>
      <div className="instruction-section">
        <h3 style={{whiteSpace: "pre-wrap"}}>
          {recipe.instructions && JSON.parse(recipe.instructions)}
        </h3>
      </div>
      </div>
    </section>
  );
};

export default DetailScreen;
