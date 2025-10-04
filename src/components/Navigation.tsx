import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Leaf, Bell } from 'lucide-react';
import notifications from './notificationsData';
import { NotificationsBell } from './Notifications';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/dashboard', label: 'Dashboard' },
    { path: '/calculator', label: 'Calculator' },
    { path: '/goals', label: 'Goals' },
    { path: '/marketplace', label: 'Marketplace' },
    { path: '/learn', label: 'Learn' },
    { path: '/forum', label: 'Forum' },
    { path: '/education', label: 'Education' },
    { path: '/reports', label: 'Reports' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="bg-[#2D5A27] text-white shadow-lg sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-8">
        <div className="flex flex-wrap justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Leaf className="h-8 w-8" />
            <span className="font-bold text-xl">EcoSphere</span>
          </Link>

          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive(link.path)
                    ? 'bg-white text-[#2D5A27]'
                    : 'hover:bg-[#3d7a37]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <NotificationsBell />
            <Link
              to="/login"
              className="px-4 py-2 rounded-md text-sm font-medium bg-[#FF8C42] hover:bg-[#e67a32] transition-colors"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="px-4 py-2 rounded-md text-sm font-medium bg-white text-[#2D5A27] hover:bg-gray-100 transition-colors"
            >
              Register
            </Link>
            {/* Bell Icon for Notifications */}
            <button
              className="relative p-2 rounded-full hover:bg-[#3d7a37] focus:outline-none focus:ring-2 focus:ring-green-500"
              onClick={() => setShowNotifications((prev) => !prev)}
              aria-label="Notifications"
            >
              <Bell className="h-6 w-6" />
              {/* Unread count badge */}
              {notifications.filter((n) => !n.read).length > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full px-1 border border-white">
                  {notifications.filter((n) => !n.read).length}
                </span>
              )}
            </button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-[#3d7a37] transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Notification Panel - Responsive & Animated */}
      {showNotifications && (
        <div className="fixed md:absolute right-2 md:right-8 top-20 md:top-16 z-50 w-full max-w-xs md:max-w-sm bg-white text-black rounded-lg shadow-2xl border animate-fade-in">
          <div className="p-4 border-b font-bold text-lg flex justify-between items-center">
            <span>Notifications</span>
            <button className="text-gray-400 hover:text-gray-700" onClick={() => setShowNotifications(false)} aria-label="Close">✕</button>
          </div>
          <div className="max-h-80 overflow-y-auto">
            {notifications.length === 0 && (
              <div className="p-4 text-gray-500">No notifications.</div>
            )}
            {notifications.map((n) => (
              <div key={n.id} className={`p-4 border-b last:border-b-0 flex items-center gap-2 ${!n.read ? 'bg-gray-100' : ''}`}>
                {n.type === 'alert' && <span className="text-red-500">●</span>}
                {n.type === 'progress' && <span className="text-green-500">●</span>}
                {n.type === 'project' && <span className="text-blue-500">●</span>}
                <span className="flex-1 text-sm md:text-base">{n.message}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {isOpen && (
        <div className="md:hidden bg-[#3d7a37] animate-slide-down">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block px-3 py-2 rounded-md text-base font-medium ${
                  isActive(link.path)
                    ? 'bg-white text-[#2D5A27]'
                    : 'hover:bg-[#2D5A27]'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-3 py-2">
              <NotificationsBell />
            </div>
            <Link
              to="/login"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-[#FF8C42] hover:bg-[#e67a32]"
            >
              Login
            </Link>
            <Link
              to="/register"
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 rounded-md text-base font-medium bg-white text-[#2D5A27] hover:bg-gray-100"
            >
              Register
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
