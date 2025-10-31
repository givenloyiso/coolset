/**
 * Utility Functions
 *
 * Helper functions used throughout the application.
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * cn - Class Name utility function
 *
 * Combines clsx and tailwind-merge for optimal className handling.
 *
 * Features:
 * - Conditionally joins classNames together (via clsx)
 * - Intelligently merges Tailwind CSS classes (via tailwind-merge)
 * - Prevents className conflicts (e.g., "px-2 px-4" becomes "px-4")
 *
 * @param inputs - Any number of className values (strings, objects, arrays)
 * @returns Merged className string
 *
 * @example
 * cn("px-2 py-1", "px-4") // Returns: "py-1 px-4"
 * cn("text-red-500", condition && "text-blue-500") // Conditional classes
 * cn({ "bg-blue-500": isActive, "bg-gray-500": !isActive }) // Object syntax
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
