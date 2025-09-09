"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import LanguageSwitcher from "@/components/layout/LanguageSwitcher";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      id="main-navigation"
      className="bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50"
      role="navigation"
      aria-label="Navigation principale"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center" aria-label="EcoRide - Retour à l'accueil">
              <span className="text-emerald-500 font-bold text-2xl">Eco<span className="text-blue-500">Ride</span></span>
            </Link>
          </div>
          
          {/* Navigation desktop */}
          <div className="hidden md:flex md:items-center md:space-x-6" role="menubar">
            <Link href="/trips" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500" role="menuitem">
              Trajets
            </Link>
            <Link href="/shop" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500" role="menuitem">
              Boutique
            </Link>
            <Link href="/login" className="text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 px-3 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500" role="menuitem">
              Connexion
            </Link>
            <Link href="/register" className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white" role="menuitem">
              Inscription
            </Link>
            
            <div className="flex items-center gap-2 pl-4 border-l border-gray-200 dark:border-gray-700">
              <ThemeSwitcher />
              <LanguageSwitcher />
            </div>
          </div>
          
          {/* Bouton menu mobile */}
          <div className="flex md:hidden items-center gap-3">
            <ThemeSwitcher />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
              aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Menu mobile */}
      {isMenuOpen && (
        <div 
          id="mobile-menu"
          className="md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 shadow-lg"
          role="menu"
          aria-label="Menu de navigation mobile"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href="/trips" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem">
              Trajets
            </Link>
            <Link href="/shop" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem">
              Boutique
            </Link>
            <Link href="/login" 
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-emerald-500 dark:hover:text-emerald-400 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem">
              Connexion
            </Link>
            <Link href="/register" 
                  className="block px-3 py-2 rounded-md text-base font-medium bg-emerald-500 hover:bg-emerald-600 text-white transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  onClick={() => setIsMenuOpen(false)}
                  role="menuitem">
              Inscription
            </Link>
            <div className="px-3 py-2">
              <LanguageSwitcher />
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
