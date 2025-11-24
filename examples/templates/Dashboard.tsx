import React, { useState } from 'react';
import {
  Card,
  CardHeader,
  CardBody,
  Button,
  Badge,
  Avatar,
  Progress,
  Grid,
  Stack,
  Text,
  Heading,
} from 'apple-liquid-glass-ui';

export default function Dashboard() {
  return (
    <div className="gl-base" style={{ minHeight: '100vh', padding: '2rem' }}>
      <Stack gap="xl">
        {/* Header */}
        <div>
          <Heading level={1}>Dashboard</Heading>
          <Text size="lg" variant="secondary">Welcome back! Here's your overview.</Text>
        </div>

        {/* Stats Grid */}
        <Grid cols={4} gap="lg">
          <Card padding="lg">
            <Stack gap="sm">
              <Text size="sm" variant="secondary">Total Revenue</Text>
              <Heading level={2}>$45,231</Heading>
              <Badge variant="success" size="sm">+20.1%</Badge>
            </Stack>
          </Card>

          <Card padding="lg">
            <Stack gap="sm">
              <Text size="sm" variant="secondary">Users</Text>
              <Heading level={2}>2,350</Heading>
              <Badge variant="info" size="sm">+12.5%</Badge>
            </Stack>
          </Card>

          <Card padding="lg">
            <Stack gap="sm">
              <Text size="sm" variant="secondary">Active Projects</Text>
              <Heading level={2}>58</Heading>
              <Badge variant="primary" size="sm">+5</Badge>
            </Stack>
          </Card>

          <Card padding="lg">
            <Stack gap="sm">
              <Text size="sm" variant="secondary">Completion Rate</Text>
              <Heading level={2}>94%</Heading>
              <Badge variant="success" size="sm">+2.1%</Badge>
            </Stack>
          </Card>
        </Grid>

        {/* Main Content */}
        <Grid cols={3} gap="lg">
          {/* Recent Activity */}
          <Card style={{ gridColumn: 'span 2' }}>
            <CardHeader
              title="Recent Activity"
              description="Latest updates from your team"
            />
            <CardBody>
              <Stack gap="lg">
                {[
                  { user: 'Sarah Chen', action: 'completed Project Alpha', time: '2 hours ago', avatar: 'https://i.pravatar.cc/150?img=1' },
                  { user: 'Mike Ross', action: 'added new designs', time: '4 hours ago', avatar: 'https://i.pravatar.cc/150?img=2' },
                  { user: 'Emma Stone', action: 'updated documentation', time: '6 hours ago', avatar: 'https://i.pravatar.cc/150?img=3' },
                  { user: 'John Doe', action: 'fixed critical bug', time: '8 hours ago', avatar: 'https://i.pravatar.cc/150?img=4' },
                ].map((activity, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                    <Avatar src={activity.avatar} size="md" />
                    <div style={{ flex: 1 }}>
                      <Text><strong>{activity.user}</strong> {activity.action}</Text>
                      <Text size="sm" variant="secondary">{activity.time}</Text>
                    </div>
                  </div>
                ))}
              </Stack>
            </CardBody>
          </Card>

          {/* Project Progress */}
          <Card>
            <CardHeader
              title="Projects"
              description="Current progress"
            />
            <CardBody>
              <Stack gap="lg">
                {[
                  { name: 'Website Redesign', progress: 75, color: 'primary' },
                  { name: 'Mobile App', progress: 45, color: 'info' },
                  { name: 'API Integration', progress: 90, color: 'success' },
                  { name: 'Documentation', progress: 30, color: 'warning' },
                ].map((project, i) => (
                  <Stack key={i} gap="sm">
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                      <Text size="sm">{project.name}</Text>
                      <Text size="sm" variant="secondary">{project.progress}%</Text>
                    </div>
                    <Progress value={project.progress} size="sm" />
                  </Stack>
                ))}
              </Stack>
            </CardBody>
          </Card>
        </Grid>

        {/* Quick Actions */}
        <Card>
          <CardHeader title="Quick Actions" />
          <CardBody>
            <Grid cols={4} gap="md">
              <Button variant="primary" size="lg">New Project</Button>
              <Button variant="subtle" size="lg">Add Team Member</Button>
              <Button variant="subtle" size="lg">View Reports</Button>
              <Button variant="ghost" size="lg">Settings</Button>
            </Grid>
          </CardBody>
        </Card>
      </Stack>
    </div>
  );
}
