// To-do
// This RecipeList component contains two nested map calls. To simplify it, extract a Recipe component from it which will accept id, name, and ingredients props. Where do you place the outer key and why?

import { recipes } from "./data.js";

function Recipe({ id, name, ingredients }) {
  return (
    <div>
      <h2>{name}</h2>
      <ul>
        {ingredients.map((ingredient) => (
          <li key={ingredient}>{ingredient}</li>
        ))}
      </ul>
    </div>
  );
}

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map((recipe) => (
        <div>
          <Recipe
            key={recipe.id}
            id={recipe.id}
            name={recipe.name}
            ingredients={recipe.ingredients}
          />
        </div>
      ))}
    </div>
  );
}

// Here we passed the key to recipe component because Recipe is a child of an array and is being passed with the map array method
