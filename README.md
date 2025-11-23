# glass-ui

A premium React UI library with Apple-inspired glass surfaces. Features true glassmorphism with translucent backgrounds, blur effects, and smooth animations.

Perfect for creating modern, elegant UIs with authentic macOS/iOS feel.

## Features

- **True Glassmorphism**: Translucent backgrounds with backdrop blur and saturation filters
- **Apple-Inspired Design**: Authentic macOS/iOS aesthetic with refined typography and spacing
- **Dual API**: Use as React components or standalone CSS classnames
- **Dark Mode Support**: Seamless light/dark theme switching
- **Mobile-First**: Touch-friendly with responsive breakpoints
- **24+ Components**: Complete UI toolkit from buttons to navigation
- **TypeScript**: Full type definitions included
- **Tree-Shakeable**: Import only what you need

## Installation

```bash
npm install @mir.saidi/glass-ui
```

## Quick Start

Import the CSS tokens and utilities in your app entry point:

```tsx
import '@mir.saidi/glass-ui/dist/index.css';
```

Set the theme attribute on your HTML element:

```html
<html data-gl-theme="light">
  <!-- or data-gl-theme="dark" -->
</html>
```

Add a colorful background to see the glass effect:

```tsx
import { Button, Card } from '@mir.saidi/glass-ui';

function App() {
  return (
    <div
      className="gl-base"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
        backgroundAttachment: 'fixed',
        padding: '2rem'
      }}
    >
      <Card padding="lg">
        <h1>Welcome to glass-ui</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </div>
  );
}
```

## Dual API

glass-ui supports both React components and classname utilities.

### React Components

```tsx
import { Button } from '@mir.saidi/glass-ui';

<Button variant="primary" size="md">
  Click me
</Button>
```

### Classname Utilities

```html
<button class="gl-btn gl-btn-primary gl-btn-md">
  Click me
</button>
```

Both approaches provide the same authentic Apple Glass styling with blur effects, translucency, and smooth animations.

## Components

### Button

```tsx
import { Button } from 'glass-ui';

<Button variant="primary" size="md">Primary</Button>
<Button variant="subtle" size="md">Subtle</Button>
<Button variant="ghost" size="md">Ghost</Button>

// Icon button
<Button variant="primary" size="md" iconOnly>
  ×
</Button>
```

**Classname API:**

```html
<button class="gl-btn gl-btn-primary gl-btn-md">Primary</button>
<button class="gl-btn gl-btn-subtle gl-btn-md">Subtle</button>
<button class="gl-btn gl-btn-ghost gl-btn-md">Ghost</button>
<button class="gl-btn gl-btn-primary gl-btn-icon-md">×</button>
```

### Input

```tsx
import { Input, Textarea, InputGroup } from 'glass-ui';

<Input size="md" placeholder="Enter text..." />
<Textarea size="md" placeholder="Enter text..." />

<InputGroup
  label="Email"
  hint="We'll never share your email"
  error="Invalid email"
  required
>
  <Input type="email" error />
</InputGroup>
```

**Classname API:**

```html
<input class="gl-input gl-input-md" placeholder="Enter text..." />
<textarea class="gl-input gl-textarea gl-textarea-md" placeholder="Enter text..."></textarea>

<div class="gl-input-group">
  <label class="gl-input-label">Email <span style="color: var(--gl-color-error)"> *</span></label>
  <input class="gl-input gl-input-md gl-input-invalid" type="email" />
  <span class="gl-input-error">Invalid email</span>
</div>
```

### Card

```tsx
import { Card, CardHeader, CardBody, CardFooter } from 'glass-ui';

<Card variant="default" padding="md">
  <CardHeader title="Card Title" description="Card description" />
  <CardBody>Content goes here</CardBody>
  <CardFooter>
    <Button variant="ghost">Cancel</Button>
    <Button variant="primary">Save</Button>
  </CardFooter>
</Card>
```

**Classname API:**

```html
<div class="gl-card gl-card-md">
  <div class="gl-card-header">
    <div>
      <h3 class="gl-card-header-title">Card Title</h3>
      <p class="gl-card-header-description">Card description</p>
    </div>
  </div>
  <div class="gl-card-body">Content goes here</div>
  <div class="gl-card-footer">
    <button class="gl-btn gl-btn-ghost gl-btn-md">Cancel</button>
    <button class="gl-btn gl-btn-primary gl-btn-md">Save</button>
  </div>
</div>
```

### Sheet (Modal)

```tsx
import { Sheet } from 'glass-ui';

const [open, setOpen] = useState(false);

<Sheet open={open} onClose={() => setOpen(false)} size="md">
  <Sheet.Header title="Sheet Title" onClose={() => setOpen(false)} />
  <Sheet.Body>Content goes here</Sheet.Body>
  <Sheet.Footer>
    <Button variant="ghost" onClick={() => setOpen(false)}>Cancel</Button>
    <Button variant="primary">Confirm</Button>
  </Sheet.Footer>
</Sheet>
```

### Select & Dropdown

