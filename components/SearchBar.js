function SearchBar() {
  try {
    return (
      <div className="mt-4" data-name="search-bar" data-file="components/SearchBar.js">
        <input
          type="text"
          placeholder="Buscar libros..."
          className="w-full px-4 py-2 rounded-lg text-[var(--text-color)] focus:outline-none focus:ring-2 focus:ring-[var(--accent-color)]"
        />
      </div>
    );
  } catch (error) {
    console.error('SearchBar component error:', error);
    return null;
  }
}