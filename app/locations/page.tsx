import { ExploreLocations } from '@/components/explore-locations';
import { PageHeader } from '@/components/page-header';

export default function LocationsPage() {
  return (
    <main className="min-h-screen">
      <PageHeader
        tagline="Locations"
        title="Find a location"
        description="Explore our diverse wash packages designed to keep your vehicle sparkling clean and protected."
        primaryButtonText="View Packages"
        secondaryButtonText="Find Location"
        primaryButtonHref="/pricing"
        secondaryButtonHref="/locations"
        className="bg-gray-100"
      />
      <ExploreLocations
        viewButtonHref="/locations/map"
        learnButtonHref="/locations/about"
      />
    </main>
  );
}
