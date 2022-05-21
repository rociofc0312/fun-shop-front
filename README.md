# Fun Shop

Fun shop es un e-commerce, creado con [Create React App](https://facebook.github.io/create-react-app/docs/getting-started), que se encarga de la venta de productos relacionados al mundo del entretenimiento, incluyendo películas, series, shows, videojuegos, entre otros.

## Funcionalidades

- Muestra las categorías de los productos.
- Filtra y muestra los productos de acuerdo con la categoría elegida.
- Muestra el detalle de un producto seleccionado.
- Agrega los productos seleccionados y sus cantidades al carrito de compras.
- Muestra el carrito de compras con los productos seleccionados, los subtotales y el precio total.
- Permite eliminar productos del carrito de compra, así como vaciar el carrito de compras.
- Muestra las órdenes previas realizadas.

## Instalación local

1. Clonación del repositorio
2. Instalación de las dependencias del proyecto en la raiz: `npm install`
3. Ejecución del proyecto: `npm start`
4. Dirigirse a la ruta [http://localhost:3000](http://localhost:3000) para probar el proyecto

## Dependencias adicionales
- `firebase` para la persistencia de datos
- `react-hook-form` para la validación del formulario
- `react-image-magnifier` para hacer zoom a imágenes de los productos en el detalle
- `react-loader-spinner` para mostrar la carga de una vista
- `react-router-dom` para la navegación

## Estructura del proyecto
- src: raiz del proyecto
  - assets: imágenes locales del proyecto
  - components: elementos jsx presentacionales
    - shared: componentes compartidos
  - containers: agrupamiento de componentes
  - context: data accesible desde cualquier nivel
  - hooks: hooks presonalizados
  - services: lógica de consultas a firestore

## Funcionamiento
![Funshop workflow](https://media.giphy.com/media/bbI4XlFUsxt324186T/giphy.gif)

[Funshop Video](https://www.youtube.com/watch?v=MiNsQQKdnXE)

Link de app desplegada: [Funshop](https://my-shop-8d332.firebaseapp.com/)

## Autor
Rocío Fernández
