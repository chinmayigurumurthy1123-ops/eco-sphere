import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { ToastProvider } from './components/Toast';
import { NotificationsProvider } from './components/Notifications';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <NotificationsProvider>
      <ToastProvider>
        <App />
      </ToastProvider>
    </NotificationsProvider>
  </StrictMode>
);
