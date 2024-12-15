import React from "react";
import TodoList from "./components/TodoList"; // Import TodoList
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Todo List</h1>
      </header>
      <main>
        <TodoList /> {/* Use TodoList component */}
      </main>
    </div>
  );
};

export default App;