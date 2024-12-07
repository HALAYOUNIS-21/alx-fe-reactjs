import { useState } from 'react';
import Counter from './components/Counter';
import UserProfile from './components/UserProfile';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import viteLogo from '/vite.svg'; // Assuming viteLogo is imported correctly
import reactLogo from '/react.svg'; // Assuming reactLogo is imported correctly

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      {/* Header at the top */}
      <Header />

      {/* Main content section */}
      <main style={{ padding: '20px' }}>
        <WelcomeMessage />
        <MainContent />
        
        {/* User profile example */}
        <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

        {/* Counter example */}
        <Counter />

        {/* Vite and React Logos */}
        <div className="logos" style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
            <img src={viteLogo} className="logo" alt="Vite logo" />
          </a>
          <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
            <img src={reactLogo} className="logo react" alt="React logo" />
          </a>
        </div>

        {/* Example Counter Button */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount(count + 1)}>
              count is {count}
            </button>
            <p>Edit <code>src/App.jsx</code> and save to test HMR</p>
          </div>
        </div>
      </main>

      {/* Footer at the bottom */}
      <Footer />
    </div>
  );
}

export default App;