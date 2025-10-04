import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Leaf, Mail, Lock, User, Building, MapPin } from 'lucide-react';

type UserType = 'individual' | 'business' | 'city' | null;

export default function Register() {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [userType, setUserType] = useState<UserType>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState({
    userType: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const validateStep1 = () => {
    if (!userType) {
      setErrors({ ...errors, userType: 'Please select a user type' });
      return false;
    }
    return true;
  };

  const validateStep2 = () => {
    const newErrors = {
      userType: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
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

    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleNext = () => {
    if (validateStep1()) {
      setStep(2);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateStep2()) {
      navigate('/dashboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#87CEEB]/20 to-white flex items-center justify-center px-4 py-12">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-xl p-8">
        <div className="flex justify-center mb-6">
          <div className="bg-[#2D5A27] p-3 rounded-full">
            <Leaf className="h-10 w-10 text-white" />
          </div>
        </div>

        <h2 className="text-3xl font-bold text-center text-gray-900 mb-2">
          Join EcoSphere
        </h2>
        <p className="text-center text-gray-600 mb-8">
          Start your sustainability journey today
        </p>

        <div className="flex justify-center mb-8">
          <div className="flex items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 1 ? 'bg-[#2D5A27] text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              1
            </div>
            <div
              className={`w-20 h-1 ${step >= 2 ? 'bg-[#2D5A27]' : 'bg-gray-200'}`}
            ></div>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                step >= 2 ? 'bg-[#2D5A27] text-white' : 'bg-gray-200 text-gray-600'
              }`}
            >
              2
            </div>
          </div>
        </div>

        {step === 1 && (
          <div>
            <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
              Select Your Account Type
            </h3>
            <div className="grid md:grid-cols-3 gap-4 mb-6">
              <button
                onClick={() => {
                  setUserType('individual');
                  setErrors({ ...errors, userType: '' });
                }}
                className={`p-6 border-2 rounded-xl transition-all ${
                  userType === 'individual'
                    ? 'border-[#2D5A27] bg-[#2D5A27]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <User className="h-12 w-12 mx-auto mb-3 text-[#2D5A27]" />
                <h4 className="font-semibold text-gray-900 mb-2">Individual</h4>
                <p className="text-sm text-gray-600">
                  Track your personal carbon footprint
                </p>
              </button>

              <button
                onClick={() => {
                  setUserType('business');
                  setErrors({ ...errors, userType: '' });
                }}
                className={`p-6 border-2 rounded-xl transition-all ${
                  userType === 'business'
                    ? 'border-[#2D5A27] bg-[#2D5A27]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <Building className="h-12 w-12 mx-auto mb-3 text-[#2D5A27]" />
                <h4 className="font-semibold text-gray-900 mb-2">Business</h4>
                <p className="text-sm text-gray-600">
                  Manage your company's emissions
                </p>
              </button>

              <button
                onClick={() => {
                  setUserType('city');
                  setErrors({ ...errors, userType: '' });
                }}
                className={`p-6 border-2 rounded-xl transition-all ${
                  userType === 'city'
                    ? 'border-[#2D5A27] bg-[#2D5A27]/5'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <MapPin className="h-12 w-12 mx-auto mb-3 text-[#2D5A27]" />
                <h4 className="font-semibold text-gray-900 mb-2">City</h4>
                <p className="text-sm text-gray-600">
                  Monitor municipal carbon data
                </p>
              </button>
            </div>
            {errors.userType && (
              <p className="text-sm text-red-600 text-center mb-4">{errors.userType}</p>
            )}
            <button
              onClick={handleNext}
              className="w-full bg-[#2D5A27] text-white py-3 rounded-lg font-semibold hover:bg-[#3d7a37] transition-colors shadow-md"
            >
              Continue
            </button>
          </div>
        )}

        {step === 2 && (
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

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent outline-none transition-all"
                  placeholder="••••••••"
                />
              </div>
              {errors.confirmPassword && (
                <p className="mt-1 text-sm text-red-600">{errors.confirmPassword}</p>
              )}
            </div>

            <div className="flex gap-4">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="w-1/3 bg-gray-200 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-300 transition-colors"
              >
                Back
              </button>
              <button
                type="submit"
                className="w-2/3 bg-[#2D5A27] text-white py-3 rounded-lg font-semibold hover:bg-[#3d7a37] transition-colors shadow-md"
              >
                Create Account
              </button>
            </div>
          </form>
        )}

        <p className="mt-6 text-center text-gray-600">
          Already have an account?{' '}
          <Link to="/login" className="text-[#2D5A27] font-semibold hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
}
