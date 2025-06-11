2.1 j'ai mis une erreur dans l'app.js, j'ai oublié les volontairements puis quand
je fais la commande npx eslint app.js, une erreur s'affiche

4.1 
j'ai modifié le fichier eslintrc.json
Pour ma part il était en js

2. j'ai modifié le fichier package.json
j'ai ça : 
{
  "name": "tp-eslint-git",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
    "lint": "eslint ."
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "devDependencies": {
    "@eslint/js": "^9.28.0",
    "eslint": "^9.28.0",
    "globals": "^16.2.0",
    "husky": "^9.1.7"
  }
}

en lançant la commande :
npm run lint 
j'obtiens ça : 
rayann@Legion-5-15IAH7H:~/Projects/tp-eslint-git$ npm run lint

> tp-eslint-git@1.0.0 lint
> eslint .


/home/rayann/Projects/tp-eslint-git/app.js
  8:1  error  Parsing error: Unexpected token

✖ 1 problem (1 error, 0 warnings)

