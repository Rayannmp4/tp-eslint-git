2.1 j'ai mis une erreur dans l'app.js, j'ai oublié les volontairements puis quand
je fais la commande npx eslint app.js, une erreur s'affiche 

rayann@Legion-5-15IAH7H:~/Projects/tp-eslint-git$ npx eslint app.js

/home/rayann/Projects/tp-eslint-git/app.js
  8:1  error  Parsing error: Unexpected token

✖ 1 problem (1 error, 0 warnings)

3. npx husy est depecrated, pas possible donc de faire la suite
   Le commit se bloque quand il y aune erreur donc je corrige l'erreur pour commit



4.0
- il semblerait que la fonction extends ne marche pas, elle serait deprecated. 
- La solution serait donc d'utiliser les rules en important la config de eslint-config-airbnb-base
- Une erreur arrive quand j'essaie d'installer la config

- Il y a peut-etre un problème au niveau de la version qui n'est plu compatible


5.
tout a été push sur github ainsi que le worflow que vous pouvez vérifier sur github directement

