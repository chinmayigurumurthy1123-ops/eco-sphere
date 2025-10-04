import { useState } from 'react';
import { Users, MessageSquare, Tag, PlusCircle } from 'lucide-react';
import Modal from '../components/Modal';
import { useToast } from '../components/Toast';
import { useNotifications } from '../components/Notifications';

interface Thread {
  id: number;
  title: string;
  author: string;
  replies: number;
  tags: string[];
  createdAt: number;
}

export default function Forum() {
  const { showToast } = useToast();
  const { addNotification } = useNotifications();
  const [threads, setThreads] = useState<Thread[]>([
    {
      id: 1,
      title: 'Best practices to reduce office energy?',
      author: 'Ava',
      replies: 5,
      tags: ['energy', 'office'],
      createdAt: Date.now() - 1000 * 60 * 60 * 4,
    },
    {
      id: 2,
      title: 'How to estimate Scope 3 for suppliers?',
      author: 'Leo',
      replies: 3,
      tags: ['scope3', 'measurement'],
      createdAt: Date.now() - 1000 * 60 * 60 * 28,
    },
  ]);

  const [isAskOpen, setIsAskOpen] = useState(false);
  const [question, setQuestion] = useState('');

  const postQuestion = () => {
    if (!question.trim()) {
      showToast('Please enter a question', 'warning');
      return;
    }
    const newThread: Thread = {
      id: threads.length + 1,
      title: question.trim(),
      author: 'You',
      replies: 0,
      tags: ['question'],
      createdAt: Date.now(),
    };
    setThreads([newThread, ...threads]);
    setIsAskOpen(false);
    setQuestion('');
    showToast('Question posted. You will be notified on replies.', 'success');
    addNotification('New forum question created', 'project');
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <Users className="h-8 w-8 text-[#2D5A27]" />
            <h1 className="text-3xl font-bold text-gray-900">Community Forum</h1>
          </div>
          <p className="text-gray-600">Knowledge sharing, Q&A, and collaboration</p>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div className="text-sm text-gray-600">{threads.length} threads</div>
          <button
            onClick={() => setIsAskOpen(true)}
            className="flex items-center gap-2 px-4 py-2 bg-[#2D5A27] text-white rounded-lg font-medium hover:bg-[#3d7a37]"
          >
            <PlusCircle className="h-4 w-4" /> Ask Question
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md divide-y divide-gray-100">
          {threads.map((t) => (
            <div key={t.id} className="p-5 flex items-start gap-4">
              <MessageSquare className="h-5 w-5 text-[#2D5A27] mt-0.5" />
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-gray-900">{t.title}</h3>
                  <span className="text-xs text-gray-500">
                    {new Date(t.createdAt).toLocaleString()}
                  </span>
                </div>
                <div className="text-sm text-gray-600">by {t.author} · {t.replies} replies</div>
                <div className="mt-2 flex items-center gap-2">
                  {t.tags.map((tag, i) => (
                    <span key={i} className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-[#2D5A27]/10 text-[#2D5A27]">
                      <Tag className="h-3 w-3" /> {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-3">
                  <button
                    onClick={() => showToast('Reply composer coming soon', 'info')}
                    className="text-sm px-3 py-1.5 bg-white border border-gray-200 rounded-md hover:bg-gray-50"
                  >
                    Reply
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isAskOpen}
        onClose={() => setIsAskOpen(false)}
        title="Ask a Question"
        actions={
          <>
            <button
              onClick={() => setIsAskOpen(false)}
              className="px-4 py-2 rounded-lg font-medium bg-gray-100 text-gray-700 hover:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={postQuestion}
              className="px-4 py-2 rounded-lg font-semibold bg-[#2D5A27] text-white hover:bg-[#3d7a37]"
            >
              Post Question
            </button>
          </>
        }
      >
        <div className="space-y-3">
          <label className="block text-sm font-medium text-gray-700">Your question</label>
          <input
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent"
            placeholder="e.g., What is the most impactful home energy upgrade?"
          />
        </div>
      </Modal>
    </div>
  );
}
