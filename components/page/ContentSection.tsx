import Link from 'next/link';
import { ContentSection as ContentSectionType } from '@/lib/types/page';
import ContactCards from './ContactCards';
import PdfDownloadBoxes from './PdfDownloadBoxes';
import TwoColumnBlock from './TwoColumnBlock';

interface ContentSectionProps {
  section: ContentSectionType;
}

export default function ContentSection({ section }: ContentSectionProps) {
  switch (section.type) {
    case 'paragraph':
      return (
        <p>{section.content}</p>
      );

    case 'list':
      const listClassName = section.columns === 2 ? 'c-tick-list -cols-2' : 'c-tick-list';
      return (
        <div className={listClassName}>
          <ul>
            {section.items.map((item, index) => (
              <li key={index} style={{ paddingBottom: 0 }}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      );

    case 'contactInfo':
      return (
        <div className="row">
          <div className="col-sm-22">
            <p>
              {section.address.company}
              {section.address.address.map((line, index) => (
                <span key={index}>
                  <br />
                  {line}
                </span>
              ))}
              {section.address.phone && (
                <>
                  <br />
                  <a href={section.address.phone.href}>{section.address.phone.label}</a>
                </>
              )}
            </p>
          </div>
          <div className="col-sm-4"> </div>
          {section.map && (
            <div key="map" className="col-sm-22">
              <iframe
                src={section.map.src}
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen
                title={section.map.title}
              ></iframe>
            </div>
          )}
        </div>
      );

    case 'getInTouch':
      return <ContactCards title={section.title} items={section.items} />;

    case 'twoColumn':
      return (
        <div className="c-self-directed-investment__container c-blue-container">
          <div className="container">
            <TwoColumnBlock
              image={section.image}
              imageAlt={section.imageAlt}
              title={section.title}
              content={section.content}
              listItems={section.listItems}
              items={section.items}
              reverse={section.reverse}
            />
          </div>
        </div>
      );

    case 'pdfDownloads':
    case 'downloads':
      return <PdfDownloadBoxes items={section.items} />;

    case 'imageBanner':
      return (
        <div className="container c-investment-solutions__banner">
          <div className="row">
            <div
              className="col-md-48 hero-section__img-wrapper"
              style={{ maxHeight: section.maxHeight || '460px' }}
            >
              <img
                src={section.src}
                alt={section.alt}
                className="img-responsive"
              />
            </div>
          </div>
        </div>
      );

    default:
      return null;
  }
}

