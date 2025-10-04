import DashboardNav from '../components/DashboardNav';
import Modal from '../components/Modal';
import { LifeBuoy, Mail, Phone } from 'lucide-react';
import { useState } from 'react';

export default function HelpContact() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <LifeBuoy className="h-7 w-7 text-[#2D5A27]" />
          <h1 className="text-2xl font-bold text-gray-900">Help & Contact</h1>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); setIsOpen(true); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent" rows={4} />
            </div>
            <button type="submit" className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]">Send</button>
          </form>

          <div className="mt-6 grid md:grid-cols-2 gap-4 text-sm text-gray-700">
            <div className="flex items-center gap-2"><Mail className="h-4 w-4" /> support@ecosfera.org</div>
            <div className="flex items-center gap-2"><Phone className="h-4 w-4" /> +1 (555) 123-4567</div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="Thanks for reaching out!"
        actions={<button onClick={() => setIsOpen(false)} className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]">Close</button>}
      >
        <p className="text-gray-700">We received your message and will reply within 1-2 business days.</p>
      </Modal>
    </div>
  );
}
