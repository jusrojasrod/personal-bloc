import Link from 'next/link';
import Image from 'next/image';

export interface ArticleCardProps {
  title: string;
  summary?: string;
  imageUrl?: string;
  imageAlt?: string;
  category?: string;
  author?: string;
  url: string;
  size?: 'small' | 'medium' | 'large' | 'featured';
  showImage?: boolean;
  orientation?: 'horizontal' | 'vertical';
}

const ArticleCard: React.FC<ArticleCardProps> = ({
  title,
  summary,
  imageUrl,
  imageAlt = 'Article image',
  category,
  author,
  url,
  size = 'medium',
  showImage = true,
  orientation = 'vertical'
}) => {
  const titleSizeClasses = {
    small: 'text-base font-serif leading-tight',
    medium: 'text-xl font-serif leading-tight',
    large: 'text-2xl font-serif leading-tight',
    featured: 'text-3xl md:text-4xl font-serif leading-tight'
  };

  const summarySizeClasses = {
    small: 'text-sm',
    medium: 'text-base',
    large: 'text-base',
    featured: 'text-lg'
  };

  const imageContainerClasses = {
    horizontal: 'flex',
    vertical: 'block'
  };

  return (
    <article className={`mb-6 ${orientation === 'horizontal' ? 'flex items-start' : 'block'}`}>
      {showImage && imageUrl && (
        <div className={`${orientation === 'horizontal' ? 'w-1/3 flex-shrink-0 mr-4' : 'w-full mb-3'}`}>
          <Link href={url}>
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                key={`img-${url}`}
                src={imageUrl}
                alt={imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover hover:opacity-90 transition-opacity"
                unoptimized
              />
            </div>
          </Link>
        </div>
      )}

      <div className={orientation === 'horizontal' ? 'flex-1' : 'w-full'}>
        {category && (
          <div className="text-xs font-bold uppercase text-nytMediumGray mb-1">{category}</div>
        )}

        <h3 className={`${titleSizeClasses[size]} mb-2 hover:text-nytBlue`}>
          <Link href={url}>
            {title}
          </Link>
        </h3>

        {summary && (
          <p className={`${summarySizeClasses[size]} text-nytMediumGray mb-2`}>
            {summary}
          </p>
        )}

        {author && (
          <p className="text-xs text-nytMediumGray">
            By {author}
          </p>
        )}
      </div>
    </article>
  );
};

export default ArticleCard;
