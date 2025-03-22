import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadArticle from '@/components/LeadArticle';
import ArticleCard from '@/components/ArticleCard';
import ArticleGrid from '@/components/ArticleGrid';
import TrendingSidebar from '@/components/TrendingSidebar';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import AdBanner from '@/components/AdBanner';

import {
  worldArticles,
  trendingArticles,
  opinionArticles
} from '@/data/mockArticles';

// Lead article for the international page
const internationalLead = {
  id: 'intl-lead',
  title: 'United Nations Calls for Stronger Climate Action in Developing Nations',
  summary: 'A new report highlights the disproportionate impact of climate change on developing countries and urges wealthy nations to increase financial support for adaptation measures.',
  imageUrl: 'https://ext.same-assets.com/2792706873/4116175539.jpeg',
  imageAlt: 'United Nations climate conference',
  category: 'Climate & Environment',
  author: 'Maria Rodriguez',
  url: '/article/un-climate-developing-nations'
};

// Additional international news articles
const internationalNews = [
  {
    id: 'intl-1',
    title: 'European Parliament Approves Landmark Digital Markets Act',
    summary: 'The new legislation aims to rein in the market power of big tech companies and create a more level playing field for smaller businesses.',
    imageUrl: 'https://ext.same-assets.com/2792706873/1860051894.jpeg',
    imageAlt: 'European Parliament in session',
    category: 'Europe',
    author: 'Pierre Dubois',
    url: '/article/eu-digital-markets-act'
  },
  {
    id: 'intl-2',
    title: 'Asia-Pacific Trade Agreement Enters Final Phase of Negotiations',
    summary: 'Fifteen countries are set to form the world\'s largest trading bloc, covering nearly a third of the global economy.',
    imageUrl: 'https://ext.same-assets.com/2792706873/3965110873.jpeg',
    imageAlt: 'Trade negotiation meeting',
    category: 'Asia',
    author: 'Lin Wei',
    url: '/article/asia-pacific-trade-agreement'
  },
  {
    id: 'intl-3',
    title: 'African Union Launches Continental Free Trade Area',
    summary: 'The initiative aims to boost intra-African trade and strengthen economic integration across the continent.',
    imageUrl: 'https://ext.same-assets.com/2792706873/2114178005.jpeg',
    imageAlt: 'African Union summit',
    category: 'Africa',
    author: 'Amara Okafor',
    url: '/article/african-union-trade'
  },
  {
    id: 'intl-4',
    title: 'Middle East Peace Talks Resume After Year-Long Hiatus',
    summary: 'Diplomatic efforts have restarted with international mediators working to broker a lasting agreement.',
    imageUrl: 'https://ext.same-assets.com/2792706873/2724441048.jpeg',
    imageAlt: 'Middle East peace talks',
    category: 'Middle East',
    author: 'Ziad Nasrallah',
    url: '/article/middle-east-peace-talks'
  },
  {
    id: 'intl-5',
    title: 'Latin American Nations Form Alliance to Combat Drug Trafficking',
    summary: 'The cooperative initiative includes joint operations and intelligence sharing to disrupt criminal networks.',
    imageUrl: 'https://ext.same-assets.com/2792706873/3151974712.jpeg',
    imageAlt: 'Latin American leaders signing agreement',
    category: 'Americas',
    author: 'Carlos Mendez',
    url: '/article/latin-america-drug-trafficking'
  },
  {
    id: 'intl-6',
    title: 'Global Refugee Crisis Worsens as Displacement Reaches Record Levels',
    summary: 'The number of forcibly displaced people worldwide has surpassed 100 million for the first time, according to new UN data.',
    imageUrl: 'https://ext.same-assets.com/2792706873/1957147224.jpeg',
    imageAlt: 'Refugee camp',
    category: 'Human Rights',
    author: 'Sophie Martin',
    url: '/article/global-refugee-crisis'
  }
];

export default function InternationalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6">
        {/* Page Title */}
        <div className="mb-6 text-center">
          <h1 className="text-3xl font-serif font-bold">International</h1>
          <p className="text-nytMediumGray">Global news, analysis and world coverage</p>
        </div>

        {/* Lead Article */}
        <LeadArticle
          title={internationalLead.title}
          summary={internationalLead.summary}
          imageUrl={internationalLead.imageUrl}
          imageAlt={internationalLead.imageAlt}
          category={internationalLead.category}
          author={internationalLead.author}
          url={internationalLead.url}
        />

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            {/* International News */}
            <ArticleGrid title="Latest International News" columns={2} bordered>
              {internationalNews.slice(0, 4).map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  summary={article.summary}
                  imageUrl={article.imageUrl}
                  imageAlt={article.imageAlt}
                  category={article.category}
                  author={article.author}
                  url={article.url}
                  size="medium"
                />
              ))}
            </ArticleGrid>

            {/* Ad Banner */}
            <AdBanner size="leaderboard" />

            {/* World News Section */}
            <ArticleGrid title="Regional Focus" columns={2} bordered>
              {internationalNews.slice(4, 6).map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  summary={article.summary}
                  imageUrl={article.imageUrl}
                  imageAlt={article.imageAlt}
                  category={article.category}
                  author={article.author}
                  url={article.url}
                  size="medium"
                />
              ))}
            </ArticleGrid>

            {/* More World News */}
            <ArticleGrid title="Global Updates" columns={3}>
              {worldArticles.map((article) => (
                <ArticleCard
                  key={article.id}
                  title={article.title}
                  summary={article.summary}
                  imageUrl={article.imageUrl}
                  imageAlt={article.imageAlt}
                  category={article.category}
                  author={article.author}
                  url={article.url}
                  size="small"
                />
              ))}
            </ArticleGrid>
          </div>

          {/* Side Column */}
          <div className="lg:col-span-1">
            {/* Opinion Section */}
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-6 border-b border-nytBlack pb-2">
                Global Opinion
              </h2>

              <div className="space-y-4">
                {opinionArticles.map((article) => (
                  <div key={article.id} className="mb-4">
                    <h3 className="font-serif text-lg font-bold hover:text-nytBlue">
                      <a href={article.url}>{article.title}</a>
                    </h3>
                    {article.author && (
                      <p className="text-sm text-nytMediumGray">
                        By {article.author}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Newsletter Subscription */}
            <NewsletterSubscribe />

            {/* Trending Section */}
            <TrendingSidebar articles={trendingArticles} />

            {/* Ad Banner */}
            <div className="mt-8">
              <AdBanner size="medium" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
