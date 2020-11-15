import React from 'react';
import { Counter } from './features/Counter';
import './App.css';
import Sidebar from './components/Sidebar'

function App() {
  return (
    <div className="app">
      <h1>Discord clone with redux</h1>
      <Sidebar />
      {/* Chat */}
    </div>
  );
}

export default App;
