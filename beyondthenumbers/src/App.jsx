import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Stories from './components/Stories.jsx';
import Story from './components/Story.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/story/:name" element={<Story />} />
      </Routes>
    </Router>
  );
}

export default App;
