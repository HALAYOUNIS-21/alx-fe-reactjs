import React from "react";
import useRecipeStore from "./recipeStore";

const FavoritesList = () => {
  // Get recipes and favorites from the Zustand store
  const recipes = useRecipeStore((state) => state.recipes);
  const favoriteIds = useRecipeStore((state) => state.favorites);

  // Filter favorites once without causing re-render loops
  const favorites = recipes.filter((recipe) => favoriteIds.includes(recipe.id));

  return (
    <div>
      <h2>My Favorites</h2>
      {favorites.length === 0 ? (
        <p>No favorite recipes yet.</p>
      ) : (
        favorites.map((recipe) => (
          <div key={recipe.id}>
            <h3>{recipe.title}</h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default FavoritesList;