import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MyMoves from './components/MyMoves';
import MyProfile from './components/MyProfile';
import GetQuote from './components/GetQuote';
import Logout from './components/Logout';
import Sidebar from './components/Sidebar';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/my-moves" element={<MyMoves />} />
            <Route path="/my-profile" element={<MyProfile />} />
            <Route path="/get-quote" element={<GetQuote />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/" element={<MyMoves />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
