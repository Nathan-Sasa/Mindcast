# Changelog

Toutes les modifications et évolutions notable de ce projet sont documenté ici.

## [v0.1.0] - 2025-08-6

initialisation du projet

### Ajouté

- Structure des sections principales du blog :
    -Accueil
    -Blog
    -Auteur
    -Debut du stylisme de la section Accueil avec Tailwind CSS
    -Bar de navigation complet :
        - Version responsive (dektop et mobile)
        - navigation fluide entre les sections

### Section Accueil

#### feat

-nom, description et image de l'application
-Section des articles recemment publiés, mise en avant dans la section Accueil

#### docs

-directive fonction scrollDown pour defilement automatique vers le bas
-Composant 'menu-toggle'

## [v0.1.1] - 2025-08-06

fixation du bug de la fichage du prototype des articles recemment publies mise en avant dans la section home

## [v0.2.0] - 2025-08-08

### installation de firebase

intsallation de la firebase @angular/fire@19.2.0
configuratoin dans app.config.ts

- import providefirebaseApp, initializeApp from [@angular/fire/app](firebase)
    -configuration : provideFirebaseApp(() => initializeApp(environment.firebase))

- import provideAuth, getAuth from [@angular/fire/auth](firebase)
    -configuration : provideAuth(() => getAuth())

- import provideFirestore, getFirestore from [@angular/fire/firestore](firebase)
    -configuration : provideFirestore(() => getFirestore())

-import provideStorage, getStorage from [@angular/fire/storage](firebase)
    -configuration : provideStorage(() => getStorage())

### configuration de regles firestore

    -firestore rule dans https://console.firebase.google.com/.../mindcast.../firestore
    -storage rule dans https://console.firebase.google.com/.../mindcast.../storage

### environment ts

ajout du fichier enviroment.ts
    -configuration de l'accès firebase

## [v.0.2.1] - 2025-08-08

### auth service

configuration des fonctions des connexion ou authentification avec google

#### doc

auth.service.ts

- import [Auth](@angular/fire/auth)
- import [authState](@angular/fire/auth)
- import [GoogleAuthProvider, signInWithPopup, signOut as firebaseSignOut](@angular/fire/auth)

-fonctions :
    - signWithGoogle
    - signOut
    - isAdmin
    - getUid

### article service

-configuration de fonction de l'a'ajout, suppression, commentaires, reponses, likes et partage des articles.

#### add doc

article.service.ts

### fonctions

listes des articles

- getArticles
- getArticleBysSlug (fonction contenant un bug)

creation, mise a jour et suppression d'article

- async createArticle
- async updateArticle
- async deleteArticle

importer des images d'article

- uploadArticleImage

ajour et suppression des commentaires d'article

- addComment
- deleteCmment

mettre, retirer et compteur des likes d'article

- likeArticle
- async unlikeArticle
- getLIkeCount

comteur de partges

- async incrementShare