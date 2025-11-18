function Footer() {
  try {
    return (
      <footer className="bg-[var(--primary-color)] text-white py-12" data-name="footer" data-file="components/Footer.js">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Acerca de BookStore</h3>
              <p className="text-gray-300">
                Tu librería online de confianza. Ofrecemos una amplia selección de libros con los mejores precios y ofertas especiales. Encuentra tu próxima lectura con nosotros.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Productos</h3>
              <ul className="space-y-2 text-gray-300">
                <li><a href="#nuevo" className="hover:text-[var(--accent-color)]">Nuevos Lanzamientos</a></li>
                <li><a href="#ofertas" className="hover:text-[var(--accent-color)]">Ofertas Especiales</a></li>
                <li><a href="#bestsellers" className="hover:text-[var(--accent-color)]">Más Vendidos</a></li>
                <li><a href="#categorias" className="hover:text-[var(--accent-color)]">Categorías</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contacto</h3>
              <ul className="space-y-2 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="icon-mail text-lg"></div>
                  <span>info@bookstore.com</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="icon-phone text-lg"></div>
                  <span>+34 900 123 456</span>
                </li>
                <li className="mt-4">
                  <p className="mb-2">Síguenos:</p>
                  <div className="flex space-x-4">
                    <a href="#" className="hover:text-[var(--accent-color)]"><div className="icon-facebook text-xl"></div></a>
                    <a href="#" className="hover:text-[var(--accent-color)]"><div className="icon-twitter text-xl"></div></a>
                    <a href="#" className="hover:text-[var(--accent-color)]"><div className="icon-instagram text-xl"></div></a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-600 pt-6 text-center text-gray-300">
            <p>&copy; 2025 BookStore. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    );
  } catch (error) {
    console.error('Footer component error:', error);
    return null;
  }
}