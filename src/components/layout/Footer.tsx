/**
 * Footer Component
 *
 * Simple footer for Coolset technical assignment
 */

export default function Footer() {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-sm text-gray-600">
          <p className="mb-2">
            Technical Assignment for <span className="font-semibold">Coolset</span>
          </p>
          <p className="text-xs text-gray-500">
            Built with <span className="font-semibold">Next.js 15</span> •{' '}
            <span className="font-semibold">TypeScript</span> •{' '}
            <span className="font-semibold">Tailwind CSS</span> •{' '}
            <span className="font-semibold">shadcn/ui</span>
          </p>
          <p className="mt-2 text-xs text-gray-500">
            Features: Pagination • Sorting • Filtering • Sticky Headers • Responsive • Accessible
          </p>
        </div>
      </div>
    </footer>
  );
}
