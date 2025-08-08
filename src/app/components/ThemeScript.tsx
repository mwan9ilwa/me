'use client';

import React from 'react';

// This script is injected into the <head> of the document to prevent FOUC
// It runs before any React components are mounted
const setInitialTheme = `
  (function() {
    function getInitialTheme() {
      const storedTheme = localStorage.getItem('theme');
      if (storedTheme) {
        return storedTheme;
      }
      return 'system';
    }

    let theme = getInitialTheme();
    let resolvedTheme = theme;

    if (theme === 'system') {
      resolvedTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }

    document.documentElement.setAttribute('data-theme', resolvedTheme);
  })();
`;

export function ThemeScript() {
  return (
    <script dangerouslySetInnerHTML={{ __html: setInitialTheme }} />
  );
}