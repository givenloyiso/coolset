# Grocery Table - Interactive Data Table

**Technical Assignment for Coolset**

An interactive grocery items table built with Next.js, TypeScript, and shadcn/ui components, featuring pagination, sorting, filtering, and full accessibility support.

## 🚀 Features

### ✅ Required Features

1. **Pagination**
   - Navigate through pages with chevron arrow buttons
   - Direct page number navigation with numbered buttons
   - Clean, minimal pagination design
   - Page range indicator (e.g., "1-10 of 32")

2. **Row Display Selector**
   - Choose between 10, 25, 50, or 100 rows per page
   - Located in footer for easy access
   - Seamless switching with state preservation

3. **Sorting**
   - Click any column header to sort
   - Sort by Name, Section, Price (€), or Price/100g (€)
   - Visual chevron indicators show sort direction (ascending/descending)
   - Toggle between ascending and descending order

4. **Advanced Filtering**
   - Collapsible filter panel with "Filter by section" button
   - **Search by name** - Real-time text search with instant results
   - **Section filter** - Dropdown to filter by grocery section
   - **Price range filter** - Min/Max inputs to filter by price (€)
   - All filters work together (combined filtering)
   - Clean visual feedback on active filters

### 🎨 Bonus Features Implemented

- ✅ **Collapsible Filter Panel** - Clean UI with filters hidden behind a button
- ✅ **Multi-Filter Support** - Search, section, and price range filters work together
- ✅ **Responsive Design** - Fully responsive layout for mobile, tablet, and desktop
- ✅ **Accessibility** - Complete ARIA labels, keyboard navigation, semantic HTML
- ✅ **shadcn/ui Components** - Professional UI component library
- ✅ **Modern Design** - Clean, minimal styling matching Figma design specs
- ✅ **TypeScript** - Full type safety throughout
- ✅ **Price Calculations** - Shows price per 100g for easy comparison
- ✅ **Empty States** - Proper handling when no items match filters
- ✅ **Euro Currency** - All prices displayed in euros (€)

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **UI Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Radix UI Icons
- **Build Tool**: Turbopack (Next.js)

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout with Header/Footer
│   ├── globals.css          # Global styles & Tailwind
│   └── page.tsx             # Main page with table
├── components/
│   ├── table/               # Table components
│   │   ├── GroceryTable.tsx       # Main table orchestrator (state & logic)
│   │   ├── TableControls.tsx      # Collapsible filter panel
│   │   ├── SortableTableHead.tsx  # Sortable column headers
│   │   ├── GroceryTableRow.tsx    # Individual table row
│   │   └── TablePagination.tsx    # Footer pagination controls
│   ├── layout/
│   │   ├── Header.tsx       # Simple header
│   │   └── Footer.tsx       # Footer with tech info
│   └── ui/                  # shadcn/ui base components
│       ├── table.tsx        # Table component system
│       ├── button.tsx       # Button component
│       ├── select.tsx       # Select dropdown
│       ├── input.tsx        # Input field
│       ├── input-group.tsx  # Grouped input fields
│       └── Icon.tsx         # Icon component wrapper
├── data/
│   └── groceryItems.ts      # 56 grocery items dataset
├── types/
│   └── grocery.ts           # TypeScript interfaces
└── utils/                   # Utility functions
    ├── cn.ts                # ClassName utility (cn, clsx, tailwind-merge)
    └── table.ts             # Table utilities (sort, filter, pagination)
```

### Component Architecture

The table is built with a modular, component-based architecture:

- **GroceryTable** - Main orchestrator that manages all state (filters, sorting, pagination)
- **TableControls** - Collapsible filter panel with search, section, and price range filters
- **SortableTableHead** - Smart column header with sort indicators
- **GroceryTableRow** - Individual row with clean data display and price calculations
- **TablePagination** - Footer with rows per page selector and page navigation

## 🎯 Key Features

### Data

- **56 grocery items** across 13 sections
- Each item has: Name, Section, Price (€), Weight (kg)
- Calculated field: Price per 100g (€)
- Sections: Produce, Dairy, Bakery, Meat, Seafood, Beverages, Pantry, Snacks, Frozen, Breakfast, Condiments, Canned Goods, etc.

### Table Features

- **Multi-column sorting** - Click headers to sort by Name, Section, Price, or Price/100g
- **Advanced filtering** - Collapsible panel with:
  - Text search by name (case-insensitive, partial match)
  - Section dropdown filter
  - Price range filter (min/max)
- **Flexible pagination** - 10/25/50/100 rows per page options in footer
- **Clean design** - Minimal, professional styling matching Figma specs
- **Responsive design** - Horizontal scroll on mobile, full table on desktop
- **Visual feedback** - Sort indicators, hover effects, active states

### Accessibility

- Full keyboard navigation support
- ARIA labels on all interactive elements
- Semantic HTML structure
- Screen reader friendly
- Focus indicators for keyboard users
- Role attributes for table elements

### Performance

- Client-side data processing (no API calls)
- Optimized re-renders with useMemo hooks
- Efficient sorting and filtering algorithms
- Instant filtering and pagination
- Combined filter pipeline for optimal performance

## 🎨 Design System

### Design Philosophy

- **Clean & Minimal** - Following Figma design specifications
- **Professional** - Enterprise-grade UI components
- **Accessible** - WCAG 2.1 AA compliant

### Colors

- **Primary**: Black for active states
- **Gray Scale**: Gray-50 to Gray-900 for backgrounds and text
- **Borders**: Subtle gray borders throughout
- **Hover**: Light gray-50 for interactive elements

### Typography

- Font: System font stack for optimal performance
- Headings: Normal weight for clean look
- Body: Regular weight
- Small text for pagination and info

### Components

All UI components follow shadcn/ui design patterns:

- Consistent spacing (px-4, py-3 for cells; px-6, py-4 for sections)
- Smooth transitions on hover and focus
- Clean hover states (gray-50)
- Disabled states with reduced opacity
- Focus rings for accessibility

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 👨‍💻 Development Approach

Built with professional standards:

- **Clean, modular code** - Single-responsibility components
- **TypeScript** - Full type safety with proper interfaces
- **Comprehensive comments** - Clear documentation throughout
- **State management** - React hooks for local state
- **Memoization** - Performance optimization with useMemo
- **Responsive design** - Mobile-first approach
- **Accessibility** - WCAG 2.1 AA compliant
- **Error handling** - Proper empty states
- **Code quality** - Consistent formatting and naming

## 📊 Data Structure

Each grocery item follows this interface:

```typescript
interface GroceryItem {
  id: number;
  name: string;
  section: string;
  price: number;
  weight: number; // in kg (values < 1 displayed in grams)
}
```

## 🔍 Testing the Features

1. **Sorting**: Click any column header multiple times to toggle sort order
2. **Filtering**: Click "Filter by section" button to open the filter panel
3. **Search**: Type in the search box to filter items by name
4. **Section Filter**: Use the section dropdown to filter by category
5. **Price Range**: Enter min/max values to filter by price
6. **Pagination**: Navigate pages using chevron arrows or numbered buttons
7. **Rows per page**: Change the dropdown in footer to see different amounts of data
8. **Responsive**: Resize browser window to see mobile adaptations
9. **Keyboard**: Tab through controls and use Enter to activate

## 📄 License

Built for Coolset Technical Assignment © 2025 by Given Loyiso

---

**Built with Next.js, TypeScript, Tailwind CSS, and shadcn/ui**
