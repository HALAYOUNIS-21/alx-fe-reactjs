import React from "react";
import UserProfile from "./components/UserProfile";

const App = () => {
  return (
    <>
      {/* User Profile Component */}
      <div>
        <UserProfile />
      </div>
      
      {/* Hello Tailwind CSS Section */}
      <div className="flex items-center justify-center h-screen bg-gray-100">
        <h1 className="text-4xl font-bold text-blue-600">Hello, Tailwind CSS!</h1>
      </div>
    </>
  );
};

export default App;