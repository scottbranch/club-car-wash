'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

export interface HeroHeaderProps {
  title?: string;
  description?: string;
  primaryButtonText?: string;
  primaryButtonHref?: string;
  primaryButtonOnClick?: () => void;
  secondaryButtonText?: string;
  secondaryButtonHref?: string;
  secondaryButtonOnClick?: () => void;
  backgroundImage?: string;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  contentAlignment?: 'left' | 'center' | 'right';
  overlay?: boolean;
  overlayOpacity?: number;
}

const HeroHeader = React.forwardRef<HTMLElement, HeroHeaderProps>(
  (
    {
      title = 'Experience the Best Car Wash Today',
      description = 'Visit one of our convenient locations across the Midwest for a top-notch automatic car wash experience. We cater to every vehicle and preference, ensuring your car shines like new!',
      primaryButtonText = 'Learn More',
      primaryButtonHref,
      primaryButtonOnClick,
      secondaryButtonText = 'Sign Up',
      secondaryButtonHref,
      secondaryButtonOnClick,
      backgroundImage = '/images/carwashheader.jpg',
      className = '',
      titleClassName = '',
      descriptionClassName = '',
      contentAlignment = 'left',
      overlay = true,
      overlayOpacity = 0.4,
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

    return (
      <section
        ref={ref}
        className={`relative h-screen max-h-[900px] flex items-center justify-center overflow-hidden ${className}`}
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
        {...props}
      >
        {/* Overlay */}
        {overlay && (
          <div
            className="absolute inset-0 bg-black"
            style={{ opacity: overlayOpacity }}
          />
        )}

        {/* Content Container */}
        <div className="flex items-center relative z-10 w-full h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative flex flex-col justify-between py-5 lg:py-20 h-full w-full">
            {/* Title Section - Positioned in upper left */}
            <div
              className={`flex-1 flex items-start ${
                contentAlignment === 'center'
                  ? 'justify-center'
                  : contentAlignment === 'right'
                  ? 'justify-end'
                  : 'justify-start'
              } `}
            >
              <div className="max-w-2xl">
                <h1
                  className={`text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight font-heading ${
                    contentAlignment === 'center'
                      ? 'text-center'
                      : contentAlignment === 'right'
                      ? 'text-right'
                      : 'text-left'
                  } ${titleClassName} text-white`}
                >
                  {title}
                </h1>
              </div>
            </div>

            {/* Description and Buttons Section - Positioned in lower right */}
            <div
              className={`flex w-full ${
                contentAlignment === 'center'
                  ? 'justify-center'
                  : contentAlignment === 'left'
                  ? 'justify-start'
                  : 'justify-end'
              } `}
            >
              <div
                className={`max-w-2xl ml-auto ${
                  contentAlignment === 'center'
                    ? 'text-center'
                    : contentAlignment === 'left'
                    ? 'text-left'
                    : 'text-right'
                }`}
              >
                <p
                  className={`text-lg sm:text-xl leading-relaxed mb-8 ${descriptionClassName} text-white`}
                >
                  {description}
                </p>

                {/* Buttons */}
                <div
                  className={`flex flex-col sm:flex-row gap-4 ${
                    contentAlignment === 'center'
                      ? 'justify-center'
                      : contentAlignment === 'left'
                      ? 'justify-start'
                      : 'justify-end'
                  }`}
                >
                  {primaryButtonText && (
                    <Button
                      // @ts-ignore
                      variant="light"
                      size="lg"
                      onClick={handlePrimaryClick}
                      showIcon={false}
                    >
                      {primaryButtonText}
                    </Button>
                  )}
                  {secondaryButtonText && (
                    <Button
                      variant="secondary"
                      size="lg"
                      onClick={handleSecondaryClick}
                      className="min-w-40 bg-transparent border-white text-white"
                      showIcon={false}
                    >
                      {secondaryButtonText}
                    </Button>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Gradient Overlay for Better Text Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/30 pointer-events-none" />
      </section>
    );
  }
);

HeroHeader.displayName = 'HeroHeader';

export { HeroHeader };
