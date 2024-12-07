import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css' // Make sure Tailwind is imported

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="flex justify-center space-x-4 py-8">
        <a href="https://vite.dev" target="_blank" rel="noopener noreferrer">
          <img src={viteLogo} className="h-16" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noopener noreferrer">
          <img src={reactLogo} className="h-16" alt="React logo" />
        </a>
      </div>
      <h1 className="text-3xl font-bold text-center text-blue-500">Vite + React</h1>
      <div className="card flex flex-col items-center mt-8">
        <button
          onClick={() => setCount((count) => count + 1)}
          className="bg-blue-500 text-white font-semibold py-2 px-4 rounded hover:bg-blue-600 transition"
        >
          count is {count}
        </button>
        <p className="mt-4 text-gray-600">
          Edit <code className="text-blue-500">src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs text-center mt-4 text-sm text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App