```tsx
import { Select, Dropdown } from 'glass-ui';

// Native select
<Select size="md">
  <option value="1">Option 1</option>
  <option value="2">Option 2</option>
</Select>

// Custom dropdown
<Dropdown
  options={[
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2' },
  ]}
  value={value}
  onChange={setValue}
  size="md"
/>
```

### Checkbox, Radio, Switch

```tsx
import { Checkbox, Radio, Switch } from 'glass-ui';

<Checkbox label="Accept terms" size="md" />
<Radio name="option" label="Option 1" size="md" />
<Switch label="Enable notifications" size="md" />
```

**Classname API:**

```html
<label class="gl-checkbox-wrapper">
  <input type="checkbox" class="gl-checkbox-input" />
  <span class="gl-checkbox-box"></span>
  <span class="gl-checkbox-label">Accept terms</span>
</label>

<label class="gl-radio-wrapper">
  <input type="radio" class="gl-radio-input" name="option" />
  <span class="gl-radio-circle"></span>
  <span class="gl-radio-label">Option 1</span>
</label>

<label class="gl-switch-wrapper">
  <input type="checkbox" class="gl-switch-input" />
  <span class="gl-switch-track"></span>
  <span class="gl-switch-label">Enable notifications</span>
</label>
```

### Badge

```tsx
import { Badge } from 'glass-ui';

<Badge variant="primary" size="md">New</Badge>
<Badge variant="success" size="md">Success</Badge>
<Badge variant="default" size="md" dot />
```

### Avatar

```tsx
import { Avatar, AvatarGroup } from 'glass-ui';

<Avatar src="/path/to/image.jpg" size="md" />
<Avatar fallback="John Doe" size="md" status="online" />

<AvatarGroup>
  <Avatar fallback="JD" size="md" />
  <Avatar fallback="AS" size="md" />
  <Avatar fallback="BK" size="md" />
</AvatarGroup>
```

### Typography

```tsx
import { Heading, Text, Code, Link } from 'glass-ui';

<Heading level={1}>Main Heading</Heading>
<Text size="md" variant="secondary">Paragraph text</Text>
<Code>const foo = 'bar';</Code>
<Link href="#">Learn more</Link>
```

**Classname API:**

```html
<h1 class="gl-heading gl-h1">Main Heading</h1>
<p class="gl-text gl-text-md gl-text-secondary">Paragraph text</p>
<code class="gl-code">const foo = 'bar';</code>
<a href="#" class="gl-link">Learn more</a>
```

### Tooltip

```tsx
import { Tooltip } from 'glass-ui';

<Tooltip content="Tooltip text" position="top">
  <Button>Hover me</Button>
</Tooltip>
```

### Layout

```tsx
import { Container, Stack, Grid, Divider, Spacer, Center } from '@mir.saidi/glass-ui';

<Container size="lg">
  <Stack gap="lg">
    <div>Item 1</div>
    <div>Item 2</div>
  </Stack>
</Container>

<Grid cols={3} gap="lg">
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
</Grid>

<Divider />
<Divider vertical />
```

**Classname API:**

```html
<div class="gl-container gl-container-lg">
  <div class="gl-stack gl-stack-gap-lg">
    <div>Item 1</div>
    <div>Item 2</div>
  </div>
</div>

<div class="gl-grid gl-grid-cols-3 gl-grid-gap-lg">
  <div>Grid item 1</div>
  <div>Grid item 2</div>
  <div>Grid item 3</div>
</div>

<hr class="gl-divider" />
<span class="gl-divider-vertical"></span>
```

### Alert

Display important messages with glass-styled alerts:

```tsx
import { Alert } from '@mir.saidi/glass-ui';

<Alert
  variant="success"
  title="Success!"
  message="Your changes have been saved."
  closable
/>

<Alert
  variant="error"
  title="Error"
  message="Something went wrong."
/>

<Alert
  variant="warning"
  title="Warning"
  message="Please review before proceeding."
/>

<Alert variant="info">
  Simple info alert without title
</Alert>
```

**Props:**
- `variant`: `'default' | 'success' | 'error' | 'warning' | 'info'`
- `title`: Optional alert title
- `message`: Alert message content
- `closable`: Show close button
- `onClose`: Callback when closed

### Navigation

Apple-style navigation with glass blur effect:

```tsx
import { GlassTopNav, GlassNavItem, GlassBottomNav } from '@mir.saidi/glass-ui';

// Top Navigation
<GlassTopNav>
  <GlassTopNav.Left>
    <div className="gl-logo">MyApp</div>
  </GlassTopNav.Left>

  <GlassTopNav.Center>
    <GlassNavItem active onClick={() => setActive('home')}>
      Home
    </GlassNavItem>
    <GlassNavItem onClick={() => setActive('about')}>
      About
    </GlassNavItem>
    <GlassNavItem onClick={() => setActive('contact')}>
      Contact
    </GlassNavItem>
  </GlassTopNav.Center>

  <GlassTopNav.Right>
    <Button variant="primary" size="sm">Sign In</Button>
  </GlassTopNav.Right>
</GlassTopNav>

// Bottom Navigation (shows on mobile <768px)
<GlassBottomNav>
  <GlassNavItem active icon="🏠" label="Home" />
  <GlassNavItem icon="🔍" label="Search" />
  <GlassNavItem icon="⚙️" label="Settings" />
</GlassBottomNav>
```

