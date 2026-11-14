import type { Education } from '../types';

export const education: Education[] = [
  {
    id: 'esprit-engineering',
    degree: 'Software Engineering Degree (Engineering Cycle)',
    institution: 'ESPRIT',
    location: 'Tunis',
    period: '2024 – 2027 (expected)',
    description: '3rd year of Software Engineering degree. Specialization in software architectures and DevOps.',
    details: [
      '3rd year of Software Engineering degree (Engineering Cycle)',
      'Specialization in software architectures and DevOps',
      'Core modules: Distributed Systems, Microservices Architecture, Cloud Computing, Applied AI',
    ],
    current: true,
  },
  {
    id: 'istic-preparatory',
    degree: 'Preparatory Cycle | Industrial Computing',
    institution: 'ISTIC',
    location: 'Tunis',
    period: 'Until 2024',
    description: 'Preparatory training in applied computing and industrial systems.',
    details: [
      'Foundation in engineering sciences, algorithms, and industrial computing systems',
    ],
    current: false,
  },
];
