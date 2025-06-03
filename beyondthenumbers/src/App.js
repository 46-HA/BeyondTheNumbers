import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Stories from './pages/Stories';
import StoryPage from './pages/StoryPage'; // NEW COMPONENT

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/pages/:id" element={<StoryPage />} /> {/* Dynamic route */}
      </Routes>
    </Router>
  );
};

export default App;
