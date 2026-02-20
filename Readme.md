[![Node CI](https://github.com/RAYWINN43/project_MONGO/actions/workflows/node-ci.yml/badge.svg)](https://github.com/RAYWINN43/project_MONGO/actions/workflows/node-ci.yml)


# Site bande-annonce film

> **MEMBRES DU GROUPE :**
> - **BLAIN Antoine**
> - **PECONTAL Corentin** 
> - **MARTIN Evan**

---

## 1. Présentation du Projet
Dans ce projet, nous allons créer un site e-commerce très basique dédié à la vente de bières.

L’objectif principal est de mettre en place un CRUD (Créer, Lire, Mettre à jour, Supprimer) afin de gérer facilement les bières (leurs différents prix, degrés d’alcool, etc.).

**Fonctionnalités principales :**
* Afficher des bières
* Ajouter des bières
* Modifier les bières
* Supprimer des bières (avec suppression en cascade)
* Ajouter des bières au panier
* Modifier la quantité d’éléments dans le panier
* Supprimer le panier
* Rechercher de bière
* Créer un utilisateur 

**Technologies utilisées :**
* NodeJS 
* Express
* MongoDB
* Discord 
* GitHub et Git


## 2. Guide d'installation
Pour lancer le projet localement :

1.  Cloner le dépôt :
    ```bash
    git clone [https://github.com/RAYWINN43/Projet_MONGO.git](https://github.com/RAYWINN43/Projet_MONGO.git)
    cd PROJET_MONGO
    ```
2.  Docker mongo et express:
     ```bash
    A CHANGER MONUSER et MOTSDEPASSE
    docker run -d --name mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=MONUSER -e MONGO_INITDB_ROOT_PASSWORD=MOTSDEPASSE -e MONGO_INITDB_DATABASE=beer_shop mongo:7
    docker run -d --name mongo-express --link mongo:mongo -p 8081:8081 -e ME_CONFIG_MONGODB_URL="mongodb://MONUSER:MOTSDEPASSE@mongo:27017/?authSource=admin" -e ME_CONFIG_MONGODB_ENABLE_ADMIN=true mongo-express:1
    faire et remplir le .env comme .env.model dans le back 
    se rendre http://localhost:8081/ pour consulter Express
     ```

3.  Lancer un jeux BDD et le BACK:
    ```bash
    cd back
    npm i
    node scripts/createUsers.js beer.json
    node scripts/import.js beer.json
    npm start
    ```
4.  Lancer le FRONT:
    ```bash
    cd front-react
    npm run dev
    se rendre en http://localhost:3000/
    ```
## 3. Méthodologie

### Organisation
Evan partie : beer (back) + panier (back) + debug + SHOP (front)
Antoine partie : GIT(creation repo invit, init ...) + README + ci + debug + home PAGE, CGV (front)
Corentin partie : user (back+front) + debug

## 4. SCREENSHOT
Maquette Home : ![](front-react/public/Maquette-ACCUEIL.png)
Maquette Shop : ![](front-react/public/Maquette-SHOP.png)
Home PAGE : ![](front-react/public/home%20page.png)
MONGO Express : ![](front-react/public/express.png)
User PAGE : ![](front-react/public/USER_page.png)
MONGO Express : ![](front-react/public/Detail_User.png)
Shop Page : ![](front-react/public/page_shop.png)