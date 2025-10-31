3; /**
 * Grocery Item Type Definitions
 */

export interface GroceryItem {
  id: number;
  name: string;
  section: string;
  price: number;
  weight: number;
}

export type SortField = 'name' | 'section' | 'price' | 'weight';
export type SortOrder = 'asc' | 'desc';

export interface SortConfig {
  field: SortField;
  order: SortOrder;
}
