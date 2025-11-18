# BookStore - Página de Tienda de Libros

## Descripción
Página web de una librería online con las siguientes características:

### Cabecera
- Logo de la marca
- Menú de navegación: Inicio, Nuevo, Próximos, Disponibilidad, Ofertas
- Barra de búsqueda
- Icono de ayuda
- Carrito de compras con contador

### Cuerpo
- Carrusel de 3 imágenes de productos
- Sidebar lateral con detalles del producto:
  - Precio con descuento
  - Opciones de color
  - Opciones de talla
  - Stock disponible
  - Botón para agregar al carrito

### Pie de Página
- Descripción de la página
- Enlaces a productos
- Información de contacto
- Redes sociales

## Estructura del Proyecto
- `index.html`: Página principal
- `app.js`: Componente principal con gestión de estado
- `components/`: Componentes de React
  - Header.js: Cabecera con navegación
  - SearchBar.js: Barra de búsqueda
  - CartIcon.js: Icono del carrito
  - Carousel.js: Carrusel de productos
  - ProductSidebar.js: Sidebar de detalles
  - Footer.js: Pie de página