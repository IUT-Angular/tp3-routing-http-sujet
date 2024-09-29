# TP3

## Sujet du TP3

1. Transformer la méthode `addBook(book: Book): void` du `BookService` pour gérer les doublons
2. Mettre en place un composant `book-detail` qui récupèrera l'id du livre via l'URL
3. Mettre en place le routing qui va gérer les routes suivantes :
    - / => affichage de la page d'accueil vide
    - /books => affichage de la liste des livres
    - /book/:id => affichage du détail du livre passé en paramètre (lien à afficher dans la liste)
    - /book/add => affichage du formulaire d'ajout d'un livre
4. En plus du stub, charger la liste des livres via l'URL suivante : https://66e8848bb17821a9d9dcf68c.mockapi.io/books
5. A la validation du formulaire, faire un ajout via l'API précédente.

A noter, que pour la création des composants il n'est pas nécessaire de générer le fichier `.spec.ts` ni le fichier `.css` ou `.scss`

## Annexes

1. https://angular.dev/guide/routing/common-router-tasks
2. https://docs.angular.lat/guide/http

## Bonnes pratiques

1. Toujours préciser le type de retour d'une méthode
2. Ne jamais utiliser le type `any`
3. Favoriser les interfaces pour les modèles/dto
4. Respecter l'arborescence de fichiers
5. Ne jamais commit ou distribuer le dossier `node_modules`, il faut l'ignorer via le `.gitignore`