import { PageHeader } from '@/components/page-header';
import { ServicePackages } from '@/components/ui/service-packages';
import type { ServicePackage } from '@/components/ui/service-packages';
import { FeatureSection } from '@/components/ui/feature-section';
import { PricingSection } from '@/components/ui/pricing-section';
import type { PricingPlan } from '@/components/ui/pricing-section';

const servicePackages: ServicePackage[] = [
  {
    id: 'basic-wash',
    title: 'Basic Wash: A Quick and Efficient Clean for Your Vehicle',
    description: 'Enjoy a fast exterior wash that removes dirt and grime.',
    icon: {
      src: '/icons/basic-wash.svg',
      alt: 'Basic wash service icon',
      width: 42,
      height: 43,
    },
    link: {
      text: 'Learn More',
      href: '/services/basic-wash',
    },
  },
  {
    id: 'deluxe-wash',
    title: "Deluxe Wash: Comprehensive Care for Your Vehicle's Exterior",
    description:
      'Experience a thorough wash with added wax for shine and protection.',
    icon: {
      src: '/icons/deluxe-wash.svg',
      alt: 'Deluxe wash service icon',
      width: 37,
      height: 45,
    },
    link: {
      text: 'Learn More',
      href: '/services/deluxe-wash',
    },
  },
  {
    id: 'ultimate-wash',
    title: "Ultimate Wash: The Complete Package for Your Vehicle's Care",
    description:
      'Get everything from a wash to a tire shine and interior vacuum.',
    icon: {
      src: '/icons/ultimate-wash.svg',
      alt: 'Ultimate wash service icon',
      width: 37,
      height: 42,
    },
    link: {
      text: 'Learn More',
      href: '/services/ultimate-wash',
    },
  },
];

const pricingPlans: PricingPlan[] = [
  {
    id: 'basic-plan',
    name: 'Basic Plan',
    description: 'Perfect for occasional washes.',
    price: {
      monthly: 19,
      yearly: 190,
    },
    features: [
      'Basic wash and rinse',
      'Underbody wash option',
      'Protective wax coating',
      'Tire shine application',
      'Drying and finishing',
      'Interior vacuum service',
    ],
    buttonText: 'Get started',
    buttonHref: '/signup/basic',
  },
  {
    id: 'business-plan',
    name: 'Business Plan',
    description: 'Ideal for frequent washes.',
    price: {
      monthly: 19,
      yearly: 190,
    },
    features: [
      'All basic plan features',
      'Priority service access',
      'Dedicated customer support',
      'Monthly wash reminders',
      'Loyalty rewards program',
      'Monthly special discounts',
      'Free upgrades available',
      'Flexible scheduling options',
      'Exclusive member events',
      'Additional discounts available',
    ],
    buttonText: 'Get started',
    buttonHref: '/signup/business',
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        tagline="Services"
        title="Exceptional Wash Packages"
        description="Explore our diverse wash packages designed to keep your vehicle sparkling clean and protected."
        primaryButtonText="View Packages"
        secondaryButtonText="Find Location"
        primaryButtonHref="/pricing"
        secondaryButtonHref="/locations"
        className="bg-gray-100"
      />

      <ServicePackages packages={servicePackages} />

      <FeatureSection
        title="Professional Car Care with Advanced Technology and Eco-Friendly Solutions"
        description="Experience the difference that professional equipment and environmentally conscious practices make. Our state-of-the-art facilities ensure your vehicle receives the best care while protecting the environment for future generations."
        image={{
          src: '/images/hand-washing-car.png',
          alt: 'Professional hand washing a red car with soap and care',
        }}
      />

      <PricingSection plans={pricingPlans} />

      <PageHeader
        variant="compact"
        title="Choose Your Perfect Wash"
        description="Explore our wash packages and find the ideal option for your vehicle today!"
        primaryButtonText="Learn More"
        secondaryButtonText="Sign Up"
        primaryButtonHref="/packages"
        secondaryButtonHref="/signup"
      />
    </main>
  );
}
