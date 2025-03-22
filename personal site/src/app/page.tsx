import Header from '@/components/Header';
import Footer from '@/components/Footer';
import LeadArticle from '@/components/LeadArticle';
import ArticleCard from '@/components/ArticleCard';
import ArticleGrid from '@/components/ArticleGrid';
import TrendingSidebar from '@/components/TrendingSidebar';
import NewsletterSubscribe from '@/components/NewsletterSubscribe';
import AdBanner from '@/components/AdBanner';

import {
  featuredArticle,
  topArticles,
  worldArticles,
  businessArticles,
  trendingArticles,
  opinionArticles,
  artsArticles
} from '@/data/mockArticles';

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col transition-colors duration-200">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6 transition-colors duration-200">
        {/* Lead Article */}
        <LeadArticle
          title={featuredArticle.title}
          summary={featuredArticle.summary || ''}
          imageUrl={featuredArticle.imageUrl || ''}
          imageAlt={featuredArticle.imageAlt || ''}
          category={featuredArticle.category}
          author={featuredArticle.author}
          url={featuredArticle.url}
        />

        {/* Top Stories Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8 mb-12">
          {/* Top Stories Column 1-3 */}
          <div className="lg:col-span-3">
            <h2 className="text-xl font-serif font-bold mb-6 border-b border-nytBlack pb-2 transition-colors duration-200">
              Top Stories
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {topArticles.map((article) => (
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
            </div>

            {/* Ad Banner */}
            <AdBanner size="leaderboard" />

            {/* World News Section */}
            <ArticleGrid title="World" columns={3} bordered>
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
                  size="medium"
                />
              ))}
            </ArticleGrid>

            {/* Business Section */}
            <ArticleGrid title="Business" columns={3} bordered>
              {businessArticles.map((article) => (
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

            {/* Arts Section */}
            <ArticleGrid title="Arts" columns={3}>
              {artsArticles.map((article) => (
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
          </div>

          {/* Side Column */}
          <div className="lg:col-span-1">
            {/* Opinion Section */}
            <div className="mb-8">
              <h2 className="text-xl font-serif font-bold mb-6 border-b border-nytBlack pb-2 transition-colors duration-200">
                Opinion
              </h2>

              <div className="space-y-4">
                {opinionArticles.map((article) => (
                  <div key={article.id} className="mb-4">
                    <h3 className="font-serif text-lg font-bold hover:text-nytBlue transition-colors duration-200">
                      <a href={article.url}>{article.title}</a>
                    </h3>
                    {article.author && (
                      <p className="text-sm text-nytMediumGray transition-colors duration-200">
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
