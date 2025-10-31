/**
 * Table Utility Functions
 *
 * Reusable utilities for table sorting, filtering, and pagination
 */

export type SortOrder = 'asc' | 'desc';

/**
 * Generic sorting function for arrays
 * Supports string and number comparisons
 */
export function sortItems<T>(items: T[], field: keyof T, order: SortOrder): T[] {
  const sorted = [...items];

  sorted.sort((a, b) => {
    const aValue = a[field];
    const bValue = b[field];

    // String comparison
    if (typeof aValue === 'string' && typeof bValue === 'string') {
      return order === 'asc' ? aValue.localeCompare(bValue) : bValue.localeCompare(aValue);
    }

    // Number comparison
    if (typeof aValue === 'number' && typeof bValue === 'number') {
      return order === 'asc' ? aValue - bValue : bValue - aValue;
    }

    return 0;
  });

  return sorted;
}

/**
 * Calculate visible page numbers with ellipsis for pagination
 * Returns an array of page numbers and '...' strings
 */
export function getPaginationRange(
  currentPage: number,
  totalPages: number,
  maxVisible: number = 7
): (number | string)[] {
  const pages: (number | string)[] = [];

  // If total pages fit within max visible, show all
  if (totalPages <= maxVisible) {
    return Array.from({ length: totalPages }, (_, i) => i + 1);
  }

  // Always show first page
  pages.push(1);

  // Add ellipsis after first page if needed
  if (currentPage > 3) {
    pages.push('...');
  }

  // Show pages around current page
  for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
    pages.push(i);
  }

  // Add ellipsis before last page if needed
  if (currentPage < totalPages - 2) {
    pages.push('...');
  }

  // Always show last page
  pages.push(totalPages);

  return pages;
}

/**
 * Generic filter function for arrays
 * Returns items that match the filter value for a specific field
 */
export function filterByField<T>(
  items: T[],
  field: keyof T,
  filterValue: string | number,
  allValue: string | number = 'all'
): T[] {
  if (filterValue === allValue) {
    return items;
  }

  return items.filter((item) => item[field] === filterValue);
}

/**
 * Filter items by price range
 * Returns items that fall within the specified min and max price
 */
export function filterByPriceRange<T extends { price: number }>(
  items: T[],
  minPrice: number,
  maxPrice: number
): T[] {
  return items.filter((item) => item.price >= minPrice && item.price <= maxPrice);
}

/**
 * Filter items by search term on a specific field
 * Case-insensitive partial match
 */
export function filterBySearch<T>(items: T[], field: keyof T, searchTerm: string): T[] {
  if (!searchTerm.trim()) {
    return items;
  }

  const lowerSearchTerm = searchTerm.toLowerCase();

  return items.filter((item) => {
    const value = item[field];
    if (typeof value === 'string') {
      return value.toLowerCase().includes(lowerSearchTerm);
    }
    return false;
  });
}

/**
 * Calculate pagination values
 */
export function getPaginationValues(currentPage: number, rowsPerPage: number, totalItems: number) {
  const totalPages = Math.ceil(totalItems / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const endIndex = startIndex + rowsPerPage;

  return {
    totalPages,
    startIndex,
    endIndex,
  };
}
