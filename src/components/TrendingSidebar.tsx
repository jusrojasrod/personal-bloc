import Link from 'next/link';

interface Article {
  title: string;
  url: string;
}

interface TrendingSidebarProps {
  articles: Article[];
}

const TrendingSidebar: React.FC<TrendingSidebarProps> = ({ articles }) => {
  return (
    <aside className="border-l border-nytLightGray pl-6">
      <h2 className="text-lg font-serif font-bold mb-4 border-b border-nytBlack pb-2">
        Trending
      </h2>

      <ol className="list-decimal list-inside space-y-4 pl-1">
        {articles.map((article, index) => (
          <li key={index} className="mb-4">
            <Link href={article.url} className="font-serif hover:text-nytBlue text-base">
              {article.title}
            </Link>
          </li>
        ))}
      </ol>
    </aside>
  );
};

export default TrendingSidebar;
