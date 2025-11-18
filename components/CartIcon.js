function CartIcon({ count }) {
  try {
    return (
      <button className="relative hover:text-[var(--accent-color)]" data-name="cart-icon" data-file="components/CartIcon.js">
        <div className="icon-shopping-cart text-xl"></div>
        {count > 0 && (
          <span className="absolute -top-2 -right-2 bg-[var(--accent-color)] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
            {count}
          </span>
        )}
      </button>
    );
  } catch (error) {
    console.error('CartIcon component error:', error);
    return null;
  }
}