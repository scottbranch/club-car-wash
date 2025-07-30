import { FeatureSection } from "@/components/ui/feature-section"

export default function FeatureSectionShowcase() {
  return (
    <div className="space-y-16">
      {/* Default Layout - Image Right */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Default Layout (Image Right)</h2>
        <FeatureSection
          title="Unmatched Car Wash Experience with Eco-Friendly Solutions and Advanced Technology"
          description="Discover the ultimate car wash experience that prioritizes your vehicle's care while being kind to the environment. Our cutting-edge equipment and eco-friendly products ensure a thorough clean without compromising on quality."
          image={{
            src: "/images/hand-washing-car.png",
            alt: "Professional hand washing a red car with soap and care",
          }}
        />
      </div>

      {/* Image Left Layout */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Image Left Layout</h2>
        <FeatureSection
          title="Premium Detailing Services for Every Vehicle"
          description="From luxury cars to everyday vehicles, our expert team provides meticulous attention to detail. Experience the difference that professional care makes for your vehicle's appearance and longevity."
          image={{
            src: "/images/hand-washing-car.png",
            alt: "Detailed car washing process",
          }}
          layout="image-left"
        />
      </div>

      {/* Custom Styling */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Custom Styling Example</h2>
        <FeatureSection
          title="State-of-the-Art Wash Technology"
          description="Our automated systems combined with hand-finishing techniques deliver exceptional results every time. Trust your vehicle to our experienced professionals."
          image={{
            src: "/images/hand-washing-car.png",
            alt: "Advanced car wash technology in action",
          }}
          className="bg-gray-50"
          titleClassName="text-red-600"
          imageClassName="shadow-2xl"
        />
      </div>

      {/* Compact Version */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Compact Version</h2>
        <FeatureSection
          title="Quick & Efficient Service"
          description="Get your car cleaned professionally in minutes, not hours."
          image={{
            src: "/images/hand-washing-car.png",
            alt: "Quick car wash service",
          }}
          className="py-12"
        />
      </div>
    </div>
  )
}
