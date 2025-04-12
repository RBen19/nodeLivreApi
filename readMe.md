# ce projet est un projet de restApi avec les fonctionnalités de create , read,update et delete (CRUD)  simple avec node.js

## version : 
### version de node.js utiliser => v23.6.0
#### version de npm utiliser => 10.9.2

# Outils à avoir à disposition :  
 - node.js
 - npm
 - un serveur de base de données (postgres est celui qui est utilisé dans ce projet)

# Installation des dépendances du projet : 
 - assurez vous d'être dans le répertoire du projet 
 - lancer la commande `npm install`
# Configuation :

 ## Base de données : 
   creer un fichier  .env ( s'il est present modifier le selon vos configs)  à la racine du projet s'il n'est pas présent  definissez les valeurs des variables suivantes : 
   - DB_HOST : qui représente l'hôte 
   - DB_USER : qui représente le nom de l'utilisateur de la base de données 
   - DB_PASSWORD :  qui represente le mot de passe de l'utilisateur de base de données
   - DB_NAME : qui représente le nom de la base de données 
   - DB_PORT : qui représente le port de votre utilisé par votre base de donées
 ## Server Express : 
  toujours dans le fichier .env ajouter la variable SERVER_PORT qui représente le port sur lequel le serveur express va écouter 

 ## exemple de fichier .env   : 
    DB_HOST=your_host
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=ypur_db_name
    DB_PORT=your_db_port
    SERVER_PORT=port_for_server_express (3000 par exemple)


### Tips : 
 verifier que le setup est bon en lançant le script de démarrage avec  ` npm start`

# Remplissage de la base : 
 - Afin d'obtenir quelques données de test  lancer le script :  `npm run seed:livres` ( pendant que l'application est lancé)

# TEST client avec POSTMAN 

  ### endpoints de base de  l'application :
  /api/v1/livres
  ### tips: 
  ne copier pas les `` pour vos tests sous postman 
 ## GET Simple : 
  pour avoir la liste des livres creer une nouvelle requete http et donnez l'url.
  exemple url `http://localhost:3000/api/v1/livres` .NB : a modifer selon vos configs
 ## GET avec ID du livre : 
  exemple url : `http://localhost:3000/api/v1/livres/4`
 ## POST : 
  exemple url : `http://localhost:3000/api/v1/livres/create`
  exemple body : 
    {
    "ISBN": "6666666666666",
    "Description": "sixième livre"
    }
 ## PUT : 
 pour utiliser la method put vous devez passer le isbn d'un livre dans la requete afin de le modifier
 exemple url : `http://localhost:3000/api/v1/livres/update/6666666666666`
 exemple body : 
    {
        "ISBN": "6666666666666",
        "Description": "sixième livre modifier deux fois "
    }
## Delete : 
 pour faire la suppression du livre aussi il faut passer par son isbn 
 exemple url : `http://localhost:3000/api/v1/livres/delete/6666666666666`