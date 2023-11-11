# Proyecto prensa

Prensa es una aplicación web React que utiliza Vite como herramienta de desarrollo y Typescript para el tipado.

## Descripcion

Areas de la App

### Zona Publica

#### PSA

Cargar formularios
Descargar formularios

#### Revistas

Bibliotecas de Revistas

#### Entrevistas

Bibliotecas de Videos y Articulos  

#### Podscat

Biblioteca de Audios

#### Calendario

### Zona Privada

#### Diseños

Diseños Necesarios Para crear o publicar

#### Ver Formularios Cargados

Ver los formularios cargados de manera digital por los compañeros

#### Chat interno

Lugar donde dejar mensajes relacionados a las fechas y actividades donde participara la seccional

## Descripcion Tecnica

### La aplicación tiene las siguientes dependencias

```bash
react
react-dom
react-router-dom
Dependencias de desarrollo
```

### El proyecto tiene las siguientes dependencias de desarrollo

```bash
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
````

### El proyecto tiene los siguientes scripts definidos

#### Uso pnpm

#### Inicia el servidor de desarrollo de Vite

```bash
pnpm dev
````

#### Construye la aplicación para producción

```bash
pnpm build
```

#### Ejecuta ESLint para analizar el código en busca de errores y problemas de estilo

```bash
pnpm lint
```

#### Inicia el servidor de desarrollo de Vite con el modo vista previa habilitado

```bash
pnpm preview
```

#### Ejecución del proyecto

Para ejecutar el proyecto, puedes usar el siguiente comando:

```bash
pnpm run dev
```

Esto iniciará el servidor de desarrollo de Vite en `http://localhost:3000`. Puedes abrir esta dirección en tu navegador para ver la aplicación

#### construcción del proyecto para producción

Para construir el proyecto para producción, puedes usar el siguiente comando:

```bash
npm run build
```

Esto creará una carpeta dist que contiene los archivos compilados de la aplicación. Puedes alojar estos archivos en un servidor web para que los usuarios puedan acceder a la aplicación.

#### Análisis del código

Para analizar el código en busca de errores y problemas de estilo, puedes usar el siguiente comando:

```bash
npm run lint
```

Esto ejecutará ESLint en todos los archivos .ts y .tsx del proyecto.

#### Vista previa de la aplicación

Para ver una vista previa de la aplicación, puedes usar el siguiente comando:

```bash
npm run preview
```

Esto iniciará el servidor de desarrollo de Vite con el modo vista previa habilitado. Puedes abrir `http://localhost:3000` en tu navegador para ver la aplicación.

#### implementaciones futuras

Implementar ReactPlayer + YouTube
Crear Calendario

#### implementaciones

Autenticacion
Fix Error 404
