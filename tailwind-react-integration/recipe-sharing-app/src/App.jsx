import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import SearchBar from "./components/SearchBar";
import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import FavoritesList from "./components/FavoritesList";
import RecommendationsList from "./components/RecommendationsList";

function App() {
  return (
    <Router>
      <div className="app-container">
        <header>
          <h1>Recipe Sharing App</h1>
        </header>
        <main>
          <Routes>
            {/* Home Route */}
            <Route
              path="/"
              element={
                <>
                  {/* Search functionality */}
                  <SearchBar />
                  {/* Form to add new recipes */}
                  <AddRecipeForm />
                  {/* List of filtered recipes */}
                  <RecipeList />
                  <FavoritesList />
                  <RecommendationsList />
                </>
              }
            />
            {/* Dynamic Route for Recipe Details */}
            <Route path="/recipe/:id" element={<RecipeDetails />} />
          </Routes>
        </main>
        <footer>
          <p>Made with ❤️ using React and Zustand</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;