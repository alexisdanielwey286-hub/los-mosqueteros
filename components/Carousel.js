function Carousel({ onProductClick }) {
  try {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    
    const products = [
      {
        id: 1,
        title: 'El Hobbit',
        image: 'https://images.unsplash.com/photo-1621351183012-e2f1f8961a3e?w=800',
        price: 32.99,
        discount: 25,
        stock: 12,
        colors: ['Verde', 'Dorado'],
        sizes: ['Tapa Dura', 'Tapa Blanda']
      },
      {
        id: 2,
        title: 'Orgullo y Prejuicio',
        image: 'https://images.unsplash.com/photo-1510172951991-856a654063f9?w=800',
        price: 27.99,
        discount: 10,
        stock: 18,
        colors: ['Rosa', 'Blanco'],
        sizes: ['Tapa Dura', 'Tapa Blanda']
      },
      {
        id: 3,
        title: 'Harry Potter y la Piedra Filosofal',
        image: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?w=800',
        price: 34.99,
        discount: 15,
        stock: 25,
        colors: ['Rojo', 'Negro'],
        sizes: ['Tapa Dura']
      }
    ];

    const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
    const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

    const currentProduct = products[currentIndex];
    const discountedPrice = currentProduct.discount > 0 
      ? currentProduct.price * (1 - currentProduct.discount / 100) 
      : currentProduct.price;

    return (
      <div className="relative h-[600px] bg-[var(--secondary-color)]" data-name="carousel" data-file="components/Carousel.js">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <img
            src={currentProduct.image}
            alt={currentProduct.title}
            className="h-[400px] object-cover cursor-pointer"
            onClick={() => onProductClick(currentProduct)}
          />
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-bold text-[var(--primary-color)] mb-2">{currentProduct.title}</h3>
            <div className="flex items-center justify-center space-x-2">
              {currentProduct.discount > 0 && (
                <span className="text-gray-400 line-through text-lg">${currentProduct.price.toFixed(2)}</span>
              )}
              <span className="text-3xl font-bold text-[var(--accent-color)]">${discountedPrice.toFixed(2)}</span>
              {currentProduct.discount > 0 && (
                <span className="bg-[var(--accent-color)] text-white px-2 py-1 rounded text-sm">-{currentProduct.discount}%</span>
              )}
            </div>
          </div>
        </div>
        
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100">
          <div className="icon-chevron-left text-xl text-[var(--primary-color)]"></div>
        </button>
        
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100">
          <div className="icon-chevron-right text-xl text-[var(--primary-color)]"></div>
        </button>
        
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {products.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-[var(--accent-color)]' : 'bg-white'}`}
            />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Carousel component error:', error);
    return null;
  }
}