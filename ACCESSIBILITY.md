# Guide d'Accessibilité RGAA - EcoRide

## 🎯 Conformité RGAA

Ce projet respecte les critères du Référentiel Général d'Amélioration de l'Accessibilité (RGAA) version 4.1.

## ✅ Critères implémentés

### 1. Navigation et orientation
- **Liens de navigation rapide** : Liens "Aller au contenu principal" et "Aller à la navigation"
- **Structure sémantique** : Utilisation des balises HTML5 appropriées (`<main>`, `<nav>`, `<section>`, `<article>`)
- **Hiérarchie des titres** : Structure logique H1 → H2 → H3
- **Plan de page** : Navigation claire et cohérente

### 2. Formulaires
- **Labels associés** : Tous les champs de formulaire ont des labels appropriés
- **Champs obligatoires** : Indication avec `aria-required="true"`
- **Messages d'erreur** : Structure pour l'annonce des erreurs
- **Groupes de champs** : Utilisation de `fieldset` et `legend` quand nécessaire

### 3. Images
- **Textes alternatifs** : Toutes les images ont des attributs `alt` descriptifs
- **Images décoratives** : Utilisation d'`aria-hidden="true"` pour les icônes décoratives
- **Images complexes** : Descriptions détaillées pour les images informatives

### 4. Couleurs et contrastes
- **Contraste suffisant** : Ratio de contraste minimum de 4.5:1 pour le texte normal
- **Information par la couleur** : L'information n'est pas uniquement véhiculée par la couleur
- **Mode sombre** : Support complet du thème sombre avec contrastes appropriés

### 5. Navigation au clavier
- **Focus visible** : Indicateurs de focus clairs et visibles
- **Ordre de tabulation** : Navigation logique au clavier
- **Raccourcis clavier** : Support des raccourcis standards
- **Piège de focus** : Gestion du focus dans les modales

### 6. Multimédia
- **Contrôles accessibles** : Boutons de lecture/pause avec labels appropriés
- **Transcriptions** : Support des transcriptions pour l'audio
- **Sous-titres** : Support des sous-titres pour la vidéo

### 7. Scripts et interactions
- **Dégradation gracieuse** : Fonctionnement sans JavaScript
- **Notifications** : Annonces pour les lecteurs d'écran
- **États dynamiques** : Mise à jour des attributs ARIA

## 🛠️ Composants d'accessibilité

### FocusManager
Gère le focus et le piégeage de focus pour les modales et composants interactifs.

```tsx
import FocusManager from "@/components/accessibility/FocusManager";

<FocusManager trapFocus={true} restoreFocus={true}>
  {/* Contenu de la modale */}
</FocusManager>
```

### ScreenReaderAnnouncement
Annonce des messages aux lecteurs d'écran.

```tsx
import ScreenReaderAnnouncement from "@/components/accessibility/ScreenReaderAnnouncement";

<ScreenReaderAnnouncement 
  message="Nouveau trajet ajouté" 
  priority="polite" 
/>
```

## 🎨 Styles d'accessibilité

### Classes utilitaires
- `.sr-only` : Masque visuellement mais garde accessible aux lecteurs d'écran
- `.focus:outline-none` : Supprime l'outline par défaut
- `.focus:ring-2` : Ajoute un anneau de focus visible

### Préférences utilisateur
- `prefers-reduced-motion` : Réduit les animations pour les utilisateurs sensibles
- `prefers-color-scheme` : Support automatique du thème système

## 🧪 Tests d'accessibilité

### Outils recommandés
1. **axe-core** : Tests automatisés d'accessibilité
2. **Lighthouse** : Audit d'accessibilité intégré
3. **WAVE** : Extension navigateur pour l'audit visuel
4. **NVDA/JAWS** : Tests avec lecteurs d'écran

### Tests manuels
- Navigation complète au clavier
- Tests avec lecteur d'écran
- Vérification des contrastes
- Tests sur différents navigateurs

## 📋 Checklist RGAA

### Obligatoire
- [x] Liens de navigation rapide
- [x] Structure sémantique HTML5
- [x] Labels de formulaires
- [x] Textes alternatifs images
- [x] Contraste de couleurs
- [x] Navigation au clavier
- [x] Focus visible
- [x] Attributs ARIA appropriés

### Recommandé
- [x] Support des préférences utilisateur
- [x] Gestion des erreurs de formulaire
- [x] Annonces pour les lecteurs d'écran
- [x] Piégeage de focus
- [x] Mode sombre accessible

## 🔧 Maintenance

### Vérifications régulières
1. Tests automatisés à chaque déploiement
2. Audit manuel mensuel
3. Tests utilisateurs trimestriels
4. Mise à jour des outils d'audit

### Bonnes pratiques
- Toujours tester avec un lecteur d'écran
- Vérifier la navigation au clavier
- Maintenir les contrastes lors des changements de design
- Documenter les nouvelles fonctionnalités

## 📞 Support

Pour toute question sur l'accessibilité :
- Consulter la [documentation RGAA officielle](https://www.numerique.gouv.fr/publications/rgaa-accessibilite/)
- Utiliser les outils d'audit mentionnés
- Tester avec des utilisateurs réels

---

*Dernière mise à jour : Décembre 2024*
