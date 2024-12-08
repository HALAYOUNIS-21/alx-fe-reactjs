import React from 'react';
import HomePage from './components/HomePage'; // Import HomePage component

const App = () => {
  return (
    <div id="root" className="bg-gray-100 min-h-screen p-4">
      <header className="text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to My App</h1>
        <p className="text-lg text-gray-600">This is a Recipe Sharing Platform.</p>
      </header>
      
      <main>
        <HomePage /> {/* Display the Home Page */}
      </main>
    </div>
  );
};

export default App;