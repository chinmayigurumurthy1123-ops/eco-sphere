import DashboardNav from '../components/DashboardNav';
import { UserCircle } from 'lucide-react';
import { useToast } from '../components/Toast';

export default function ProfileEdit() {
  const { showToast } = useToast();
  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center gap-3 mb-6">
          <UserCircle className="h-7 w-7 text-[#2D5A27]" />
          <h1 className="text-2xl font-bold text-gray-900">Edit Profile</h1>
        </div>
        <div className="bg-white rounded-xl shadow-md p-6">
          <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); showToast('Profile saved', 'success'); }}>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input type="email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <input type="password" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-[#2D5A27] focus:border-transparent" />
            </div>
            <div className="flex gap-2">
              <button type="submit" className="px-4 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37]">Save</button>
              <button type="button" onClick={() => showToast('Changes discarded', 'warning')} className="px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200">Cancel</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
