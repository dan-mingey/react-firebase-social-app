import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import Profile from './components/Profile';
import Settings from './components/Settings';
import Messages from './components/Messages';
import HomePage from './components/HomePage';

function App() {
  // Simulated authentication state
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Bypass for development, remove or secure in production
  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    if (queryParams.get('devBypass') === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  return (
    <Router>
      <Routes>
        <Route path="/signin" element={isAuthenticated ? <Navigate to="/" /> : <SignIn />} />
        <Route path="/signup" element={isAuthenticated ? <Navigate to="/" /> : <SignUp />} />
        <Route path="/" element={isAuthenticated ? <HomePage /> : <Navigate to="/signin" />} />
        <Route path="/profile" element={isAuthenticated ? <Profile /> : <Navigate to="/signin" />} />
        <Route path="/settings" element={isAuthenticated ? <Settings /> : <Navigate to="/signin" />} />
        <Route path="/messages" element={isAuthenticated ? <Messages /> : <Navigate to="/signin" />} />
        {/* Other routes can also be protected similarly */}
      </Routes>
    </Router>
  );
}

export default App;
