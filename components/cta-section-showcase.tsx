import { CTASection } from "@/components/ui/cta-section"

export default function CTASectionShowcase() {
  return (
    <div className="space-y-16">
      {/* Default CTA Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Default CTA Section</h2>
        <CTASection
          title="Join Our Unlimited Wash Club"
          description="Experience the ultimate convenience with unlimited washes and exclusive member benefits at Club Car Wash."
          primaryCtaText="Sign Up"
          primaryCtaLink="/signup"
          secondaryCtaText="Learn More"
          secondaryCtaLink="/membership"
        />
      </div>

      {/* Custom Background CTA */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Custom Background CTA</h2>
        <CTASection
          title="Get Started Today"
          description="Transform your car wash experience with our premium services and cutting-edge technology."
          primaryCtaText="Book Now"
          primaryCtaLink="/book"
          secondaryCtaText="View Pricing"
          secondaryCtaLink="/pricing"
          backgroundColor="#2c3230"
        />
      </div>

      {/* With Click Handlers */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">With Custom Click Handlers</h2>
        <CTASection
          title="Ready to Experience the Difference?"
          description="Join thousands of satisfied customers who trust us with their vehicle care needs."
          primaryCtaText="Get Started"
          primaryCtaLink="/start"
          primaryCtaOnClick={() => alert("Primary CTA clicked!")}
          secondaryCtaText="Contact Us"
          secondaryCtaLink="/contact"
          secondaryCtaOnClick={() => alert("Secondary CTA clicked!")}
          backgroundColor="#4c0d09"
        />
      </div>

      {/* Compact Version */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Compact Version</h2>
        <CTASection
          title="Quick & Easy Signup"
          description="Start saving time and money today."
          primaryCtaText="Join Now"
          primaryCtaLink="/join"
          secondaryCtaText="Learn More"
          secondaryCtaLink="/info"
          className="py-12"
          titleClassName="text-4xl"
        />
      </div>

      {/* Different Color Scheme */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Different Color Scheme</h2>
        <CTASection
          title="Premium Membership Available"
          description="Unlock exclusive benefits and priority service with our premium membership tier."
          primaryCtaText="Upgrade Now"
          primaryCtaLink="/upgrade"
          secondaryCtaText="Compare Plans"
          secondaryCtaLink="/plans"
          backgroundColor="#444b08"
        />
      </div>
    </div>
  )
}
