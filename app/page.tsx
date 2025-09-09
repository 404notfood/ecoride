import Image from "next/image";
import Link from "next/link";
import { Search, MapPin, Clock, CreditCard, Users, Leaf } from "lucide-react";
import MainLayout from "@/components/layout/MainLayout";

export default function Home() {
  return (
    <MainLayout>
      {/* Hero Section */}
      <main id="main-content" role="main">
        <section className="relative bg-gradient-to-r from-emerald-500 to-blue-500 text-white" aria-labelledby="hero-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 id="hero-title" className="text-4xl md:text-5xl font-bold mb-4">
                Voyagez Ensemble, <br />
                Préservez la Planète
              </h1>
              <p className="text-xl mb-8 text-white/90">
                Rejoignez la communauté EcoRide et participez à une mobilité plus verte. Trouvez des trajets écologiques et économisez ensemble.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/trips/search" className="bg-white text-emerald-600 hover:bg-gray-100 px-6 py-3 rounded-lg font-medium transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500">
                  Trouver un trajet
                </Link>
                <Link href="/(auth)/register" className="bg-emerald-700 hover:bg-emerald-800 text-white px-6 py-3 rounded-lg font-medium transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700">
                  Rejoindre EcoRide
                </Link>
              </div>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
        <Image
                src="/images/hero-car.webp"
                alt="Covoiturage écologique"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
          priority
        />
            </div>
          </div>
        </div>
        
        {/* Formulaire de recherche rapide */}
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative -bottom-16">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-xl p-6">
            <form className="grid grid-cols-1 md:grid-cols-4 gap-4" role="search" aria-label="Recherche de trajets">
              <div className="relative">
                <label htmlFor="from" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Départ
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="from"
                    name="from"
                    placeholder="Ville de départ"
                    className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="to" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Arrivée
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <MapPin className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    type="text"
                    id="to"
                    name="to"
                    placeholder="Ville d'arrivée"
                    className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 text-gray-900 dark:text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-emerald-500"
                    aria-required="true"
                  />
                </div>
              </div>
              
              <div className="relative">
                <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  name="date"
                  className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
                  aria-required="true"
                />
              </div>
              
              <div className="flex items-end">
                <button
                  type="submit"
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 rounded-lg transition-colors font-medium flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  aria-label="Rechercher des trajets"
                >
                  <Search className="h-5 w-5 mr-2" aria-hidden="true" />
                  Rechercher
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto" aria-labelledby="features-title">
        <div className="text-center mb-16">
          <h2 id="features-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
            Pourquoi choisir EcoRide ?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Notre plateforme de covoiturage est conçue pour allier confort, économie et respect de l&apos;environnement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8" role="list">
          <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700" role="listitem">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
              <Leaf className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Eco-Responsable</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Réduisez votre empreinte carbone en partageant vos trajets avec d&apos;autres voyageurs éco-responsables.
            </p>
          </article>

          <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700" role="listitem">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
              <CreditCard className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Économique</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Partagez les frais de transport et gagnez des EcoCoins à échanger contre des récompenses.
            </p>
          </article>

          <article className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100 dark:border-gray-700" role="listitem">
            <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center mb-4" aria-hidden="true">
              <Users className="h-6 w-6 text-emerald-500" />
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Communauté</h3>
            <p className="text-gray-600 dark:text-gray-400">
              Rejoignez une communauté engagée et participez à des défis écologiques pour gagner des badges.
            </p>
          </article>
        </div>
      </section>

      {/* Système d'EcoCoins */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900/50" aria-labelledby="ecocoins-title">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 id="ecocoins-title" className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Le système d&apos;EcoCoins
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
                Gagnez des EcoCoins en participant à des trajets écologiques et échangez-les contre des récompenses exclusives.
              </p>
              <ol className="space-y-3" role="list">
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold" aria-hidden="true">1</div>
                  <p className="ml-3 text-gray-600 dark:text-gray-400">Gagnez des points pour chaque trajet partagé</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold" aria-hidden="true">2</div>
                  <p className="ml-3 text-gray-600 dark:text-gray-400">Complétez des défis écologiques hebdomadaires</p>
                </li>
                <li className="flex items-start">
                  <div className="flex-shrink-0 h-6 w-6 rounded-full bg-emerald-500 flex items-center justify-center text-white font-bold" aria-hidden="true">3</div>
                  <p className="ml-3 text-gray-600 dark:text-gray-400">Échangez vos points contre des récompenses dans notre boutique</p>
                </li>
              </ol>
              <Link href="/shop" className="inline-block mt-6 bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-6 rounded-lg transition-colors font-medium focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2">
                Découvrir la boutique
              </Link>
            </div>
            <div className="relative h-64 md:h-96 rounded-lg overflow-hidden shadow-xl">
          <Image
                src="/images/ecocoins.webp"
                alt="Système d'EcoCoins"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-emerald-500 text-white" aria-labelledby="cta-title">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="cta-title" className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à rejoindre l&apos;aventure EcoRide ?
          </h2>
          <p className="text-xl mb-8 text-white/90 max-w-3xl mx-auto">
            Inscrivez-vous dès maintenant et recevez 20 EcoCoins offerts pour commencer votre expérience de covoiturage écologique !
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/(auth)/register" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-medium transition-colors shadow-md focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-500">
              S&apos;inscrire gratuitement
            </Link>
            <Link href="/trips" className="bg-emerald-700 hover:bg-emerald-800 text-white px-8 py-3 rounded-lg font-medium transition-colors shadow-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-700">
              Explorer les trajets
            </Link>
          </div>
    </div>
      </section>
      </main>
    </MainLayout>
  );
}
