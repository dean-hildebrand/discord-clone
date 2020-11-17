import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import './App.css';
import Sidebar from './components/Sidebar'
import Chat from './components/Chat'
import Login from './components/Login'
import { selectUser } from './features/userSlice'
import { auth } from './app/firebase'
import { login, logout } from './features/userSlice'

function App() {
  //hook to dispatch actions
  const dispatch = useDispatch();
  //react hook to grab state
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      // console.log(authUser);
      if(authUser) {
        // user is logged in
        dispatch(
          login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName,
        }))
      } else {
        // user is logged out
        dispatch(logout());
      }
    })
  }, [dispatch])
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
