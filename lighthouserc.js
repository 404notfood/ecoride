module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000'],
      startServerCommand: 'npm run dev',
      startServerReadyPattern: 'ready',
      startServerReadyTimeout: 30000,
    },
    assert: {
      assertions: {
        // Critères RGAA via Lighthouse
        'categories:accessibility': ['error', { minScore: 0.95 }],
        'color-contrast': 'error',
        'html-has-lang': 'error',
        'image-alt': 'error',
        'label': 'error',
        'link-name': 'error',
        'list': 'error',
        'listitem': 'error',
        'meta-description': 'error',
        'object-alt': 'error',
        'tabindex': 'error',
        'td-headers-attr': 'error',
        'th-has-data-cells': 'error',
        'valid-lang': 'error',
        'video-caption': 'warn',
        'video-description': 'warn',
        'bypass': 'error',
        'focus-traps': 'error',
        'focusable-controls': 'error',
        'interactive-element-affordance': 'error',
        'logical-tab-order': 'error',
        'managed-focus': 'error',
        'offscreen-content-hidden': 'error',
        'use-landmarks': 'error',
        'visual-order-follows-dom': 'error'
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
