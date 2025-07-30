"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export interface ServicePackage {
  id: string
  title: string
  description: string
  icon: {
    src: string
    alt: string
    width: number
    height: number
  }
  link: {
    text: string
    href: string
    onClick?: () => void
  }
}

export interface ServicePackagesProps {
  sectionTitle?: string
  sectionDescription?: string
  packages: ServicePackage[]
  className?: string
  sectionTitleClassName?: string
  sectionDescriptionClassName?: string
}

const ServicePackages = React.forwardRef<HTMLElement, ServicePackagesProps>(
  (
    {
      sectionTitle = "Discover Our Exceptional Wash Packages Tailored for Every Vehicle and Budget",
      sectionDescription = "At Club Car Wash, we provide five unique wash packages designed to meet your specific needs. Each package includes a variety of features to ensure your vehicle looks its best. Choose the right wash for you and experience the difference in quality.",
      packages,
      className = "",
      sectionTitleClassName = "",
      sectionDescriptionClassName = "",
      ...props
    },
    ref,
  ) => {
    const handlePackageClick = (packageItem: ServicePackage) => {
      if (packageItem.link.onClick) {
        packageItem.link.onClick()
      } else if (packageItem.link.href) {
        window.location.href = packageItem.link.href
      }
    }

    return (
      <section ref={ref} className={`py-16 lg:py-24 ${className} bg-white`} {...props}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {/* Title and Description */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-[130px] items-start">
              <div>
                <h2
                  className={`text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight font-heading ${sectionTitleClassName} text-text-primary`}
                >
                  {sectionTitle}
                </h2>
              </div>
              <div>
                <p className={`text-base leading-relaxed ${sectionDescriptionClassName} text-text-secondary`}>
                  {sectionDescription}
                </p>
              </div>
            </div>

            {/* Service Packages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {packages.map((packageItem) => (
                <div key={packageItem.id} className="group">
                  {/* Icon */}
                  <div className="mb-6">
                    <Image
                      src={packageItem.icon.src || "/placeholder.svg"}
                      alt={packageItem.icon.alt}
                      width={packageItem.icon.width}
                      height={packageItem.icon.height}
                      className="transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-4">
                    <h3 className="text-xl sm:text-2xl font-bold leading-tight font-heading text-text-primary">
                      {packageItem.title}
                    </h3>

                    <p className="text-base leading-relaxed text-text-secondary">{packageItem.description}</p>

                    {/* Learn More Link */}
                    <div className="pt-2">
                      <Link
                        href={packageItem.link.href}
                        className="inline-flex items-center gap-2 text-base font-medium transition-all duration-200 hover:gap-3 group-hover:opacity-80 text-text-primary"
                        onClick={(e) => {
                          if (packageItem.link.onClick) {
                            e.preventDefault()
                            packageItem.link.onClick()
                          }
                        }}
                      >
                        {packageItem.link.text}
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
        </div>
      </section>
    )
  },
)

ServicePackages.displayName = "ServicePackages"

export { ServicePackages }
