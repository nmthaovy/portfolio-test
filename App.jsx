import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import WireframeLayout from './components/WireframeLayout';
import WireframeHome from './pages/wireframe/Home';
import WireframeProjects from './pages/wireframe/Projects';
import WireframeAbout from './pages/wireframe/About';

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Styled App Routes */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="projects" element={<Projects />} />
          <Route path="about" element={<About />} />
        </Route>

        {/* Wireframe Routes (Reference) */}
        <Route path="/wireframe" element={<WireframeLayout />}>
          <Route index element={<WireframeHome />} />
          <Route path="projects" element={<WireframeProjects />} />
          <Route path="about" element={<WireframeAbout />} />
        </Route>

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
