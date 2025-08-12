<div align="center">

# Milky Deal – Site Café & Brunch

Application React + Vite animée avec **GSAP (ScrollTrigger, timelines, parallax, SplitText)** pour une expérience immersive autour d'un café parisien artisanal.

![Tech](https://img.shields.io/badge/React-18-61DAFB?style=flat&logo=react) ![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat&logo=vite) ![GSAP](https://img.shields.io/badge/GSAP-Animation-88CE02?style=flat) ![CSS](https://img.shields.io/badge/Tailwind/Custom%20CSS-Styling-blueviolet?style=flat)

</div>

## Fonctionnalités principales

- Hero animé (SplitText + parallax des feuilles + vidéo scroll-scrub)
- Sections thématiques : Cafés & Brunch, À propos, Histoire (timeline animée), Art (mask + pin), Menu Signature (slider custom), Événements, Contact + Footer
- Menu dynamique cyclant les images sur 4 visuels
- Design responsive (mobile → desktop)
- Animations séquencées et performantes (ScrollTrigger optimisé, scrub ajusté)
- Formulaire de contact stylisé (statique pour l’instant)
- Footer complet (navigation, légal, réseaux, newsletter, crédit développeur)

## Structure

```
├── index.html              # Point d'entrée (favicon: /images/logo.png)
├── src
│  ├── main.jsx             # Bootstrap React
│  ├── App.jsx              # Composition des sections
│  ├── components/          # Composants UI
│  │     Navbar / Hero / Cocktail / About / History / Art / Menu / Events / Contact / Footer
│  ├── index.css            # Styles globaux / utilitaires
├── public
│  ├── images/              # Assets (logo, feuilles, drinks, about, etc.)
│  └── videos/output.mp4    # Vidéo hero
└── constants/index.js      # Données (listes, timeline, horaires...)
```

## Démarrage rapide

Installation des dépendances :

```bash
npm install
```

Lancer le serveur de dev :

```bash
npm run dev
```

Build production :

```bash
npm run build
```

Prévisualiser le build :

```bash
npm run preview
```

## Personnalisation

| Élément | Où modifier | Notes |
|---------|-------------|-------|
| Navigation | `constants/index.js > navLinks` | Ajoute / renomme les ancres |
| Cartes Menu | `constants/index.js` (cocktailLists / mockTailLists) | Les images sont cyclées automatiquement |
| Timeline Histoire | `constants/index.js > historyTimeline` | side: `left` ou `right` |
| Citation fondateur | `foundersQuote` | Texte + auteur |
| Horaires / Adresse | `storeInfo` & `openingHours` | Rendus dans Contact |
| Réseaux sociaux | `socials` | Icônes dans `/images` |
| Logo / Favicon | `public/images/logo.png` & `<link rel="icon" ...>` dans `index.html` | Remplace le fichier ou mets un nouveau chemin |

## Animations GSAP utilisées

- SplitText (titres hero, sections) – révélation par mots / caractères
- ScrollTrigger: pin, scrub, start/end précis (parallax feuilles, vidéo, mask section Art)
- Timelines stacking pour orchestrer (Hero, About, History timeline, Events fade-in)
- Compteurs (initialement prévus pour statistiques – section retirée mais mécanisme adaptable)

## Qualité & Performance

Optimisations mises en place :
- Animations déclenchées seulement au scroll (pas de boucles inutiles)
- Assets réutilisés (cycle images menu) pour réduire la charge
- Layouts flex/grid responsables + classes utilitaires

Prochaines optimisations possibles :
- Lazy loading des images hors écran (`loading="lazy"`)
- Conversion des PNG → WebP/AVIF
- Pré-chargement vidéo (`<link rel="preload" as="video">`)

## Licence

Projet privé (non licencié publiquement pour l’instant). Ajouter une licence si diffusion.

## Auteur

Développé par **Nassim EL HADDAD**  
GitHub : https://github.com/NassimEH  
LinkedIn : https://www.linkedin.com/in/nassim-elhaddad/

## TODO / Idées futures

- [ ] ScrollSpy sur la navbar
- [ ] Version sombre/clair toggle
- [ ] Intégration vraie carte (Leaflet / Mapbox)
- [ ] Formulaire avec EmailJS / backend
- [ ] Internationalisation FR/EN
- [ ] Optimisation images + prefetch
- [ ] Animation d’entrée des headings uniformisée via hook custom

---

Si tu veux que j’ajoute une fonctionnalité, ouvre une issue ou continue la discussion.
