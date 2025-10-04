import DashboardNav from '../components/DashboardNav';
import { Target, TrendingDown, Leaf } from 'lucide-react';
import { useToast } from '../components/Toast';

export default function HomeDashboard() {
  const { showToast } = useToast();
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#2D5A27] p-2 rounded-lg">
                <TrendingDown className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Quick Calculator</h3>
            </div>
            <p className="text-gray-600 mb-4">Estimate your monthly carbon footprint quickly.</p>
            <button
              onClick={() => showToast('Launching quick calculator...', 'info')}
              className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]"
            >
              Start Now
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#FF8C42] p-2 rounded-lg">
                <Target className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Set a Goal</h3>
            </div>
            <p className="text-gray-600 mb-4">Define a new sustainability target for this month.</p>
            <button
              onClick={() => showToast('Goal wizard coming soon', 'info')}
              className="px-4 py-2 bg-[#FF8C42] text-white rounded-lg hover:bg-[#e67a32]"
            >
              Create Goal
            </button>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#87CEEB] p-2 rounded-lg">
                <Leaf className="h-5 w-5 text-white" />
              </div>
              <h3 className="font-bold text-gray-900">Offset Now</h3>
            </div>
            <p className="text-gray-600 mb-4">Support verified projects and offset your carbon.</p>
            <a
              href="/marketplace"
              className="inline-block px-4 py-2 bg-[#87CEEB] text-white rounded-lg hover:bg-[#6fb8d8]"
            >
              Explore Marketplace
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
