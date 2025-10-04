import DashboardNav from '../components/DashboardNav';
import { useParams } from 'react-router-dom';
import { MessageSquarePlus } from 'lucide-react';
import { useState } from 'react';
import Modal from '../components/Modal';

export default function ForumThread() {
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const posts = [
    { id: 1, author: 'Ava', content: 'Try sealing windows and using smart thermostats.' },
    { id: 2, author: 'Noah', content: 'LED bulbs and insulating doors help a lot too.' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-gray-900">Thread #{id}</h1>
          <button onClick={() => setIsOpen(true)} className="px-3 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37] flex items-center gap-2">
            <MessageSquarePlus className="h-4 w-4" /> Reply
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md divide-y">
          {posts.map((p) => (
            <div key={p.id} className="p-4">
              <p className="font-semibold text-gray-900">{p.author}</p>
              <p className="text-gray-700">{p.content}</p>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Add a reply"
        actions={<button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]">Close</button>}
      >
        <p className="text-gray-700">Reply form coming soon. Stay tuned!</p>
      </Modal>
    </div>
  );
}
