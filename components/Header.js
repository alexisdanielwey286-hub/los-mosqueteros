function Header({ cartCount }) {
  try {
    const [searchOpen, setSearchOpen] = React.useState(false);

    return (
      <header className="bg-[var(--primary-color)] text-white shadow-lg" data-name="header" data-file="components/Header.js">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="icon-book-open text-2xl"></div>
              <span className="text-2xl font-bold">BookStore</span>
            </div>
            
            <nav className="hidden md:flex items-center space-x-6">
              <a href="#inicio" className="hover:text-[var(--accent-color)] transition-colors">Inicio</a>
              <a href="#nuevo" className="hover:text-[var(--accent-color)] transition-colors">Nuevo</a>
              <a href="#proximos" className="hover:text-[var(--accent-color)] transition-colors">Próximos</a>
              <a href="#disponibilidad" className="hover:text-[var(--accent-color)] transition-colors">Disponibilidad</a>
              <a href="#ofertas" className="hover:text-[var(--accent-color)] transition-colors">Ofertas</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button onClick={() => setSearchOpen(!searchOpen)} className="hover:text-[var(--accent-color)]">
                <div className="icon-search text-xl"></div>
              </button>
              <button className="hover:text-[var(--accent-color)]">
                <div className="icon-help-circle text-xl"></div>
              </button>
              <CartIcon count={cartCount} />
            </div>
          </div>
          
          {searchOpen && <SearchBar />}
        </div>
      </header>
    );
  } catch (error) {
    console.error('Header component error:', error);
    return null;
  }
}