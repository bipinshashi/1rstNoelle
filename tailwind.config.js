/** @type {import('tailwindcss').Config} */
module.exports = {
  content: {
    files: [
      "./index.html",
      "./**/*.{html,js}"
    ]
  },
  safelist: [
    // Background colors
    'bg-gray-900', 'bg-gray-800', 'bg-gray-700', 'bg-gray-600', 'bg-yellow-600', 'bg-yellow-500', 'bg-transparent',
    // Text colors  
    'text-white', 'text-gray-300', 'text-gray-400', 'text-yellow-600', 'text-gray-900',
    // Border colors
    'border-gray-700', 'border-gray-600', 'border-gray-800',
    // Hover states
    'hover:bg-yellow-500', 'hover:text-yellow-600', 'hover:border-yellow-600', 'hover:border-gray-600', 'hover:-translate-y-1', 'hover:-translate-y-2',
    // Focus states
    'focus:border-yellow-600', 'focus:outline-none',
    // Typography
    'text-xs', 'text-sm', 'text-base', 'text-lg', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl',
    'font-sans', 'font-light', 'font-normal', 'font-medium', 'font-semibold', 'font-bold',
    'leading-tight', 'leading-normal', 'leading-relaxed',
    // Spacing
    'p-1', 'p-2', 'p-3', 'p-4', 'p-6', 'p-8',
    'px-4', 'px-6', 'px-8', 'py-3', 'py-4', 'py-16', 'py-20',
    'm-1', 'm-2', 'm-3', 'm-4', 'mx-auto', 'mb-2', 'mb-3', 'mb-4', 'mb-6', 'mb-8', 'mb-12', 'mb-16',
    'mt-1', 'mt-8', 'mr-3',
    // Sizing
    'w-5', 'w-6', 'w-8', 'w-10', 'w-12', 'w-16', 'w-24', 'w-full',
    'h-5', 'h-6', 'h-8', 'h-10', 'h-12', 'h-16', 'h-24', 'h-64', 'h-full',
    'min-h-screen',
    'max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg', 'max-w-xl', 'max-w-2xl', 'max-w-3xl', 'max-w-4xl', 'max-w-5xl', 'max-w-6xl',
    // Layout
    'container', 'grid', 'flex', 'block', 'inline-block', 'hidden',
    'grid-cols-1', 'grid-cols-2', 'grid-cols-3',
    'flex-col', 'flex-row',
    'items-center', 'items-start', 'justify-center', 'justify-between',
    'gap-4', 'gap-6', 'gap-8', 'gap-12', 'gap-16',
    'space-x-4', 'space-x-8', 'space-y-3', 'space-y-6',
    // Position
    'fixed', 'relative', 'top-0', 'z-50',
    // Borders & Radius
    'border', 'border-2', 'border-t', 'border-b',
    'rounded', 'rounded-md', 'rounded-lg', 'rounded-full',
    // Effects
    'transition', 'transition-all', 'transition-colors', 'duration-300',
    'backdrop-blur-sm', 'overflow-hidden', 'transform',
    'antialiased', 'text-center', 'scroll-smooth', 'aspect-square',
    // Responsive prefixes
    'sm:flex-row', 'sm:w-auto',
    'md:flex', 'md:hidden', 'md:text-4xl', 'md:text-5xl', 'md:text-xl', 'md:grid-cols-2', 'md:grid-cols-3', 'md:py-20',
    'lg:grid-cols-2', 'lg:grid-cols-4', 'lg:text-5xl', 'lg:text-6xl', 'lg:gap-16', 'lg:col-span-2',
    'xl:grid-cols-3',
    // Background gradients
    'bg-gradient-to-br', 'from-gray-700', 'to-gray-600'
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}