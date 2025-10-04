import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import Calculator from './pages/Calculator';
import Goals from './pages/Goals';
import Marketplace from './pages/Marketplace';
import HomeDashboard from './pages/HomeDashboard';
import Learn from './pages/Learn';
import Careers from './pages/Careers';
import HelpContact from './pages/HelpContact';
import SearchResults from './pages/SearchResults';
import ProfileEdit from './pages/ProfileEdit';
import NotificationsPanel from './pages/NotificationsPanel';
import ForumList from './pages/ForumList';
import ForumThread from './pages/ForumThread';
import Reports from './pages/Reports';

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
          <Route path="/dashboard/home" element={<HomeDashboard />} />
          <Route path="/dashboard/learn" element={<Learn />} />
          <Route path="/dashboard/careers" element={<Careers />} />
          <Route path="/dashboard/help" element={<HelpContact />} />
          <Route path="/dashboard/search" element={<SearchResults />} />
          <Route path="/dashboard/profile" element={<ProfileEdit />} />
          <Route path="/dashboard/notifications" element={<NotificationsPanel />} />
          <Route path="/forum" element={<ForumList />} />
          <Route path="/forum/:id" element={<ForumThread />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/donate" element={<Marketplace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
