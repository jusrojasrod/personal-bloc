import { ReactNode } from 'react';

interface ArticleGridProps {
  children: ReactNode;
  title?: string;
  columns?: 2 | 3 | 4;
  bordered?: boolean;
}

const ArticleGrid: React.FC<ArticleGridProps> = ({
  children,
  title,
  columns = 3,
  bordered = false
}) => {
  const gridClasses = {
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4'
  };

  return (
    <section className={`mb-10 ${bordered ? 'border-b border-nytLightGray pb-8' : ''}`}>
      {title && (
        <h2 className="text-xl md:text-2xl font-serif font-bold mb-6 border-b border-nytBlack pb-2">
          {title}
        </h2>
      )}

      <div className={`grid ${gridClasses[columns]} gap-6`}>
        {children}
      </div>
    </section>
  );
};

export default ArticleGrid;
