'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export interface PageHeaderProps {
  variant?: 'default' | 'compact';
  tagline?: string;
  title: string;
  description: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonOnClick?: () => void;
  className?: string;
  taglineClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const PageHeader = React.forwardRef<HTMLElement, PageHeaderProps>(
  (
    {
      variant = 'default',
      tagline = 'Tagline',
      title,
      description,
      primaryButtonText = 'Button',
      primaryButtonHref,
      primaryButtonOnClick,
      secondaryButtonText = 'Button',
      secondaryButtonHref,
      secondaryButtonOnClick,
      className = '',
      taglineClassName = '',
      titleClassName = '',
      descriptionClassName = '',
      ...props
    },
    ref
  ) => {
    const handlePrimaryClick = () => {
      if (primaryButtonOnClick) {
        primaryButtonOnClick();
      } else if (primaryButtonHref) {
        window.location.href = primaryButtonHref;
      }
    };

    const handleSecondaryClick = () => {
      if (secondaryButtonOnClick) {
        secondaryButtonOnClick();
      } else if (secondaryButtonHref) {
        window.location.href = secondaryButtonHref;
      }
    };

    const isCompact = variant === 'compact';
    const paddingClasses = isCompact ? 'py-12 lg:py-16' : 'py-16 lg:py-24';
    const titleSizeClasses = isCompact
      ? 'text-3xl sm:text-4xl lg:text-5xl'
      : 'text-4xl sm:text-5xl lg:text-6xl xl:text-7xl';

    return (
      <section
        ref={ref}
        className={`${paddingClasses} ${className}`}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            {/* Tagline - only show for default variant */}
            {!isCompact && tagline && (
              <p
                className={`text-base font-medium mb-6 ${taglineClassName} text-text-primary`}
              >
                {tagline}
              </p>
            )}

            {/* Title */}
            <h2
              className={`${titleSizeClasses} font-bold leading-tight mb-6 font-heading ${titleClassName} text-text-primary`}
            >
              {title}
            </h2>

            {/* Description */}
            <p
              className={`text-base leading-relaxed mb-8 max-w-2xl ${descriptionClassName} text-text-secondary`}
            >
              {description}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              {primaryButtonText && (
                <Button
                  variant="primary"
                  size="lg"
                  onClick={handlePrimaryClick}
                  showIcon={false}
                  className="min-w-32 bg-red-300 text-white"
                >
                  {primaryButtonText}
                </Button>
              )}
              {secondaryButtonText && (
                <Button
                  variant="secondary"
                  size="lg"
                  onClick={handleSecondaryClick}
                  showIcon={false}
                  className="min-w-32 bg-white border-gray-300 text-text-primary"
                >
                  {secondaryButtonText}
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }
);

PageHeader.displayName = 'PageHeader';

export { PageHeader };
