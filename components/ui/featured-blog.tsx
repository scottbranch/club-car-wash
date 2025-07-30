'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export interface BlogCard {
  id: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  link: {
    text: string;
    href: string;
    onClick?: () => void;
  };
}

export interface FeaturedBlogProps {
  sectionTitle?: string;
  cards: BlogCard[];
  className?: string;
  sectionTitleClassName?: string;
}

const FeaturedBlog = React.forwardRef<HTMLElement, FeaturedBlogProps>(
  (
    {
      sectionTitle = 'Experience Effortless Shine with Our Automatic Car Wash Services',
      cards,
      className = '',
      sectionTitleClassName = '',
      ...props
    },
    ref
  ) => {
    const handleCardClick = (card: BlogCard) => {
      if (card.link.onClick) {
        card.link.onClick();
      } else if (card.link.href) {
        window.location.href = card.link.href;
      }
    };

    return (
      <section
        ref={ref}
        className={`py-16 lg:py-24 ${className} bg-white`}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Title */}
          {sectionTitle && (
            <div className="mb-16">
              <h2
                className={`text-3xl sm:text-5xl font-bold leading-tight max-w-3xl font-heading ${sectionTitleClassName} text-text-primary`}
              >
                {sectionTitle}
              </h2>
            </div>
          )}

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {cards.map((card) => (
              <div
                key={card.id}
                className="group cursor-pointer transition-transform duration-300 hover:scale-105"
                onClick={() => handleCardClick(card)}
              >
                {/* Card Image */}
                <div className="relative mb-6 overflow-hidden rounded-lg">
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={card.image.src || '/placeholder.svg'}
                      alt={card.image.alt}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                </div>

                {/* Card Content */}
                <div className="space-y-4">
                  <h3 className="text-xl sm:text-2xl font-bold leading-tight group-hover:opacity-80 transition-opacity duration-200 font-heading text-text-primary">
                    {card.title}
                  </h3>

                  <p className="text-base leading-relaxed text-text-secondary">
                    {card.description}
                  </p>

                  {/* Call to Action Link */}
                  <div className="pt-2">
                    <Link
                      href={card.link.href}
                      className="inline-flex items-center gap-2 text-base font-medium transition-all duration-200 hover:gap-3 group-hover:opacity-80 text-text-primary"
                    >
                      {card.link.text}
                      <Image
                        src="/icons/arrow-right.svg"
                        alt=""
                        width={8}
                        height={12}
                        className="transition-transform duration-200"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

FeaturedBlog.displayName = 'FeaturedBlog';

export { FeaturedBlog };
