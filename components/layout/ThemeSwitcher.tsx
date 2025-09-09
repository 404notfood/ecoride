"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon } from "lucide-react";

export const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, resolvedTheme, systemTheme } = useTheme();

  // Nécessaire car le thème ne peut pas être déterminé au moment du rendu initial
  useEffect(() => {
    setMounted(true);
    console.log("[ThemeSwitcher] Monté");
  }, []);

  useEffect(() => {
    if (mounted) {
      console.log("[ThemeSwitcher] Thème actuel:", theme);
      console.log("[ThemeSwitcher] Thème résolu:", resolvedTheme);
      console.log("[ThemeSwitcher] Thème système:", systemTheme);
      console.log("[ThemeSwitcher] Classes HTML:", document.documentElement.className);
    }
  }, [mounted, theme, resolvedTheme, systemTheme]);

  const toggleTheme = () => {
    const isDark = document.documentElement.classList.contains('dark');
    console.log("[ThemeSwitcher] Toggle theme, actuellement dark?", isDark);
    
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('ecoride-theme', 'light');
      setTheme('light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('ecoride-theme', 'dark');
      setTheme('dark');
    }
  };

  if (!mounted) {
    return null;
  }

  const isDark = document.documentElement.classList.contains('dark');

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
      aria-label={`Passer au mode ${isDark ? "clair" : "sombre"}`}
      aria-pressed={isDark}
      role="switch"
    >
      {isDark ? (
        <Sun className="h-5 w-5 text-yellow-500" aria-hidden="true" />
      ) : (
        <Moon className="h-5 w-5 text-blue-500" aria-hidden="true" />
      )}
    </button>
  );
};

export default ThemeSwitcher;
