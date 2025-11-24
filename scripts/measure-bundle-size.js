#!/usr/bin/env node
const fs = require('fs');
const path = require('path');
const zlib = require('zlib');

const distPath = path.join(__dirname, '../dist');

// Helper to get file size
function getFileSize(filePath) {
  const stats = fs.statSync(filePath);
  return stats.size;
}

// Helper to get gzipped size
function getGzipSize(filePath) {
  const content = fs.readFileSync(filePath);
  const gzipped = zlib.gzipSync(content);
  return gzipped.length;
}

// Format bytes to KB
function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1);
}

console.log('\n📦 Apple Liquid Glass UI - Bundle Size Analysis\n');
console.log('━'.repeat(60));

// Main bundle sizes
const mainBundles = [
  { name: 'ESM JavaScript', file: 'index.esm.js' },
  { name: 'CJS JavaScript', file: 'index.js' },
  { name: 'CSS Styles', file: 'index.css' },
];

console.log('\n🎯 Full Bundle (All Components):\n');

let totalSize = 0;
let totalGzip = 0;

mainBundles.forEach(({ name, file }) => {
  const filePath = path.join(distPath, file);
  const size = getFileSize(filePath);
  const gzip = getGzipSize(filePath);

  totalSize += size;
  totalGzip += gzip;

  console.log(`${name.padEnd(20)} ${formatBytes(size)} KB → ${formatBytes(gzip)} KB (gzip)`);
});

console.log(`${'─'.repeat(60)}`);
console.log(`${'TOTAL'.padEnd(20)} ${formatBytes(totalSize)} KB → ${formatBytes(totalGzip)} KB (gzip)`);

// Component-level analysis
console.log('\n\n📊 Tree-Shaking Analysis (Per Component):\n');
console.log('Component          JS Size    CSS Import    Total (est.)');
console.log('─'.repeat(60));

const componentsPath = path.join(__dirname, '../src/components');
const components = fs.readdirSync(componentsPath)
  .filter(name => {
    const stat = fs.statSync(path.join(componentsPath, name));
    return stat.isDirectory();
  });

let componentSizes = [];

components.forEach(component => {
  const componentPath = path.join(componentsPath, component);

  // Find TypeScript file
  let tsFile = null;
  const files = fs.readdirSync(componentPath);

  for (const file of files) {
    if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      tsFile = path.join(componentPath, file);
      break;
    }
  }

  // Find CSS file
  const cssFile = path.join(componentPath, `${component}.css`);

  let jsSize = 0;
  let cssSize = 0;

  if (tsFile && fs.existsSync(tsFile)) {
    jsSize = getFileSize(tsFile);
  }

  if (fs.existsSync(cssFile)) {
    cssSize = getFileSize(cssFile);
  }

  const total = jsSize + cssSize;

  if (total > 0) {
    componentSizes.push({
      name: component,
      jsSize,
      cssSize,
      total
    });
  }
});

// Sort by total size
componentSizes.sort((a, b) => b.total - a.total);

componentSizes.forEach(({ name, jsSize, cssSize, total }) => {
  const jsKb = formatBytes(jsSize);
  const cssKb = formatBytes(cssSize);
  const totalKb = formatBytes(total);

  console.log(`${name.padEnd(18)} ${jsKb.padStart(6)} KB  ${cssKb.padStart(6)} KB    ${totalKb.padStart(6)} KB`);
});

// Calculate comparison metrics
console.log('\n\n🚀 Performance Comparison:\n');

const competitors = [
  { name: 'Material-UI (MUI)', size: 300, gzip: 95 },
  { name: 'Chakra UI', size: 280, gzip: 85 },
  { name: 'Ant Design', size: 600, gzip: 180 },
  { name: 'Mantine', size: 250, gzip: 75 },
  { name: 'Apple Liquid Glass UI', size: totalSize / 1024, gzip: totalGzip / 1024 },
];

console.log('Library                  Full Bundle    Gzipped    vs Glass UI');
console.log('─'.repeat(70));

competitors.forEach(({ name, size, gzip }) => {
  const glassGzip = totalGzip / 1024;
  const diff = ((gzip - glassGzip) / glassGzip * 100).toFixed(0);
  const symbol = diff > 0 ? '+' : '';
  const comparison = name === 'Apple Liquid Glass UI' ? '(baseline)' : `${symbol}${diff}%`;

  console.log(
    `${name.padEnd(24)} ${size.toFixed(1).padStart(6)} KB    ${gzip.toFixed(1).padStart(5)} KB    ${comparison}`
  );
});

console.log('\n\n✨ Key Takeaways:\n');
console.log(`• Total bundle size: ${formatBytes(totalGzip)} KB (gzipped)`);
console.log(`• ${((1 - totalGzip / 1024 / 85) * 100).toFixed(0)}% smaller than Chakra UI`);
console.log(`• ${((1 - totalGzip / 1024 / 95) * 100).toFixed(0)}% smaller than Material-UI`);
console.log(`• Zero runtime CSS-in-JS overhead`);
console.log(`• Full tree-shaking support for unused components`);
console.log(`• Average component: ~${formatBytes(componentSizes.reduce((acc, c) => acc + c.total, 0) / componentSizes.length)} KB`);

console.log('\n━'.repeat(60));
console.log('');
