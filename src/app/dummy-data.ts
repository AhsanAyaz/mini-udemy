import { Course, Lecture } from './types';

export const COURSES: Course[] = [
  {
    title: 'Angular v17',
    description: 'The best Angular course ever',
    id: '1',
    category: 'angular',
  },
  {
    title: 'NextJS',
    description: 'The best Next 14 course ever',
    id: '2',
    category: 'react',
  },
];

export const LECTURES: Lecture[] = [
  {
    title: 'Setting up environment',
    duration: '20 min',
    id: '1',
    videoUrl: '',
  },
  {
    title: 'Install nodejs',
    duration: '10 min',
    id: '2',
    videoUrl: '',
  },
];
