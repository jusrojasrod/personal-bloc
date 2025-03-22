export interface Article {
  id: string;
  title: string;
  summary?: string;
  content?: string;
  imageUrl?: string;
  imageAlt?: string;
  category?: string;
  author?: string;
  date?: string;
  url: string;
}

export const featuredArticle: Article = {
  id: 'featured-1',
  title: 'Global Climate Efforts Face New Challenges as Nations Confront Economic Pressures',
  summary: 'As countries deal with inflation and post-pandemic recovery, environmental commitments are being put to the test, raising concerns about meeting global climate goals.',
  imageUrl: 'https://ext.same-assets.com/1712413263/1248550479.svg',
  imageAlt: 'Climate change conference with world leaders',
  category: 'Climate',
  author: 'Jane Smith',
  date: '2025-03-21',
  url: '/article/climate-economic-pressures'
};

export const topArticles: Article[] = [
  {
    id: 'top-1',
    title: 'U.S. and China Hold High-Level Talks Amid Growing Tensions',
    summary: 'Officials from both countries met to discuss trade and security concerns as relations remain strained.',
    imageUrl: 'https://ext.same-assets.com/1712413263/460062091.false',
    imageAlt: 'US and China diplomatic meeting',
    category: 'International',
    author: 'Robert Johnson',
    date: '2025-03-22',
    url: '/article/us-china-talks'
  },
  {
    id: 'top-2',
    title: 'Tech Companies Face New Regulations on AI Development',
    summary: 'Legislators propose stricter oversight on artificial intelligence amid concerns about privacy and misinformation.',
    imageUrl: 'https://ext.same-assets.com/1712413263/3280905123.false',
    imageAlt: 'AI technology visualization',
    category: 'Technology',
    author: 'Sarah Williams',
    date: '2025-03-21',
    url: '/article/tech-ai-regulations'
  },
  {
    id: 'top-3',
    title: 'Major Healthcare Reform Bill Advances in Senate',
    summary: 'The proposed legislation would expand coverage and address rising prescription drug costs.',
    imageUrl: 'https://ext.same-assets.com/1712413263/2885924718.false',
    imageAlt: 'Senate chamber during vote',
    category: 'Politics',
    author: 'Michael Brown',
    date: '2025-03-20',
    url: '/article/healthcare-reform-senate'
  }
];

export const worldArticles: Article[] = [
  {
    id: 'world-1',
    title: 'European Union Unveils New Energy Independence Plan',
    summary: 'The proposal aims to reduce reliance on Russian gas and accelerate transition to renewable sources.',
    imageUrl: 'https://ext.same-assets.com/1712413263/75139711.false',
    imageAlt: 'Wind turbines in Europe',
    category: 'Europe',
    author: 'Anna Müller',
    date: '2025-03-21',
    url: '/article/eu-energy-independence'
  },
  {
    id: 'world-2',
    title: 'Protests Sweep Middle East Amid Economic Crisis',
    summary: 'Rising food prices and unemployment trigger demonstrations across multiple countries.',
    imageUrl: 'https://ext.same-assets.com/1712413263/2724441048.false',
    imageAlt: 'Protests in Middle Eastern city',
    category: 'Middle East',
    author: 'Omar Hassan',
    date: '2025-03-20',
    url: '/article/middle-east-protests'
  },
  {
    id: 'world-3',
    title: 'Pacific Island Nations Call for Urgent Climate Action',
    summary: 'Leaders highlight rising sea levels threatening their existence and demand stronger international measures.',
    imageUrl: 'https://ext.same-assets.com/2792706873/878135906.png',
    imageAlt: 'Coastal erosion on a Pacific island',
    category: 'Pacific',
    author: 'Leilani Wong',
    date: '2025-03-19',
    url: '/article/pacific-climate-action'
  }
];

