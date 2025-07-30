'use client';

import React from 'react';
import Image from 'next/image';

export interface FeatureSectionProps {
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  layout?: 'image-right' | 'image-left';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
  imageClassName?: string;
}

const FeatureSection = React.forwardRef<HTMLElement, FeatureSectionProps>(
  (
    {
      title,
      description,
      image,
      layout = 'image-right',
      className = '',
      titleClassName = '',
      descriptionClassName = '',
      imageClassName = '',
      ...props
    },
    ref
  ) => {
    return (
      <section
        ref={ref}
        className={`py-16 lg:py-24 ${className}`}
        style={{ backgroundColor: '#E9EDEC' }}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              layout === 'image-left' ? 'lg:grid-flow-col-dense' : ''
            }`}
          >
            {/* Text Content */}
            <div className={layout === 'image-left' ? 'lg:col-start-2' : ''}>
              <div className="max-w-xl">
                <h2
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-6 font-heading ${titleClassName} text-text-primary`}
                >
                  {title}
                </h2>
                <p
                  className={`text-base leading-relaxed ${descriptionClassName} text-text-secondary`}
                >
                  {description}
                </p>
              </div>
            </div>

            {/* Image */}
            <div className={layout === 'image-left' ? 'lg:col-start-1' : ''}>
              <div
                className={`relative overflow-hidden rounded ${imageClassName}`}
              >
                <div className="max-w-[600px]">
                  <Image
                    src={image.src || '/placeholder.svg'}
                    alt={image.alt}
                    width={600}
                    height={450}
                    className="w-full h-auto"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
);

FeatureSection.displayName = 'FeatureSection';

export { FeatureSection };
