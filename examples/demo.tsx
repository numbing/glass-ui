import React, { useState, useMemo } from 'react';
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
  Flex,
  GlassTopNav,
  GlassNavItem,
  GlassBottomNav,
  Tabs,
  Progress,
  Spinner,
  Menu,
  Skeleton,
  SkeletonText,
  SkeletonAvatar,
  SkeletonCard,
  SkeletonTable,
  DatePicker,
  Table,
} from 'apple-liquid-glass-ui';

function Demo() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState('');
  const [checked, setChecked] = useState(false);
  const [activeNav, setActiveNav] = useState('home');
  const [sliderValue, setSliderValue] = useState(50);
  const [volumeValue, setVolumeValue] = useState(75);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>();
  const [birthDate, setBirthDate] = useState<Date | undefined>();
  const [showAlert, setShowAlert] = useState(true);
  const [sortColumn, setSortColumn] = useState<string | null>(null);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  // Table data
  const projectData = [
    { name: 'Website Redesign', project: 'Design System', progress: 75 },
    { name: 'Mobile App', project: 'iOS Development', progress: 45 },
    { name: 'API Integration', project: 'Backend', progress: 90 },
    { name: 'User Testing', project: 'Research', progress: 30 },
  ];

  // Sort data based on column and direction
  const sortedData = useMemo(() => {
    if (!sortColumn) return projectData;

    return [...projectData].sort((a, b) => {
      const aVal = a[sortColumn as keyof typeof a];
      const bVal = b[sortColumn as keyof typeof b];

      if (typeof aVal === 'number' && typeof bVal === 'number') {
        return sortDirection === 'asc' ? aVal - bVal : bVal - aVal;
      }

      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();

      if (sortDirection === 'asc') {
        return aStr.localeCompare(bStr);
      } else {
        return bStr.localeCompare(aStr);
      }
    });
  }, [sortColumn, sortDirection]);

  return (
    <div
      className="gl-base"
      style={{
        minHeight: '100vh',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%)',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Persistent Sticky Navbar */}
      <GlassTopNav>
        <GlassTopNav.Left>
          <span style={{ fontWeight: 600, fontSize: '1.1rem' }}>🪟 Glass UI</span>
        </GlassTopNav.Left>
        <GlassTopNav.Center>
          <GlassNavItem active={activeNav === 'home'} onClick={() => setActiveNav('home')}>
            Home
          </GlassNavItem>
          <GlassNavItem active={activeNav === 'components'} onClick={() => setActiveNav('components')}>
            Components
          </GlassNavItem>
          <GlassNavItem active={activeNav === 'docs'} onClick={() => setActiveNav('docs')}>
            Docs
          </GlassNavItem>
        </GlassTopNav.Center>
        <GlassTopNav.Right>
          <Button variant="primary" size="sm">
            ⭐️ Star on GitHub
          </Button>
        </GlassTopNav.Right>
      </GlassTopNav>

      <Container size="xl" style={{ padding: '2rem', paddingTop: '5rem' }}>
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

          {/* DatePicker */}
          <Card>
            <CardHeader title="Date Picker" description="Glass-styled calendar date picker" />
            <CardBody>
              <Stack gap="lg">
                <DatePicker
                  label="Select Date"
                  placeholder="Choose a date"
                  value={selectedDate}
                  onChange={setSelectedDate}
                  size="md"
                />
                <DatePicker
                  label="Birth Date"
                  placeholder="MM/DD/YYYY"
                  value={birthDate}
                  onChange={setBirthDate}
                  maxDate={new Date()}
                  size="md"
                />
                <Grid cols={2} gap="md">
                  <DatePicker
                    label="Small Size"
                    placeholder="Pick a date"
                    size="sm"
                  />
                  <DatePicker
                    label="Large Size"
                    placeholder="Pick a date"
                    size="lg"
                  />
                </Grid>
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

          {/* Navigation */}
          <Card>
            <CardHeader
              title="Navigation"
              description="Glass-style top and bottom navigation bars"
            />
            <CardBody>
              <Stack gap="xl">
                {/* Top Navigation Example */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Top Navigation
                  </Text>
                  <div style={{
                    border: '1px solid var(--gl-color-border)',
                    borderRadius: 'var(--gl-radius-md)',
                    overflow: 'hidden'
                  }}>
                    <GlassTopNav>
                      <GlassTopNav.Left>
                        <span style={{ fontWeight: 600 }}>🪟 Glass UI</span>
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
                      </GlassTopNav.Center>
                      <GlassTopNav.Right>
                        <Button variant="primary" size="sm">Sign In</Button>
                      </GlassTopNav.Right>
                    </GlassTopNav>
                  </div>
                </div>

                {/* Bottom Navigation Example */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Bottom Navigation (Mobile)
                  </Text>
                  <div style={{
                    border: '1px solid var(--gl-color-border)',
                    borderRadius: 'var(--gl-radius-md)',
                    overflow: 'hidden',
                    position: 'relative',
                    paddingBottom: 'var(--gl-bottom-nav-height)'
                  }}>
                    <GlassBottomNav>
                      <GlassNavItem
                        active={activeNav === 'home'}
                        onClick={() => setActiveNav('home')}
                      >
                        <span style={{ fontSize: '20px' }}>🏠</span>
                        <span style={{ fontSize: '11px' }}>Home</span>
                      </GlassNavItem>
                      <GlassNavItem
                        active={activeNav === 'search'}
                        onClick={() => setActiveNav('search')}
                      >
                        <span style={{ fontSize: '20px' }}>🔍</span>
                        <span style={{ fontSize: '11px' }}>Search</span>
                      </GlassNavItem>
                      <GlassNavItem
                        active={activeNav === 'favorites'}
                        onClick={() => setActiveNav('favorites')}
                      >
                        <span style={{ fontSize: '20px' }}>⭐</span>
                        <span style={{ fontSize: '11px' }}>Favorites</span>
                      </GlassNavItem>
                      <GlassNavItem
                        active={activeNav === 'profile'}
                        onClick={() => setActiveNav('profile')}
                      >
                        <span style={{ fontSize: '20px' }}>👤</span>
                        <span style={{ fontSize: '11px' }}>Profile</span>
                      </GlassNavItem>
                    </GlassBottomNav>
                  </div>
                </div>
              </Stack>
            </CardBody>
          </Card>

          {/* Grid Layout */}
          <Card>
            <CardHeader title="Flex Layout" description="Flexible box layouts with props" />
            <CardBody>
              <Stack gap="lg">
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Horizontal with space-between
                  </Text>
                  <Flex direction="row" justify="between" align="center" gap="md" className="gl-glass gl-rounded-md gl-p-md gl-border">
                    <Badge variant="primary">Item 1</Badge>
                    <Badge variant="info">Item 2</Badge>
                    <Badge variant="success">Item 3</Badge>
                  </Flex>
                </div>

                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Vertical with gap
                  </Text>
                  <Flex direction="column" gap="sm" className="gl-glass gl-rounded-md gl-p-md gl-border">
                    <Button variant="ghost" size="sm">Action 1</Button>
                    <Button variant="ghost" size="sm">Action 2</Button>
                    <Button variant="ghost" size="sm">Action 3</Button>
                  </Flex>
                </div>

                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Center aligned
                  </Text>
                  <Flex justify="center" align="center" gap="md" className="gl-glass gl-rounded-md gl-p-lg gl-border">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?img=1" />
                    <Text>Centered Content</Text>
                    <Badge variant="info">New</Badge>
                  </Flex>
                </div>
              </Stack>
            </CardBody>
          </Card>

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

          {/* Skeleton Loading States */}
          <Card>
            <CardHeader title="Skeleton Loading States" description="Bootstrap-style placeholders with animations" />
            <CardBody>
              <Stack gap="xl">
                {/* Basic Skeletons */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Basic Variants
                  </Text>
                  <Stack gap="md">
                    <Skeleton variant="text" width="100%" />
                    <Skeleton variant="text" width="80%" />
                    <Skeleton variant="rectangular" width={200} height={100} />
                    <Stack direction="horizontal" gap="md">
                      <Skeleton variant="circular" width={40} height={40} />
                      <Skeleton variant="circular" width={56} height={56} />
                      <Skeleton variant="circular" width={80} height={80} />
                    </Stack>
                  </Stack>
                </div>

                <Divider />

                {/* Animation Types */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Animation Types
                  </Text>
                  <Stack gap="md">
                    <div>
                      <Text size="xs" variant="secondary" style={{ marginBottom: '0.25rem' }}>Wave (shimmer)</Text>
                      <Skeleton variant="text" width="100%" animation="wave" />
                    </div>
                    <div>
                      <Text size="xs" variant="secondary" style={{ marginBottom: '0.25rem' }}>Pulse</Text>
                      <Skeleton variant="text" width="100%" animation="pulse" />
                    </div>
                    <div>
                      <Text size="xs" variant="secondary" style={{ marginBottom: '0.25rem' }}>No animation</Text>
                      <Skeleton variant="text" width="100%" animation={false} />
                    </div>
                  </Stack>
                </div>

                <Divider />

                {/* Text Lines */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Text Placeholder
                  </Text>
                  <SkeletonText lines={4} />
                </div>

                <Divider />

                {/* Avatars */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Avatar Placeholders
                  </Text>
                  <Stack direction="horizontal" gap="md">
                    <SkeletonAvatar size="sm" />
                    <SkeletonAvatar size="md" />
                    <SkeletonAvatar size="lg" />
                    <SkeletonAvatar size="xl" />
                  </Stack>
                </div>

                <Divider />

                {/* Card Skeleton */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Card Loading State
                  </Text>
                  <Grid cols={2} gap="md">
                    <SkeletonCard avatar lines={3} />
                    <SkeletonCard avatar={false} lines={4} animation="pulse" />
                  </Grid>
                </div>

                <Divider />

                {/* Table Skeleton */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Table Loading State
                  </Text>
                  <SkeletonTable rows={5} columns={4} />
                </div>
              </Stack>
            </CardBody>
          </Card>

          {/* Table */}
          <Card>
            <CardHeader title="Table" description="Data tables with sorting and styling options" />
            <CardBody>
              <Stack gap="xl">
                {/* Basic Table */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Basic Table
                  </Text>
                  <Table>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>Name</Table.Head>
                        <Table.Head>Email</Table.Head>
                        <Table.Head>Role</Table.Head>
                        <Table.Head align="right">Status</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>Sarah Chen</Table.Cell>
                        <Table.Cell>sarah@example.com</Table.Cell>
                        <Table.Cell>Designer</Table.Cell>
                        <Table.Cell align="right">
                          <Badge variant="success" size="sm">Active</Badge>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Mike Ross</Table.Cell>
                        <Table.Cell>mike@example.com</Table.Cell>
                        <Table.Cell>Developer</Table.Cell>
                        <Table.Cell align="right">
                          <Badge variant="success" size="sm">Active</Badge>
                        </Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>Emma Stone</Table.Cell>
                        <Table.Cell>emma@example.com</Table.Cell>
                        <Table.Cell>Manager</Table.Cell>
                        <Table.Cell align="right">
                          <Badge variant="warning" size="sm">Away</Badge>
                        </Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>

                <Divider />

                {/* Sortable Table */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Sortable Table with Hover
                  </Text>
                  <Table hover>
                    <Table.Header>
                      <Table.Row>
                        <Table.Head
                          sortable
                          sorted={sortColumn === 'name' ? sortDirection : null}
                          onSort={() => {
                            if (sortColumn === 'name') {
                              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                            } else {
                              setSortColumn('name');
                              setSortDirection('asc');
                            }
                          }}
                        >
                          Name
                        </Table.Head>
                        <Table.Head
                          sortable
                          sorted={sortColumn === 'project' ? sortDirection : null}
                          onSort={() => {
                            if (sortColumn === 'project') {
                              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                            } else {
                              setSortColumn('project');
                              setSortDirection('asc');
                            }
                          }}
                        >
                          Project
                        </Table.Head>
                        <Table.Head
                          sortable
                          sorted={sortColumn === 'progress' ? sortDirection : null}
                          onSort={() => {
                            if (sortColumn === 'progress') {
                              setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
                            } else {
                              setSortColumn('progress');
                              setSortDirection('asc');
                            }
                          }}
                        >
                          Progress
                        </Table.Head>
                        <Table.Head align="right">Actions</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      {sortedData.map((row, index) => (
                        <Table.Row key={index}>
                          <Table.Cell>{row.name}</Table.Cell>
                          <Table.Cell>{row.project}</Table.Cell>
                          <Table.Cell>
                            <Progress value={row.progress} size="sm" />
                          </Table.Cell>
                          <Table.Cell align="right">
                            <Button variant="ghost" size="sm">View</Button>
                          </Table.Cell>
                        </Table.Row>
                      ))}
                    </Table.Body>
                  </Table>
                </div>

                <Divider />

                {/* Striped Table */}
                <div>
                  <Text size="sm" weight="semibold" style={{ marginBottom: '0.5rem' }}>
                    Striped & Compact Table
                  </Text>
                  <Table striped size="sm">
                    <Table.Header>
                      <Table.Row>
                        <Table.Head>ID</Table.Head>
                        <Table.Head>Product</Table.Head>
                        <Table.Head align="center">Stock</Table.Head>
                        <Table.Head align="right">Price</Table.Head>
                      </Table.Row>
                    </Table.Header>
                    <Table.Body>
                      <Table.Row>
                        <Table.Cell>#001</Table.Cell>
                        <Table.Cell>Glass Panel Pro</Table.Cell>
                        <Table.Cell align="center">
                          <Badge variant="success" size="sm">In Stock</Badge>
                        </Table.Cell>
                        <Table.Cell align="right">$299.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>#002</Table.Cell>
                        <Table.Cell>Blur Effect Kit</Table.Cell>
                        <Table.Cell align="center">
                          <Badge variant="warning" size="sm">Low</Badge>
                        </Table.Cell>
                        <Table.Cell align="right">$149.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>#003</Table.Cell>
                        <Table.Cell>Liquid Design Pack</Table.Cell>
                        <Table.Cell align="center">
                          <Badge variant="success" size="sm">In Stock</Badge>
                        </Table.Cell>
                        <Table.Cell align="right">$199.00</Table.Cell>
                      </Table.Row>
                      <Table.Row>
                        <Table.Cell>#004</Table.Cell>
                        <Table.Cell>Translucent UI</Table.Cell>
                        <Table.Cell align="center">
                          <Badge variant="error" size="sm">Out</Badge>
                        </Table.Cell>
                        <Table.Cell align="right">$399.00</Table.Cell>
                      </Table.Row>
                    </Table.Body>
                  </Table>
                </div>
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
    </div>
  );
}

export default Demo;