export const businessArticles: Article[] = [
  {
    id: 'business-1',
    title: "Wall Street Reacts to Federal Reserve's Latest Rate Decision",
    summary: 'Markets show mixed response as central bank signals policy shift to address inflation concerns.',
    imageUrl: 'https://ext.same-assets.com/2792706873/2132281477.jpeg',
    imageAlt: 'Wall Street stock exchange',
    category: 'Markets',
    author: 'David Goldman',
    date: '2025-03-22',
    url: '/article/fed-rate-decision'
  },
  {
    id: 'business-2',
    title: 'Major Merger Creates New Telecommunications Giant',
    summary: 'The $45 billion deal will reshape the industry landscape and faces regulatory scrutiny.',
    imageUrl: 'https://ext.same-assets.com/2792706873/1657722857.jpeg',
    imageAlt: 'Telecommunications tower',
    category: 'Companies',
    author: 'Emily Zhang',
    date: '2025-03-21',
    url: '/article/telecom-merger'
  },
  {
    id: 'business-3',
    title: 'Supply Chain Disruptions Continue to Impact Global Retail',
    summary: 'Retailers warn of delayed shipments and potential price increases ahead of holiday season.',
    imageUrl: 'https://ext.same-assets.com/1712413263/2114178005.false',
    imageAlt: 'Shipping containers at port',
    category: 'Retail',
    author: 'Thomas Reed',
    date: '2025-03-20',
    url: '/article/supply-chain-retail'
  }
];

export const opinionArticles: Article[] = [
  {
    id: 'opinion-1',
    title: 'Democracy Faces Its Greatest Test in a Generation',
    author: 'Jonathan Stevenson',
    url: '/opinion/democracy-test'
  },
  {
    id: 'opinion-2',
    title: 'The Climate Crisis Demands a New Economic Model',
    author: 'Elena Rodriguez',
    url: '/opinion/climate-economics'
  },
  {
    id: 'opinion-3',
    title: 'How Technology Is Reshaping Our Social Fabric',
    author: 'Wei Chen',
    url: '/opinion/technology-social-impact'
  },
  {
    id: 'opinion-4',
    title: 'A New Approach to Global Health Security',
    author: 'Aisha Okafor',
    url: '/opinion/global-health'
  }
];

export const trendingArticles: Article[] = [
  {
    id: 'trending-1',
    title: "Scientists Report Breakthrough in Alzheimer's Research",
    url: '/article/alzheimers-breakthrough'
  },
  {
    id: 'trending-2',
    title: 'Actor Wins Oscar After Decades-Long Career',
    url: '/article/oscar-win'
  },
  {
    id: 'trending-3',
    title: 'Rare Planetary Alignment Visible This Weekend',
    url: '/article/planetary-alignment'
  },
  {
    id: 'trending-4',
    title: 'New Study Reveals Surprising Benefits of Coffee',
    url: '/article/coffee-benefits'
  },
  {
    id: 'trending-5',
    title: 'Historic Peace Agreement Reached in Long-Running Conflict',
    url: '/article/peace-agreement'
  }
];

export const artsArticles: Article[] = [
  {
    id: 'arts-1',
    title: 'New Exhibition Redefines Contemporary Art',
    summary: 'The groundbreaking show features works from emerging artists challenging traditional perspectives.',
    imageUrl: 'https://ext.same-assets.com/1712413263/3151974712.false',
    imageAlt: 'Modern art exhibition',
    category: 'Art',
    author: 'Isabella Chen',
    date: '2025-03-21',
    url: '/article/contemporary-art-exhibition'
  },
  {
    id: 'arts-2',
    title: 'Award-Winning Novel Explores Migration and Identity',
    summary: "The critically acclaimed book draws on author's personal experiences crossing borders.",
    imageUrl: 'https://ext.same-assets.com/2792706873/1957147224.jpeg',
    imageAlt: 'Book cover artwork',
    category: 'Books',
    author: 'Rafael Gutiérrez',
    date: '2025-03-20',
    url: '/article/migration-novel'
  },
  {
    id: 'arts-3',
    title: 'Film Festival Highlights Indies From Around the World',
    summary: 'The annual event showcases emerging filmmakers and unconventional storytelling approaches.',
    imageUrl: 'https://ext.same-assets.com/2792706873/4136651251.jpeg',
    imageAlt: 'Film festival audience',
    category: 'Movies',
    author: 'Priya Sharma',
    date: '2025-03-19',
    url: '/article/film-festival'
  }
];
