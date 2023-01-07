import React, { useState } from "react";
import RecipeCard from '../RecipeCardComponent/RecipeCard'
import { BiSearchAlt2 } from "react-icons/bi";

const RecipeContainer = ({recipes}) => {
  const [search, setSearch] = useState("");

  const recipeSearch = recipes 
    .filter((recipe, index) => {
      let recipeName = recipe.recipe_name.toLowerCase()
      let searchItem = search.toLowerCase()
      return recipeName.includes(searchItem)
    })
    .map((recipe, index) => {
      return <RecipeCard recipe={recipe} />
    })

  return (
    <section>
      <span className="search-bar">
        <BiSearchAlt2 size="2em" color="#DA7635" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for a Recipe"
        />
      </span>
      
      <div className="recipe-container">
        {recipeSearch ? recipeSearch : <h2>No Recipes Currently</h2>}
      </div>
    </section>
  );
};

export default RecipeContainer;
