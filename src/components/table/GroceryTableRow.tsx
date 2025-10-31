/**
 * GroceryTableRow Component
 *
 * Displays a single row of grocery item data with clean styling
 */

'use client';

import { TableRow, TableCell } from '@/components/ui/table';
import { GroceryItem } from '@/types/grocery';

interface GroceryTableRowProps {
  item: GroceryItem;
}

export default function GroceryTableRow({ item }: GroceryTableRowProps) {
  return (
    <TableRow>
      <TableCell className="font-normal text-gray-900">{item.name}</TableCell>
      <TableCell className="text-gray-900">{item.section}</TableCell>
      <TableCell className="text-gray-900">{item.price.toFixed(2)}</TableCell>
      <TableCell className="text-gray-900">{(item.price / item.weight).toFixed(2)}</TableCell>
    </TableRow>
  );
}
