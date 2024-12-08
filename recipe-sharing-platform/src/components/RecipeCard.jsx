import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:scale-105 transform transition-transform duration-300">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-40 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-bold text-gray-800">{recipe.title}</h2>
        <p className="text-gray-600">{recipe.summary}</p>
      </div>
    </div>
  );
};

export default RecipeCard;