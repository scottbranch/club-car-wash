'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export interface BlogPost {
  id: string;
  category: string;
  title: string;
  description: string;
  image: {
    src: string;
    alt: string;
  };
  author: {
    name: string;
    avatar: string;
  };
  publishDate: string;
  readTime: string;
  link: string;
}

export interface BlogSectionProps {
  sectionLabel?: string;
  title?: string;
  description?: string;
  posts: BlogPost[];
  viewAllText?: string;
  viewAllLink?: string;
  viewAllOnClick?: () => void;
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const BlogSection = React.forwardRef<HTMLElement, BlogSectionProps>(
  (
    {
      sectionLabel = 'Blog',
      title = 'Short heading goes here',
      description = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      posts,
      viewAllText = 'View all',
      viewAllLink = '/blog',
      viewAllOnClick,
      className = '',
      titleClassName = '',
      descriptionClassName = '',
      ...props
    },
    ref
  ) => {
    const handleViewAllClick = () => {
      if (viewAllOnClick) {
        viewAllOnClick();
      } else if (viewAllLink) {
        window.location.href = viewAllLink;
      }
    };

    return (
      <section
        ref={ref}
        className={`py-16 lg:py-24 ${className} bg-white`}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="flex items-start justify-between mb-12">
            <div className="max-w-2xl">
              {/* Section Label */}
              <p className="text-sm font-medium text-text-secondary mb-4">
                {sectionLabel}
              </p>

              {/* Title */}
              <h2
                className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 font-heading ${titleClassName} text-text-primary`}
              >
                {title}
              </h2>

              {/* Description */}
              <p
                className={`text-base leading-relaxed ${descriptionClassName} text-text-secondary`}
              >
                {description}
              </p>
            </div>

            {/* View All Button */}
            <div className="flex-shrink-0 ml-8">
              <Button
                variant="secondary"
                onClick={handleViewAllClick}
                showIcon={false}
                className="bg-transparent border-gray-200 text-text-primary hover:bg-gray-50"
              >
                {viewAllText}
              </Button>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
              <article
                key={post.id}
                className="group border rounded-md overflow-hidden"
              >
                <Link href={post.link} className="block">
                  {/* Post Image */}
                  <div className="relative mb-6 overflow-hidden">
                    <div className="aspect-[4/3] relative">
                      <Image
                        src={post.image.src || '/placeholder.svg'}
                        alt={post.image.alt}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                  </div>

                  {/* Post Content */}
                  <div className="space-y-4 px-4 pb-4">
                    {/* Category */}
                    <span className="inline-block text-base font-medium text-text-secondary">
                      {post.category}
                    </span>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight group-hover:text-red-300 transition-colors duration-200 font-heading text-text-primary">
                      {post.title}
                    </h3>

                    {/* Description */}
                    <p className="text-base leading-relaxed text-text-secondary">
                      {post.description}
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-3 pt-2">
                      <div className="relative w-8 h-8 rounded-full overflow-hidden flex-shrink-0">
                        <Image
                          src={post.author.avatar || '/placeholder.svg'}
                          alt={post.author.name}
                          fill
                          className="object-cover"
                          sizes="32px"
                        />
                      </div>
                      <div className="text-sm text-text-muted">
                        <div className="font-semibold text-text-secondary">
                          {post.author.name}
                        </div>
                        <div className="text-gray-900 text-xs">
                          <span>{post.publishDate}</span>
                          <span className="px-2">•</span>
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

BlogSection.displayName = 'BlogSection';

export { BlogSection };
