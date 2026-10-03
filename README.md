# Pronet — site vitrine

Site une page de **Pronet, femme de ménage** : présentation des prestations, formules sur devis et prise de rendez-vous en ligne via Google Agenda.

- Responsive (mobile, tablette, ordinateur)
- Réservation en ligne : créneaux de 30 min gérés par une page de réservation Google Agenda
- Animations au défilement, désactivées si le visiteur a demandé à réduire les animations
- Installable sur l'écran d'accueil d'un téléphone (manifest + icônes)

> Pour installer et lancer le projet pas à pas, voir le **[guide de lancement](docs/GUIDE_LANCEMENT.md)**.

---

## Stack technique

| Outil | Rôle |
| --- | --- |
| [React 19](https://react.dev) | Interface (composants) |
| [Vite 8](https://vite.dev) | Serveur de développement et compilation |
| [Tailwind CSS 4](https://tailwindcss.com) | Styles (classes utilitaires) |
| [ESLint](https://eslint.org) | Vérification du code |

Aucune autre dépendance : les animations, le carrousel et les icônes sont faits maison.

**Prérequis :** Node.js **20.19+** ou **22.12+** (version 22 conseillée, voir `.nvmrc`).

## Démarrage rapide

```bash
nvm use          # utilise la version de Node indiquée dans .nvmrc
npm install      # installe les dépendances (une seule fois)
npm run dev      # lance le site en local sur http://localhost:5173
```

## Commandes

| Commande | Description |
| --- | --- |
| `npm run dev` | Serveur de développement avec rechargement automatique |
| `npm run build` | Compile le site optimisé dans `dist/` |
| `npm run preview` | Sert localement le contenu de `dist/` pour vérifier la version finale |
| `npm run lint` | Vérifie le code avec ESLint |

## Structure du projet

```
├── index.html                 Page HTML : titre, description, icônes, polices
├── public/                    Fichiers servis tels quels (images, icônes, manifest)
├── resources/                 Images sources non publiées (originaux, versions alternatives)
├── docs/
│   └── GUIDE_LANCEMENT.md     Installation, lancement et mise en ligne pas à pas
└── src/
    ├── main.jsx               Point d'entrée : monte l'application React
    ├── App.jsx                Assemble la page (ordre des sections)
    ├── data/
    │   ├── contact.js         Coordonnées, horaires, lien de réservation Google Agenda
    │   └── images.js          Chemins de toutes les images du site
    ├── styles/
    │   └── index.css          Charte graphique (couleurs, polices) et animations
    └── components/
        ├── icons.jsx          Icônes SVG
        ├── layout/            Éléments présents sur toute la page
        │   ├── Navbar.jsx       En-tête + menu mobile
        │   ├── Footer.jsx       Pied de page
        │   └── Logo.jsx         Logo Pronet
        ├── sections/          Sections de la page, dans l'ordre d'affichage
        │   ├── Hero.jsx         Accueil : titre, portrait, appel
        │   ├── BookingBar.jsx   Barre « Prendre rendez-vous »
        │   ├── Services.jsx     « Mes prestations »
        │   ├── WhyChooseMe.jsx  « Pourquoi me choisir ? »
        │   ├── HowItWorks.jsx   « Ce que vous pouvez attendre » + étapes
        │   ├── Pricing.jsx      « Des formules sur mesure »
        │   ├── VideoSection.jsx Vidéo de présentation
        │   └── Commitments.jsx  « Mes engagements » (carrousel)
        └── ui/                Briques réutilisables
            ├── Reveal.jsx       Apparition au défilement
            ├── CountUp.jsx      Chiffre animé
            └── Blob.jsx         Tache de couleur floue en arrière-plan
```

## Personnaliser le contenu

La plupart des modifications courantes se font sans toucher aux composants.

### Coordonnées et réservation — `src/data/contact.js`

Téléphone, e-mail, horaires et lien de la page de réservation Google Agenda (`bookingUrl`). Une valeur modifiée ici est mise à jour partout sur le site.

### Images — `src/data/images.js`

1. Déposer la nouvelle image dans `public/` (par ex. `public/salon.jpg`).
2. Remplacer le chemin correspondant dans `images.js` : `serviceHome: '/salon.jpg'`.

Certaines images sont encore des photos Unsplash provisoires (fonction `unsplash(...)`) : elles sont à remplacer par de vraies photos.

**Conseils :**
- privilégier le JPEG pour les photos et le PNG pour les images détourées ;
- viser moins de 500 Ko par image (1 200 à 1 600 px de large suffisent) ;
- vérifier qu'une image issue d'une capture d'écran n'a pas de coins blancs arrondis.

### Vidéo — `public/video.mp4`

La section vidéo lit le fichier `public/video.mp4` au clic sur l'aperçu. Format conseillé : **MP4 (H.264)**, idéalement moins de 20–30 Mo. Tant que le fichier est absent, le lecteur reste vide.

### Textes

Les textes de chaque section se trouvent dans le composant correspondant, dans `src/components/sections/`. Les listes (formules, étapes, engagements) sont déclarées en haut de chaque fichier.

### Couleurs et polices — `src/styles/index.css`

La charte est déclarée dans le bloc `@theme`. Changer `--color-brand` modifie le rose sur tout le site. Les polices sont chargées dans `index.html` (Google Fonts).

## Animations

| Élément | Fichier |
| --- | --- |
| Apparition au défilement (`<Reveal type="up" delay={150}>`) | `components/ui/Reveal.jsx` + `styles/index.css` |
| Types disponibles : `up`, `left`, `right`, `zoom`, `rise` (ligne de titre), `wipe` (photo en rideau) | `styles/index.css` |
| Chiffres qui comptent (`<CountUp to={5} />`) | `components/ui/CountUp.jsx` |
| Taches de fond qui dérivent (`<Blob tone="pink" className="…" />`) | `components/ui/Blob.jsx` |
| Reflet sur les boutons (classe `shine`), trait dessiné (`draw-line`), barre de progression | `styles/index.css` |

Chaque animation ne se joue qu'une fois, à la première apparition de l'élément. Si le visiteur a activé « réduire les animations » sur son appareil, le contenu s'affiche directement, sans mouvement.

## Mise en ligne

`npm run build` produit un site statique dans `dist/`, hébergeable sur n'importe quel service de fichiers statiques (Netlify, Vercel, OVH, o2switch…). La procédure détaillée est dans le [guide de lancement](docs/GUIDE_LANCEMENT.md#5-mettre-le-site-en-ligne).
