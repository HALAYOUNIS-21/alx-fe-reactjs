import React from 'react';
import HomePage from './components/HomePage'; // Import HomePage component

const App = () => {
  return (
    <div id="root" className="bg-gray-100 min-h-screen">
      {/* Header */}
      <header className="text-center bg-white shadow-md p-4">
        <h1 className="text-3xl font-bold mb-2">Welcome to My App</h1>
        <p className="text-lg text-gray-600">This is a Recipe Sharing Platform.</p>
      </header>
      
      {/* Main Content */}
      <main className="p-4">
        <HomePage />
      </main>
    </div>
  );
};

export default App;