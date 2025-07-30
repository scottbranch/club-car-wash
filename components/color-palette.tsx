interface ColorSwatch {
  name: string
  variable: string
  description?: string
}

const colorGroups = [
  {
    title: "Grayscale",
    colors: [
      { name: "Gray 50", variable: "--color-gray-50" },
      { name: "Gray 100", variable: "--color-gray-100" },
      { name: "Gray 200", variable: "--color-gray-200" },
      { name: "Gray 300", variable: "--color-gray-300" },
      { name: "Gray 400", variable: "--color-gray-400" },
      { name: "Gray 500", variable: "--color-gray-500" },
      { name: "Gray 600", variable: "--color-gray-600" },
      { name: "Gray 700", variable: "--color-gray-700" },
    ],
  },
  {
    title: "Red/Coral",
    colors: [
      { name: "Red 50", variable: "--color-red-50" },
      { name: "Red 100", variable: "--color-red-100" },
      { name: "Red 200", variable: "--color-red-200" },
      { name: "Red 300", variable: "--color-red-300" },
      { name: "Red 400", variable: "--color-red-400" },
      { name: "Red 500", variable: "--color-red-500" },
      { name: "Red 600", variable: "--color-red-600" },
    ],
  },
  {
    title: "Lime/Green",
    colors: [
      { name: "Lime 50", variable: "--color-lime-50" },
      { name: "Lime 100", variable: "--color-lime-100" },
      { name: "Lime 200", variable: "--color-lime-200" },
      { name: "Lime 300", variable: "--color-lime-300" },
      { name: "Lime 400", variable: "--color-lime-400" },
      { name: "Lime 500", variable: "--color-lime-500" },
      { name: "Lime 600", variable: "--color-lime-600" },
    ],
  },
  {
    title: "Teal/Blue-Green",
    colors: [
      { name: "Teal 50", variable: "--color-teal-50" },
      { name: "Teal 100", variable: "--color-teal-100" },
      { name: "Teal 200", variable: "--color-teal-200" },
      { name: "Teal 300", variable: "--color-teal-300" },
      { name: "Teal 400", variable: "--color-teal-400" },
      { name: "Teal 500", variable: "--color-teal-500" },
      { name: "Teal 600", variable: "--color-teal-600" },
    ],
  },
]

const tailwindColorMap: { [key: string]: string } = {
  "--color-gray-50": "bg-gray-50",
  "--color-gray-100": "bg-gray-100",
  "--color-gray-200": "bg-gray-200",
  "--color-gray-300": "bg-gray-300",
  "--color-gray-400": "bg-gray-400",
  "--color-gray-500": "bg-gray-500",
  "--color-gray-600": "bg-gray-600",
  "--color-gray-700": "bg-gray-700",
  "--color-red-50": "bg-red-50",
  "--color-red-100": "bg-red-100",
  "--color-red-200": "bg-red-200",
  "--color-red-300": "bg-red-300",
  "--color-red-400": "bg-red-400",
  "--color-red-500": "bg-red-500",
  "--color-red-600": "bg-red-600",
  "--color-lime-50": "bg-lime-50",
  "--color-lime-100": "bg-lime-100",
  "--color-lime-200": "bg-lime-200",
  "--color-lime-300": "bg-lime-300",
  "--color-lime-400": "bg-lime-400",
  "--color-lime-500": "bg-lime-500",
  "--color-lime-600": "bg-lime-600",
  "--color-teal-50": "bg-teal-50",
  "--color-teal-100": "bg-teal-100",
  "--color-teal-200": "bg-teal-200",
  "--color-teal-300": "bg-teal-300",
  "--color-teal-400": "bg-teal-400",
  "--color-teal-500": "bg-teal-500",
  "--color-teal-600": "bg-teal-600",
}

export default function ColorPalette() {
  return (
    <div className="space-y-8">
      {colorGroups.map((group) => (
        <div key={group.title}>
          <h3 className="text-xl font-semibold mb-4 text-text-primary">{group.title}</h3>
          <div className="grid grid-cols-2 sm:grid-cols-5 lg:grid-cols-10 gap-2">
            {group.colors.map((color) => (
              <div key={color.variable} className="text-center">
                <div
                  className={`w-full h-16 rounded-lg border mb-2 cursor-pointer hover:scale-105 transition-transform border-gray-200 ${tailwindColorMap[color.variable]}`}
                  title={`var(${color.variable})`}
                />
                <p className="text-xs font-medium text-text-secondary">{color.name}</p>
                <p className="text-xs font-mono text-text-muted">{color.variable}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}
