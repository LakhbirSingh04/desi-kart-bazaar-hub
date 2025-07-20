import { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Electronics', 'Fashion', 'Home & Kitchen', 'Books', 'Sports', 'Beauty'
  ];

  return (
    <nav className="bg-card border-b border-border sticky top-0 z-50">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center text-sm">
            <span>Free delivery on orders above ₹499</span>
            <div className="flex items-center space-x-4">
              <span>📞 1800-123-4567</span>
              <span>Track Your Order</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">
            ShopKart
          </Link>

          {/* Search bar */}
          <div className="flex-1 max-w-2xl mx-8">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for products, brands and more..."
                className="w-full px-4 py-3 bg-muted rounded-lg border border-border focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <Link to="/account" className="flex flex-col items-center hover:text-primary transition-colors">
              <User className="w-6 h-6" />
              <span className="text-xs">Account</span>
            </Link>
            <Link to="/wishlist" className="flex flex-col items-center hover:text-primary transition-colors relative">
              <Heart className="w-6 h-6" />
              <span className="text-xs">Wishlist</span>
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
            </Link>
            <Link to="/cart" className="flex flex-col items-center hover:text-primary transition-colors relative">
              <ShoppingCart className="w-6 h-6" />
              <span className="text-xs">Cart</span>
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden ml-4"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Categories */}
        <div className="hidden md:flex items-center space-x-8 pb-4 border-t border-border pt-4">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase()}`}
              className="text-foreground hover:text-primary transition-colors font-medium"
            >
              {category}
            </Link>
          ))}
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-4">
            <div className="flex flex-col space-y-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase()}`}
                  className="text-foreground hover:text-primary transition-colors font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {category}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;