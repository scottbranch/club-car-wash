'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export interface CTASectionProps {
  title: string;
  description: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  primaryCtaOnClick?: () => void;
  secondaryCtaText: string;
  secondaryCtaLink: string;
  secondaryCtaOnClick?: () => void;
  backgroundColor?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const CTASection = React.forwardRef<HTMLElement, CTASectionProps>(
  (
    {
      title,
      description,
      primaryCtaText,
      primaryCtaLink,
      primaryCtaOnClick,
      secondaryCtaText,
      secondaryCtaLink,
      secondaryCtaOnClick,
      backgroundColor = '#000000',
      className = '',
      titleClassName = '',
      descriptionClassName = '',
      ...props
    },
    ref
  ) => {
    const handlePrimaryClick = () => {
      if (primaryCtaOnClick) {
        primaryCtaOnClick();
      } else if (primaryCtaLink) {
        window.location.href = primaryCtaLink;
      }
    };

    const handleSecondaryClick = () => {
      if (secondaryCtaOnClick) {
        secondaryCtaOnClick();
      } else if (secondaryCtaLink) {
        window.location.href = secondaryCtaLink;
      }
    };

    return (
      <section
        ref={ref}
        className={`py-16 lg:py-24 ${className}`}
        style={{ backgroundColor }}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Title */}
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-6 font-heading ${titleClassName} text-white`}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className={`text-lg leading-relaxed mb-8 max-w-3xl ${descriptionClassName} text-white`}
            >
              {description}
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={handlePrimaryClick}
                showIcon={false}
                className="min-w-40 bg-red-300 text-white"
              >
                {primaryCtaText}
              </Button>
              <Button
                variant="secondary"
                size="lg"
                onClick={handleSecondaryClick}
                showIcon={false}
                className="min-w-40 bg-transparent border-white text-white"
              >
                {secondaryCtaText}
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

CTASection.displayName = 'CTASection';

export { CTASection };
