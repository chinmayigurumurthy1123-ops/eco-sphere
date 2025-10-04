import DashboardNav from '../components/DashboardNav';
import { Link } from 'react-router-dom';
import { MessagesSquare, PlusCircle } from 'lucide-react';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function ForumList() {
  const [isOpen, setIsOpen] = useState(false);

  const threads = [
    { id: 1, title: 'How to reduce energy usage in winter?', author: 'Ava', replies: 12 },
    { id: 2, title: 'Best carbon offset projects in 2025', author: 'Noah', replies: 5 },
    { id: 3, title: 'Composting tips for small apartments', author: 'Mia', replies: 8 },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <MessagesSquare className="h-7 w-7 text-[#2D5A27]" />
            <h1 className="text-2xl font-bold text-gray-900">Community Forum</h1>
          </div>
          <button onClick={() => setIsOpen(true)} className="px-3 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37] flex items-center gap-2">
            <PlusCircle className="h-4 w-4" /> New Thread
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md divide-y">
          {threads.map((t) => (
            <Link key={t.id} to={`/forum/${t.id}`} className="block p-4 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-gray-900">{t.title}</h3>
                  <p className="text-sm text-gray-600">By {t.author}</p>
                </div>
                <div className="text-sm text-gray-500">{t.replies} replies</div>
              </div>
            </Link>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Create a new thread"
        actions={<button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]">Close</button>}
      >
        <p className="text-gray-700">Thread creation is coming soon. Thanks for contributing!</p>
      </Modal>
    </div>
  );
}
