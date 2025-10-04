import { useMemo, useState } from 'react';
import { BookOpen, PlayCircle, FileText, LibrarySquare, GraduationCap } from 'lucide-react';
import Modal from '../components/Modal';
import { useToast } from '../components/Toast';

interface ResourceItem {
  id: number;
  type: 'article' | 'video' | 'case';
  title: string;
  summary: string;
  duration?: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export default function Education() {
  const { showToast } = useToast();
  const [active, setActive] = useState<'article' | 'video' | 'case'>('article');
  const [openId, setOpenId] = useState<number | null>(null);

  const resources: ResourceItem[] = [
    {
      id: 1,
      type: 'article',
      title: 'Understanding Carbon Footprints',
      summary:
        'Learn how everyday activities contribute to carbon emissions and what steps reduce impact.',
      level: 'Beginner',
    },
    {
      id: 2,
      type: 'article',
      title: 'Corporate Net-Zero Strategies',
      summary:
        'Explore frameworks and practical roadmaps for organizations pursuing net‑zero emissions.',
      level: 'Intermediate',
    },
    {
      id: 3,
      type: 'video',
      title: 'Renewable Energy 101',
      summary: 'A concise visual primer on wind, solar, and hydro technologies.',
      duration: '6:42',
      level: 'Beginner',
    },
    {
      id: 4,
      type: 'video',
      title: 'Measuring Scope 1, 2, and 3',
      summary: 'Walkthrough of emissions scopes, boundaries, and common pitfalls.',
      duration: '8:05',
      level: 'Intermediate',
    },
    {
      id: 5,
      type: 'case',
      title: 'Citywide E‑Mobility Rollout',
      summary: 'How a mid‑size city cut transport emissions by 23% in 18 months.',
      level: 'Advanced',
    },
    {
      id: 6,
      type: 'case',
      title: 'Zero‑Waste Campus Program',
      summary: 'A university diverted 92% of waste with community incentives.',
      level: 'Intermediate',
    },
  ];

  const items = useMemo(() => resources.filter((r) => r.type === active), [active]);
  const iconByType = {
    article: <FileText className="h-6 w-6" />,
    video: <PlayCircle className="h-6 w-6" />,
    case: <LibrarySquare className="h-6 w-6" />,
  } as const;

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <GraduationCap className="h-8 w-8 text-[#2D5A27]" />
            <h1 className="text-3xl font-bold text-gray-900">Educational Hub</h1>
          </div>
          <p className="text-gray-600">
            Articles, videos, and case studies on sustainability practices
          </p>
        </div>

        <div className="flex items-center gap-2 mb-6">
          <button
            onClick={() => setActive('article')}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              active === 'article'
                ? 'bg-[#2D5A27] text-white border-[#2D5A27]'
                : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
            }`}
          >
            Articles
          </button>
          <button
            onClick={() => setActive('video')}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              active === 'video'
                ? 'bg-[#2D5A27] text-white border-[#2D5A27]'
                : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
            }`}
          >
            Videos
          </button>
          <button
            onClick={() => setActive('case')}
            className={`px-4 py-2 rounded-lg text-sm font-medium border ${
              active === 'case'
                ? 'bg-[#2D5A27] text-white border-[#2D5A27]'
                : 'bg-white text-gray-800 border-gray-200 hover:bg-gray-50'
            }`}
          >
            Case Studies
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((item) => (
            <div key={item.id} className="bg-white rounded-xl shadow-md p-6">
              <div className="flex items-center justify-between mb-3 text-[#2D5A27]">
                <div className="p-2 rounded-lg bg-[#2D5A27]/10">{iconByType[item.type]}</div>
                <span className="text-xs font-semibold text-gray-600">{item.level}</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-4 line-clamp-3">{item.summary}</p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setOpenId(item.id)}
                  className="flex-1 bg-[#2D5A27] text-white py-2 rounded-lg font-medium hover:bg-[#3d7a37] transition-colors"
                >
                  Read summary
                </button>
                <button
                  onClick={() => showToast('Opening resource…', 'info')}
                  className="px-3 py-2 bg-white border border-gray-200 rounded-lg text-gray-800 hover:bg-gray-50"
                  title="Opens external resource"
                >
                  Open
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={openId !== null}
        onClose={() => setOpenId(null)}
        title="Resource Summary"
        actions={
          <button
            onClick={() => setOpenId(null)}
            className="px-4 py-2 rounded-lg font-medium bg-[#2D5A27] text-white hover:bg-[#3d7a37]"
          >
            Close
          </button>
        }
      >
        {openId && (
          <div className="space-y-2 text-sm">
            <p className="text-gray-700">
              {resources.find((r) => r.id === openId)?.summary}
            </p>
            <p className="text-gray-500">
              For full content, select Open to view externally.
            </p>
          </div>
        )}
      </Modal>
    </div>
  );
}
