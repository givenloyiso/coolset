/**
 * Grocery Table Component
 *
 * Main table component that orchestrates all sub-components
 * Features: Pagination, Sorting, Filtering, Responsive Design, Accessibility
 */

'use client';

import { useMemo, useState } from 'react';
import { GroceryItem, SortConfig, SortField } from '@/types/grocery';
import { getUniqueSections } from '@/data/groceryItems';
import { Table, TableBody, TableCell, TableHeader, TableRow } from '@/components/ui/table';
import {
  sortItems,
  filterByField,
  filterBySearch,
  filterByPriceRange,
  getPaginationValues,
} from '@/utils/table';
import TableControls from '@/components/table/TableControls';
import SortableTableHead from '@/components/table/SortableTableHead';
import GroceryTableRow from '@/components/table/GroceryTableRow';
import TablePagination from '@/components/table/TablePagination';

interface GroceryTableProps {
  items: GroceryItem[];
}

const ROWS_PER_PAGE_OPTIONS = [10, 25, 50, 100];

export default function GroceryTable({ items }: GroceryTableProps) {
  // State management
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [sortConfig, setSortConfig] = useState<SortConfig>({ field: 'name', order: 'asc' });
  const [selectedSection, setSelectedSection] = useState<string>('all');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [priceRange, setPriceRange] = useState<number[]>([0, 99999]);

  const uniqueSections = useMemo(() => getUniqueSections(), []);

  // Filter items by section using utility function
  const filteredBySection = useMemo(
    () => filterByField(items, 'section', selectedSection),
    [items, selectedSection]
  );

  // Filter by search term
  const filteredBySearch = useMemo(
    () => filterBySearch(filteredBySection, 'name', searchTerm),
    [filteredBySection, searchTerm]
  );

  // Filter by price range
  const filteredItems = useMemo(
    () => filterByPriceRange(filteredBySearch, priceRange[0], priceRange[1]),
    [filteredBySearch, priceRange]
  );

  // Sort items using utility function
  const sortedItems = useMemo(
    () => sortItems(filteredItems, sortConfig.field, sortConfig.order),
    [filteredItems, sortConfig]
  );

  // Pagination calculations using utility function
  const { totalPages, startIndex, endIndex } = useMemo(
    () => getPaginationValues(currentPage, rowsPerPage, sortedItems.length),
    [currentPage, rowsPerPage, sortedItems.length]
  );

  const currentItems = useMemo(
    () => sortedItems.slice(startIndex, endIndex),
    [sortedItems, startIndex, endIndex]
  );

  // Reset to page 1 when filters change
  const handleSectionChange = (section: string) => {
    setSelectedSection(section);
    setCurrentPage(1);
  };

  const handleRowsPerPageChange = (rows: number) => {
    setRowsPerPage(rows);
    setCurrentPage(1);
  };

  const handleSearchChange = (search: string) => {
    setSearchTerm(search);
    setCurrentPage(1);
  };

  const handlePriceRangeChange = (range: number[]) => {
    setPriceRange(range);
    setCurrentPage(1);
  };

  // Sorting handler
  const handleSort = (field: SortField) => {
    setSortConfig((prevConfig) => {
      if (prevConfig.field === field) {
        return {
          field,
          order: prevConfig.order === 'asc' ? 'desc' : 'asc',
        };
      }
      return { field, order: 'asc' };
    });
  };

  // Pagination handler
  const handlePageChange = (page: number) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  };

  return (
    <div className="w-full bg-white rounded-lg shadow border">
      {/* Controls Section */}
      <TableControls
        selectedSection={selectedSection}
        onSectionChange={handleSectionChange}
        sections={uniqueSections}
        searchTerm={searchTerm}
        onSearchChange={handleSearchChange}
        priceRange={priceRange}
        onPriceRangeChange={handlePriceRangeChange}
      />

      {/* Table */}
      <div>
        <Table>
          <TableHeader className="bg-gray-50">
            <TableRow>
              <SortableTableHead
                field="name"
                label="Name"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableTableHead
                field="section"
                label="Section"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableTableHead
                field="price"
                label="Price (€)"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
              <SortableTableHead
                field="weight"
                label="Price / 100 g (€)"
                sortConfig={sortConfig}
                onSort={handleSort}
              />
            </TableRow>
          </TableHeader>
          <TableBody>
            {currentItems.length === 0 ? (
              <TableRow>
                <TableCell colSpan={4} className="h-24 text-center">
                  No items found in {selectedSection} section.
                </TableCell>
              </TableRow>
            ) : (
              currentItems.map((item) => <GroceryTableRow key={item.id} item={item} />)
            )}
          </TableBody>
        </Table>
      </div>

      {/* Pagination */}
      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        rowsPerPage={rowsPerPage}
        onRowsPerPageChange={handleRowsPerPageChange}
        rowsPerPageOptions={ROWS_PER_PAGE_OPTIONS}
        startIndex={startIndex}
        endIndex={endIndex}
        totalItems={sortedItems.length}
      />
    </div>
  );
}
