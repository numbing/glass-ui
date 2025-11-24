import React from 'react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { GlassTopNav, GlassNavItem, Button } from 'apple-liquid-glass-ui';
import Demo from './demo';
import Dashboard from './templates/Dashboard';
import Landing from './templates/Landing';

function Navigation() {
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <GlassTopNav>
      <GlassTopNav.Left>
        <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 600, fontSize: '1.1rem' }}>
          🪟 Glass UI
        </Link>
      </GlassTopNav.Left>

      <GlassTopNav.Center>
        <Link to="/" style={{ textDecoration: 'none' }}>
          <GlassNavItem active={isActive('/')}>
            Components
          </GlassNavItem>
        </Link>
        <Link to="/dashboard" style={{ textDecoration: 'none' }}>
          <GlassNavItem active={isActive('/dashboard')}>
            Dashboard
          </GlassNavItem>
        </Link>
        <Link to="/landing" style={{ textDecoration: 'none' }}>
          <GlassNavItem active={isActive('/landing')}>
            Landing
          </GlassNavItem>
        </Link>
      </GlassTopNav.Center>

      <GlassTopNav.Right>
        <Button
          variant="primary"
          size="sm"
          onClick={() => window.open('https://github.com/numbing/apple-liquid-glass-ui', '_blank')}
        >
          ⭐️ Star on GitHub
        </Button>
      </GlassTopNav.Right>
    </GlassTopNav>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          minHeight: '100vh',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)',
          backgroundAttachment: 'fixed',
        }}
      >
        <Navigation />

        <Routes>
          <Route path="/" element={<Demo />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/landing" element={<Landing />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
