import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

/**
 * Custom Chakra UI v3 theme system.
 *
 * Color scheme inspired by lugotech.dev: a deep indigo/navy dark theme with a
 * vibrant orange primary accent and a cyan secondary accent.
 *
 * - "brand"  -> orange   (#ff7605) — primary accent for buttons, badges, links
 * - "accent" -> cyan     (#38eeff) — secondary highlight, used sparingly
 *
 * Update the values here to re-skin the whole site.
 */
const config = defineConfig({
  globalCss: {
    'html, body': {
      bg: 'bg.canvas',
      color: 'fg.default',
      scrollBehavior: 'smooth',
    },
    '*::selection': {
      bg: 'brand.muted',
    },
  },
  theme: {
    tokens: {
      fonts: {
        heading: {
          value: "'Sora', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        },
        body: {
          value: "'Inter', system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif",
        },
        mono: {
          value: "'JetBrains Mono', ui-monospace, SFMono-Regular, Menlo, monospace",
        },
      },
      colors: {
        // Primary accent — vibrant orange (lugotech "Orange-vibrant" #ff7605)
        brand: {
          50: { value: '#fff5ed' },
          100: { value: '#ffe8d4' },
          200: { value: '#fecfa8' },
          300: { value: '#fdac70' },
          400: { value: '#ff8b47' },
          500: { value: '#ff7605' },
          600: { value: '#e35d00' },
          700: { value: '#bc4708' },
          800: { value: '#953a0e' },
          900: { value: '#78320f' },
          950: { value: '#411603' },
        },
        // Secondary accent — cyan (lugotech "Cyan-accent" #00ffff / #38eeff)
        accent: {
          50: { value: '#ecfeff' },
          100: { value: '#cffafe' },
          200: { value: '#a5f3fc' },
          300: { value: '#67e8f9' },
          400: { value: '#38eeff' },
          500: { value: '#06b6d4' },
          600: { value: '#0891b2' },
          700: { value: '#0e7490' },
          800: { value: '#155e75' },
          900: { value: '#164e63' },
        },
      },
    },
    semanticTokens: {
      colors: {
        // Page / surface backgrounds (color-mode aware)
        'bg.canvas': {
          value: { _light: '#f5f5ff', _dark: '#0f0f1a' },
        },
        'bg.surface': {
          value: { _light: '#ffffff', _dark: '#151c37' },
        },
        'bg.subtle': {
          value: { _light: '#ececfa', _dark: '#0b0b16' },
        },
        // Foreground
        'fg.default': {
          value: { _light: '#2b3458', _dark: '#e7e9f3' },
        },
        'fg.muted': {
          value: { _light: '#6b7394', _dark: '#9aa3c0' },
        },
        'border.subtle': {
          value: { _light: '#d9dbed', _dark: '#283054' },
        },
        // Brand palette wiring so colorPalette="brand" works everywhere
        brand: {
          solid: { value: '{colors.brand.500}' },
          contrast: { value: '#ffffff' },
          fg: { value: { _light: '#c2410c', _dark: '{colors.brand.400}' } },
          muted: { value: { _light: '{colors.brand.100}', _dark: '#2a1606' } },
          subtle: { value: { _light: '{colors.brand.50}', _dark: '#1c1208' } },
          emphasized: { value: { _light: '{colors.brand.200}', _dark: '#7a3a10' } },
          focusRing: { value: '{colors.brand.500}' },
        },
        // Accent (cyan) palette wiring for colorPalette="accent"
        accent: {
          solid: { value: '{colors.accent.500}' },
          contrast: { value: '#04212b' },
          fg: { value: { _light: '{colors.accent.700}', _dark: '{colors.accent.400}' } },
          muted: { value: { _light: '{colors.accent.100}', _dark: '#0b2730' } },
          subtle: { value: { _light: '{colors.accent.50}', _dark: '#08202a' } },
          emphasized: { value: { _light: '{colors.accent.200}', _dark: '{colors.accent.800}' } },
          focusRing: { value: '{colors.accent.500}' },
        },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
