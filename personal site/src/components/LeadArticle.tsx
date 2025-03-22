import Link from 'next/link';
import Image from 'next/image';

interface LeadArticleProps {
  title: string;
  summary: string;
  imageUrl: string;
  imageAlt: string;
  category?: string;
  author?: string;
  url: string;
}

const LeadArticle: React.FC<LeadArticleProps> = ({
  title,
  summary,
  imageUrl,
  imageAlt,
  category,
  author,
  url
}) => {
  return (
    <article className="mb-8 border-b border-nytLightGray pb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="order-2 md:order-1">
          {category && (
            <div className="text-xs font-bold uppercase text-nytMediumGray mb-2">{category}</div>
          )}

          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-4 leading-tight">
            <Link href={url} className="hover:text-nytBlue">
              {title}
            </Link>
          </h1>

          <p className="text-lg md:text-xl text-nytMediumGray mb-4 leading-relaxed">
            {summary}
          </p>

          {author && (
            <p className="text-sm text-nytMediumGray">
              By {author}
            </p>
          )}
        </div>

        <div className="order-1 md:order-2">
          <Link href={url}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                key={`lead-img-${url}`}
                src={imageUrl}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover hover:opacity-90 transition-opacity"
                unoptimized
                priority
              />
            </div>
          </Link>
        </div>
      </div>
    </article>
  );
};

export default LeadArticle;
