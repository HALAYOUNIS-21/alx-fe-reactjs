import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json'; // Import mock data

const RecipeDetail = () => {
  const { id } = useParams(); // Get recipe ID from URL parameters
  const [recipe, setRecipe] = useState(null);

  // Use useEffect to fetch recipe data when the component mounts
  useEffect(() => {
    const foundRecipe = data.find((item) => item.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  // Handle case where recipe is not found
  if (!recipe) {
    return <p className="text-center text-red-500">Recipe not found!</p>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white shadow-lg rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-4">{recipe.title}</h1>
        <img
          src={recipe.image}
          alt={recipe.title}
          className="w-full h-64 object-cover rounded-md mb-4"
        />
        <h2 className="text-xl font-semibold mb-2">Ingredients:</h2>
        <ul className="list-disc list-inside mb-4">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index} className="text-gray-700">{ingredient}</li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-2">Cooking Instructions:</h2>
        <ol className="list-decimal list-inside">
          {recipe.instructions.map((step, index) => (
            <li key={index} className="mb-2 text-gray-700">{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default RecipeDetail;