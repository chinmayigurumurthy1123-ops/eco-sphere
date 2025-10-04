import DashboardNav from '../components/DashboardNav';
import { Search } from 'lucide-react';

export default function SearchResults() {
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Search className="h-7 w-7 text-[#2D5A27]" />
          <h1 className="text-2xl font-bold text-gray-900">Search</h1>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <p className="text-gray-600">Search results will appear here.</p>
        </div>
      </div>
    </div>
  );
}
