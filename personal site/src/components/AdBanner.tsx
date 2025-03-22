interface AdBannerProps {
  size?: 'small' | 'medium' | 'large' | 'leaderboard';
  variant?: 'light' | 'dark';
}

const AdBanner: React.FC<AdBannerProps> = ({
  size = 'medium',
  variant = 'light'
}) => {
  const sizeClasses = {
    small: 'h-[100px]',
    medium: 'h-[250px]',
    large: 'h-[400px]',
    leaderboard: 'h-[90px]'
  };

  const variantClasses = {
    light: 'bg-nytOffWhite text-nytMediumGray',
    dark: 'bg-nytLightGray text-nytDarkGray'
  };

  return (
    <div className={`w-full mb-8 ${sizeClasses[size]} ${variantClasses[variant]} flex items-center justify-center border border-nytLightGray`}>
      <div className="text-center">
        <p className="text-xs uppercase mb-2">Advertisement</p>
        <p className="text-sm">This is a sample ad placement</p>
      </div>
    </div>
  );
};

export default AdBanner;
