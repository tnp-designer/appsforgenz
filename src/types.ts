export interface AppData {
  id: string;
  name: string;
  symbol: string;
  publisher: string;
  price: string;
  capxPrice: string;
  vol24h: string;
  liquidity: string;
  marketCap: string;
  holders: string;
  age: string;
  txns: string;
  description: string;
  releaseDate: string;
  tags: string[];
  iconUrl: string;
  screenshots: string[];
  status: 'Active' | 'Inactive';
}

export const MOCK_APPS: AppData[] = [
  {
    id: 'bite-ai',
    name: 'Bite AI',
    symbol: 'BITE',
    publisher: '@rafael',
    price: '$0.0757',
    capxPrice: '0.4496 CAPX',
    vol24h: '$67.25K',
    liquidity: '$341.96K',
    marketCap: '$7.57M',
    holders: '8.57K',
    age: '1mo 10d',
    txns: '1.50K',
    description: 'Bite AI is a smart calorie-tracking app designed to make nutrition effortless. Users can track meals by snapping a photo, and the app\'s AI instantly identifies the food and estimates calories. It automatically adjusts your daily calorie budget based on your goals (weight loss, maintenance, or muscle gain).',
    releaseDate: '09 Jan 2026',
    tags: ['Nutrition', 'Health'],
    iconUrl: 'https://picsum.photos/seed/bite/200/200',
    screenshots: [
      'https://picsum.photos/seed/bite1/400/800',
      'https://picsum.photos/seed/bite2/400/800',
      'https://picsum.photos/seed/bite3/400/800',
      'https://picsum.photos/seed/bite4/400/800',
    ],
    status: 'Active'
  },
  {
    id: 'kirrin',
    name: 'KIRRIN',
    symbol: 'KIRRIN',
    publisher: '@kirrin_dev',
    price: '$0.0937',
    capxPrice: '0.5560 CAPX',
    vol24h: '$36.67K',
    liquidity: '$362.07K',
    marketCap: '$9.37M',
    holders: '13.80K',
    age: '16d 18h',
    txns: '1.17K',
    description: 'Kirrin is a decentralized social layer for Gen Z creators. It allows for seamless tokenization of content and direct engagement with fans through micro-DAOs.',
    releaseDate: '01 Feb 2026',
    tags: ['AI Assistant', 'Productivity'],
    iconUrl: 'https://picsum.photos/seed/kirrin/200/200',
    screenshots: [
      'https://picsum.photos/seed/kirrin1/400/800',
      'https://picsum.photos/seed/kirrin2/400/800',
    ],
    status: 'Active'
  },
  {
    id: 'pulse',
    name: 'Pulse AI',
    symbol: 'PULSE',
    publisher: '@pulse_labs',
    price: '$0.1240',
    capxPrice: '0.7210 CAPX',
    vol24h: '$120.5K',
    liquidity: '$890.2K',
    marketCap: '$12.4M',
    holders: '25.2K',
    age: '3mo 5d',
    txns: '5.2K',
    description: 'Pulse AI monitors your digital well-being and provides real-time insights into your focus levels and stress patterns using non-invasive biometric data.',
    releaseDate: '15 Nov 2025',
    tags: ['Wellness', 'AI'],
    iconUrl: 'https://picsum.photos/seed/pulse/200/200',
    screenshots: [
      'https://picsum.photos/seed/pulse1/400/800',
      'https://picsum.photos/seed/pulse2/400/800',
    ],
    status: 'Active'
  }
];
