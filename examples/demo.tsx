import React, { useState } from 'react';
import {
  Alert,
  Button,
  Input,
  InputGroup,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Sheet,
  Select,
  Dropdown,
  Checkbox,
  Radio,
  Switch,
  Slider,
  Badge,
  Avatar,
  AvatarGroup,
  Heading,
  Text,
  Code,
  Link,
  Tooltip,
  Container,
  Stack,
  Grid,
  Divider,
  GlassTopNav,
  GlassNavItem,
  GlassBottomNav,
  Tabs,
  Progress,
  Spinner,
  Menu,
} from 'glass-ui';

function Demo() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [sliderValue, setSliderValue] = useState(50);
  const [volumeValue, setVolumeValue] = useState(75);
  const [showAlert, setShowAlert] = useState(true);

  return (
    <div
      className="gl-base"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Top Navigation */}
      <GlassTopNav>
        <GlassTopNav.Left>
          <div className="gl-logo">glass-ui</div>
        </GlassTopNav.Left>
        <GlassTopNav.Center>
          <GlassNavItem
            active={activeNav === 'home'}
            onClick={() => setActiveNav('home')}
          >
            Home
          </GlassNavItem>
          <GlassNavItem
            active={activeNav === 'components'}
            onClick={() => setActiveNav('components')}
          >
            Components
          </GlassNavItem>
          <GlassNavItem
            active={activeNav === 'docs'}
            onClick={() => setActiveNav('docs')}
          >
            Docs
          </GlassNavItem>
          <GlassNavItem
            active={activeNav === 'examples'}
            onClick={() => setActiveNav('examples')}
          >
            Examples
          </GlassNavItem>
        </GlassTopNav.Center>
        <GlassTopNav.Right>
          <Button variant="subtle" size="sm">Sign In</Button>
          <Button variant="primary" size="sm">Get Started</Button>
        </GlassTopNav.Right>
      </GlassTopNav>

      <Container size="xl" style={{ padding: '2rem' }}>
        <Stack gap="2xl">
          {/* Header */}
          <div>
            <Heading level={1}>glass-ui Demo</Heading>
            <Text size="lg" variant="secondary">
              A premium React UI library with macOS-inspired glass surfaces
            </Text>
          </div>

          <Divider />

          {/* Buttons */}
          <Card>
            <CardHeader title="Buttons" description="Primary, subtle, and ghost variants" />
            <CardBody>
              <Stack gap="md">
                <Stack direction="horizontal" gap="md">
                  <Button variant="primary" size="sm">
                    Primary Small
                  </Button>
                  <Button variant="primary" size="md">
                    Primary Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Primary Large
                  </Button>
                </Stack>
                <Stack direction="horizontal" gap="md">
                  <Button variant="subtle" size="md">
                    Subtle
                  </Button>
                  <Button variant="ghost" size="md">
                    Ghost
                  </Button>
                  <Button variant="primary" size="md" disabled>
                    Disabled
                  </Button>
                </Stack>
              </Stack>
            </CardBody>
          </Card>

          {/* Inputs */}
          <Card>
            <CardHeader title="Inputs" description="Text inputs and textareas" />
            <CardBody>
              <Stack gap="lg">
                <InputGroup label="Email" hint="We'll never share your email" required>
                  <Input type="email" placeholder="Enter your email" size="md" />
                </InputGroup>
                <InputGroup label="Password" required>
                  <Input type="password" placeholder="Enter password" size="md" />
                </InputGroup>
                <InputGroup
                  label="Message"
                  error="This field is required"
                >
                  <Input placeholder="Enter a message" size="md" error />
                </InputGroup>
              </Stack>
            </CardBody>
          </Card>

          {/* Form Controls */}
          <Card>
            <CardHeader
              title="Form Controls"
              description="Checkboxes, radios, switches, and selects"
            />
            <CardBody>
              <Stack gap="lg">
                <Stack gap="md">
                  <Checkbox label="Accept terms and conditions" checked={checked} onChange={(e) => setChecked(e.target.checked)} />
                  <Checkbox label="Subscribe to newsletter" />
                  <Checkbox label="Disabled option" disabled />
                </Stack>

                <Stack gap="md">
                  <Radio name="plan" label="Free plan" value="free" />
                  <Radio name="plan" label="Pro plan" value="pro" />
                  <Radio name="plan" label="Enterprise plan" value="enterprise" />
                </Stack>

                <Stack gap="md">
                  <Switch label="Enable notifications" />
                  <Switch label="Auto-save changes" />
                </Stack>

                <Stack gap="lg">
                  <Slider
                    label="Brightness"
                    showValue
                    value={sliderValue}
                    onChange={setSliderValue}
                    min={0}
                    max={100}
                  />
                  <Slider
                    label="Volume"
                    showValue
                    value={volumeValue}
                    onChange={setVolumeValue}
                    min={0}
                    max={100}
                  />
                  <Slider
                    label="Temperature"
                    defaultValue={22}
                    min={16}
                    max={30}
                  />
                </Stack>

                <Stack gap="md">
                  <Select size="md">
                    <option value="">Select an option</option>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                  </Select>

                  <Dropdown
                    options={[
                      { value: '1', label: 'React' },
                      { value: '2', label: 'Vue' },
                      { value: '3', label: 'Angular' },
                    ]}
                    value={dropdownValue}
                    onChange={setDropdownValue}
                    placeholder="Select framework"
                    size="md"
                  />
                </Stack>
              </Stack>
            </CardBody>
          </Card>

          {/* Badges and Avatars */}
          <Card>
            <CardHeader title="Badges & Avatars" />
            <CardBody>
              <Stack gap="lg">
                <Stack direction="horizontal" gap="md">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                  <Badge variant="info">Info</Badge>
                  <Badge variant="primary" dot />
                </Stack>

                <Stack direction="horizontal" gap="md">
                  <Avatar fallback="John Doe" size="sm" status="online" />
                  <Avatar fallback="Alice Smith" size="md" status="busy" />
                  <Avatar fallback="Bob Kim" size="lg" status="away" />
                </Stack>

                <AvatarGroup>
                  <Avatar fallback="JD" size="md" />
                  <Avatar fallback="AS" size="md" />
                  <Avatar fallback="BK" size="md" />
                  <Avatar fallback="MR" size="md" />
                </AvatarGroup>
              </Stack>
            </CardBody>
          </Card>

          {/* Typography */}
          <Card>
            <CardHeader title="Typography" />
            <CardBody>
              <Stack gap="md">
                <Heading level={2}>Heading Level 2</Heading>
                <Heading level={3}>Heading Level 3</Heading>
                <Text size="lg" variant="primary">
                  Large primary text
                </Text>
                <Text size="md" variant="secondary">
                  Medium secondary text
                </Text>
                <Text size="sm" variant="tertiary">
                  Small tertiary text
                </Text>
                <div>
                  <Code>const example = 'code snippet';</Code>
                </div>
                <div>
                  <Link href="#">This is a link</Link>
                </div>
              </Stack>
            </CardBody>
          </Card>

          {/* Grid Layout */}
          <Card>
            <CardHeader title="Grid Layout" />
            <CardBody>
              <Grid cols={3} gap="md">
                <div className="gl-glass gl-rounded-md gl-p-lg gl-border">
                  <Text size="md" weight="semibold">
                    Grid Item 1
                  </Text>
                </div>
                <div className="gl-glass gl-rounded-md gl-p-lg gl-border">
                  <Text size="md" weight="semibold">
                    Grid Item 2
                  </Text>
                </div>
                <div className="gl-glass gl-rounded-md gl-p-lg gl-border">
                  <Text size="md" weight="semibold">
                    Grid Item 3
                  </Text>
                </div>
              </Grid>
            </CardBody>
          </Card>

          {/* Modal/Sheet */}
          <Card>
            <CardHeader title="Modal/Sheet" />
            <CardBody>
              <Button variant="primary" onClick={() => setSheetOpen(true)}>
                Open Sheet
              </Button>
            </CardBody>
          </Card>

          {/* Tooltip */}
          <Card>
            <CardHeader title="Tooltip" />
            <CardBody>
              <Stack direction="horizontal" gap="md">
                <Tooltip content="Tooltip on top" position="top">
                  <Button variant="subtle">Top</Button>
                </Tooltip>
                <Tooltip content="Tooltip on bottom" position="bottom">
                  <Button variant="subtle">Bottom</Button>
                </Tooltip>
                <Tooltip content="Tooltip on left" position="left">
                  <Button variant="subtle">Left</Button>
                </Tooltip>
                <Tooltip content="Tooltip on right" position="right">
                  <Button variant="subtle">Right</Button>
                </Tooltip>
              </Stack>
            </CardBody>
          </Card>

          {/* Alerts */}
          <Card>
            <CardHeader title="Alerts" description="Success, warning, error, and info messages" />
            <CardBody>
              <Stack gap="md">
                {showAlert && (
                  <Alert
                    variant="success"
                    title="Success!"
                    description="Your changes have been saved successfully."
                    closable
                    onClose={() => setShowAlert(false)}
                  />
                )}
                <Alert
                  variant="warning"
                  title="Warning"
                  description="Please review your information before proceeding."
                />
                <Alert
                  variant="error"
                  title="Error"
                  description="Unable to process your request. Please try again."
                  closable
                />
                <Alert
                  variant="info"
                  title="Information"
                  description="New features are now available in the dashboard."
                />
              </Stack>
            </CardBody>
          </Card>

          {/* Tabs */}
          <Card>
            <CardHeader title="Tabs" description="Default and underline variants" />
            <CardBody>
              <Stack gap="lg">
                <Tabs
                  items={[
                    {
                      key: '1',
                      label: 'Profile',
                      icon: '👤',
                      children: (
                        <Text>Profile settings and personal information.</Text>
                      ),
                    },
                    {
                      key: '2',
                      label: 'Security',
                      icon: '🔒',
                      children: (
                        <Text>Password, 2FA, and security preferences.</Text>
                      ),
                    },
                    {
                      key: '3',
                      label: 'Notifications',
                      icon: '🔔',
                      children: (
                        <Text>Email and push notification settings.</Text>
                      ),
                    },
                  ]}
                />
                <Tabs
                  variant="underline"
                  items={[
                    {
                      key: '1',
                      label: 'Overview',
                      children: <Text>Overview content goes here.</Text>,
                    },
                    {
                      key: '2',
                      label: 'Analytics',
                      children: <Text>Analytics data and charts.</Text>,
                    },
                    {
                      key: '3',
                      label: 'Reports',
                      children: <Text>Generated reports and exports.</Text>,
                    },
                  ]}
                />
              </Stack>
            </CardBody>
          </Card>

          {/* Progress */}
          <Card>
            <CardHeader title="Progress Bars" description="Loading and completion indicators" />
            <CardBody>
              <Stack gap="lg">
                <Progress value={45} label="Upload Progress" showPercent />
                <Progress value={75} variant="success" showPercent />
                <Progress value={30} variant="warning" showPercent />
                <Progress value={90} variant="error" showPercent />
                <Progress indeterminate label="Processing..." />
              </Stack>
            </CardBody>
          </Card>

          {/* Spinner */}
          <Card>
            <CardHeader title="Spinners" description="Loading indicators" />
            <CardBody>
              <Stack direction="horizontal" gap="xl" style={{ alignItems: 'center' }}>
                <Spinner size="sm" />
                <Spinner size="md" label="Loading..." />
                <Spinner size="lg" variant="success" />
                <Spinner variant="error" label="Error loading" />
              </Stack>
            </CardBody>
          </Card>

          {/* Menu */}
          <Card>
            <CardHeader title="Dropdown Menu" description="Context and action menus" />
            <CardBody>
              <Stack direction="horizontal" gap="md">
                <Menu
                  trigger={<Button variant="subtle">Actions Menu</Button>}
                  items={[
                    { type: 'label', label: 'Actions' },
                    { key: '1', label: 'Edit', icon: '✏️', shortcut: '⌘E' },
                    { key: '2', label: 'Duplicate', icon: '📋', shortcut: '⌘D' },
                    { type: 'divider' },
                    { key: '3', label: 'Archive', icon: '📦' },
                    { key: '4', label: 'Delete', icon: '🗑️', danger: true, shortcut: '⌘⌫' },
                  ]}
                />
                <Menu
                  trigger={<Button variant="primary">User Menu</Button>}
                  position="bottom"
                  items={[
                    { key: '1', label: 'Profile', icon: '👤' },
                    { key: '2', label: 'Settings', icon: '⚙️' },
                    { type: 'divider' },
                    { key: '3', label: 'Help & Support', icon: '❓' },
                    { key: '4', label: 'Sign Out', icon: '🚪', danger: true },
                  ]}
                />
              </Stack>
            </CardBody>
          </Card>
        </Stack>
      </Container>

      {/* Sheet Component */}
      <Sheet open={sheetOpen} onClose={() => setSheetOpen(false)} size="md">
        <Sheet.Header title="Example Sheet" onClose={() => setSheetOpen(false)} />
        <Sheet.Body>
          <Stack gap="lg">
            <Text size="md">
              This is an example modal sheet with glass morphism effects.
            </Text>
            <InputGroup label="Name" required>
              <Input placeholder="Enter your name" />
            </InputGroup>
            <InputGroup label="Email" required>
              <Input type="email" placeholder="Enter your email" />
            </InputGroup>
          </Stack>
        </Sheet.Body>
        <Sheet.Footer>
          <Button variant="ghost" onClick={() => setSheetOpen(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => setSheetOpen(false)}>
            Submit
          </Button>
        </Sheet.Footer>
      </Sheet>

      {/* Bottom Navigation (Mobile) */}
      <GlassBottomNav>
        <GlassNavItem
          active={activeNav === 'home'}
          onClick={() => setActiveNav('home')}
          icon="🏠"
          label="Home"
        />
        <GlassNavItem
          active={activeNav === 'components'}
          onClick={() => setActiveNav('components')}
          icon="🧩"
          label="Components"
        />
        <GlassNavItem
          active={activeNav === 'docs'}
          onClick={() => setActiveNav('docs')}
          icon="📚"
          label="Docs"
        />
        <GlassNavItem
          active={activeNav === 'examples'}
          onClick={() => setActiveNav('examples')}
          icon="✨"
          label="Examples"
        />
      </GlassBottomNav>
    </div>
  );
}

export default Demo;
