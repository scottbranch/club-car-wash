import ColorPalette from "@/components/color-palette"
import ButtonShowcase from "@/components/button-showcase"
import FormShowcase from "@/components/form-showcase"
import HeaderShowcase from "@/components/header-showcase"

export default function StyleguidePage() {
  return (
    <main className="min-h-screen">
      <div className="p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-12 text-center">
            <h1 className="text-4xl font-bold mb-4 font-heading text-text-primary">Design System Styleguide</h1>
            <p className="text-base text-text-secondary">Complete component library using our custom color system</p>
          </header>

          <HeaderShowcase />

          <div className="mt-16">
            <FormShowcase />
          </div>

          <div className="mt-16">
            <ButtonShowcase />
          </div>

          <div className="mt-16">
            <ColorPalette />
          </div>
        </div>
      </div>
    </main>
  )
}
