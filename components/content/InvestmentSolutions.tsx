'use client';

import Link from 'next/link';
import InvestmentSolutionsCarousel from './InvestmentSolutionsCarousel';

export interface Solution {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface InvestmentSolutionsProps {
  solutions: Solution[];
}

export default function InvestmentSolutions({ solutions }: InvestmentSolutionsProps) {
  if (!solutions || solutions.length === 0) {
    return null;
  }

  return (
    <div className="o-comp c-financial__success">
      <div className="o-comp__content">
        <div className="o-comp__title c-container">
          <h2 className="c-common__page-title">Investment Solutions</h2>
        </div>
        <InvestmentSolutionsCarousel solutions={solutions} />

        <div className="c-container">
          <div className="c-find__solution">
            <div className="row c-find__solution-row">
              <div className="col-md-16 c-find__solution-column">
                <img src="/en/Images/footer-logo-100723.svg" alt="Explore all solutions" />
              </div>
              <div className="col-md-16 c-find__solution-column">
                <h4 className="c-find__solution-title">
                  Find a solution that <br />
                  works for you
                </h4>
              </div>
              <div className="col-md-16 c-find__solution-column">
                <Link href="/en/investment-services/" className="c-outline-button c-white-outline-button">
                  Explore all solutions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

