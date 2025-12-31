import { ContactCardItem } from '@/lib/types/page';

interface ContactCardsProps {
  title: string;
  items: ContactCardItem[];
}

export default function ContactCards({ title, items }: ContactCardsProps) {
  return (
    <div className="o-comp c-get-started">
      <div className="o-comp__content c-container">
        <div className="o-comp__title">
          <h2 className="c-common__page-title">{title}</h2>
        </div>
        <div className="row">
          {items.map((item, index) => (
            <div key={index} className="col-sm-16">
              <div className="c-get-card">
                <div className="c-get-card__icon">
                  <img src={item.icon} alt={item.title} />
                </div>
                <div className="c-get-card__title">{item.title}</div>
                <div className="c-get-card__content">
                  {item.content}
                  {item.highlight && (
                    <>
                      {' '}
                      <span className="c-text-light-blue">'{item.highlight}'</span>
                    </>
                  )}
                  {item.link && (
                    <>
                      {' '}
                      <a href={item.link.href} className={item.link.className || 'c-text-blue'}>
                        {item.link.label}
                      </a>
                    </>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


