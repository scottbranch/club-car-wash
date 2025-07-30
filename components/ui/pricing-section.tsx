'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';
import Image from 'next/image';

export interface PricingPlan {
  id: string;
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  buttonText?: string;
  buttonHref?: string;
  buttonOnClick?: () => void;
  popular?: boolean;
}

export interface PricingSectionProps {
  sectionLabel?: string;
  title?: string;
  description?: string;
  plans: PricingPlan[];
  defaultBilling?: 'monthly' | 'yearly';
  className?: string;
  titleClassName?: string;
  descriptionClassName?: string;
}

const PricingSection = React.forwardRef<HTMLElement, PricingSectionProps>(
  (
    {
      sectionLabel = 'Washes',
      title = 'Wash Pricing',
      description = 'Explore our affordable wash packages tailored for you.',
      plans,
      defaultBilling = 'monthly',
      className = '',
      titleClassName = '',
      descriptionClassName = '',
      ...props
    },
    ref
  ) => {
    const [billingPeriod, setBillingPeriod] = React.useState<
      'monthly' | 'yearly'
    >(defaultBilling);

    const handlePlanClick = (plan: PricingPlan) => {
      if (plan.buttonOnClick) {
        plan.buttonOnClick();
      } else if (plan.buttonHref) {
        window.location.href = plan.buttonHref;
      }
    };

    const formatPrice = (plan: PricingPlan) => {
      const price =
        billingPeriod === 'monthly' ? plan.price.monthly : plan.price.yearly;
      const period = billingPeriod === 'monthly' ? 'mo' : 'yr';
      return `$${price}/${period}`;
    };

    return (
      <section
        ref={ref}
        className={`py-16 lg:py-24 ${className}`}
        style={{ backgroundColor: '#F2F2F2' }}
        {...props}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Section Header */}
          <div className="text-center mb-12">
            <p className="text-sm font-medium mb-4 text-text-secondary">
              {sectionLabel}
            </p>
            <h2
              className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight mb-4 font-heading ${titleClassName} text-text-primary`}
            >
              {title}
            </h2>
            <p
              className={`text-base leading-relaxed max-w-2xl mx-auto ${descriptionClassName} text-text-secondary`}
            >
              {description}
            </p>
          </div>

          {/* Billing Toggle */}
          <div className="flex justify-center mb-12">
            <div className="bg-transparent rounded-full p-1 border border-gray-300">
              <button
                className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-200 border ${
                  billingPeriod === 'monthly'
                    ? 'bg-transparent text-text-primary border-gray-300'
                    : 'text-text-secondary hover:text-text-primary border-transparent'
                }`}
                onClick={() => setBillingPeriod('monthly')}
              >
                Monthly
              </button>
              <button
                className={`px-6 py-2 rounded-full text-base font-medium transition-all duration-200 border ${
                  billingPeriod === 'yearly'
                    ? 'bg-transparent text-text-primary border-gray-300'
                    : 'text-text-secondary hover:text-text-primary border-transparent'
                }`}
                onClick={() => setBillingPeriod('yearly')}
              >
                Yearly
              </button>
            </div>
          </div>

          {/* Pricing Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className="bg-transparent rounded-lg border border-gray-200 p-8 relative"
              >
                {/* Plan Header */}
                <div className="mb-6 flex items-start justify-between">
                  <div className="">
                    <div className="w-10 h-10 flex items-center justify-center">
                      <Image
                        src="/icons/basic-wash.svg"
                        alt="Basic wash service icon"
                        width={42}
                        height={43}
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-medium font-heading text-text-primary">
                        {plan.name}
                      </h3>
                      <p className="text-sm">{plan.description}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div
                      className="font-medium font-heading text-text-primary"
                      style={{ fontSize: '72px', letterSpacing: '-0.2rem' }}
                    >
                      {formatPrice(plan)}
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-8">
                  <p className="text-base font-medium mb-4 text-text-primary">
                    Includes:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {plan.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <Check size={16} className="mt-0.5 flex-shrink-0" />
                        <span className="text-base text-text-secondary">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <Button
                  variant="primary"
                  size="lg"
                  onClick={() => handlePlanClick(plan)}
                  showIcon={false}
                  className="w-full text-white border-0 hover:bg-gray-50"
                >
                  {plan.buttonText || 'Get started'}
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
);

PricingSection.displayName = 'PricingSection';

export { PricingSection };
