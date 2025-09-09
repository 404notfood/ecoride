import Link from "next/link";
import { Mail, Phone, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo et description */}
          <div className="col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <span className="text-emerald-500 font-bold text-xl">Eco<span className="text-blue-500">Ride</span></span>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 text-sm mb-4">
              Plateforme de covoiturage écologique qui révolutionne les déplacements en favorisant l&apos;utilisation des voitures électriques.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" aria-label="LinkedIn" className="text-gray-500 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Liens rapides */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/trips" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Trajets
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Boutique
                </Link>
              </li>
              <li>
                <Link href="/trips/search" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Rechercher un trajet
                </Link>
              </li>
            </ul>
          </div>

          {/* Informations légales */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Informations</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  À propos
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Mentions légales
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Politique de confidentialité
                </Link>
              </li>
              <li>
                <Link href="#" className="text-gray-600 dark:text-gray-400 hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  Conditions d&apos;utilisation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Mail size={16} className="mr-2" />
                <a href="mailto:contact@ecoride.fr" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  contact@ecoride.fr
                </a>
              </li>
              <li className="flex items-center text-gray-600 dark:text-gray-400">
                <Phone size={16} className="mr-2" />
                <a href="tel:+33102030405" className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
                  +33 1 02 03 04 05
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800 text-center">
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} EcoRide. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
