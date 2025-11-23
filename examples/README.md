# glass-ui Examples

Interactive demo showcasing all components from the glass-ui library.

## Quick Start

```bash
npm install
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## What's Inside

This demo showcases all glass-ui components:

### Form Components
- **Buttons** - Primary, subtle, and ghost variants in multiple sizes
- **Inputs** - Text inputs and textareas with validation states
- **Checkboxes** - Custom styled checkboxes with labels
- **Radio Buttons** - Custom styled radio inputs
- **Switches** - Toggle switches with smooth animations
- **Select & Dropdown** - Native and custom select components

### Display Components
- **Cards** - Glass surface containers with headers, body, and footers
- **Badges** - Status indicators with multiple variants
- **Avatars** - User profile pictures with status indicators
- **Avatar Groups** - Overlapping avatar displays
- **Typography** - Headings, text, code, and links

### Interactive Components
- **Modals/Sheets** - Overlay dialogs with glass blur effects
- **Tooltips** - Hover tooltips with multiple positions

### Layout Components
- **Container** - Responsive width containers
- **Stack** - Vertical and horizontal layouts with spacing
- **Grid** - CSS Grid layouts
- **Divider** - Horizontal and vertical separators

## Features

- **Theme Switching** - Toggle between light and dark themes
- **Live Preview** - See all components in action
- **Glass Morphism** - Frosted translucent surfaces
- **Smooth Animations** - macOS-inspired micro-interactions

## Local Development

The demo uses Vite with a direct alias to the source files:

```typescript
// vite.config.ts
resolve: {
  alias: {
    'glass-ui': resolve(__dirname, '../src/index.ts'),
  },
}
```

This means changes to the source library are reflected immediately without rebuilding.

## Files

- `demo.tsx` - Main demo component with all examples
- `classname-demo.html` - Pure HTML/CSS demo using classnames only
- `main.tsx` - React app entry point
- `index.html` - HTML template

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
```

## Using in Your Project

To use glass-ui in your own project:

```bash
npm install @mir.saidi/glass-ui
```

```tsx
import '@mir.saidi/glass-ui/dist/index.css';
import { Button, Card, Input } from '@mir.saidi/glass-ui';

function App() {
  return (
    <html data-gl-theme="light">
      <Card>
        <Input placeholder="Enter text" />
        <Button variant="primary">Submit</Button>
      </Card>
    </html>
  );
}
```

## Documentation

For full documentation, see the main [README](../README.md).
