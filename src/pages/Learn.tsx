import React, { useState } from 'react';

interface Resource {
  id: number;
  type: 'article' | 'video' | 'case-study';
  title: string;
  description: string;
  url: string;
  category: string;
}

const resources: Resource[] = [
  {
    id: 1,
    type: 'article',
    title: 'Sustainable Living 101',
    description: 'Learn the basics of sustainable living and its impact.',
    url: 'https://example.com/article1',
    category: 'Basics',
  },
  {
    id: 2,
    type: 'video',
    title: 'Eco-Friendly Innovations',
    description: 'Watch how technology is helping sustainability.',
    url: 'https://example.com/video1',
    category: 'Technology',
  },
  {
    id: 3,
    type: 'case-study',
    title: 'Green City Success',
    description: 'A case study on a city that went green.',
    url: 'https://example.com/case1',
    category: 'Cities',
  },
  // Add more resources as needed
];

const categories = ['All', 'Basics', 'Technology', 'Cities'];

const Learn: React.FC = () => {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [bookmarked, setBookmarked] = useState<number[]>([]);

  const filteredResources = resources.filter((r) => {
    const matchesCategory = category === 'All' || r.category === category;
    const matchesSearch = r.title.toLowerCase().includes(search.toLowerCase()) || r.description.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleBookmark = (id: number) => {
    setBookmarked((prev) =>
      prev.includes(id) ? prev.filter((bid) => bid !== id) : [...prev, id]
    );
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Educational Hub</h1>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <input
          type="text"
          placeholder="Search articles, videos, case studies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded px-3 py-2 w-full md:w-1/2"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border rounded px-3 py-2 w-full md:w-1/4"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>
      <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
        {filteredResources.map((r) => (
          <div key={r.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-semibold text-green-700">{r.type.replace('-', ' ').toUpperCase()}</span>
              <button
                onClick={() => toggleBookmark(r.id)}
                className={bookmarked.includes(r.id) ? 'text-yellow-500' : 'text-gray-400'}
                title={bookmarked.includes(r.id) ? 'Remove Bookmark' : 'Bookmark'}
              >
                {bookmarked.includes(r.id) ? '★' : '☆'}
              </button>
            </div>
            <h2 className="text-xl font-bold mb-1">{r.title}</h2>
            <p className="mb-2 text-gray-700">{r.description}</p>
            <a href={r.url} target="_blank" rel="noopener noreferrer" className="text-green-600 underline">View Resource</a>
          </div>
        ))}
        {filteredResources.length === 0 && (
          <div className="col-span-full text-center text-gray-500">No resources found.</div>
        )}
      </div>
    </div>
  );
};

export default Learn;
