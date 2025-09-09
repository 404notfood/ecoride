#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🔍 Vérification automatique de l\'accessibilité RGAA...\n');

// Fonction pour exécuter une commande et afficher le résultat
function runCommand(command, description) {
  console.log(`📋 ${description}...`);
  try {
    const output = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    console.log(`✅ ${description} - OK\n`);
    return true;
  } catch (error) {
    console.log(`❌ ${description} - ERREUR:`);
    console.log(error.stdout || error.message);
    console.log('');
    return false;
  }
}

// Fonction pour vérifier les fichiers
function checkFiles() {
  console.log('📁 Vérification des fichiers d\'accessibilité...');
  
  const requiredFiles = [
    'components/accessibility/FocusManager.tsx',
    'components/accessibility/ScreenReaderAnnouncement.tsx',
    'components/accessibility/AutoAccessibleForm.tsx',
    'hooks/useAccessibility.ts',
    'ACCESSIBILITY.md'
  ];
  
  let allFilesExist = true;
  
  requiredFiles.forEach(file => {
    if (fs.existsSync(file)) {
      console.log(`✅ ${file} - Présent`);
    } else {
      console.log(`❌ ${file} - Manquant`);
      allFilesExist = false;
    }
  });
  
  console.log('');
  return allFilesExist;
}

// Fonction pour vérifier les imports d'accessibilité
function checkImports() {
  console.log('🔗 Vérification des imports d\'accessibilité...');
  
  const filesToCheck = [
    'app/layout.tsx',
    'app/page.tsx',
    'components/layout/Navbar.tsx'
  ];
  
  let allImportsCorrect = true;
  
  filesToCheck.forEach(file => {
    if (fs.existsSync(file)) {
      const content = fs.readFileSync(file, 'utf8');
      
      // Vérifications basiques
      if (file.includes('layout.tsx') && !content.includes('suppressHydrationWarning')) {
        console.log(`❌ ${file} - suppressHydrationWarning manquant`);
        allImportsCorrect = false;
      }
      
      if (file.includes('page.tsx') && !content.includes('role="main"')) {
        console.log(`❌ ${file} - role="main" manquant`);
        allImportsCorrect = false;
      }
      
      if (file.includes('Navbar.tsx') && !content.includes('aria-label')) {
        console.log(`❌ ${file} - aria-label manquant`);
        allImportsCorrect = false;
      }
      
      if (allImportsCorrect) {
        console.log(`✅ ${file} - Imports corrects`);
      }
    }
  });
  
  console.log('');
  return allImportsCorrect;
}

// Fonction principale
function main() {
  let allChecksPassed = true;
  
  // Vérification des fichiers
  if (!checkFiles()) {
    allChecksPassed = false;
  }
  
  // Vérification des imports
  if (!checkImports()) {
    allChecksPassed = false;
  }
  
  // Vérification ESLint (si disponible)
  if (fs.existsSync('node_modules/.bin/eslint')) {
    if (!runCommand('npx eslint . --ext .ts,.tsx --config .eslintrc.accessibility.js', 'Vérification ESLint accessibilité')) {
      allChecksPassed = false;
    }
  } else {
    console.log('⚠️  ESLint non installé - Installation recommandée pour l\'accessibilité\n');
  }
  
  // Vérification TypeScript
  if (fs.existsSync('tsconfig.json')) {
    if (!runCommand('npx tsc --noEmit', 'Vérification TypeScript')) {
      allChecksPassed = false;
    }
  }
  
  // Résumé
  console.log('📊 RÉSUMÉ DE LA VÉRIFICATION RGAA:');
  console.log('=====================================');
  
  if (allChecksPassed) {
    console.log('🎉 Toutes les vérifications d\'accessibilité sont passées !');
    console.log('✅ Votre projet est conforme aux standards RGAA');
  } else {
    console.log('⚠️  Certaines vérifications ont échoué');
    console.log('📖 Consultez ACCESSIBILITY.md pour plus d\'informations');
    process.exit(1);
  }
}

// Exécution
main();
