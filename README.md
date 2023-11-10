## Proyecto prensa 

Prensa es una aplicación web React que utiliza Vite como herramienta de desarrollo y Typescript para el tipado.
### La aplicación tiene las siguientes dependencias:

react
react-dom
react-router-dom
Dependencias de desarrollo
El proyecto tiene las siguientes dependencias de desarrollo:
@types/react
@types/react-dom
@typescript-eslint/eslint-plugin
@typescript-eslint/parser
@vitejs/plugin-react
eslint
eslint-plugin-react-hooks
eslint-plugin-react-refresh
typescript
vite
Scripts
El proyecto tiene los siguientes scripts definidos:
dev: Inicia el servidor de desarrollo de Vite.
build: Construye la aplicación para producción.
lint: Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo.
preview: Inicia el servidor de desarrollo de Vite con el modo vista previa habilitado.
Ejecución del proyecto
Para ejecutar el proyecto, puedes usar el siguiente comando:

npm run dev


Esto iniciará el servidor de desarrollo de Vite en http://localhost:3000. Puedes abrir esta dirección en tu navegador para ver la aplicación.
Construcción del proyecto para producción
Para construir el proyecto para producción, puedes usar el siguiente comando:

npm run build


Esto creará una carpeta dist que contiene los archivos compilados de la aplicación. Puedes alojar estos archivos en un servidor web para que los usuarios puedan acceder a la aplicación.
Análisis del código
Para analizar el código en busca de errores y problemas de estilo, puedes usar el siguiente comando:

npm run lint


Esto ejecutará ESLint en todos los archivos .ts y .tsx del proyecto.
Vista previa de la aplicación
Para ver una vista previa de la aplicación, puedes usar el siguiente comando:

npm run preview


Esto iniciará el servidor de desarrollo de Vite con el modo vista previa habilitado. Puedes abrir http://localhost:3000 en tu navegador para ver la aplicación.



# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
