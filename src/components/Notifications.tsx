import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { Bell } from 'lucide-react';

export type NotificationCategory = 'progress' | 'milestone' | 'project' | 'community' | 'system';

export interface NotificationItem {
  id: number;
  message: string;
  category: NotificationCategory;
  read: boolean;
  createdAt: number;
}

interface NotificationsContextValue {
  notifications: NotificationItem[];
  unreadCount: number;
  addNotification: (message: string, category?: NotificationCategory) => void;
  markAllRead: () => void;
  removeNotification: (id: number) => void;
}

const NotificationsContext = createContext<NotificationsContextValue | undefined>(undefined);

const STORAGE_KEY = 'ecosfera_notifications';

export function NotificationsProvider({ children }: { children: React.ReactNode }) {
  const [notifications, setNotifications] = useState<NotificationItem[]>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? (JSON.parse(raw) as NotificationItem[]) : [];
    } catch {
      return [];
    }
  });
  const idRef = useRef<number>(notifications.reduce((m, n) => Math.max(m, n.id), 0));

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
  }, [notifications]);

  const addNotification = useCallback((message: string, category: NotificationCategory = 'system') => {
    const id = ++idRef.current;
    const item: NotificationItem = { id, message, category, read: false, createdAt: Date.now() };
    setNotifications((items) => [item, ...items].slice(0, 100));
  }, []);

  const markAllRead = useCallback(() => {
    setNotifications((items) => items.map((n) => ({ ...n, read: true })));
  }, []);

  const removeNotification = useCallback((id: number) => {
    setNotifications((items) => items.filter((n) => n.id !== id));
  }, []);

  const unreadCount = useMemo(() => notifications.filter((n) => !n.read).length, [notifications]);

  const value = useMemo(
    () => ({ notifications, unreadCount, addNotification, markAllRead, removeNotification }),
    [notifications, unreadCount, addNotification, markAllRead, removeNotification]
  );

  return <NotificationsContext.Provider value={value}>{children}</NotificationsContext.Provider>;
}

export function useNotifications() {
  const ctx = useContext(NotificationsContext);
  if (!ctx) throw new Error('useNotifications must be used within NotificationsProvider');
  return ctx;
}

export function NotificationBell({ onClick }: { onClick?: () => void }) {
  const { unreadCount } = useNotifications();
  return (
    <div className="relative">
      <button
        onClick={onClick}
        aria-label="Notifications"
        className="p-2 rounded-lg text-gray-600 hover:bg-gray-100"
      >
        <Bell className="h-5 w-5" />
      </button>
      {unreadCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-[#FF8C42] text-white text-xs rounded-full px-1.5 py-0.5">
          {unreadCount}
        </span>
      )}
    </div>
  );
}
