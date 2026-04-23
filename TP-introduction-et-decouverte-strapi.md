# TP — API REST, Strapi & Express (Master)

## Objectifs pédagogiques

À la fin de ce TP, vous serez capables de :

- Consommer une API REST externe (TMDB)
- Comprendre et comparer différents formats d’API (REST vs Strapi vs GraphQL)
- Créer une API avec Strapi
- Sécuriser une API (JWT vs API Token)
- Documenter une API (OpenAPI / Swagger)
- Reproduire une API REST avec Express

## Organisation

| Partie | Sujet | Durée |
|--------|-------|-------|
| 1 | Consommation API TMDB | 1h |
| 2 | Création API Strapi | 1h30 |
| 3 | Authentification & Sécurité | 45 min |
| 4 | Documentation & GraphQL | 30 min |
| 5 | Reproduction avec Express | 2h |

## Prise en main — API TMDB

API utilisée: The Movie Database (TMDb)

### Étapes

1. Créer un compte et récupérer un token
Créez un compte sur TMDB
Générez une API Key (v3 ou v4)

**Question**

Quelle est la différence entre une API Key et un token JWT ?

2. Tester l’API avec VS Code

Utilisez l’extension : REST Client
UNIQUEMENT l'extension REST Client ! Pas de Postman, pas de Insomnia, pas de scripts, pas de curl dans le terminal, que du REST Client dans VS Code !

Créez un fichier :

```requests.http
### Récupérer les films populaires
GET https://api.themoviedb.org/3/movie/popular
Authorization: Bearer VOTRE_TOKEN
```
3. Explorer les endpoints

Ajoutez les requêtes suivantes :

- lister les films populaires
- Détails d’un film
- Acteurs d’un film
- Recherche de film

Analyser :

- Structure JSON
- Pagination (page)
- Paramètres (query)
- Headers

Checkpoint - Vous devez être capables de :

Faire une requête GET
Lire une réponse JSON

Identifier :
- paramètres
- headers
- structure des données

## Création d’une API avec Strapi

### Installation

```bash
npx create-strapi-app@latest strapi-cinema --quickstart
```

### Modélisation

Créez les Content Types :

Movie
  title (string)
  description (text)
  releaseDate (date)
Actor
  name (string)

Relation : un film peut avoir plusieurs acteurs, un acteur peut jouer dans plusieurs films

À partir de vos requêtes TMDB :

Insérez des acteurs
Insérez des films dans Strapi
Créez les relations

Les données n'ont pas besoin d'être nombreuses mais suffisantes pour les requêtes demandées dans la partie suivante.

### Requêtes Strapi (REST)

Dans requests.http, créez les requêtes suivantes :

- Tous les films
- Films contenant "H"
- Films avec acteurs (populate)
- Acteurs d’un film
- Les 3 films les plus récents
- du 2 ème au 4 ème film

### Création utilisateur et Authentification

1. Rajouter la protections des routes pour qu'un token d'authentification soit nécessaire pour accéder aux films
2. Créer un utilisateur et récupérer un token d'authentification
3. Tester l’accès aux films avec token
4. Ne plus laisser la possibilité de créer / modifier / supprimer un film sans être authentifié
5. La lecture des données reste publique

Via API :

POST http://localhost:1337/api/auth/local/register
POST http://localhost:1337/api/auth/local

➡️ Récupérez le JWT
🔒 Routes protégées
Ajoutez le header :
Authorization: Bearer VOTRE_JWT

Créer :
- récupération profil utilisateur connecté
- modification mot de passe

### Documentation & GraphQL

Installez les plugin :

1. Documentation

Vous obtenez une doc type Swagger.

2. GraphQL

Installez le plugin GraphQL.
Et réalisez les mêmes requêtes que pour le REST mais en GraphQL

## Reproduction avec Express

### Objectif

Recréer une API équivalente à Strapi :

mêmes routes
mêmes réponses
même logique
mêmes filtres et pagination
même authentification (GETs publics et POST/PUT/DELETE protégés par token JWT)

### Base de données / ORM

Neon (PostgreSQL) + Prisma
jwt + hashage de mot de passe + middleware d’authentification

### Routes

GET /movies
GET /movies/:id
POST /movies
PUT /movies/:id
DELETE /movies/:id