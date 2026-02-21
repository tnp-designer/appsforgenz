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
    id: 'orange-ai',
    name: 'Orange AI',
    symbol: 'ORANGE',
    publisher: '@orange_ai',
    price: '$0.0890',
    capxPrice: '0.5280 CAPX',
    vol24h: '$52.10K',
    liquidity: '$280.50K',
    marketCap: '$8.90M',
    holders: '10.2K',
    age: '2mo 3d',
    txns: '2.10K',
    description: 'Orange AI is your all-in-one AI assistant. Use images and voice to get things done—send photos to get answers or identifications, and speak your questions for hands-free help. One app that understands what you show and what you say.',
    releaseDate: '21 Feb 2026',
    tags: ['AI Assistant', 'Voice', 'Images'],
    iconUrl: 'https://picsum.photos/seed/orange/200/200',
    screenshots: [
      'https://picsum.photos/seed/orange1/400/800',
      'https://picsum.photos/seed/orange2/400/800',
      'https://picsum.photos/seed/orange3/400/800',
    ],
    status: 'Active'
  }
];
