import DashboardNav from '../components/DashboardNav';
import { useNotifications } from '../components/Notifications';
import { Trash2, CheckCheck } from 'lucide-react';

export default function NotificationsPanel() {
  const { notifications, markAllRead, removeNotification } = useNotifications();

  return (
    <div className="min-h-screen bg-gray-50">
      <DashboardNav />
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-2xl font-bold text-gray-900">Notifications</h1>
          <button
            onClick={markAllRead}
            className="px-3 py-2 bg-[#2D5A27] text-white rounded-lg hover:bg-[#3d7a37] flex items-center gap-2"
          >
            <CheckCheck className="h-4 w-4" /> Mark all read
          </button>
        </div>

        <div className="bg-white rounded-xl shadow-md divide-y">
          {notifications.length === 0 && (
            <div className="p-6 text-gray-600">You're all caught up.</div>
          )}
          {notifications.map((n) => (
            <div key={n.id} className="p-4 flex items-start gap-3">
              <div className="flex-1">
                <p className="text-gray-900">{n.message}</p>
                <p className="text-xs text-gray-500">{new Date(n.createdAt).toLocaleString()}</p>
              </div>
              <button
                onClick={() => removeNotification(n.id)}
                className="p-2 rounded-lg text-gray-500 hover:bg-gray-100"
                aria-label="Remove notification"
              >
                <Trash2 className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
