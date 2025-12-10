# Portfolio 3D - Alex Martin

Un portfolio professionnel avec scène 3D interactive, créé avec React, Three.js et Tailwind CSS.

## 🚀 Démarrage rapide

```bash
# 1. Installer les dépendances
npm install

# 2. Lancer le serveur de développement
npm run dev

# 3. Ouvrir http://localhost:8080
```

## 📁 Structure du projet

```
src/
├── components/         # Composants réutilisables
│   ├── ui/            # Composants Shadcn UI
│   ├── Scene3D.tsx    # Scène Three.js interactive
│   ├── Header.tsx     # Navigation principale
│   ├── Footer.tsx     # Pied de page
│   ├── ProjectCard.tsx # Carte projet
│   ├── ContactForm.tsx # Formulaire de contact
│   ├── SkillBar.tsx   # Barre de compétence animée
│   └── Timeline.tsx   # Chronologie d'expériences
├── pages/             # Pages de l'application
│   ├── Index.tsx      # Page d'accueil
│   ├── About.tsx      # À propos
│   ├── Projects.tsx   # Liste des projets
│   ├── ProjectDetail.tsx # Détail d'un projet
│   └── Contact.tsx    # Page contact
├── data/              # Données statiques
│   └── portfolio.ts   # Projets, compétences, timeline
├── hooks/             # Hooks personnalisés
│   └── useTheme.ts    # Gestion mode sombre/clair
└── index.css          # Design system & styles globaux
```

## 🎨 Personnalisation

### 1. Modifier vos informations (5 min)
Éditez `src/data/portfolio.ts` :
- `aboutInfo` : nom, titre, bio, photo, email
- `skills` : vos compétences et niveaux
- `timeline` : expériences et formations
- `projects` : vos projets (titre, description, technologies, images)

### 2. Changer les couleurs (2 min)
Modifiez les variables CSS dans `src/index.css` :
- `--primary` : couleur principale (actuellement teal/cyan)
- `--accent` : couleur d'accent
- Toutes les couleurs sont en HSL

### 3. Remplacer les images (5 min)
- **Avatar** : remplacez l'URL dans `aboutInfo.avatar`
- **Projets** : modifiez `image` dans chaque projet
- **Fond 3D** : personnalisez les couleurs dans `Scene3D.tsx`

### 4. Modifier le modèle 3D (optionnel)
Le fichier `src/components/Scene3D.tsx` contient la scène 3D.
Pour charger un modèle GLTF/GLB :
```tsx
import { useGLTF } from '@react-three/drei';
const { scene } = useGLTF('/models/votre-modele.glb');
```

### 5. Configurer le formulaire de contact
Pour un envoi réel, modifiez `ContactForm.tsx` :
- **Netlify Forms** : ajoutez `data-netlify="true"` au form
- **API personnalisée** : remplacez la simulation par un `fetch`

## 🌙 Mode sombre/clair
Le thème bascule automatiquement selon les préférences système.
Le switch manuel est disponible dans le header.

## 📱 Responsive
L'application est optimisée pour :
- Mobile (< 768px)
- Tablette (768px - 1024px)
- Desktop (> 1024px)

## 🚀 Déploiement

### Netlify
```bash
npm run build
# Déployer le dossier `dist`
```

### Vercel
```bash
npm install -g vercel
vercel
```

## 📦 Technologies

- **React 18** + **TypeScript** + **Vite**
- **Three.js** via `@react-three/fiber` et `@react-three/drei`
- **Tailwind CSS** pour le styling
- **Framer Motion** pour les animations
- **Shadcn UI** pour les composants
- **React Hook Form** + **Zod** pour les formulaires

## 🔧 Scripts disponibles

```bash
npm run dev      # Développement
npm run build    # Build production
npm run preview  # Prévisualiser le build
npm run lint     # Vérifier le code
```

## 📄 Licence

MIT - Libre d'utilisation et de modification.
