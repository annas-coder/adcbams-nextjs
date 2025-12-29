'use client';

import { useState } from 'react';

export default function AccessibilityButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div className="c-accessibility__btn">
        <div className="c-accessibility__tick" style={{ display: 'none' }}>
          <i className="icon-tick"></i>
        </div>
        <a
          role="button"
          className="c-accessibility__link"
          onClick={() => setIsOpen(true)}
          href="#"
        >
          <img
            className="c-accessibility__icon"
            src="https://www.adcb.com/en/Images/accessibilityicon_tcm41-485374.svg"
            alt="Accessibility settings"
          />
          <div className="c-accessibility__text">Accessibility</div>
        </a>
      </div>
      {isOpen && (
        <div
          className="c-accessibility__modal"
          id="id01"
          style={{ display: 'flex' }}
        >
          <div className="c-accessibility__modal-wrapper">
            <div className="container">
              <span
                className="c-accessibility__modal-close"
                onClick={() => setIsOpen(false)}
                tabIndex={0}
              >
                ×
              </span>
              <h2 data-elastic-exclude="">
                Accessibility Controls
                <a href="#" className="c-accessibility__reset-btn badge -solid" style={{ display: 'none' }}>
                  Reset
                </a>
              </h2>
              <hr />
              <div className="c-accessibility__grid">
                <div className="row">
                  <div className="col-md-14 c-accessibility__title-column">
                    <h3 data-elastic-exclude="">Text Style</h3>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-32 c-accessibility__content-column">
                    <div className="c-accessibility__actions o-btn-group -space-between">
                      <a
                        className="o-btn-transparent c-accessibility__text-spacing"
                        id="accessbility-dyslexia-letters"
                        href="#"
                        title="increase spacing between letters"
                        data-name="accessbility-dyslexia-letters"
                      >
                        <img src="https://www.adcb.com/en/Images/spacing.svg" alt="Increase text spacing" /> Letters
                        spacing
                      </a>
                      <a
                        className="o-btn-transparent c-accessibility__text-height"
                        id="accessbility-dyslexia-lineheight"
                        href="#"
                        title="increase spacing between lines"
                        data-name="accessbility-dyslexia-lineheight"
                      >
                        <img src="https://www.adcb.com/en/Images/line-height.svg" alt="Increase line height" /> Line
                        height
                      </a>
                    </div>
                    <div className="c-accessibility__actions o-btn-group">
                      <a
                        id="font-default"
                        className="o-btn-transparent c-accessibility__font-toggle selected icon-tick"
                        href="#"
                        title="reset text size to default"
                        tabIndex={0}
                        data-name="font-default"
                      >
                        <img src="https://www.adcb.com/en/Images/text-default.svg" alt="default text size" /> Default
                      </a>
                      <a
                        id="font-big"
                        className="o-btn-transparent c-accessibility__font-toggle"
                        href="#"
                        title="make text size bigger"
                        tabIndex={0}
                        data-name="font-big"
                      >
                        <img src="https://www.adcb.com/en/Images/text-bigger.svg" alt="bigger text size" /> Big
                      </a>
                      <a
                        id="font-bigger"
                        className="o-btn-transparent c-accessibility__font-toggle"
                        href="#"
                        title="make text size biggest"
                        tabIndex={0}
                        data-name="font-bigger"
                      >
                        <img src="https://www.adcb.com/en/Images/text-biggest.svg" alt="biggest text size" /> More big
                      </a>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-14 c-accessibility__title-column">
                    <h3 data-elastic-exclude="">Colors</h3>
                  </div>
                  <div className="col-md-2"></div>
                  <div className="col-md-32 c-accessibility__content-column">
                    <div className="c-accessibility__actions o-btn-group">
                      <a
                        id="color-default"
                        className="o-btn-transparent c-accessibility__color-toggle selected icon-tick"
                        href="#"
                        title="make style to default ADCB colors"
                        data-name="color-default"
                      >
                        <img src="https://www.adcb.com/en/Images/color-default.svg" alt="Default ADCB colors" />
                        Default
                      </a>
                      <a
                        id="color-contrast"
                        className="o-btn-transparent c-accessibility__color-toggle"
                        href="#"
                        title="change style to high contrast colors"
                        data-name="color-contrast"
                      >
                        <img src="https://www.adcb.com/en/Images/color-blackwhite.svg" alt="Black and white colors" />
                        Black &amp; White
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <hr />
              <a
                data-link="/en/accessibility-statement"
                href="https://www.adcb.com/en/accessibility-statement"
                className="c-accessibility__statement-link o-link-more icon-arrow-down cus-target-link"
                target="_blank"
                aria-label="Read about our accessibility statement"
              >
                Read about our accessibility statement
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

