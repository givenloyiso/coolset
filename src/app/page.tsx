/**
 * Grocery Table Page
 *
 * Displays an interactive table of grocery items with sorting, filtering, and pagination.
 * Technical assignment for Coolset.
 */

'use client';

import GroceryTable from '@/components/table/GroceryTable';
import { groceryItems } from '@/data/groceryItems';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 py-8 md:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">Grocery Items</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Browse and filter through our complete inventory of grocery items. Sort by any column,
            filter by section, and customize your view.
          </p>
          <a
            href="docs/technical-assignment.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500"
          >
            Read the technical assignment
          </a>
        </div>

        {/* Table */}
        <GroceryTable items={groceryItems} />
      </div>
    </div>
  );
}
