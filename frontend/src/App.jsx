
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Donate from './pages/Donate';
import DonorsPage from './pages/DonorsPage';
import Logout from './pages/Logout';
import Mainpage from './pages/MainPage';
import Layout from './Components/Layout';
import PublicLayout from './Components/PublicLayout';
import ProtectedRoute from './Components/ProtectedRoute';
// import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route>
        <Route path="/app" element={
          <ProtectedRoute>
            <Layout />
          </ProtectedRoute>}
          >
          <Route path="Mainpage" element={
             <ProtectedRoute>
            <Mainpage />
            </ProtectedRoute >
            } />
          <Route path="about" element={
            <ProtectedRoute>
            <About />
            </ProtectedRoute >
            } />
          <Route path="donate" element={

            <ProtectedRoute>
            <Donate />
            </ProtectedRoute >
            } />
          <Route path="donars" element={
            <ProtectedRoute>
            <DonorsPage />
            </ProtectedRoute>
            } />
          <Route path="logout" element={<Logout />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;