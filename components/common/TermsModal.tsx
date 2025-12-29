'use client';

import { useEffect, useState } from 'react';

export default function TermsModal() {
  const [showModal, setShowModal] = useState(false);
  const [agreed, setAgreed] = useState(false);

  useEffect(() => {
    function getCookie(name: string) {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop()?.split(';').shift();
      return null;
    }

    const assetMgmtTerms = getCookie('adcbAssMGTLtdTC');
    if (!assetMgmtTerms) {
      setTimeout(() => {
        setShowModal(true);
      }, 500);
    }
  }, []);

  const handleContinue = () => {
    document.cookie = 'adcbAssMGTLtdTC=true;';
    setShowModal(false);
  };

  if (!showModal) return null;

  return (
    <div
      className="modal c-modal o-comp c-calculator-overlay c-touchpoint-main-overlay"
      tabIndex={-1}
      role="dialog"
      id="adcbTermsCondtions"
      aria-hidden={showModal ? false : true}
      style={{ display: showModal ? 'block' : 'none' }}
    >
      <div className="container o-comp__content c-calculator-overlay__wrapper">
        <div className="c-calculator-overlay__popup" style={{ padding: '4rem 3rem 6rem' }}>
          <div className="modal-header text-center">
            <h2 className="modal-title">IMPORTANT INFORMATION</h2>
            <div className="modal-body" style={{ opacity: 0.7, fontSize: '85%' }}>
              <p>
                The information provided on this website is made available by ADCB Asset Management Limited (&quot;AAML&quot;), a limited
                liability company registered in Abu Dhabi Global Market (&quot;ADGM&quot;), authorised and regulated by the Financial Services
                Regulatory Authority (&quot;FSRA&quot;). The information provided in this website is not intended for distribution to, or use by,
                any person or entity in any jurisdiction or country where such distribution or use would be contrary to law or regulation or
                which would subject AAML or its affiliates to any registration requirement within such jurisdiction or country. The information
                in this website is subject to correction, updating, completion and amendment. AAML may, from time to time, at its absolute
                discretion change, delete or replace the materials and information provided herein. The information is based on reliable
                sources, but AAML does not give any express or implied warranty as to its accuracy. The material included on this website has
                been prepared for informational purposes only without regard to any particular user&apos;s investment objectives, financial
                situation, or needs, and AAML is not soliciting any action based upon it. The material on the website does not constitute an
                offer to buy or sell or a solicitation of an offer to buy or sell any security, financial product, or instrument. The
                information on this website does not constitute an invitation or offer for the issue or sale of securities or a financial
                promotion of securities. The information on this site does not constitute financial or other professional advice. You should
                consult your professional adviser if you require financial or other advice. You should assess whether the information on this
                website is appropriate to your particular investment objectives, financial situation and investment needs. You should do this
                before making an investment decision on the basis of the information on this website. All investments are subject to risks
                including the possible loss of the principal amount invested.
              </p>
              <p>
                The FSRA accepts no responsibility for reviewing or verifying any Prospectus or other documents in connection with any mutual
                funds mentioned in this website. The Units to which these Prospectuses relate may be illiquid and/or subject to restrictions on
                their resale. Prospective purchasers should conduct their own due diligence on the Units. If you do not understand the
                contents of any documents in this website you should consult an authorised financial adviser.
              </p>
            </div>
          </div>
          <div style={{ textAlign: 'center' as const }} className="modal-footer">
            <div className="col-xs-24">
              <div className="chackbox" style={{ marginBottom: '24px' }}>
                <label>
                  <input
                    id="_tersm"
                    value="Yes"
                    type="checkbox"
                    checked={agreed}
                    onChange={(e) => {
                      setAgreed(e.target.checked);
                    }}
                  />{' '}
                  Agree
                </label>
              </div>
            </div>
            <div className="col-xs-24">
              <button type="button" className="o-btn-medium-red" disabled={!agreed} id="continue" onClick={handleContinue}>
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

