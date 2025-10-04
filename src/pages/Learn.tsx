import DashboardNav from '../components/DashboardNav';
import { BookOpen, Newspaper } from 'lucide-react';
import { useToast } from '../components/Toast';

export default function Learn() {
  const { showToast } = useToast();
  const articles = [
    { id: 1, title: 'Understanding Carbon Footprints', excerpt: 'Learn how daily activities contribute to emissions.' },
    { id: 2, title: 'Top 10 Energy Saving Tips', excerpt: 'Practical ways to reduce your energy usage at home.' },
    { id: 3, title: 'The Role of Offsets', excerpt: 'How carbon offsets work and when to use them.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <BookOpen className="h-7 w-7 text-[#2D5A27]" />
          <h1 className="text-2xl font-bold text-gray-900">Learn</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {articles.map((a) => (
            <div key={a.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-2">
                <Newspaper className="h-5 w-5 text-[#2D5A27]" />
                <h3 className="font-semibold text-gray-900">{a.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{a.excerpt}</p>
              <button
                onClick={() => showToast('Opening article...', 'info')}
                className="px-3 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]"
              >
                Read More
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
