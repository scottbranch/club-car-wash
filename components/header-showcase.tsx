import { HeroHeader } from "@/components/ui/hero-header"

export default function HeaderShowcase() {
  return (
    <div className="space-y-16">
      {/* Default Header */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Default Hero Header</h2>
        <HeroHeader />
      </div>

      {/* Custom Content Header */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Custom Content Header</h2>
        <HeroHeader
          title="Premium Auto Detailing Services"
          description="Transform your vehicle with our professional detailing services. From basic washes to complete interior and exterior restoration, we make your car look brand new."
          primaryButtonText="Book Now"
          secondaryButtonText="View Services"
          primaryButtonOnClick={() => alert("Booking clicked!")}
          secondaryButtonOnClick={() => alert("Services clicked!")}
        />
      </div>

      {/* Center Aligned Header */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Center Aligned Header</h2>
        <HeroHeader
          title="Quality Car Care"
          description="Professional car wash and detailing services you can trust."
          contentAlignment="center"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      {/* Single Button Header */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Single Button Header</h2>
        <HeroHeader
          title="Express Car Wash"
          description="Quick and efficient car wash services for busy professionals."
          primaryButtonText="Wash My Car"
          secondaryButtonText=""
          overlayOpacity={0.6}
        />
      </div>

      {/* Custom Styling Header */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Custom Styling Header</h2>
        <HeroHeader
          title="Luxury Car Detailing"
          description="Premium services for luxury and exotic vehicles. Our expert team uses only the finest products and techniques."
          primaryButtonText="Schedule Service"
          secondaryButtonText="View Gallery"
          titleClassName="text-shadow-lg"
          overlayOpacity={0.3}
          primaryButtonOnClick={() => console.log("Schedule clicked")}
          secondaryButtonOnClick={() => console.log("Gallery clicked")}
        />
      </div>
    </div>
  )
}
