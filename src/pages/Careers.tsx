import DashboardNav from '../components/DashboardNav';
import { Briefcase, MapPin, Clock } from 'lucide-react';
import Modal from '../components/Modal';
import { useState } from 'react';

export default function Careers() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState<string | null>(null);

  const jobs = [
    { id: 1, title: 'Sustainability Analyst', location: 'Remote', type: 'Full-time' },
    { id: 2, title: 'Carbon Data Scientist', location: 'NYC, USA', type: 'Full-time' },
    { id: 3, title: 'Community Outreach Coordinator', location: 'Austin, USA', type: 'Part-time' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <Briefcase className="h-7 w-7 text-[#2D5A27]" />
          <h1 className="text-2xl font-bold text-gray-900">Careers</h1>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {jobs.map((job) => (
            <div key={job.id} className="bg-white rounded-xl shadow-md p-6">
              <h3 className="font-semibold text-gray-900 mb-1">{job.title}</h3>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                <span className="flex items-center gap-1"><MapPin className="h-4 w-4" /> {job.location}</span>
                <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {job.type}</span>
              </div>
              <button
                onClick={() => { setSelectedJob(job.title); setIsOpen(true); }}
                className="px-3 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]"
              >
                Apply
              </button>
            </div>
          ))}
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Apply for this role"
        actions={
          <button
            onClick={() => setIsOpen(false)}
            className="px-4 py-2 rounded-lg font-medium bg-[#2D5A27] text-white hover:bg-[#3d7a37]"
          >
            Close
          </button>
        }
      >
        <p className="text-gray-700">Thanks for your interest in <span className="font-semibold">{selectedJob}</span>. Our team will reach out with next steps.</p>
      </Modal>
    </div>
  );
}
