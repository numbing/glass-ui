import React from 'react';
import {
  Button,
  Card,
  CardBody,
  Container,
  Stack,
  Grid,
  Heading,
  Text,
  Badge,
} from 'apple-liquid-glass-ui';

export default function Landing() {
  return (
    <div className="gl-base" style={{ minHeight: '100vh' }}>
      {/* Hero Section */}
      <section style={{
        padding: '6rem 2rem',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        textAlign: 'center'
      }}>
        <Container size="lg">
          <Stack gap="xl">
            <Badge variant="info" size="md">New Release v1.0</Badge>
            <Heading level={1} style={{ fontSize: '3.5rem', color: 'white' }}>
              Build Beautiful Apps Faster
            </Heading>
            <Text size="xl" style={{ color: 'rgba(255,255,255,0.9)', maxWidth: '600px', margin: '0 auto' }}>
              Premium React components with glassmorphism design. 75% smaller than Material-UI with zero runtime overhead.
            </Text>
            <Stack direction="horizontal" gap="md" style={{ justifyContent: 'center', marginTop: '2rem' }}>
              <Button variant="primary" size="lg">Get Started</Button>
              <Button variant="subtle" size="lg">View Demo</Button>
            </Stack>
          </Stack>
        </Container>
      </section>

      {/* Features Section */}
      <section style={{ padding: '6rem 2rem' }}>
        <Container size="lg">
          <Stack gap="xl">
            <div style={{ textAlign: 'center' }}>
              <Heading level={2}>Why Choose Glass UI?</Heading>
              <Text size="lg" variant="secondary">Premium design without the performance tax</Text>
            </div>

            <Grid cols={3} gap="xl">
              <Card padding="lg">
                <CardBody>
                  <Stack gap="md">
                    <div style={{ fontSize: '3rem' }}>⚡️</div>
                    <Heading level={3}>Lightning Fast</Heading>
                    <Text variant="secondary">
                      24KB total bundle size. 75% smaller than Material-UI with zero runtime CSS-in-JS.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>

              <Card padding="lg">
                <CardBody>
                  <Stack gap="md">
                    <div style={{ fontSize: '3rem' }}>🎨</div>
                    <Heading level={3}>Beautiful Design</Heading>
                    <Text variant="secondary">
                      Authentic glassmorphism with backdrop blur, translucent surfaces, and smooth animations.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>

              <Card padding="lg">
                <CardBody>
                  <Stack gap="md">
                    <div style={{ fontSize: '3rem' }}>💪</div>
                    <Heading level={3}>Developer First</Heading>
                    <Text variant="secondary">
                      Full TypeScript support, tree-shakeable, dual API, and works with React 16.8+.
                    </Text>
                  </Stack>
                </CardBody>
              </Card>
            </Grid>
          </Stack>
        </Container>
      </section>

      {/* Stats Section */}
      <section style={{
        padding: '4rem 2rem',
        background: 'linear-gradient(135deg, rgba(102, 126, 234, 0.1) 0%, rgba(118, 75, 162, 0.1) 100%)'
      }}>
        <Container size="lg">
          <Grid cols={4} gap="xl">
            {[
              { label: 'Bundle Size', value: '24KB', desc: 'gzipped' },
              { label: 'Components', value: '26+', desc: 'ready to use' },
              { label: 'Performance', value: '40%', desc: 'faster' },
              { label: 'Downloads', value: '10K+', desc: 'per month' },
            ].map((stat, i) => (
              <div key={i} style={{ textAlign: 'center' }}>
                <Heading level={2} style={{ fontSize: '3rem', color: 'var(--gl-color-accent)' }}>
                  {stat.value}
                </Heading>
                <Text size="lg">{stat.label}</Text>
                <Text size="sm" variant="secondary">{stat.desc}</Text>
              </div>
            ))}
          </Grid>
        </Container>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '6rem 2rem', textAlign: 'center' }}>
        <Container size="md">
          <Card padding="lg">
            <CardBody>
              <Stack gap="xl">
                <Heading level={2}>Ready to Get Started?</Heading>
                <Text size="lg" variant="secondary">
                  Install with npm and start building beautiful apps in minutes.
                </Text>
                <div style={{
                  background: 'var(--gl-color-surface)',
                  padding: '1rem',
                  borderRadius: 'var(--gl-radius-md)',
                  fontFamily: 'monospace'
                }}>
                  npm install apple-liquid-glass-ui
                </div>
                <Button variant="primary" size="lg">View Documentation</Button>
              </Stack>
            </CardBody>
          </Card>
        </Container>
      </section>

      {/* Footer */}
      <footer style={{
        padding: '3rem 2rem',
        borderTop: '1px solid var(--gl-color-border)',
        textAlign: 'center'
      }}>
        <Text variant="secondary">
          © 2024 Apple Liquid Glass UI. MIT License.
        </Text>
      </footer>
    </div>
  );
}
