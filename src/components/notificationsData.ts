

interface Notification {
  id: number;
  type: 'alert' | 'progress' | 'project';
  message: string;
  read: boolean;
}

const notifications: Notification[] = [
  { id: 1, type: 'alert', message: 'Your goal "Reduce Plastic" is due soon!', read: false },
  { id: 2, type: 'progress', message: 'You completed 3 eco-tasks this week!', read: false },
  { id: 3, type: 'project', message: 'New project "Community Clean-Up" added.', read: false },
  { id: 4, type: 'alert', message: 'Marketplace: New eco-friendly products available.', read: true },
];

export default notifications;
