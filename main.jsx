import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import Landing from './components/Landing.jsx';
import About from './components/About.jsx';
import Check from './components/Check.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Landing />} /> {/* Default route for '/' */}
          <Route path="check" element={<Check />} />
          <Route path="about" element={<About />} />
        </Route>
      </Routes>
    </Router>
  </StrictMode>
);
