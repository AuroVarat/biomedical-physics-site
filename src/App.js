import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import ResearchArea from "./pages/Research";
import Events from './pages/Events';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route path="/research-area" element={<ResearchArea />} />
        <Route path="/events" element={<Events />} />
      </Routes>
    </Router>
  );
}

export default App;

