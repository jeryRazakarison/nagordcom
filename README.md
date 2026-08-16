# nagord.com

Site vitrine freelance de Jery Razakarison — **HTML statique écrit à la main**.
Pas de générateur, pas de build, aucune dépendance à installer.

## Structure

Tout le site vit dans `docs/` :

```
docs/
  index.html               page d'accueil
  architecture-ios.html    ┐
  ci-mobile-app-store.html ┘ pages SEO
  baskio.html              ┐
  chowple.html             ├ pages projets
  pumpkin.html             ┘
  404.html
  styles.css               feuille de style unique
  script.js
  assets/                  images, logos, favicon
  sitemap.xml  robots.txt  healthcheck.json
  CNAME                    domaine personnalisé (nagord.com)
```

## Modifier le site

1. Éditer directement le ou les fichiers `docs/*.html`.
2. Prévisualiser en ouvrant le fichier dans un navigateur, ou avec un serveur
   statique : `python3 -m http.server 8000 --directory docs` puis
   <http://localhost:8000>.
3. Commiter et pousser sur `main`.

Il n'y a **aucune étape de compilation** : le HTML poussé est exactement le HTML
servi.

### Attention aux textes dupliqués

Les textes de présentation sont répétés dans plusieurs balises d'une même page :
le contenu visible, `<meta name="description">`, `og:description`,
`twitter:description` et le bloc JSON-LD de données structurées. Quand un texte
change, penser à mettre à jour toutes ses variantes pour que Google et les
aperçus de liens (LinkedIn, Slack…) restent cohérents avec la page.

## Déploiement

GitHub Pages sert le dossier `docs/` de la branche `main`
(*Settings → Pages → Build and deployment → Deploy from a branch → `main` / `/docs`*).

Chaque push sur `main` déclenche le workflow intégré `pages-build-deployment`
(~30 s), sans fichier de workflow dans le repo. Il n'y a donc rien à configurer
dans `.github/`.

Le certificat TLS est géré automatiquement par GitHub et couvre `nagord.com` et
`www.nagord.com`. Si un jour `https://www.` renvoie une erreur de certificat,
il suffit d'ouvrir *Settings → Pages* : la visite relance la vérification DNS et
la réémission du certificat.

## Historique

Le site a démarré en 2024 sur Hugo avec le thème
[qubt](https://github.com/chrede88/qubt), puis a été réécrit en HTML statique.
L'échafaudage Hugo (`config/`, `content/`, `go.mod`, `go.sum`, `assets/` à la
racine) a été retiré en août 2026 : il n'était plus utilisé et, comme
`hugo.yaml` déclarait `publishDir: docs`, lancer `hugo` **écrasait le site** avec
le template par défaut. Ces fichiers restent récupérables dans l'historique git.

Le fichier `CNAME` à la racine du repo est un reliquat inerte — seul `docs/CNAME`
est publié — mais il est conservé pour éviter toute mauvaise surprise avec la
configuration du domaine.
