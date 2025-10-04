import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock } from 'lucide-react';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({ email: '', password: '' });

  const validateForm = () => {
    const newErrors = { email: '', password: '' };
    let isValid = true;

    if (!email) {
      newErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
      isValid = false;
    }

    if (!password) {
      newErrors.password = 'Password is required';
      isValid = false;
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB]/20 to-white flex flex-col justify-between px-4">
      <div className="flex-grow flex items-center justify-center">
        <div className="max-w-md w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-[#2D5A27] p-3 rounded-full">
            <Leaf className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Welcome Back
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Sign in to continue your sustainability journey
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all"
                placeholder="you@example.com"
              />
            </div>
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all"
                placeholder="••••••••"
              />
            </div>
            {errors.password && (
              <p className="mt-1 text-sm text-red-600">{errors.password}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-[#2D5A27] text-white py-3 rounded-lg font-semibold hover:bg-[#3d7a37] transition-colors shadow-md"
          >
            Sign In
          </button>
        </form>

        <p className="mt-6 text-center text-gray-600">
          Don't have an account?{' '}
          <Link to="/register" className="text-[#2D5A27] font-semibold hover:underline">
            Register
          </Link>
        </p>

        {/* Quote & Illustration */}
        <div className="mt-10 flex flex-col items-center">
          <div className="w-20 h-20 mb-2">
            {/* Simple eco illustration (leaf + globe) */}
            <svg viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="40" cy="40" r="36" fill="#87CEEB" opacity="0.2" />
              <path d="M40 60C55 60 60 40 40 20C20 40 25 60 40 60Z" fill="#2D5A27" />
              <ellipse cx="40" cy="40" rx="12" ry="18" fill="#4CAF50" opacity="0.7" />
            </svg>
          </div>
          <blockquote className="text-xl font-semibold text-[#2D5A27] text-center">
            "Measure. Reduce. Offset. Together"
          </blockquote>
        </div>
      </div>
      {/* Footer */}
      <footer className="w-full bg-[#2D5A27] text-white py-6 mt-8 rounded-t-2xl shadow-lg">
        <div className="max-w-4xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-center md:text-left">
            &copy; 2025 EcoSphere. All rights reserved.<br />
            <span className="text-xs">This is a prototype. Dummy copyright info.</span>
          </div>
          <div className="flex flex-col items-center md:items-end gap-2">
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#87CEEB]" title="Contact Us">Contact Us</a>
              <a href="#" className="hover:text-[#87CEEB]" title="Privacy Policy">Privacy</a>
            </div>
            <div className="flex gap-3 mt-2">
              <a href="#" className="hover:text-[#87CEEB]" title="Instagram">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg>
              </a>
              <a href="#" className="hover:text-[#87CEEB]" title="Twitter">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.46 6c-.77.35-1.6.59-2.47.7a4.3 4.3 0 0 0 1.88-2.37a8.59 8.59 0 0 1-2.72 1.04a4.28 4.28 0 0 0-7.29 3.9A12.13 12.13 0 0 1 3.1 4.9a4.28 4.28 0 0 0 1.32 5.71a4.22 4.22 0 0 1-1.94-.54v.05a4.28 4.28 0 0 0 3.43 4.19a4.3 4.3 0 0 1-1.93.07a4.28 4.28 0 0 0 4 2.97A8.6 8.6 0 0 1 2 19.54a12.13 12.13 0 0 0 6.56 1.92c7.88 0 12.2-6.53 12.2-12.2c0-.19 0-.38-.01-.57A8.72 8.72 0 0 0 24 4.59a8.59 8.59 0 0 1-2.54.7z"/></svg>
              </a>
              <a href="#" className="hover:text-[#87CEEB]" title="Facebook">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24"><path d="M22.675 0h-21.35C.6 0 0 .6 0 1.326v21.348C0 23.4.6 24 1.326 24H12.82v-9.294H9.692V11.01h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788c1.325 0 2.463.099 2.797.143v3.24l-1.92.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.696h-3.12V24h6.116C23.4 24 24 23.4 24 22.674V1.326C24 .6 23.4 0 22.675 0"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  </div>
  );
}
