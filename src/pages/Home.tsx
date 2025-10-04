import { Link } from 'react-router-dom';
import { Leaf, Target, TrendingDown, Users } from 'lucide-react';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-20 text-center">
          <div className="flex justify-center mb-6">
            <div className="bg-[#2D5A27] p-4 rounded-full">
              <Leaf className="h-16 w-16 text-white" />
            </div>
          </div>

          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to <span className="text-[#2D5A27]">EcoSphere</span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Track your carbon footprint, set sustainability goals, and offset your emissions
            through verified environmental projects. Join the movement toward a greener future.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Link
              to="/register"
              className="px-8 py-4 bg-[#2D5A27] text-white rounded-lg font-semibold text-lg hover:bg-[#3d7a37] transition-colors shadow-lg"
            >
              Get Started
            </Link>
            <Link
              to="/login"
              className="px-8 py-4 bg-white text-[#2D5A27] border-2 border-[#2D5A27] rounded-lg font-semibold text-lg hover:bg-gray-50 transition-colors shadow-lg"
            >
              Sign In
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-20">
            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#87CEEB] p-3 rounded-full w-fit mx-auto mb-4">
                <TrendingDown className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Track Your Impact</h3>
              <p className="text-gray-600">
                Monitor your carbon footprint across transportation, energy, and waste with our easy-to-use calculator.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#FF8C42] p-3 rounded-full w-fit mx-auto mb-4">
                <Target className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Set Goals</h3>
              <p className="text-gray-600">
                Create personalized sustainability goals and track your progress with milestones and achievements.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md">
              <div className="bg-[#2D5A27] p-3 rounded-full w-fit mx-auto mb-4">
                <Users className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Offset Carbon</h3>
              <p className="text-gray-600">
                Support verified environmental projects and purchase carbon offsets to neutralize your footprint.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
