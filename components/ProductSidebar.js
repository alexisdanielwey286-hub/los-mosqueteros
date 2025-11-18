function ProductSidebar({ product, onClose, onAddToCart }) {
  try {
    const [selectedColor, setSelectedColor] = React.useState(product.colors[0]);
    const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
    const discountedPrice = product.discount > 0 ? product.price * (1 - product.discount / 100) : product.price;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 z-50" data-name="product-sidebar" data-file="components/ProductSidebar.js">
        <div className="fixed right-0 top-0 h-full w-full md:w-96 bg-white shadow-xl p-6 overflow-y-auto">
          <button onClick={onClose} className="absolute top-4 right-4">
            <div className="icon-x text-2xl text-[var(--text-color)]"></div>
          </button>
          
          <h2 className="text-2xl font-bold mb-4 text-[var(--primary-color)]">{product.title}</h2>
          
          <div className="space-y-4 mb-6">
            <img src={product.image} alt={product.title} className="w-full rounded-lg" />
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-sm text-gray-600 mb-2">Precio:</p>
              <div className="flex items-center space-x-2">
                {product.discount > 0 && (
                  <span className="text-gray-400 line-through">${product.price.toFixed(2)}</span>
                )}
                <span className="text-2xl font-bold text-[var(--accent-color)]">${discountedPrice.toFixed(2)}</span>
                {product.discount > 0 && (
                  <span className="bg-[var(--accent-color)] text-white px-2 py-1 rounded text-sm">-{product.discount}%</span>
                )}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Color:</p>
              <div className="flex space-x-2">
                {product.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`px-4 py-2 rounded border ${selectedColor === color ? 'border-[var(--primary-color)] bg-[var(--secondary-color)]' : 'border-gray-300'}`}
                  >
                    {color}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <p className="text-sm text-gray-600 mb-2">Talla:</p>
              <div className="flex space-x-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 rounded border ${selectedSize === size ? 'border-[var(--primary-color)] bg-[var(--secondary-color)]' : 'border-gray-300'}`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>
            
            <div className="flex items-center space-x-2 text-sm">
              <div className="icon-package text-lg text-[var(--primary-color)]"></div>
              <span>{product.stock} disponibles</span>
            </div>
            
            <button onClick={() => onAddToCart(product)} className="w-full btn-accent">
              Agregar al Carrito
            </button>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    console.error('ProductSidebar component error:', error);
    return null;
  }
}