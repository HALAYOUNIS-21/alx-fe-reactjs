import React from "react";
import useRecipeStore from "./recipeStore";

const SearchBar = () => {
  const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

  return (
    <input
      type="text"
      placeholder="Search recipes..."
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{
        padding: "0.5rem",
        marginBottom: "1rem",
        width: "100%",
        boxSizing: "border-box",
      }}
    />
  );
};

export default SearchBar;