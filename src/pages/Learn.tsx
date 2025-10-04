import DashboardNav from '../components/DashboardNav';
import { BookOpen, Newspaper, Bookmark, Filter, Search as SearchIcon, PlayCircle, Briefcase } from 'lucide-react';
import { useEffect, useMemo, useState } from 'react';
import { useToast } from '../components/Toast';

export default function Learn() {
  const { showToast } = useToast();
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'all' | 'articles' | 'videos' | 'cases'>('all');
  const [bookmarks, setBookmarks] = useState<number[]>(() => {
    try {
      return JSON.parse(localStorage.getItem('eco_bookmarks') || '[]');
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem('eco_bookmarks', JSON.stringify(bookmarks));
  }, [bookmarks]);

  const content = [
    { id: 1, type: 'articles', title: 'Understanding Carbon Footprints', excerpt: 'Learn how daily activities contribute to emissions.' },
    { id: 2, type: 'articles', title: 'Top 10 Energy Saving Tips', excerpt: 'Practical ways to reduce your energy usage at home.' },
    { id: 3, type: 'articles', title: 'The Role of Offsets', excerpt: 'How carbon offsets work and when to use them.' },
    { id: 4, type: 'videos', title: 'Home Energy Efficiency 101', excerpt: 'A short explainer on saving energy at home.' },
    { id: 5, type: 'videos', title: 'Public Transit vs Driving', excerpt: 'Compare emissions and benefits.' },
    { id: 6, type: 'cases', title: 'City-Wide Recycling Program', excerpt: 'How Springfield increased recycling by 40%.' },
  ] as const;

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return content.filter((c) =>
      (category === 'all' || c.type === category) &&
      (q.length === 0 || c.title.toLowerCase().includes(q) || c.excerpt.toLowerCase().includes(q))
    );
  }, [content, category, query]);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-3">
            <BookOpen className="h-7 w-7 text-[#2D5A27]" />
            <h1 className="text-2xl font-bold text-gray-900">Educational Hub</h1>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
              <SearchIcon className="h-4 w-4 text-gray-500" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search resources"
                className="outline-none text-sm"
              />
            </div>
            <div className="flex items-center gap-2 border border-gray-300 rounded-lg px-3 py-1.5 bg-white">
              <Filter className="h-4 w-4 text-gray-500" />
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value as any)}
                className="outline-none text-sm bg-transparent"
              >
                <option value="all">All</option>
                <option value="articles">Articles</option>
                <option value="videos">Videos</option>
                <option value="cases">Case Studies</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {filtered.map((c) => (
            <div key={c.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center gap-2 mb-2">
                {c.type === 'articles' && <Newspaper className="h-5 w-5 text-[#2D5A27]" />}
                {c.type === 'videos' && <PlayCircle className="h-5 w-5 text-[#2D5A27]" />}
                {c.type === 'cases' && <Briefcase className="h-5 w-5 text-[#2D5A27]" />}
                <h3 className="font-semibold text-gray-900">{c.title}</h3>
              </div>
              <p className="text-gray-600 text-sm mb-4">{c.excerpt}</p>
              <div className="flex items-center justify-between">
                <button
                  onClick={() => showToast('Opening...', 'info')}
                  className="px-3 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37] text-sm"
                >
                  {c.type === 'videos' ? 'Watch' : 'Read'}
                </button>
                <button
                  onClick={() => setBookmarks((b) => (b.includes(c.id) ? b.filter((id) => id !== c.id) : [...b, c.id]))}
                  className={`px-3 py-2 rounded-lg border text-sm ${bookmarks.includes(c.id) ? 'bg-[#2D5A27] text-white border-[#2D5A27]' : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'}`}
                >
                  <span className="inline-flex items-center gap-1"><Bookmark className="h-4 w-4" /> {bookmarks.includes(c.id) ? 'Bookmarked' : 'Bookmark'}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
