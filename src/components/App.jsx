import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

import Dashboard from './Dashboard/Dashboard';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
