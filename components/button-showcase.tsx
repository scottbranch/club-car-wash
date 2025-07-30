import { Button } from "@/components/ui/button"
import { CuboidIcon as Cube, ArrowRight, Download, Heart, Settings } from "lucide-react"

export default function ButtonShowcase() {
  return (
    <div className="space-y-12 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-6 font-heading text-text-primary">Button Variants</h2>

        {/* Text Only Buttons */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Text Only Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Button</Button>
              <Button variant="secondary">Button</Button>
              <Button variant="ghost">Button</Button>
              <Button variant="ghost" className="text-text-secondary">
                Button
              </Button>
              <Button variant="ghost" className="text-text-muted">
                Button
              </Button>
            </div>
          </div>

          {/* Different Sizes */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Different Sizes</h3>
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="primary" size="sm">
                Button
              </Button>
              <Button variant="secondary" size="sm">
                Button
              </Button>
              <Button variant="ghost" size="sm">
                Button
              </Button>
              <Button variant="ghost" size="sm" className="text-text-muted">
                Button
              </Button>
            </div>
          </div>

          {/* Icon + Text Buttons (Icon Left) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Icon + Text Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={<Cube size={16} />} iconPosition="left">
                Button
              </Button>
              <Button variant="secondary" icon={<Cube size={16} />} iconPosition="left">
                Button
              </Button>
              <Button variant="ghost" icon={<Cube size={16} />} iconPosition="left">
                Button
              </Button>
              <Button variant="ghost" icon={<Cube size={16} />} iconPosition="left" className="text-text-secondary">
                Button
              </Button>
              <Button variant="ghost" icon={<Cube size={16} />} iconPosition="left" className="text-text-muted">
                Button
              </Button>
            </div>
          </div>

          {/* Different Icons + Text */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Different Icons + Text</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={<Download size={16} />} iconPosition="left">
                Button
              </Button>
              <Button variant="secondary" icon={<Heart size={16} />} iconPosition="left">
                Button
              </Button>
              <Button variant="ghost" icon={<Settings size={16} />} iconPosition="left">
                Button
              </Button>
              <Button variant="ghost" icon={<ArrowRight size={16} />} iconPosition="left" className="text-text-muted">
                Button
              </Button>
            </div>
          </div>

          {/* Text + Icon Buttons (Icon Right) */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Text + Icon Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={<Cube size={16} />} iconPosition="right">
                Button
              </Button>
              <Button variant="secondary" icon={<Cube size={16} />} iconPosition="right">
                Button
              </Button>
              <Button variant="ghost" icon={<Cube size={16} />} iconPosition="right">
                Button
              </Button>
              <Button variant="ghost" icon={<Cube size={16} />} iconPosition="right" className="text-text-secondary">
                Button
              </Button>
              <Button variant="ghost" icon={<Cube size={16} />} iconPosition="right" className="text-text-muted">
                Button
              </Button>
            </div>
          </div>

          {/* Text + Icon Small */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Text + Icon Small</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" icon={<Cube size={14} />} iconPosition="right" size="sm">
                Button
              </Button>
              <Button variant="secondary" icon={<Cube size={14} />} iconPosition="right" size="sm">
                Button
              </Button>
              <Button variant="ghost" icon={<Cube size={14} />} iconPosition="right" size="sm">
                Button
              </Button>
              <Button
                variant="ghost"
                icon={<Cube size={14} />}
                iconPosition="right"
                size="sm"
                className="text-text-muted"
              >
                Button
              </Button>
            </div>
          </div>

          {/* Icon Only Buttons */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Icon Only Buttons</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconOnly icon={<Cube size={16} />} />
              <Button variant="secondary" iconOnly icon={<Cube size={16} />} />
              <Button variant="ghost" iconOnly icon={<Cube size={16} />} />
              <Button variant="ghost" iconOnly icon={<Cube size={16} />} className="text-text-secondary" />
              <Button variant="ghost" iconOnly icon={<Cube size={16} />} className="text-text-muted" />
            </div>
          </div>

          {/* Icon Only Small */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Icon Only Small</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" iconOnly icon={<Cube size={14} />} size="sm" />
              <Button variant="secondary" iconOnly icon={<Cube size={14} />} size="sm" />
              <Button variant="ghost" iconOnly icon={<Cube size={14} />} size="sm" />
              <Button variant="ghost" iconOnly icon={<Cube size={14} />} size="sm" className="text-text-secondary" />
              <Button variant="ghost" iconOnly icon={<Cube size={14} />} size="sm" className="text-text-muted" />
            </div>
          </div>

          {/* Interactive States Demo */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Interactive States</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary">Normal</Button>
              <Button variant="primary" disabled>
                Disabled
              </Button>
              <Button variant="secondary">Normal</Button>
              <Button variant="secondary" disabled>
                Disabled
              </Button>
              <Button variant="ghost">Normal</Button>
              <Button variant="ghost" disabled>
                Disabled
              </Button>
            </div>
          </div>

          {/* Different Color Variants */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Custom Color Variants</h3>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" className="bg-teal-300">
                Teal Button
              </Button>
              <Button variant="primary" className="bg-lime-400">
                Lime Button
              </Button>
              <Button variant="secondary" className="border-teal-500 text-teal-300">
                Teal Outline
              </Button>
              <Button variant="secondary" className="border-lime-300 text-lime-400">
                Lime Outline
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
