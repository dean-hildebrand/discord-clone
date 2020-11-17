import React from 'react';
import { useSelector } from 'react-redux'
import './App.css';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import { selectUser } from './features/userSlice'

function App() {
  //special react hook to grab state
  const user = useSelector(selectUser);
  return (
    <div className="app">
    {user ? (
      <>
      <Sidebar />
      <Chat />
      </>
    ) : (
      <Login />
    )}
    </div>
  );
}

export default App;
