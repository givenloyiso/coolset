/**
 * TablePagination Component
 *
 * Clean pagination footer matching Figma design
 */

'use client';

import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { ChevronLeftIcon, ChevronRightIcon } from '@radix-ui/react-icons';

interface TablePaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  rowsPerPage: number;
  onRowsPerPageChange: (rows: number) => void;
  rowsPerPageOptions: number[];
  startIndex: number;
  endIndex: number;
  totalItems: number;
}

export default function TablePagination({
  currentPage,
  totalPages,
  onPageChange,
  rowsPerPage,
  onRowsPerPageChange,
  rowsPerPageOptions,
  startIndex,
  endIndex,
  totalItems,
}: TablePaginationProps) {
  if (totalPages === 0) return null;

  return (
    <div className="px-6 py-3 flex items-center justify-between border-t text-sm">
      {/* Left: Rows per page */}
      <div className="flex items-center gap-2">
        <span className="text-gray-600">Rows per page:</span>
        <Select
          value={rowsPerPage.toString()}
          onValueChange={(value) => onRowsPerPageChange(Number(value))}
        >
          <SelectTrigger className="w-[70px] h-8" aria-label="Select number of rows per page">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            {rowsPerPageOptions.map((option) => (
              <SelectItem key={option} value={option.toString()}>
                {option}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Center: Page info */}
      <div className="text-gray-600">
        {startIndex + 1}-{Math.min(endIndex, totalItems)} of {totalItems}
      </div>

      {/* Right: Navigation */}
      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          aria-label="Previous page"
        >
          <ChevronLeftIcon className="h-4 w-4" />
        </Button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <Button
            key={page}
            variant={currentPage === page ? 'default' : 'ghost'}
            size="icon-sm"
            onClick={() => onPageChange(page)}
            aria-label={`Go to page ${page}`}
            aria-current={currentPage === page ? 'page' : undefined}
            className={currentPage === page ? 'bg-black text-white hover:bg-black/90' : ''}
          >
            {page}
          </Button>
        ))}

        <Button
          variant="ghost"
          size="icon-sm"
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          aria-label="Next page"
        >
          <ChevronRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
