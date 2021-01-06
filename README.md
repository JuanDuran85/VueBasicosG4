# Ejercicios y Ejemplos con VueJS para G4

- Ejercicios básicos de Introducción a VueJS para la Generación 4 TD DL

1. Ejemplo 1 (ejemplo_1): Primer VueJS con CDN, uso de directivas
2. Ejemplo 2 (ejemplo_2): Usando CDN y componentes con archivo externo de JS
3. Ejemplo 3 (ejemplo_3): Primer ejemplo con VueCli, usando directivas for, model, bind
4. Ejemplo 4 (ejemplo_4): Usando componentes hijos y directicas para agregar y eliminar informacion directa en la data.
5. Ejemplo 5 (usando_props): Usando props y emit para comunicar componentes padres e hijos. 
6. Ejemplo 6 (props_component): ejercicio para utilizar props y eventos personalizados entre padres e hijos. Se utiliza la creacion, lectura, modificion y eliminacion de datos localmente. 
7. Ejemplo 7 (randomuser): ejercicio implementando conexion a API en hook y clases dinamicas.
8. Ejemplo 8 (random_cat): implementando async await para conexion con API y style con vbind.


-----------------------------------------------------------------------------------

## Configurando e instalando FireBase

Para trabajar con firebase debes tener una cuenta de Google, ir al sitio web oficial y crear un nuevo proyecto, haciendo clic en comenzar, luego en añadir proyecto, escribir el nombre del proyecto y seguir los pasos.

* Sitio oficial:
    [Firebase](https://firebase.google.com/)

* Documentación para JavaScript con Firestore.
    [Firestore](https://firebase.google.com/docs/reference/js/firebase.firestore.Firestore)

* Instalacion con NPM:
```bash
npm i firebase --save
```

* Instalacion con Yarn:
```bash
yarn add firebase -D
```

* Para llevar una aplicacion al Hosting de firebase, se debe:
1. Crear el proyecto en firebase
2. Entrar en la seccion del hosting
3. Hacer un clic en iniciar, get started o comenzar
4. Instalar mediante la terminal firebase tool con:
    Con NPM
    ```bash
      npm i firebase-tools -g
      ```
    Con Yarn
      ```bash
      yarn global add firebase-tools
    ```
5. Luego clic en continuar o siguiente dentro de firebase hosting
6. Ahora en el editor, en la terminal dentro del proyecto, se debe iniciar sesion de firebase con el comando: ```firebase login```, seleccionando o iniciando la sesion con la cuenta de gmail donde se encuentra ejecutando firebase hosting en la web
7. Ahora en la terminal, se debe iniciar el proyecto con ```firebase init```
8. Luego si en proceder
9. Despues seleccionar el hosting (Hosting: Configure and deploy Firebase Hosting sites)
10. Seleccionar la opcion de proyecto existente si ya tienes el proyecto.
11. Posteriormente selecciona el proyecto en el cual tienes activo el hosting.
12. Ahora se debe escribir el nombre del directorio donde se encontraran los archivos de produccion. En este caso se debe ingresar "dist" porque este sera el nombre de la carpeta que crea vue-cli para al produccion.
13. Indicar que si para compilar en una SFC / SPA
14. Finalizado el proceso de configuracion de firebase, se debe iniciar el proceso de produccion con vue-cli mediante el comando "build", ya sea:
    Con NPM
    ```bash
      npm run build
      ```
    Con Yarn
      ```bash
      yarn build
    ```
15. Terminado el procesod e produccion de vue-cli, se debe enviar los archivos de la carpeta dist al hosting de firebase, mediante la instruccion: ```firebase deploy --only hosting```
    
