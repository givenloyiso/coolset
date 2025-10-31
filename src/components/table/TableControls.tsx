/**
 * TableControls Component
 *
 * Clean header with title and filter button matching Figma design
 */

'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { InputGroup, InputGroupInput } from '../ui/input-group';
import { MixerHorizontalIcon, MagnifyingGlassIcon, Cross2Icon } from '@radix-ui/react-icons';

interface TableControlsProps {
  selectedSection: string;
  onSectionChange: (section: string) => void;
  sections: string[];
  searchTerm: string;
  onSearchChange: (search: string) => void;
  priceRange: number[];
  onPriceRangeChange: (range: number[]) => void;
}

export default function TableControls({
  selectedSection,
  onSectionChange,
  sections,
  searchTerm,
  onSearchChange,
  priceRange,
  onPriceRangeChange,
}: TableControlsProps) {
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handlePriceRangeChange = (range: number[]) => {
    onPriceRangeChange(range);
  };

  return (
    <div>
      <div className="px-6 py-4 flex items-center justify-between border-b">
        {/* Title */}
        <h1 className="text-lg font-normal text-gray-900">Today&apos;s groceries</h1>

        {/* Filter Button */}
        <Button
          variant="outline"
          size="sm"
          onClick={() => setIsFilterOpen(!isFilterOpen)}
          className="gap-2"
        >
          <MixerHorizontalIcon className="h-4 w-4" />
          Filter by section
        </Button>
      </div>

      {/* Filter Panel */}
      {isFilterOpen && (
        <div className="px-6 py-4 border-b bg-gray-50 space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-gray-900">Filters</h3>
            <Button
              variant="ghost"
              size="icon-sm"
              onClick={() => setIsFilterOpen(false)}
              aria-label="Close filters"
            >
              <Cross2Icon className="h-4 w-4" />
            </Button>
          </div>

          {/* Search */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Search by name</label>
            <div className="relative">
              <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search items..."
                value={searchTerm}
                onChange={(e) => onSearchChange(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {/* Section Filter */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Section</label>
            <Select value={selectedSection} onValueChange={onSectionChange}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select section" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Sections</SelectItem>
                {sections.map((section) => (
                  <SelectItem key={section} value={section}>
                    {section}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Price Range */}
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Price Range (€)</label>
            <InputGroup className="w-full">
              <InputGroupInput
                type="number"
                placeholder="Min"
                value={priceRange[0] || ''}
                onChange={(e) =>
                  handlePriceRangeChange([Number(e.target.value) || 0, priceRange[1]])
                }
                className="text-sm"
              />
              <span className="px-2 text-gray-500">-</span>
              <InputGroupInput
                type="number"
                placeholder="Max"
                value={priceRange[1] || ''}
                onChange={(e) =>
                  handlePriceRangeChange([priceRange[0], Number(e.target.value) || 99999])
                }
                className="text-sm"
              />
            </InputGroup>
          </div>
        </div>
      )}
    </div>
  );
}