**Features:**
- Sticky top navigation with blur background
- Mobile bottom navigation that appears on small screens
- Active state styling with accent color
- Compound component pattern for flexible layouts

### Slider

Range input with glass styling and optional value display:

```tsx
import { Slider } from '@mir.saidi/glass-ui';

const [volume, setVolume] = useState(50);

<Slider
  label="Volume"
  value={volume}
  onChange={setVolume}
  min={0}
  max={100}
  showValue
  size="md"
/>

<Slider
  label="Temperature"
  value={temp}
  onChange={setTemp}
  min={-20}
  max={40}
  step={0.5}
  showValue
  unit="°C"
/>
```

**Props:**
- `label`: Optional label text
- `value`: Current value
- `onChange`: Callback with new value
- `min`, `max`, `step`: Range configuration
- `showValue`: Display current value
- `unit`: Optional unit suffix
- `size`: `'sm' | 'md' | 'lg'`

### Tabs

Content organization with default or underline variants:

```tsx
import { Tabs } from '@mir.saidi/glass-ui';

<Tabs
  items={[
    { key: 'overview', label: 'Overview', content: <div>Overview content</div> },
    { key: 'details', label: 'Details', content: <div>Details content</div> },
    { key: 'settings', label: 'Settings', content: <div>Settings content</div> }
  ]}
  defaultActiveKey="overview"
  onChange={(key) => console.log('Tab changed:', key)}
/>

// Underline variant
<Tabs
  variant="underline"
  items={[...]}
/>
```

**Props:**
- `items`: Array of `{ key, label, content }`
- `defaultActiveKey`: Initial active tab
- `onChange`: Callback when tab changes
- `variant`: `'default' | 'underline'`

### Progress

Progress indicators with optional percentage display:

```tsx
import { Progress } from '@mir.saidi/glass-ui';

// Determinate progress
<Progress value={45} showPercent size="md" />

// Indeterminate (loading)
<Progress indeterminate size="md" />

// With label
<Progress
  value={75}
  showPercent
  label="Upload Progress"
  size="lg"
/>

// Variants
<Progress value={60} variant="success" />
<Progress value={30} variant="error" />
```

**Props:**
- `value`: Progress value (0-100)
- `indeterminate`: Show loading animation
- `showPercent`: Display percentage text
- `label`: Optional label above progress bar
- `variant`: `'default' | 'success' | 'error' | 'warning'`
- `size`: `'sm' | 'md' | 'lg'`

### Spinner

Loading indicators with optional overlay mode:

```tsx
import { Spinner } from '@mir.saidi/glass-ui';

// Basic spinner
<Spinner size="md" />

// With label
<Spinner label="Loading..." size="lg" />

// Full-page overlay
<Spinner overlay label="Processing..." size="lg" />

// Different sizes
<Spinner size="sm" />
<Spinner size="md" />
<Spinner size="lg" />
```

**Props:**
- `size`: `'sm' | 'md' | 'lg'`
- `label`: Optional loading text
- `overlay`: Full-page overlay mode with glass background

### Menu

Context menus and dropdown menus with glass styling:

```tsx
import { Menu } from '@mir.saidi/glass-ui';

<Menu
  trigger={<Button>Actions</Button>}
  position="bottom"
  items={[
    { key: 'edit', label: 'Edit', icon: '✏️', shortcut: '⌘E', onClick: handleEdit },
    { key: 'duplicate', label: 'Duplicate', icon: '📋', onClick: handleDuplicate },
    { type: 'divider' },
    { type: 'label', label: 'Danger Zone' },
    { key: 'delete', label: 'Delete', icon: '🗑️', danger: true, onClick: handleDelete },
    { key: 'disabled', label: 'Disabled Action', disabled: true }
  ]}
/>
```

**Props:**
- `trigger`: Element to click to open menu
- `position`: `'top' | 'bottom' | 'left' | 'right'`
- `items`: Array of menu items, dividers, or labels

**MenuItem Type:**
- `key`: Unique identifier
- `label`: Display text
- `icon`: Optional icon element
- `shortcut`: Optional keyboard shortcut display
- `danger`: Red text for destructive actions
- `disabled`: Disable interaction
- `onClick`: Callback when clicked

## Theming

Toggle between light and dark themes:

```tsx
// Toggle theme
const theme = document.documentElement.getAttribute('data-gl-theme');
document.documentElement.setAttribute('data-gl-theme', theme === 'light' ? 'dark' : 'light');
```

## CSS Variables

All design tokens are available as CSS variables:

```css
var(--gl-color-bg)
var(--gl-color-surface)
var(--gl-color-border)
var(--gl-color-accent)
var(--gl-radius-lg)
var(--gl-blur-surface)
var(--gl-shadow-soft)
var(--gl-space-md)
var(--gl-font-size-md)
```

See [tokens.css](src/styles/tokens.css) for the complete list.

## License

MIT
