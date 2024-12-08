import React from "react";
import { Link } from "react-router-dom";
import useRecipeStore from "./recipeStore"; // Corrected path to recipeStore

const RecipeList = () => {
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes); // Get filtered recipes from Zustand store
  const favorites = useRecipeStore((state) => state.favorites); // Get favorite recipe IDs
  const addFavorite = useRecipeStore((state) => state.addFavorite); // Action to add favorite
  const removeFavorite = useRecipeStore((state) => state.removeFavorite); // Action to remove favorite

  return (
    <div>
      <h2>Recipe List</h2>
      {filteredRecipes.length === 0 ? (
        <p>No recipes match your search.</p>
      ) : (
        filteredRecipes.map((recipe) => (
          <div
            key={recipe.id}
            style={{
              marginBottom: "1rem",
              padding: "1rem",
              border: "1px solid #ccc",
              borderRadius: "5px",
            }}
          >
            {/* Link to RecipeDetails */}
            <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: "none" }}>
              <h3>{recipe.title}</h3>
            </Link>
            <p>{recipe.description}</p>

            {/* Button to add/remove from favorites */}
            {favorites.includes(recipe.id) ? (
              <button
                onClick={() => removeFavorite(recipe.id)}
                style={{
                  backgroundColor: "red",
                  color: "white",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Remove from Favorites
              </button>
            ) : (
              <button
                onClick={() => addFavorite(recipe.id)}
                style={{
                  backgroundColor: "green",
                  color: "white",
                  padding: "0.5rem",
                  border: "none",
                  borderRadius: "5px",
                  cursor: "pointer",
                }}
              >
                Add to Favorites
              </button>
            )}
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;