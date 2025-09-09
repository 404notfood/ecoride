import { render } from '@testing-library/react';
import { axe, toHaveNoViolations } from 'jest-axe';
import Home from '@/app/page';
import Navbar from '@/components/layout/Navbar';

// Étendre Jest avec les matchers d'axe
expect.extend(toHaveNoViolations);

describe('Tests d\'accessibilité RGAA', () => {
  test('Page d\'accueil doit être accessible', async () => {
    const { container } = render(<Home />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Navigation doit être accessible', async () => {
    const { container } = render(<Navbar />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });

  test('Vérification des critères RGAA spécifiques', async () => {
    const { container } = render(<Home />);
    const results = await axe(container, {
      rules: {
        // Critères RGAA spécifiques
        'color-contrast': { enabled: true },
        'keyboard-navigation': { enabled: true },
        'focus-order-semantics': { enabled: true },
        'landmark-one-main': { enabled: true },
        'page-has-heading-one': { enabled: true },
        'region': { enabled: true },
        'skip-link': { enabled: true },
        'tabindex': { enabled: true }
      }
    });
    expect(results).toHaveNoViolations();
  });
});
