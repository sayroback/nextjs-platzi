# [Curso de Next.js](https://platzi.com/cursos/next/)

Descripción por Platzi:<br>

Next.js te da la mejor experiencia de desarrollo en React.js con todas las características que necesitas para producción como Client Side Rendering, Server Side Rendering, Generación de Sitios Estáticos (ESG) y hasta despliegues a producción automáticos con Vercely. Aprende esto y comienza a crear sitios web profesionales listos para despliegue sin complicarte con configuraciones tediosas.

- Crear Single Page Applications con Next.js
- Desplegar una webapp a producción
- Desarrolla APIs con Next.js
- Renderizar aplicaciones en el servidor, SSR

# <span style="color:green">Mis notas:</span>

## Instalando NextJS 3/27

Instalar
_Automática:_

- CLI: yarn create next-app

_Manuel:_

- En la carpeta donde alojaremos nuestro proyecto inicializamos npm:
  `npm init -y`
- Instalamos los módulos de next, react y react-dom.
  `yarn add next react react-dom`
- Creamos los scrips necesarios para correr nuestro proyecto.
  <code>"scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
  },</code>
- Creamos la carpeta `pages`.
  **Listo!!**

## Rutas básicas 4/27

Rutas estáticas:
Next genera un Routing automático solo agradando carpetas o archivos en `pages`. Esto se conoce como _Routing basado en el sistema de archivos._
Dentro de `pages` creamos un index.js que funcionara como nuestro `Home`.

## Rutas dinámicas 5/27

Las rutas dinámicas reciben un argumento y en base a este crean una ruta.
Se crean envolviendo el nombre del argumento que recibiremos en []: `[id].js`
Lo capturamos utilizando el modulo useRouter (`import { useRouter } from "next/router";`).
Luego destruimos el query:
<code>const {
query: { id },
} = useRouter();</code>
Ahora podremos utilizar el contenido de la variable que guarda la ruta dinámica.

## #UnderTheHood setup y páginas: optimizaciones ocultas 6/27

## #UnderTheHood páginas: pre rendering de páginas 7/27

## Enlazando páginas 8/27

Con el modulo `import Link from "next/link";`, podemos generar una navegación sin recarga.
Envolvemos las etiquetas de enlace con el componente `<Link><a>Enlace</a><Link>`

## #UnderTheHood enlazando páginas: prefetching automático 9/27

En el momento que el usuario hace hover en los enlaces se crea una prefetching.
