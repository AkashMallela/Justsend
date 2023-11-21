import './App.css';
import { useState } from 'react';
import Home from './pages/Home/Home';
import Auth from './pages/Auth/Auth';
import { GoogleOAuthProvider } from '@react-oauth/google';


function App() {

  const [isSignup, setIsSignup] = useState(false);


  return (
    <div className="App">
    </div>
  );
}

export default App;
