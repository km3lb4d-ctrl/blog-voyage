# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Blog de voyage personnel avec design et animations inspirés d'Apple. Utilise Next.js 14+, TypeScript, GSAP et Tailwind CSS.

## Commands

```bash
# Développement
npm run dev          # Serveur dev sur http://localhost:3000

# Build
npm run build        # Build production
npm run start        # Démarrer le build

# Lint
npm run lint         # Vérifier le code
```

## Architecture

### Stack technique
- **Framework** : Next.js 14+ (App Router)
- **Langage** : TypeScript
- **Styles** : Tailwind CSS + CSS custom
- **Animations** : GSAP + ScrollTrigger

### Structure des fichiers
```
src/
├── app/
│   ├── globals.css      # Styles globaux Apple-like
│   ├── layout.tsx       # Layout racine
│   └── page.tsx         # Page d'accueil avec contenu voyage
└── components/
    ├── Navigation.tsx   # Nav sticky avec blur (Accueil, Articles, Itinéraires, Conseils)
    ├── Hero.tsx         # Hero "Carnet de Voyage" avec image montagne
    ├── FeatureSection.tsx # Section destination avec scroll animation
    ├── VideoSection.tsx  # Section itinéraire avec parallaxe
    ├── CardGrid.tsx      # Grille d'articles
    └── Footer.tsx        # Pied de page voyage
```

### Contenu actuel
- **Hero** : Carnet de Voyage avec image de montagnes
- **Destinations** : Lisbonne, Marrakech, Islande, Bali
- **Itinéraire vedette** : Japon (section vidéo)
- **Grille** : 4 articles récents

### Patterns d'animation

**GSAP ScrollTrigger** pour les animations au scroll :
```typescript
gsap.fromTo(element,
  { opacity: 0, y: 100 },
  {
    opacity: 1, y: 0,
    scrollTrigger: {
      trigger: section,
      start: 'top 80%',
      toggleActions: 'play none none reverse',
    },
  }
);
```

## Design System

### Couleurs
- Background : `#ffffff` / `#000000`
- Text : `#1d1d1f` / `#f5f5f7`
- Gray : `#86868b`
- Blue link : `#0066cc`
- Button blue : `#0071e3`
- Orange accent : `#f56300`

### Typography
- Font : SF Pro Display (fallback system)
- Headline : `clamp(2.5rem, 8vw, 5rem)`, weight 600
- Subheadline : `clamp(1.5rem, 4vw, 2.5rem)`, weight 600

### Classes utilitaires
- `.section` / `.section-dark` / `.section-light`
- `.headline` / `.subheadline` / `.body-text`
- `.btn-primary` / `.btn-blue` / `.btn-outline`
- `.nav-blur` - Navigation avec backdrop blur

## Personnalisation

### Ajouter une destination
Dans `page.tsx`, ajouter un `FeatureSection` :
```tsx
<FeatureSection
  title="Nouvelle Destination"
  subtitle="Pays"
  description="Description..."
  image="URL_IMAGE"
  dark={false}
  reverse={true}
/>
```

### Modifier les articles
Mettre à jour le tableau `articles` dans `page.tsx`.

## Déploiement

Compatible Vercel, Netlify ou tout hébergeur Node.js.
