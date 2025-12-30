import { PdfDownloadItem } from '@/lib/types/page';

interface PdfDownloadBoxesProps {
  items: Array<PdfDownloadItem & { subtitle?: string; label?: string; target?: string; rel?: string }>;
}

export default function PdfDownloadBoxes({ items }: PdfDownloadBoxesProps) {
  return (
    <div className="c-self-directed-inestment__container">
      <div className="container">
        <div className="c-box__gid c-two-column__grid">
          {items.map((item, index) => (
            <div key={index} className="c-content__box">
              <h4>{item.title}</h4>
              {(item.date || item.subtitle) && (
                <>
                  {item.date || item.subtitle}
                  <br />
                  <br />
                </>
              )}
              <a
                href={item.href}
                target={item.target || '_blank'}
                rel={item.rel || 'noopener noreferrer'}
              >
                <button className="c-outline-button">{item.label || 'Download (PDF)'}</button>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

