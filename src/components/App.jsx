import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Layout from './PageLayouts/Layout';
import Dashboard from './Dashboard/Dashboard';
import About from './About/About';
import MyStory from './About/MyStory';
import Mission from './About/Mission';
import Skills from './About/Skills';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="about" element={<About />}>
            <Route index element={<MyStory />} />
            <Route path="mission" element={<Mission />} />
            <Route path="skills" element={<Skills />} />
          </Route>

          <Route path="projects" element={<Projects />} />
          <Route path="contact" element={<Contact />} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Route>
      </Routes>
    </Router>
  );
}
