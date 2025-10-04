import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { Bell, CheckCircle2, TriangleAlert } from 'lucide-react';

export type NotificationType = 'progress' | 'milestone' | 'project' | 'system';

export interface NotificationItem {
  id: number;
  message: string;
  type: NotificationType;
  createdAt: number;
  read: boolean;
}

interface NotificationsContextValue {
  notifications: NotificationItem[];
  unreadCount: number;
  addNotification: (message: string, type?: NotificationType) => void;
  markAllRead: () => void;
  clear: () => void;
}

const NotificationsContext = createContext<NotificationsContextValue | undefined>(undefined);

export function NotificationProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>([]);
  const [idCounter, setIdCounter] = useState(0);

  const addNotification = useCallback((message: string, type: NotificationType = 'system') => {
    setIdCounter((c) => c + 1);
    setNotifications((prev) => [
      { id: idCounter + 1, message, type, createdAt: Date.now(), read: false },
      ...prev,
    ].slice(0, 20));
  }, [idCounter]);

  const markAllRead = useCallback(() => {
    setNotifications((items) => items.map((n) => ({ ...n, read: true })));
  }, []);

  const clear = useCallback(() => setNotifications([]), []);

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  const value = useMemo(
    () => ({ notifications, unreadCount, addNotification, markAllRead, clear }),
    [notifications, unreadCount, addNotification, markAllRead, clear]
  );

  return (
    <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>
  );
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error('useNotifications must be used within NotificationProvider');
  return ctx;
}

export function NotificationsBell() {
  const { notifications, unreadCount, markAllRead, clear } = useNotifications();
  const [open, setOpen] = useState(false);

  const typeColor: Record<NotificationType, string> = {
    progress: 'text-[#2D5A27]',
    milestone: 'text-[#87CEEB]',
    project: 'text-[#FF8C42]',
    system: 'text-gray-600',
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative p-2 rounded-md hover:bg-[#3d7a37]/20 transition-colors"
        aria-label="Notifications"
      >
        <Bell className="h-6 w-6" />
        {unreadCount > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-600 text-white text-xs rounded-full px-1.5 py-0.5">
            {unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-80 bg-white text-gray-800 rounded-xl shadow-2xl border border-gray-100 z-50">
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="font-semibold">Notifications</div>
            <div className="flex items-center gap-2 text-sm">
              <button onClick={markAllRead} className="text-[#2D5A27] hover:underline">Mark all read</button>
              <button onClick={clear} className="text-gray-500 hover:underline">Clear</button>
            </div>
          </div>
          <div className="max-h-80 overflow-auto divide-y divide-gray-100">
            {notifications.length === 0 ? (
              <div className="px-4 py-6 text-sm text-gray-500 flex items-center gap-2">
                <TriangleAlert className="h-4 w-4" /> No notifications yet
              </div>
            ) : (
              notifications.map((n) => (
                <div key={n.id} className={`px-4 py-3 text-sm flex items-start gap-2 ${n.read ? 'bg-white' : 'bg-[#2D5A27]/5'}`}>
                  <CheckCircle2 className={`h-4 w-4 mt-0.5 ${typeColor[n.type]}`} />
                  <div className="flex-1">
                    <div className="leading-snug">{n.message}</div>
                    <div className="text-xs text-gray-500 mt-0.5">{new Date(n.createdAt).toLocaleString()}</div>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
}
