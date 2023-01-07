import { useState } from "react";
import React from "react";
import { Formik } from "formik";
import "./NewRecipe.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const NewRecipeScreen = () => {
  const [ingredients, setIngredients] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const navigate = useNavigate();

  const addIngredient = () => {
    setIngredients([...ingredients, { name, quantity }]);
    setName("");
    setQuantity("");
  };

  const initialValues = {
    type: "",
    recipeName: "",
    imageURL: "",
    prepTime: "",
    cookTime: "",
    serves: "",
    ingredients: [],
    instructions: "",
  };

  const onSubmit = (values) => {
    values.ingredients = ingredients;
    // console.log(values)
    axios
      .post("https://recipes.devmountain.com/recipes", values)
      .then((res) => {
        console.log(res.data);
        navigate(`/recipe/${res.data[0][0].recipe_id}`);
      })
      .catch((err) => console.log(err));
  };

  const ingredientsDisplay = ingredients.map((ing) => {
    return (
      <li>
        {ing.quantity} {ing.name}
      </li>
    );
  });

  return (
    <section>
      <h1 className="form-title">Tell us about your Recipe!</h1>
      {/* Here you will have a large form. Be prepared, part 4 will have you build this form in detail, and part 5 will have you style it. Do your best! */}
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ values, handleChange, handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="input-container">
                <div className="nameImg-input">
                  <input
                    placeholder="Recipe Name"
                    value={values.recipeName}
                    onChange={handleChange}
                    name="recipeName"
                  />
                  <input
                    placeholder="Image URL"
                    value={values.imageURL}
                    onChange={handleChange}
                    name="imageURL"
                  />
                </div>
              </div>
              
              <div className="radio-btns">
                <span>
                  <input
                    class="big"
                    type="radio"
                    value="Cook"
                    onChange={handleChange}
                    name="type"
                  />
                  <label>Cook</label>
                </span>
                <span>
                  <input
                    class="big"
                    type="radio"
                    value="Bake"
                    onChange={handleChange}
                    name="type"
                  />
                  <label>Bake</label>
                </span>
                <span>
                  <input
                    class="big"
                    type="radio"
                    value="Drink"
                    onChange={handleChange}
                    name="type"
                  />
                  <label>Drink</label>
                </span>
              </div>

              <div className="input-container">
                <div className="time-input">
                  <input
                    placeholder="Prep Time"
                    value={values.prepTime}
                    onChange={handleChange}
                    name="prepTime"
                  />
                  <input
                    placeholder="Cook Time"
                    value={values.cookTime}
                    onChange={handleChange}
                    name="cookTime"
                  />
                  <input
                    placeholder="Serves"
                    value={values.serves}
                    onChange={handleChange}
                    name="serves"
                  />
                </div>
              </div>

              
                <div className="ingredientList-box">
                <div className="ingredient-input-container">
                  <input
                    placeholder="Ingredient"
                    value={name}
                    onChange={(elem) => setName(elem.target.value)}
                  />
                  <input
                    placeholder="Quantity"
                    value={quantity}
                    onChange={(elem) => setQuantity(elem.target.value)}
                  />
                </div>
              
              <ul>{ingredientsDisplay}</ul>
              </div>

              <button
                type="button"
                className="ingredient-button"
                onClick={() => addIngredient()}
              >
                Add Another
              </button>
              <textarea
                placeholder="What are the instructions?"
                value={values.instructions}
                onChange={handleChange}
                name="instructions"
              ></textarea>
              <button type="submit" className="submit-button">
                Save
              </button>
            </form>
          )}}
      </Formik>
    </section>
  );
};

export default NewRecipeScreen;
