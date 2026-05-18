# CMC Formation Koudougou — Site web

Site vitrine Next.js (App Router) pour CMC Formation Koudougou.

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

Variables optionnelles : copier `.env.example` vers `.env.local` et définir `NEXT_PUBLIC_SITE_URL` si besoin (SEO, sitemap).

## Build de production

```bash
npm run build
npm run start
```

## Déploiement sur Vercel

Le projet est prêt pour Vercel (Next.js 16, pages statiques + SSG).

### Option A — Dépôt Git = dossier `cmc` (recommandé)

1. Pousser le contenu du dossier **`cmc`** sur GitHub / GitLab / Bitbucket.
2. Sur [vercel.com](https://vercel.com) : **Add New Project** → importer le dépôt.
3. Vercel détecte Next.js automatiquement (`npm run build`, racine du dépôt).
4. **Environment Variables** (Production) :
   - `NEXT_PUBLIC_SITE_URL` = `https://votre-domaine.com` (URL finale, avec `https://`)
5. Déployer. Après le premier déploiement, ajouter un domaine personnalisé dans **Project → Settings → Domains** si besoin.

### Option B — Dépôt = dossier parent `cmc-forma`

1. Importer le dépôt sur Vercel.
2. **Project Settings → General → Root Directory** : renseigner **`cmc`**.
3. Même variable `NEXT_PUBLIC_SITE_URL` qu’à l’option A.

### Vérifications post-déploiement

- Page d’accueil et navigation
- `/formations` et une fiche formation
- `/sitemap.xml` et `/robots.txt`
- Liens WhatsApp et téléphone

### Fichiers utiles

| Fichier | Rôle |
|---------|------|
| `vercel.json` | Région `cdg1`, en-têtes de sécurité |
| `.env.example` | Variable d’URL publique |
| `app/sitemap.ts` | Plan du site |
| `app/robots.ts` | Indexation |

Aucune base de données ni secret obligatoire : le formulaire d’inscription est côté client (confirmation à l’écran).
