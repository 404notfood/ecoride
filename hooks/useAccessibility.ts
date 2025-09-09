"use client";

import { useEffect, useRef, useState } from 'react';

// Hook pour la gestion automatique du focus
export const useAutoFocus = (shouldFocus: boolean = false) => {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    if (shouldFocus && ref.current) {
      ref.current.focus();
    }
  }, [shouldFocus]);

  return ref;
};

// Hook pour la gestion des annonces aux lecteurs d'écran
export const useScreenReaderAnnouncement = () => {
  const [announcement, setAnnouncement] = useState('');

  const announce = (message: string, priority: 'polite' | 'assertive' = 'polite') => {
    setAnnouncement(message);
    // Réinitialiser après l'annonce
    setTimeout(() => setAnnouncement(''), 1000);
  };

  return { announcement, announce };
};

// Hook pour la validation automatique des formulaires
export const useFormAccessibility = () => {
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { announce } = useScreenReaderAnnouncement();

  const validateField = (name: string, value: string, rules: any) => {
    const error = validateFieldValue(value, rules);
    setErrors(prev => ({ ...prev, [name]: error }));
    
    if (error) {
      announce(`Erreur dans le champ ${name}: ${error}`, 'assertive');
    }
    
    return !error;
  };

  const validateFieldValue = (value: string, rules: any) => {
    if (rules.required && !value.trim()) {
      return 'Ce champ est obligatoire';
    }
    if (rules.minLength && value.length < rules.minLength) {
      return `Minimum ${rules.minLength} caractères requis`;
    }
    if (rules.pattern && !rules.pattern.test(value)) {
      return 'Format invalide';
    }
    return '';
  };

  return { errors, validateField, setErrors };
};

// Hook pour la navigation au clavier
export const useKeyboardNavigation = (items: any[]) => {
  const [activeIndex, setActiveIndex] = useState(-1);

  const handleKeyDown = (e: KeyboardEvent) => {
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setActiveIndex(prev => (prev + 1) % items.length);
        break;
      case 'ArrowUp':
        e.preventDefault();
        setActiveIndex(prev => prev <= 0 ? items.length - 1 : prev - 1);
        break;
      case 'Home':
        e.preventDefault();
        setActiveIndex(0);
        break;
      case 'End':
        e.preventDefault();
        setActiveIndex(items.length - 1);
        break;
      case 'Escape':
        setActiveIndex(-1);
        break;
    }
  };

  return { activeIndex, setActiveIndex, handleKeyDown };
};

// Hook pour la détection des préférences utilisateur
export const useUserPreferences = () => {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);
  const [prefersHighContrast, setPrefersHighContrast] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const contrastQuery = window.matchMedia('(prefers-contrast: high)');

    setPrefersReducedMotion(motionQuery.matches);
    setPrefersHighContrast(contrastQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    const handleContrastChange = (e: MediaQueryListEvent) => {
      setPrefersHighContrast(e.matches);
    };

    motionQuery.addEventListener('change', handleMotionChange);
    contrastQuery.addEventListener('change', handleContrastChange);

    return () => {
      motionQuery.removeEventListener('change', handleMotionChange);
      contrastQuery.removeEventListener('change', handleContrastChange);
    };
  }, []);

  return { prefersReducedMotion, prefersHighContrast };
};
