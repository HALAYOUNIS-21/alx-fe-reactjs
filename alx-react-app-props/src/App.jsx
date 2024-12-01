import { useState } from 'react';
import UserContext from './UserContext';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import ProfilePage from './components/ProfilePage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);

  // Define the user data to be provided to the context
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <div className="App">
        <Header />
        <main style={{ padding: '20px' }}>
          <WelcomeMessage />
          <MainContent />
          <UserProfile /> {/* Should access data from UserContext */}
          <Counter />
          <ProfilePage /> {/* Contains UserInfo and UserDetails */}
          <div className="logos" style={{ margin: '20px 0', display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
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
        <Footer />
      </div>
    </UserContext.Provider>
  );
}

export default App;