import { useState } from 'react';
import { Link } from 'react-router-dom';
import { TrendingDown, Target, ShoppingBag, Leaf, Activity, Zap, Trash2, Car } from 'lucide-react';
import Modal from '../components/Modal';
import DashboardNav from '../components/DashboardNav';

export default function Dashboard() {
  const [isStatsOpen, setIsStatsOpen] = useState(false);
  const metrics = [
    {
      icon: TrendingDown,
      label: 'Monthly Carbon',
      value: '2.4',
      unit: 'tons CO₂',
      change: '-12%',
      color: 'bg-[#2D5A27]',
    },
    {
      icon: Target,
      label: 'Goals Progress',
      value: '68',
      unit: '%',
      change: '+5%',
      color: 'bg-[#FF8C42]',
    },
    {
      icon: ShoppingBag,
      label: 'Offsets Purchased',
      value: '1.8',
      unit: 'tons CO₂',
      change: '+0.3',
      color: 'bg-[#87CEEB]',
    },
    {
      icon: Leaf,
      label: 'Net Impact',
      value: '0.6',
      unit: 'tons CO₂',
      change: '-15%',
      color: 'bg-[#2D5A27]',
    },
  ];

  const recentActivities = [
    {
      icon: Car,
      title: 'Transportation logged',
      description: '45 miles driven this week',
      time: '2 hours ago',
      color: 'text-[#FF8C42]',
    },
    {
      icon: Zap,
      title: 'Energy usage updated',
      description: 'Home energy: 320 kWh',
      time: '1 day ago',
      color: 'text-[#87CEEB]',
    },
    {
      icon: Trash2,
      title: 'Waste data recorded',
      description: '12 lbs recycled materials',
      time: '2 days ago',
      color: 'text-[#2D5A27]',
    },
    {
      icon: ShoppingBag,
      title: 'Carbon offset purchased',
      description: '0.5 tons CO₂ - Forest restoration',
      time: '3 days ago',
      color: 'text-[#FF8C42]',
    },
  ];

  const chartData = [
    { month: 'Jan', value: 3.2 },
    { month: 'Feb', value: 2.8 },
    { month: 'Mar', value: 3.0 },
    { month: 'Apr', value: 2.6 },
    { month: 'May', value: 2.4 },
    { month: 'Jun', value: 2.4 },
  ];

  const maxValue = Math.max(...chartData.map((d) => d.value));

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">Dashboard</h1>
            <p className="text-gray-600">Welcome back! Here's your sustainability overview.</p>
          </div>
          <div>
            <button
              onClick={() => setIsStatsOpen(true)}
              className="px-4 py-2 bg-white text-[#2D5A27] border-2 border-[#2D5A27] rounded-lg font-medium hover:bg-gray-50 transition-colors"
            >
              View Stats
            </button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric) => {
            const Icon = metric.icon;
            return (
              <div
                key={metric.label}
                className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`${metric.color} p-3 rounded-lg`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <span className="text-sm font-semibold text-green-600">
                    {metric.change}
                  </span>
                </div>
                <h3 className="text-gray-600 text-sm mb-1">{metric.label}</h3>
                <p className="text-2xl font-bold text-gray-900">
                  {metric.value}{' '}
                  <span className="text-sm font-normal text-gray-500">{metric.unit}</span>
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <div className="lg:col-span-2 bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Carbon Footprint Trend
            </h2>
            <div className="h-64 flex items-end justify-between gap-4">
              {chartData.map((data) => (
                <div key={data.month} className="flex-1 flex flex-col items-center">
                  <div className="w-full bg-gray-100 rounded-t-lg overflow-hidden flex items-end h-48">
                    <div
                      className="w-full bg-gradient-to-t from-[#2D5A27] to-[#4a8a44] rounded-t-lg transition-all duration-500"
                      style={{ height: `${(data.value / maxValue) * 100}%` }}
                    ></div>
                  </div>
                  <div className="mt-2 text-sm font-medium text-gray-600">
                    {data.month}
                  </div>
                  <div className="text-xs text-gray-500">{data.value}t</div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="space-y-3">
              <Link
                to="/calculator"
                className="block w-full bg-[#2D5A27] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#3d7a37] transition-colors text-center"
              >
                Calculate Carbon
              </Link>
              <Link
                to="/goals"
                className="block w-full bg-[#FF8C42] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#e67a32] transition-colors text-center"
              >
                View Goals
              </Link>
              <Link
                to="/marketplace"
                className="block w-full bg-[#87CEEB] text-white py-3 px-4 rounded-lg font-medium hover:bg-[#6fb8d8] transition-colors text-center"
              >
                Buy Offsets
              </Link>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Activity</h2>
            <Activity className="h-5 w-5 text-gray-400" />
          </div>
          <div className="space-y-4">
            {recentActivities.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={index}
                  className="flex items-start gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className={`${activity.color} mt-1`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900">{activity.title}</h3>
                    <p className="text-sm text-gray-600">{activity.description}</p>
                  </div>
                  <span className="text-sm text-gray-500">{activity.time}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      </div>
      <Modal
        isOpen={isStatsOpen}
        onClose={() => setIsStatsOpen(false)}
        title="Your Key Stats"
        actions={
          <button
            onClick={() => setIsStatsOpen(false)}
            className="px-4 py-2 rounded-lg font-medium bg-[#2D5A27] text-white hover:bg-[#3d7a37]"
          >
            Close
          </button>
        }
      >
        <div className="grid grid-cols-2 gap-4">
          {metrics.map((m) => (
            <div key={m.label} className="p-4 bg-gray-50 rounded-lg border border-gray-100">
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm text-gray-600">{m.label}</span>
                <span className="text-xs font-semibold text-green-600">{m.change}</span>
              </div>
              <div className="text-xl font-bold text-gray-900">
                {m.value} <span className="text-sm font-normal text-gray-500">{m.unit}</span>
              </div>
            </div>
          ))}
        </div>
      </Modal>
    </div>
  );
}
