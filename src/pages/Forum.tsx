import React, { useState } from 'react';

interface Thread {
  id: number;
  title: string;
  author: string;
  posts: { id: number; author: string; content: string; }[];
}

const initialThreads: Thread[] = [
  {
    id: 1,
    title: 'How to start a home compost?',
    author: 'Alice',
    posts: [
      { id: 1, author: 'Alice', content: 'What are the basics for home composting?' },
      { id: 2, author: 'Bob', content: 'Start with kitchen scraps and leaves. Avoid meat and dairy.' },
    ],
  },
  {
    id: 2,
    title: 'Best eco-friendly cleaning products?',
    author: 'Charlie',
    posts: [
      { id: 1, author: 'Charlie', content: 'Any recommendations for green cleaning brands?' },
    ],
  },
];

const Forum: React.FC = () => {
  const [threads, setThreads] = useState<Thread[]>(initialThreads);
  const [selectedThread, setSelectedThread] = useState<Thread | null>(null);
  const [showPostModal, setShowPostModal] = useState(false);
  const [showReplyModal, setShowReplyModal] = useState(false);
  const [newThreadTitle, setNewThreadTitle] = useState('');
  const [newThreadAuthor, setNewThreadAuthor] = useState('');
  const [newThreadContent, setNewThreadContent] = useState('');
  const [replyAuthor, setReplyAuthor] = useState('');
  const [replyContent, setReplyContent] = useState('');

  const openThread = (thread: Thread) => {
    setSelectedThread(thread);
  };

  const closeThread = () => {
    setSelectedThread(null);
  };

  const openPostModal = () => {
    setShowPostModal(true);
  };

  const closePostModal = () => {
    setShowPostModal(false);
    setNewThreadTitle('');
    setNewThreadAuthor('');
    setNewThreadContent('');
  };

  const openReplyModal = () => {
    setShowReplyModal(true);
  };

  const closeReplyModal = () => {
    setShowReplyModal(false);
    setReplyAuthor('');
    setReplyContent('');
  };

  const createThread = () => {
    if (newThreadTitle && newThreadAuthor && newThreadContent) {
      const newThread: Thread = {
        id: threads.length + 1,
        title: newThreadTitle,
        author: newThreadAuthor,
        posts: [{ id: 1, author: newThreadAuthor, content: newThreadContent }],
      };
      setThreads([newThread, ...threads]);
      closePostModal();
    }
  };

  const addReply = () => {
    if (selectedThread && replyAuthor && replyContent) {
      const updatedThreads = threads.map((thread) => {
        if (thread.id === selectedThread.id) {
          return {
            ...thread,
            posts: [
              ...thread.posts,
              { id: thread.posts.length + 1, author: replyAuthor, content: replyContent },
            ],
          };
        }
        return thread;
      });
      setThreads(updatedThreads);
      setSelectedThread({
        ...selectedThread,
        posts: [
          ...selectedThread.posts,
          { id: selectedThread.posts.length + 1, author: replyAuthor, content: replyContent },
        ],
      });
      closeReplyModal();
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Community Forum</h1>
      <button
        className="mb-4 px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
        onClick={openPostModal}
      >
        + New Thread
      </button>
      <div className="space-y-4">
        {threads.map((thread) => (
          <div key={thread.id} className="border rounded-lg p-4 shadow hover:shadow-lg transition">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-xl font-bold cursor-pointer" onClick={() => openThread(thread)}>{thread.title}</h2>
              <span className="text-sm text-gray-500">by {thread.author}</span>
            </div>
            <div className="text-gray-700">{thread.posts[0].content}</div>
            <button
              className="mt-2 text-green-700 underline"
              onClick={() => openThread(thread)}
            >
              View Thread ({thread.posts.length} posts)
            </button>
          </div>
        ))}
        {threads.length === 0 && (
          <div className="text-center text-gray-500">No threads yet.</div>
        )}
      </div>

      {/* Thread Modal */}
      {selectedThread && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeThread}>✕</button>
            <h2 className="text-2xl font-bold mb-2">{selectedThread.title}</h2>
            <div className="mb-4 text-sm text-gray-500">by {selectedThread.author}</div>
            <div className="space-y-4 mb-4">
              {selectedThread.posts.map((post) => (
                <div key={post.id} className="border-b pb-2">
                  <div className="font-semibold text-green-700">{post.author}</div>
                  <div>{post.content}</div>
                </div>
              ))}
            </div>
            <button
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              onClick={openReplyModal}
            >
              Reply
            </button>
          </div>
        </div>
      )}

      {/* Post Creation Modal */}
      {showPostModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={closePostModal}>✕</button>
            <h2 className="text-xl font-bold mb-4">Create New Thread</h2>
            <input
              type="text"
              placeholder="Thread Title"
              value={newThreadTitle}
              onChange={(e) => setNewThreadTitle(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-2"
            />
            <input
              type="text"
              placeholder="Your Name"
              value={newThreadAuthor}
              onChange={(e) => setNewThreadAuthor(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-2"
            />
            <textarea
              placeholder="Post Content"
              value={newThreadContent}
              onChange={(e) => setNewThreadContent(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-4"
              rows={4}
            />
            <button
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              onClick={createThread}
            >
              Create Thread
            </button>
          </div>
        </div>
      )}

      {/* Reply Modal */}
      {showReplyModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-full max-w-lg shadow-lg relative">
            <button className="absolute top-2 right-2 text-gray-500" onClick={closeReplyModal}>✕</button>
            <h2 className="text-xl font-bold mb-4">Reply to Thread</h2>
            <input
              type="text"
              placeholder="Your Name"
              value={replyAuthor}
              onChange={(e) => setReplyAuthor(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-2"
            />
            <textarea
              placeholder="Reply Content"
              value={replyContent}
              onChange={(e) => setReplyContent(e.target.value)}
              className="border rounded px-3 py-2 w-full mb-4"
              rows={4}
            />
            <button
              className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
              onClick={addReply}
            >
              Post Reply
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Forum;
