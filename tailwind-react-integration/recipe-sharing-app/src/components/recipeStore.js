import { create } from "zustand";

const useRecipeStore = create((set) => ({
  recipes: [],
  favorites: [], // Array to store favorite recipe IDs
  recommendations: [], // Array for recommended recipes
  searchTerm: "",
  filteredRecipes: [],

  // Action to add a recipe to favorites
  addFavorite: (recipeId) =>
    set((state) => ({
      favorites: [...state.favorites, recipeId],
    })),

  // Action to remove a recipe from favorites
  removeFavorite: (recipeId) =>
    set((state) => ({
      favorites: state.favorites.filter((id) => id !== recipeId),
    })),

  // Action to generate personalized recommendations based on favorites
  generateRecommendations: () =>
    set((state) => {
      const recommended = state.recipes.filter(
        (recipe) =>
          state.favorites.includes(recipe.id) && Math.random() > 0.5
      );
      return { recommendations: recommended };
    }),

  // Action to set the search term and update filtered recipes
  setSearchTerm: (term) =>
    set((state) => {
      const searchTerm = term.toLowerCase();
      const filteredRecipes = state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(searchTerm)
      );
      return { searchTerm: term, filteredRecipes };
    }),

  // Action to set recipes and initialize filteredRecipes
  setRecipes: (recipes) =>
    set({
      recipes,
      filteredRecipes: recipes,
    }),

  // Action to add a new recipe and update filtered recipes
  addRecipe: (newRecipe) =>
    set((state) => {
      const updatedRecipes = [...state.recipes, newRecipe];
      const filteredRecipes = updatedRecipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      );
      return { recipes: updatedRecipes, filteredRecipes };
    }),
}));

export default useRecipeStore;