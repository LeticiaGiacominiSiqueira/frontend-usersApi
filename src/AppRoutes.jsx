import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import UserDetails from './pages/UserDetails';

const AppRoutes = () => (
  <Routes>
    <Route path="/usuarios" element={<Home />} />
    <Route path="/dados/:id" element={<UserDetails />} />
    <Route path="*" element={<Navigate to="/usuarios" replace />} />
  </Routes>
);

export default AppRoutes;
