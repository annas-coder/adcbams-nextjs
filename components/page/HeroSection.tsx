interface HeroSectionProps {
  category: string;
  title: string;
  subtitle?: string;
}

export default function HeroSection({ category, title, subtitle }: HeroSectionProps) {
  return (
    <div className="hero-section">
      <div className="hero-section__content-wrapper container">
        <div className="hero-section__title-wrapper">
          <h1 className="hero-section__title hero-section__title">
            <sup className="hero-section__category">{category}</sup>
            {title}
          </h1>
        </div>
        {subtitle && (
          <p className="o-comp__title_desc" style={{ margin: 'auto' }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}


