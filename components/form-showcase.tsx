import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select } from "@/components/ui/select"
import { Search, Calendar, HelpCircle } from "lucide-react"

const selectOptions = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4", disabled: true },
]

const countryOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "ca", label: "Canada" },
  { value: "au", label: "Australia" },
]

export default function FormShowcase() {
  return (
    <div className="space-y-12 p-8">
      <div>
        <h2 className="text-2xl font-bold mb-6 font-heading text-text-primary">Form Input Components</h2>

        {/* Text Inputs */}
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Text Input Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Basic Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Basic Input</label>
                <Input placeholder="Placeholder" />
              </div>

              {/* Input with Right Icon */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Input with Help Icon</label>
                <Input placeholder="Placeholder" rightIcon={<HelpCircle size={16} className="text-text-muted" />} />
              </div>

              {/* Input with Left and Right Icons */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Input with Both Icons</label>
                <Input
                  placeholder="Placeholder"
                  leftIcon={<Calendar size={16} className="text-text-muted" />}
                  rightIcon={<HelpCircle size={16} className="text-text-muted" />}
                />
              </div>

              {/* Search Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Search Input</label>
                <Input
                  variant="search"
                  placeholder="Search"
                  leftIcon={<Search size={16} className="text-text-muted" />}
                />
              </div>

              {/* Currency Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Currency Input</label>
                <Input variant="currency" placeholder="Placeholder" currencyOptions={["USD", "EUR", "GBP", "JPY"]} />
              </div>

              {/* URL Input */}
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">URL Input</label>
                <Input variant="url" placeholder="www.relume.io" />
              </div>
            </div>
          </div>

          {/* Input States */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Input States</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Normal State</label>
                <Input placeholder="Enter your text" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Disabled State</label>
                <Input placeholder="Disabled input" disabled />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Error State</label>
                <Input placeholder="Enter your email" error helperText="Please enter a valid email address" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">With Helper Text</label>
                <Input placeholder="Enter your password" helperText="Password must be at least 8 characters" />
              </div>
            </div>
          </div>

          {/* Text Area */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Text Area</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Default Text Area</label>
                <Textarea placeholder="Type your message..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Text Area with Error</label>
                <Textarea placeholder="Type your message..." error helperText="Message is required" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Non-resizable Text Area</label>
                <Textarea placeholder="Type your message..." resize="none" />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Disabled Text Area</label>
                <Textarea placeholder="Disabled textarea" disabled />
              </div>
            </div>
          </div>

          {/* Select */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Select Dropdown</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Basic Select</label>
                <Select options={selectOptions} placeholder="Select one..." />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Select with Icon</label>
                <Select
                  options={countryOptions}
                  placeholder="Select one..."
                  leftIcon={<HelpCircle size={16} className="text-text-muted" />}
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Select with Error</label>
                <Select
                  options={selectOptions}
                  placeholder="Select one..."
                  error
                  helperText="Please select an option"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2 text-text-primary">Disabled Select</label>
                <Select options={selectOptions} placeholder="Select one..." disabled />
              </div>
            </div>
          </div>

          {/* Complete Form Example */}
          <div>
            <h3 className="text-lg font-semibold mb-4 font-heading text-text-secondary">Complete Form Example</h3>
            <div className="max-w-2xl">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-primary">First Name</label>
                    <Input placeholder="Enter your first name" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-primary">Last Name</label>
                    <Input placeholder="Enter your last name" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-primary">Email</label>
                  <Input type="email" placeholder="Enter your email" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-primary">Country</label>
                  <Select options={countryOptions} placeholder="Select your country" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-primary">Website</label>
                  <Input variant="url" placeholder="www.yoursite.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2 text-text-primary">Message</label>
                  <Textarea placeholder="Type your message..." />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
