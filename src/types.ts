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
  subtitle: string;
  privacyPolicyPath: string;
  openAppLabel: string;
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
    status: 'Active',
    subtitle: 'Your AI assistant. Use images and voice to get things done.',
    privacyPolicyPath: '/orange-ai/privacy-policy',
    openAppLabel: 'Open App',
  },
  {
    id: 'llmlite',
    name: 'LLMLite',
    symbol: 'LITE',
    publisher: '@llmlite_app',
    price: '$0.0412',
    capxPrice: '0.2440 CAPX',
    vol24h: '$19.60K',
    liquidity: '$132.00K',
    marketCap: '$4.10M',
    holders: '6.8K',
    age: '1mo 5d',
    txns: '1.40K',
    description: 'LLMLite gives users a lightweight AI chat and productivity experience focused on fast prompts, simple drafting, and streamlined task completion.',
    releaseDate: '12 Mar 2026',
    tags: ['AI', 'Chat', 'Productivity'],
    iconUrl: 'https://picsum.photos/seed/llmlite/200/200',
    screenshots: [
      'https://picsum.photos/seed/llmlite1/400/800',
      'https://picsum.photos/seed/llmlite2/400/800',
      'https://picsum.photos/seed/llmlite3/400/800',
    ],
    status: 'Active',
    subtitle: 'A lightweight AI chat app for quick prompts and everyday productivity.',
    privacyPolicyPath: '/llmlite/privacy-policy',
    openAppLabel: 'Open App',
  },
  {
    id: 'taplink',
    name: 'Taplink',
    symbol: 'TAP',
    publisher: '@taplink_app',
    price: '$0.0268',
    capxPrice: '0.1580 CAPX',
    vol24h: '$11.80K',
    liquidity: '$95.40K',
    marketCap: '$2.70M',
    holders: '4.9K',
    age: '18d',
    txns: '920',
    description: 'Taplink helps users build a profile-based landing page with links, social handles, images, and shareable identity content in one place.',
    releaseDate: '14 Mar 2026',
    tags: ['Links', 'Profile', 'Creator'],
    iconUrl: 'https://picsum.photos/seed/taplink/200/200',
    screenshots: [
      'https://picsum.photos/seed/taplink1/400/800',
      'https://picsum.photos/seed/taplink2/400/800',
      'https://picsum.photos/seed/taplink3/400/800',
    ],
    status: 'Active',
    subtitle: 'A profile and link-sharing app for creators, campaigns, and communities.',
    privacyPolicyPath: '/taplink/privacy-policy',
    openAppLabel: 'Open App',
  },
  {
    id: 'supershop',
    name: 'SuperShop',
    symbol: 'SHOP',
    publisher: '@supershop_app',
    price: '$0.0334',
    capxPrice: '0.1970 CAPX',
    vol24h: '$15.30K',
    liquidity: '$108.20K',
    marketCap: '$3.35M',
    holders: '5.7K',
    age: '24d',
    txns: '1.08K',
    description: 'SuperShop is an in-app browser experience that lets users open and browse supported ecommerce sites without leaving the app.',
    releaseDate: '07 Mar 2026',
    tags: ['Ecommerce', 'Browser', 'Shopping'],
    iconUrl: 'https://picsum.photos/seed/supershop/200/200',
    screenshots: [
      'https://picsum.photos/seed/supershop1/400/800',
      'https://picsum.photos/seed/supershop2/400/800',
      'https://picsum.photos/seed/supershop3/400/800',
    ],
    status: 'Active',
    subtitle: 'Browse ecommerce sites inside the app with a built-in webview experience.',
    privacyPolicyPath: '/supershop/privacy-policy',
    openAppLabel: 'Open App',
  },
];
