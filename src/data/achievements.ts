import type { Achievement } from '../types';

export const achievements: Achievement[] = [
  {
    id: 'bal-des-projets-2026',
    title: '1st Prize — ESPRIT Bal des Projets 2026',
    organization: 'ESPRIT',
    year: '2026',
    description: 'Winner of the 1st Prize among Software Engineering projects at the 13th edition of ESPRIT Bal des Projets for the AI-powered marketplace platform ESPRIT Market, presented and defended before academic and industry juries.',
    icon: '🏆',
    badge: '1st Prize Award',
    image: '/images/bal-des-projets/farah-premier-prix.jpg',
    images: [
      {
        url: '/images/bal-des-projets/farah-premier-prix.jpg',
        caption: 'Farah Zekri avec le diplôme du 1er Prix',
      },
      {
        url: '/images/bal-des-projets/certificat-premier-prix.jpg',
        caption: 'Certificat officiel du Premier Prix Software Engineering',
      },
      {
        url: '/images/bal-des-projets/equipe-remise-prix.jpg',
        caption: "L'équipe sur scène lors de la proclamation des lauréats",
      },
      {
        url: '/images/bal-des-projets/ceremonie-scene.jpg',
        caption: 'Cérémonie officielle du Bal des Projets à ESPRIT',
      },
    ],
  },
  {
    id: 'aws-cloud-foundations',
    title: 'AWS Academy Graduate — Cloud Foundations',
    organization: 'Amazon Web Services (AWS)',
    year: 'Nov. 2026',
    description: 'Certified 20-hour curriculum covering AWS Cloud concepts, security, architecture, core compute/storage/database services, pricing models, and cloud infrastructure management.',
    icon: '☁️',
    badge: 'AWS Graduate',
  },
  {
    id: 'hedera-hashgraph',
    title: 'Hedera Hashgraph Association (In Progress)',
    organization: 'Hedera Hashgraph Association',
    year: '2026 (In Progress)',
    description: 'Active certification path covering Hedera Certified Foundation (HCF), Developer Associate (HCDA), and Business Foundation (HBF) for decentralized distributed ledger technologies.',
    icon: '⛓️',
    badge: 'In Progress',
  },
];
