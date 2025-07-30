import { FeaturedBlog } from "@/components/ui/featured-blog"
import type { BlogCard } from "@/components/ui/featured-blog"

const sampleCards: BlogCard[] = [
  {
    id: "sample-1",
    title: "Professional Car Detailing Services",
    description: "Experience premium detailing that makes your car look brand new.",
    image: {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Professional car detailing",
    },
    link: {
      text: "Learn More",
      href: "/services/detailing",
    },
  },
  {
    id: "sample-2",
    title: "Eco-Friendly Wash Solutions",
    description: "Our environmentally conscious approach keeps your car clean and the planet green.",
    image: {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Eco-friendly car wash",
    },
    link: {
      text: "Discover More",
      href: "/services/eco-friendly",
    },
  },
  {
    id: "sample-3",
    title: "Membership Benefits & Rewards",
    description: "Join our membership program for exclusive benefits and savings.",
    image: {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Membership rewards program",
    },
    link: {
      text: "Join Now",
      href: "/membership",
    },
  },
]

const customCards: BlogCard[] = [
  {
    id: "custom-1",
    title: "24/7 Express Wash Services",
    description: "Get your car washed anytime with our round-the-clock automated services.",
    image: {
      src: "/placeholder.svg?height=300&width=400",
      alt: "24/7 car wash service",
    },
    link: {
      text: "Find Location",
      href: "/locations",
      onClick: () => console.log("Custom click handler"),
    },
  },
  {
    id: "custom-2",
    title: "Premium Interior Cleaning",
    description: "Complete interior detailing for a fresh and spotless cabin experience.",
    image: {
      src: "/placeholder.svg?height=300&width=400",
      alt: "Interior car cleaning",
    },
    link: {
      text: "Book Service",
      href: "/book",
    },
  },
]

export default function FeaturedBlogShowcase() {
  return (
    <div className="space-y-16">
      {/* Default Featured Blog */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Default Featured Blog Section</h2>
        <FeaturedBlog cards={sampleCards} />
      </div>

      {/* Custom Title */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Custom Section Title</h2>
        <FeaturedBlog sectionTitle="Discover Our Premium Car Care Services" cards={customCards} />
      </div>

      {/* Two Column Layout */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Two Column Layout</h2>
        <FeaturedBlog sectionTitle="Featured Services" cards={customCards} />
      </div>

      {/* No Section Title */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Without Section Title</h2>
        <FeaturedBlog sectionTitle="" cards={sampleCards.slice(0, 2)} />
      </div>
    </div>
  )
}
