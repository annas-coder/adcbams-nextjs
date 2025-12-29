'use client';

import Link from 'next/link';

export interface Step {
  icon: string;
  title: string;
  description: string;
  link: string | null;
  linkText?: string;
}

interface GetStartedProps {
  steps: Step[];
}

export default function GetStarted({ steps }: GetStartedProps) {
  if (!steps || steps.length === 0) {
    return null;
  }

  return (
    <div className="o-comp c-get-started">
      <div className="o-comp__content c-container">
        <div className="o-comp__title">
          <h2 className="c-common__page-title">How to Get Started</h2>
        </div>
        <div className="row">
          {steps.map((step, index) => (
            <div key={index} className="col-sm-16">
              <div className="c-get-card">
                <div className="c-get-card__icon">
                  <img src={step.icon} alt={step.title} />
                </div>
                <div className="c-get-card__title">{step.title}</div>
                <div className="c-get-card__content">{step.description}</div>
                {step.link && (
                  <div className="c-get__action">
                    <Link href={step.link} className="c-outline-button">
                      {step.linkText}
                    </Link>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

