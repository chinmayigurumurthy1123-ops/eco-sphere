import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Home, BookOpen, Briefcase, LifeBuoy, UserCircle, HeartHandshake, Search, Menu, X } from 'lucide-react';
import { NotificationBell } from './Notifications';

export default function DashboardNav() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { to: '/dashboard/home', label: 'Home', Icon: Home },
    { to: '/dashboard/learn', label: 'Learn', Icon: BookOpen },
    { to: '/dashboard/careers', label: 'Careers', Icon: Briefcase },
    { to: '/dashboard/help', label: 'Help/Contact', Icon: LifeBuoy },
    { to: '/forum', label: 'Forum', Icon: LifeBuoy },
    { to: '/reports', label: 'Reports', Icon: BookOpen },
    { to: '/dashboard/profile', label: 'Profile', Icon: UserCircle },
    { to: '/donate', label: 'Donate', Icon: HeartHandshake },
  ];

  const goSearch = () => navigate('/dashboard/search');

  return (
    <div className="bg-white border-b border-gray-200 sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-14 flex items-center justify-between">
          <div className="hidden md:flex items-center gap-2 text-[#2D5A27] font-semibold">
            <span>Dashboard</span>
          </div>

          <div className="hidden md:flex items-center gap-2">
            {navLinks.map(({ to, label, Icon }) => (
              <Link
                key={to}
                to={to}
                className={`px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-colors ${
                  isActive(to)
                    ? 'bg-[#2D5A27] text-white'
                    : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <NotificationBell onClick={() => navigate('/dashboard/notifications')} />
            <button
              onClick={goSearch}
              aria-label="Search"
              className="hidden md:inline-flex p-2 rounded-lg text-gray-600 hover:bg-gray-100"
            >
              <Search className="h-5 w-5" />
            </button>
            <button
              onClick={() => setIsOpen((v) => !v)}
              className="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-gray-200 bg-white">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map(({ to, label, Icon }) => (
              <Link
                key={to}
                to={to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium transition-colors ${
                  isActive(to) ? 'bg-[#2D5A27] text-white' : 'text-gray-700 hover:bg-gray-100'
                }`}
              >
                <Icon className="h-5 w-5" />
                {label}
              </Link>
            ))}
            <button
              onClick={() => {
                setIsOpen(false);
                goSearch();
              }}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-100 w-full text-left"
            >
              <Search className="h-5 w-5" />
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
