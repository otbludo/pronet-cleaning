# Guide de lancement — Site Pronet

Ce guide explique, étape par étape, comment installer le projet, le lancer sur votre ordinateur, le modifier et le mettre en ligne. Aucune connaissance préalable de React n'est nécessaire.

**Sommaire**

1. [Installer Node.js](#1-installer-nodejs)
2. [Installer le projet](#2-installer-le-projet)
3. [Lancer le site en local](#3-lancer-le-site-en-local)
4. [Modifier le site](#4-modifier-le-site)
5. [Mettre le site en ligne](#5-mettre-le-site-en-ligne)
6. [Problèmes fréquents](#6-problèmes-fréquents)

---

## 1. Installer Node.js

Le projet a besoin de **Node.js en version 20.19 ou plus récente** (la version **22** est conseillée).

Pour vérifier la version installée, ouvrez un terminal et tapez :

```bash
node -v
```

Si la commande affiche `v22.x.x` (ou `v20.19` et plus), passez à l'étape 2.

Sinon, le plus simple est d'utiliser **nvm**, qui permet d'avoir plusieurs versions de Node :

```bash
# Installer nvm (Linux / macOS) — à faire une seule fois
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash

# Fermer puis rouvrir le terminal, puis installer Node 22
nvm install 22
```

> **Windows :** installez [nvm-windows](https://github.com/coreybutler/nvm-windows/releases), ou téléchargez directement Node.js 22 « LTS » sur [nodejs.org](https://nodejs.org).

## 2. Installer le projet

Dans un terminal, placez-vous dans le dossier du projet :

```bash
cd ~/Documents/projets/cleaner
```

Activez la bonne version de Node (lue dans le fichier `.nvmrc`) :

```bash
nvm use
```

Installez les dépendances (à faire une seule fois, ou après une mise à jour du projet) :

```bash
npm install
```

Un dossier `node_modules/` est créé : il contient les outils du projet et ne doit pas être modifié.

## 3. Lancer le site en local

```bash
npm run dev
```

Le terminal affiche une adresse, en général **http://localhost:5173**. Ouvrez-la dans votre navigateur : le site s'affiche.

- Chaque modification enregistrée dans le code se voit **immédiatement** dans le navigateur, sans recharger.
- Pour tester sur un téléphone connecté au même réseau Wi-Fi : `npm run dev -- --host`, puis ouvrir l'adresse « Network » affichée.
- Pour arrêter le serveur : `Ctrl + C` dans le terminal.

## 4. Modifier le site

| Je veux changer… | Fichier à modifier |
| --- | --- |
| Le téléphone, l'e-mail, les horaires | `src/data/contact.js` |
| Le lien de réservation Google Agenda | `src/data/contact.js` (`bookingUrl`) |
| Une photo | déposer l'image dans `public/`, puis indiquer son chemin dans `src/data/images.js` |
| La vidéo | déposer le fichier sous le nom `public/video.mp4` |
| Un texte | le fichier de la section dans `src/components/sections/` |
| Le titre de l'onglet ou la description Google | `index.html` |
| La couleur rose du site | `src/styles/index.css` (`--color-brand`) |

Avant de mettre en ligne, vérifiez que le code ne contient pas d'erreur :

```bash
npm run lint
```

## 5. Mettre le site en ligne

### Étape 1 — Compiler le site

```bash
npm run build
```

Cette commande crée un dossier **`dist/`** contenant la version finale et optimisée du site (HTML, CSS, JavaScript et images). C'est **uniquement ce dossier** qu'il faut mettre en ligne.

Pour vérifier cette version finale avant publication :

```bash
npm run preview
```

puis ouvrir l'adresse affichée (en général http://localhost:4173).

### Étape 2 — Publier

Le site est entièrement statique : il peut être hébergé n'importe où.

**Option A — Netlify (gratuit, le plus simple)**

1. Créer un compte sur [netlify.com](https://www.netlify.com).
2. Aller dans **Sites → Add new site → Deploy manually**.
3. Glisser-déposer le dossier `dist/` dans la page.
4. Le site est en ligne ; un nom de domaine personnalisé peut être ajouté dans **Domain settings**.

**Option B — Vercel ou Netlify relié à GitHub (mises à jour automatiques)**

Si le projet est sur GitHub, importez-le sur [vercel.com](https://vercel.com) ou Netlify avec ces réglages :

| Réglage | Valeur |
| --- | --- |
| Build command | `npm run build` |
| Output / Publish directory | `dist` |
| Node version | 22 |

Chaque modification envoyée sur GitHub met alors le site à jour automatiquement.

**Option C — Hébergement classique (OVH, o2switch, Hostinger…)**

Envoyer le **contenu** du dossier `dist/` (pas le dossier lui-même) dans le dossier public de l'hébergement (souvent `www/` ou `public_html/`), par FTP (FileZilla) ou via le gestionnaire de fichiers de l'hébergeur.

> Pensez à **relancer `npm run build`** et à republier après chaque modification.

## 6. Problèmes fréquents

**`SyntaxError: ... does not provide an export named 'styleText'`** (ou une erreur au lancement de Vite)
La version de Node est trop ancienne (par exemple Node 18). Exécutez `nvm use` (ou `nvm install 22`) puis relancez la commande.

**`npm: command not found` / `node: command not found`**
Node.js n'est pas installé ou le terminal n'a pas été rouvert après l'installation de nvm. Reprenez l'[étape 1](#1-installer-nodejs).

**`Port 5173 is in use`**
Un autre serveur tourne déjà. Fermez l'autre terminal, ou laissez Vite choisir automatiquement un autre port (l'adresse affichée change).

**Une image ne s'affiche pas**
Vérifiez que le fichier est bien dans `public/` et que le chemin dans `src/data/images.js` commence par `/` et respecte exactement le nom du fichier (majuscules et extension comprises : `.jpeg` ≠ `.jpg`).

**Le bouton de lecture vidéo n'affiche rien**
Le fichier `public/video.mp4` est absent ou n'est pas au format MP4 (H.264).

**Le bouton « Réserver » n'ouvre pas la bonne page**
Vérifiez le lien `bookingUrl` dans `src/data/contact.js` : il doit être le lien de partage de la page de réservation Google Agenda (`https://calendar.app.google/...`).
