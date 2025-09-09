# 🤖 Guide d'Automatisation RGAA

## 🚀 Installation des outils d'accessibilité

```bash
# Installation des outils d'accessibilité
npm install --save-dev @axe-core/react @axe-core/cli eslint-plugin-jsx-a11y @testing-library/jest-axe pa11y lighthouse-ci

# Installation de Husky pour les hooks Git
npm install --save-dev husky
npx husky install
npx husky add .husky/pre-commit "npm run pre-commit"
```

## 🔧 Scripts disponibles

### Vérification rapide
```bash
npm run accessibility:check
```
Vérifie les fichiers d'accessibilité et les imports.

### Vérification complète
```bash
npm run accessibility:full
```
Exécute tous les tests d'accessibilité.

### Tests automatisés
```bash
npm run test:accessibility
```
Lance les tests axe-core sur vos composants.

### Audit Lighthouse
```bash
npm run accessibility:audit
```
Audit complet avec Lighthouse CI.

## 🎯 Utilisation des composants automatiques

### Formulaire accessible automatique
```tsx
import AutoAccessibleForm from '@/components/accessibility/AutoAccessibleForm';

const fields = [
  {
    name: 'email',
    label: 'Adresse email',
    type: 'email',
    required: true,
    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  },
  {
    name: 'password',
    label: 'Mot de passe',
    type: 'password',
    required: true,
    minLength: 8
  }
];

<AutoAccessibleForm 
  fields={fields}
  onSubmit={(data) => console.log(data)}
  submitLabel="Se connecter"
/>
```

### Hooks d'accessibilité
```tsx
import { useFormAccessibility, useScreenReaderAnnouncement } from '@/hooks/useAccessibility';

function MyComponent() {
  const { errors, validateField } = useFormAccessibility();
  const { announce } = useScreenReaderAnnouncement();
  
  const handleSubmit = () => {
    announce("Formulaire envoyé avec succès", "polite");
  };
  
  return (
    // Votre composant
  );
}
```

## 🔍 Intégration dans votre workflow

### 1. Développement local
```bash
# Avant chaque commit
npm run accessibility:check

# Avant de pousser
npm run accessibility:full
```

### 2. CI/CD automatique
Le fichier `.github/workflows/accessibility.yml` s'exécute automatiquement sur :
- Push sur `main` ou `develop`
- Pull requests vers `main`

### 3. Hooks Git
Le hook pre-commit vérifie automatiquement l'accessibilité avant chaque commit.

## 📊 Rapports d'accessibilité

### Lighthouse CI
Génère des rapports détaillés dans `lhci_reports/`

### Tests axe-core
Résultats dans la console et fichiers de test

### ESLint
Règles d'accessibilité intégrées dans votre éditeur

## 🛠️ Configuration personnalisée

### Règles ESLint personnalisées
Modifiez `.eslintrc.accessibility.js` pour ajouter vos propres règles.

### Tests personnalisés
Ajoutez vos tests dans `tests/accessibility.test.tsx`

### Scripts personnalisés
Modifiez `scripts/accessibility-check.js` pour vos besoins spécifiques.

## 🎨 Composants avec accessibilité intégrée

### FocusManager
```tsx
import FocusManager from '@/components/accessibility/FocusManager';

<FocusManager trapFocus={true} restoreFocus={true}>
  <ModalContent />
</FocusManager>
```

### ScreenReaderAnnouncement
```tsx
import ScreenReaderAnnouncement from '@/components/accessibility/ScreenReaderAnnouncement';

<ScreenReaderAnnouncement 
  message="Nouveau message reçu" 
  priority="assertive" 
/>
```

## 🚨 Résolution des problèmes

### Erreurs ESLint
```bash
# Voir les erreurs
npm run lint:accessibility

# Corriger automatiquement
npx eslint . --ext .ts,.tsx --config .eslintrc.accessibility.js --fix
```

### Tests qui échouent
```bash
# Voir les détails
npm run test:accessibility -- --verbose

# Tests spécifiques
npm run test:accessibility -- --testNamePattern="Navigation"
```

### Lighthouse CI
```bash
# Vérifier la configuration
npx lighthouse-ci autorun --config=lighthouserc.js

# Audit local
npx lighthouse http://localhost:3000 --only-categories=accessibility
```

## 📈 Métriques d'accessibilité

### Score cible
- **Lighthouse Accessibility** : ≥ 95/100
- **axe-core violations** : 0
- **ESLint accessibility** : 0 erreur

### Surveillance continue
- Rapports automatiques sur chaque PR
- Alertes en cas de régression
- Historique des scores d'accessibilité

## 🔄 Maintenance

### Mise à jour des outils
```bash
npm update @axe-core/react @axe-core/cli eslint-plugin-jsx-a11y
```

### Nouvelles règles RGAA
1. Mettre à jour `.eslintrc.accessibility.js`
2. Ajouter les tests correspondants
3. Mettre à jour la documentation

### Formation équipe
- Utiliser les hooks d'accessibilité
- Respecter les règles ESLint
- Tester avec les outils fournis

---

*L'automatisation RGAA garantit une accessibilité constante et évolutive ! 🎉*
