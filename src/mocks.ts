import { Task } from './types';
import { generateId } from './utils';

export const initialTodos: Task[] = [
  {
    id: generateId(1),
    title: 'read react documentation',
  },
  {
    id: generateId(2),
    title: 'reat vite documentation',
  },
  {
    id: generateId(3),
    title: 'do homework',
  },
];