'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';

export interface ExploreLocationsProps {
  tagline?: string;
  title?: string;
  description?: string;
  currentLocationsTitle?: string;
  currentLocationsDescription?: string;
  comingSoonTitle?: string;
  comingSoonDescription?: string;
  viewButtonText?: string;
  viewButtonHref?: string;
  viewButtonOnClick?: () => void;
  learnButtonText?: string;
  learnButtonHref?: string;
  learnButtonOnClick?: () => void;
  mapImage?: {
    src: string;
    alt: string;
  };
  className?: string;
  taglineClassName?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const ExploreLocations = React.forwardRef<HTMLElement, ExploreLocationsProps>(
  (
    {
      tagline = 'Explore',
      title = 'Find Your Nearest Club Car Wash Location',
      description = "Discover our extensive network of car wash locations across the Midwest. Whether you're at home or on the go, a clean car is just around the corner!",
      currentLocationsTitle = 'Current Locations',
      currentLocationsDescription = 'Check out our interactive map for all current and upcoming locations.',
      comingSoonTitle = 'Coming Soon',
      comingSoonDescription = 'Stay tuned for new locations opening near you!',
      viewButtonText = 'View',
      viewButtonHref,
      viewButtonOnClick,
      learnButtonText = 'Learn',
      learnButtonHref,
      learnButtonOnClick,
      mapImage,
      className = '',
      taglineClassName = '',
      titleClassName = '',
      descriptionClassName = '',
      ...props
    },
    ref
  ) => {
    const handleViewClick = () => {
      if (viewButtonOnClick) {
        viewButtonOnClick();
      } else if (viewButtonHref) {
        window.location.href = viewButtonHref;
      }
    };

    const handleLearnClick = () => {
      if (learnButtonOnClick) {
        learnButtonOnClick();
      } else if (learnButtonHref) {
        window.location.href = learnButtonHref;
      }
    };

    return (
      <section
        ref={ref}
        className={`py-16 lg:py-24 ${className} bg-white`}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Content Side */}
            <div className="space-y-8">
              {/* Tagline */}
              <p
                className={`text-base font-medium ${taglineClassName} text-text-primary`}
              >
                {tagline}
              </p>

              {/* Title */}
              <h2
                className={`text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight font-heading ${titleClassName} text-text-primary`}
              >
                {title}
              </h2>

              {/* Description */}
              <p
                className={`text-base leading-relaxed ${descriptionClassName} text-text-secondary`}
              >
                {description}
              </p>

              {/* Location Info Sections */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                {/* Current Locations */}
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">
                    {currentLocationsTitle}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {currentLocationsDescription}
                  </p>
                </div>

                {/* Coming Soon */}
                <div>
                  <h3 className="text-xl font-bold mb-3 font-heading text-text-primary">
                    {comingSoonTitle}
                  </h3>
                  <p className="text-base leading-relaxed text-text-secondary">
                    {comingSoonDescription}
                  </p>
                </div>
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                {viewButtonText && (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={handleViewClick}
                    showIcon={false}
                    className="min-w-24 bg-white border-gray-300 text-text-primary"
                  >
                    {viewButtonText}
                  </Button>
                )}
                {learnButtonText && (
                  <Button
                    variant="ghost"
                    size="lg"
                    onClick={handleLearnClick}
                    icon={<ArrowRight size={16} />}
                    iconPosition="right"
                    className="min-w-24 text-text-primary hover:bg-gray-50"
                  >
                    {learnButtonText}
                  </Button>
                )}
              </div>
            </div>

            {/* Map/Image Side */}
            <div className="relative">
              <div className="aspect-[4/3] bg-gray-300 rounded-lg overflow-hidden relative">
                <Image
                  src={'/placeholder.svg'}
                  alt="Hand washing car"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

ExploreLocations.displayName = 'ExploreLocations';

export { ExploreLocations };
