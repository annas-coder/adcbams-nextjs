interface TwoColumnBlockProps {
  image?: string | { src: string; alt: string };
  imageAlt?: string;
  title?: string;
  content?: string;
  listItems?: string[];
  items?: string[];
  reverse?: boolean;
}

export default function TwoColumnBlock({
  image,
  imageAlt,
  title,
  content,
  listItems,
  items,
  reverse = false,
}: TwoColumnBlockProps) {
  const imageSrc = typeof image === 'string' ? image : image?.src;
  const imageAltText = typeof image === 'string' ? (imageAlt || title || '') : (image?.alt || imageAlt || title || '');
  const listItemsToUse = listItems || items || [];

  const imageColumn = (
    <div className="col-sm-24">
      <div className="c-two-column__image">
        {imageSrc && <img src={imageSrc} alt={imageAltText} />}
      </div>
    </div>
  );

  const contentColumn = (
    <div className="col-sm-24">
      <div className="c-two-column__block-wrapper">
        {title && <h3 className="c-two-column__block-title">{title}</h3>}
        {listItemsToUse.length > 0 && (
          <div className="c-tick-list" style={{ margin: 0, padding: 0 }}>
            <ul className="c-two-column__block__service-list">
              {listItemsToUse.map((item, index) => (
                <li key={index} style={{ marginBottom: 0, paddingBottom: 0 }}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}
        {content && <p className="c-desc-text">{content}</p>}
      </div>
    </div>
  );

  return (
    <div className="c-two-column__block">
      <div className="row">
        {reverse ? (
          <>
            {contentColumn}
            {imageColumn}
          </>
        ) : (
          <>
            {imageColumn}
            {contentColumn}
          </>
        )}
      </div>
    </div>
  );
}

