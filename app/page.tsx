import { HeroHeader } from "@/components/ui/hero-header"
import { FeaturedBlog } from "@/components/ui/featured-blog"
import { FeatureSection } from "@/components/ui/feature-section"
import { CTASection } from "@/components/ui/cta-section"
import type { BlogCard } from "@/components/ui/featured-blog"
import { BlogSection } from "@/components/ui/blog-section"
import type { BlogPost } from "@/components/ui/blog-section"

const featuredCards: BlogCard[] = [
  {
    id: "wash-technology",
    title: "Transform Your Vehicle with Our State-of-the-Art Wash Technology",
    description: "Our automatic car wash systems deliver a spotless finish while you relax.",
    image: {
      src: "/images/carwash-technology.png",
      alt: "Advanced car wash technology with red rotating brushes",
    },
    link: {
      text: "Learn More",
      href: "/services/technology",
    },
  },
  {
    id: "why-choose-us",
    title: "Why Choose Our Automatic Car Wash for Your Vehicle?",
    description: "Enjoy a quick and efficient wash that protects your car's finish.",
    image: {
      src: "/images/car-headlight.png",
      alt: "Close-up of clean car headlight with water droplets",
    },
    link: {
      text: "Sign Up",
      href: "/signup",
    },
  },
  {
    id: "customer-trust",
    title: "Join the Thousands Who Trust Us for Their Car Wash Needs",
    description: "Our satisfied customers rave about the convenience and quality of our services.",
    image: {
      src: "/images/happy-customers.png",
      alt: "Group of happy customers giving thumbs up",
    },
    link: {
      text: "Get Started",
      href: "/locations",
    },
  },
]

const blogPosts: BlogPost[] = [
  {
    id: "maintenance-tips",
    category: "Maintenance",
    title: "Essential Tips for Your Car's Longevity",
    description: "Discover how regular maintenance can extend your vehicle's life.",
    image: {
      src: "/images/interior-detailing.png",
      alt: "Car interior being detailed with steam cleaning equipment",
    },
    author: {
      name: "John Doe",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "11 Jan 2024",
    readTime: "5 min read",
    link: "/blog/essential-tips-car-longevity",
  },
  {
    id: "cleaning-tips",
    category: "Tips",
    title: "How to Keep Your Car Clean",
    description: "Learn the best practices for maintaining a spotless vehicle.",
    image: {
      src: "/images/pressure-washing-car.png",
      alt: "Person pressure washing a silver car",
    },
    author: {
      name: "Jane Smith",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "12 Feb 2024",
    readTime: "4 min read",
    link: "/blog/how-to-keep-car-clean",
  },
  {
    id: "winter-prep",
    category: "Advice",
    title: "Preparing Your Car for Winter",
    description: "Get your vehicle ready for the cold months ahead.",
    image: {
      src: "/images/car-wash-brushes.png",
      alt: "Car going through automatic wash with green rotating brushes",
    },
    author: {
      name: "Emily Brown",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "15 Mar 2024",
    readTime: "6 min read",
    link: "/blog/preparing-car-winter",
  },
]

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroHeader />
      <FeaturedBlog cards={featuredCards} />
      <FeatureSection
        title="Unmatched Car Wash Experience with Eco-Friendly Solutions and Advanced Technology"
        description="Discover the ultimate car wash experience that prioritizes your vehicle's care while being kind to the environment. Our cutting-edge equipment and eco-friendly products ensure a thorough clean without compromising on quality."
        image={{
          src: "/images/hand-washing-car.png",
          alt: "Professional hand washing a red car with soap and care",
        }}
      />
      <CTASection
        title="Join Our Unlimited Wash Club"
        description="Experience the ultimate convenience with unlimited washes and exclusive member benefits at Club Car Wash."
        primaryCtaText="Sign Up"
        primaryCtaLink="/signup"
        secondaryCtaText="Learn More"
        secondaryCtaLink="/membership"
      />
      <BlogSection
        sectionLabel="Blog"
        title="Expert Car Care Tips & Insights"
        description="Stay informed with the latest advice from our car care professionals."
        posts={blogPosts}
        viewAllText="View all"
        viewAllLink="/blog"
      />
    </main>
  )
}
