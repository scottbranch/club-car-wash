import { BlogSection } from "@/components/ui/blog-section"
import type { BlogPost } from "@/components/ui/blog-section"

const samplePosts: BlogPost[] = [
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
    publishDate: "11 Jan 2022",
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
    publishDate: "12 Feb 2022",
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
    publishDate: "15 Mar 2022",
    readTime: "6 min read",
    link: "/blog/preparing-car-winter",
  },
]

const customPosts: BlogPost[] = [
  {
    id: "eco-friendly",
    category: "Environment",
    title: "Eco-Friendly Car Wash Solutions",
    description: "Sustainable practices for keeping your car clean while protecting the environment.",
    image: {
      src: "/images/pressure-washing-car.png",
      alt: "Eco-friendly car washing process",
    },
    author: {
      name: "Mike Green",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "20 Apr 2022",
    readTime: "7 min read",
    link: "/blog/eco-friendly-solutions",
  },
  {
    id: "technology",
    category: "Technology",
    title: "Latest Car Wash Technology",
    description: "Explore cutting-edge innovations in automated car washing systems.",
    image: {
      src: "/images/car-wash-brushes.png",
      alt: "Advanced car wash technology in action",
    },
    author: {
      name: "Sarah Tech",
      avatar: "/placeholder.svg?height=32&width=32",
    },
    publishDate: "25 May 2022",
    readTime: "8 min read",
    link: "/blog/latest-technology",
  },
]

export default function BlogSectionShowcase() {
  return (
    <div className="space-y-16">
      {/* Default Blog Section */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Default Blog Section</h2>
        <BlogSection posts={samplePosts} />
      </div>

      {/* Custom Title and Description */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Custom Content</h2>
        <BlogSection
          sectionLabel="Latest Articles"
          title="Stay Updated with Car Care Tips"
          description="Expert advice and insights to help you maintain your vehicle in perfect condition."
          posts={customPosts}
          viewAllText="Read More"
          viewAllLink="/articles"
        />
      </div>

      {/* With Click Handler */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">With Custom Click Handler</h2>
        <BlogSection
          sectionLabel="Featured"
          title="Popular Car Care Articles"
          description="Our most read articles about car maintenance and care."
          posts={samplePosts.slice(0, 2)}
          viewAllOnClick={() => alert("View all clicked!")}
        />
      </div>

      {/* Compact Version */}
      <div>
        <h2 className="text-2xl font-bold mb-6 px-8 text-text-primary">Compact Version</h2>
        <BlogSection
          title="Quick Tips"
          description="Essential car care advice."
          posts={samplePosts.slice(0, 1)}
          className="py-12"
          titleClassName="text-3xl"
        />
      </div>
    </div>
  )
}
