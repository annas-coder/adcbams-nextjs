import Link from 'next/link';

interface GridItem {
  title: string;
  ideaGeneration: string;
  tradeDecision: string;
  services: string[];
  link?: {
    href: string;
    label: string;
  };
}

interface InvestmentServiceGridProps {
  items: GridItem[];
}

export default function InvestmentServiceGrid({ items }: InvestmentServiceGridProps) {
  return (
    <div className="container grid-responsive">
      <div className="c-investment-service__grid">
        {/* Header row */}
        <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, .5)', color: '#00205b', fontWeight: 'bold' }}></div>
        {items.map((item, index) => (
          <div key={`header-${index}`} className="c-investment-service__grid-item">
            <h4>{item.title}</h4>
          </div>
        ))}

        {/* Idea Generation row */}
        <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, 1)', color: '#00205b', fontWeight: 'bold' }}>
          <span>Idea Generation</span>
        </div>
        {items.map((item, index) => (
          <div key={`idea-${index}`} className="c-investment-service__grid-item">
            <span>{item.ideaGeneration}</span>
          </div>
        ))}

        {/* Trade Decision row */}
        <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, 1)', color: '#00205b', fontWeight: 'bold' }}>
          <span>Trade Decision</span>
        </div>
        {items.map((item, index) => (
          <div key={`trade-${index}`} className="c-investment-service__grid-item">
            <span>{item.tradeDecision}</span>
          </div>
        ))}

        {/* Strategy row */}
        <div className="c-investment-service__grid-item" style={{ background: 'rgba(62, 94, 169, .5)' }}></div>
        <div className="c-investment-service__grid-item" style={{ gridColumn: `span ${items.length}` }}>
          Strategy and Research / Decision Support
        </div>
        <div className="c-investment-service__grid-item" style={{ background: 'rgba(255,255,255, .5)', color: '#00205b', fontWeight: 'bold' }}></div>

        {/* Services rows */}
        {items.map((item, index) => (
          <div key={`services-${index}`} className="c-investment-service__grid-item">
            <h4>{item.title === 'Self Directed' ? 'Self Directed Investment' : item.title === 'Advisory' ? 'Bespoke Advised Solutions' : 'Discretionary Portfolio Solutions'}</h4>
            <ul>
              {item.services.map((service, serviceIndex) => (
                <li key={serviceIndex}>{service}</li>
              ))}
            </ul>
          </div>
        ))}

        {/* Links row */}
        <div className="c-investment-service__grid-item"></div>
        {items.map((item, index) => (
          <div key={`link-${index}`} className="c-investment-service__grid-item">
            {item.link && (
              <Link href={item.link.href} className="c-outline-button">
                {item.link.label}
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}


