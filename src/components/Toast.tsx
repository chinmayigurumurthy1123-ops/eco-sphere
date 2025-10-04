import { createContext, useCallback, useContext, useMemo, useRef, useState } from 'react';

export type ToastVariant = 'success' | 'info' | 'error' | 'warning';

export interface ToastItem {
  id: number;
  message: string;
  variant: ToastVariant;
}

interface ToastContextValue {
  showToast: (message: string, variant?: ToastVariant) => void;
}

const ToastContext = createContext<ToastContextValue | undefined>(undefined);

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [toasts, setToasts] = useState<ToastItem[]>([]);
  const idRef = useRef(0);

  const remove = useCallback((id: number) => {
    setToasts((items) => items.filter((t) => t.id !== id));
  }, []);

  const showToast = useCallback((message: string, variant: ToastVariant = 'info') => {
    const id = ++idRef.current;
    setToasts((items) => [...items, { id, message, variant }]);
    setTimeout(() => remove(id), 3000);
  }, [remove]);

  const value = useMemo(() => ({ showToast }), [showToast]);

  return (
    <ToastContext.Provider value={value}>
      {children}
      <div className="fixed top-4 right-4 z-50 space-y-3">
        {toasts.map((toast) => (
          <Toast key={toast.id} item={toast} onClose={() => remove(toast.id)} />
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast must be used within ToastProvider');
  return ctx;
}

function Toast({ item, onClose }: { item: ToastItem; onClose: () => void }) {
  const { message, variant } = item;
  const color = {
    success: 'bg-green-600',
    info: 'bg-[#2D5A27]',
    error: 'bg-red-600',
    warning: 'bg-amber-500',
  }[variant];

  return (
    <div className={`flex items-start gap-3 text-white ${color} rounded-lg shadow-lg px-4 py-3 min-w-[240px]`}
      role="status" aria-live="polite">
      <div className="flex-1">{message}</div>
      <button onClick={onClose} className="text-white/80 hover:text-white">✕</button>
    </div>
  );
}
