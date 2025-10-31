/**
 * SortableTableHead Component
 *
 * A table header cell that supports sorting
 */

'use client';

import { TableHead } from '@/components/ui/table';
import { Icon } from '@/components/ui/Icon';
import { SortField, SortConfig } from '@/types/grocery';

interface SortableTableHeadProps {
  field: SortField;
  label: string;
  sortConfig: SortConfig;
  onSort: (field: SortField) => void;
}

export default function SortableTableHead({
  field,
  label,
  sortConfig,
  onSort,
}: SortableTableHeadProps) {
  const isActive = sortConfig.field === field;

  const SortIcon = () => {
    if (!isActive) {
      return null;
    }
    return sortConfig.order === 'asc' ? (
      <Icon name="chevron-up" className="w-3 h-3 text-gray-600" aria-hidden="true" />
    ) : (
      <Icon name="chevron-down" className="w-3 h-3 text-gray-600" aria-hidden="true" />
    );
  };

  return (
    <TableHead
      className="cursor-pointer hover:bg-gray-50 transition-colors text-gray-700 font-normal"
      onClick={() => onSort(field)}
      onKeyDown={(e) => e.key === 'Enter' && onSort(field)}
      tabIndex={0}
      role="button"
      aria-sort={isActive ? (sortConfig.order === 'asc' ? 'ascending' : 'descending') : 'none'}
    >
      <div className="flex items-center gap-1.5">
        <span>{label}</span>
        <SortIcon />
      </div>
    </TableHead>
  );
}
