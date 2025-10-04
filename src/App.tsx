import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Goals from './pages/Goals';
import Marketplace from './pages/Marketplace';
import Learn from './pages/Learn';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/learn" element={<Learn />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;