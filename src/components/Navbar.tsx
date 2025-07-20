import { useState } from 'react';
import { Search, Heart, ShoppingCart, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'Shirts', 'T-Shirts', 'Jeans', 'Jackets', 'Formal', 'Accessories'
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-4">
          {/* Left side - Menu and Search */}
          <div className="flex items-center space-x-4">
            {/* Hamburger menu */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            {/* Search icon */}
            <button
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              className="text-foreground hover:text-muted-foreground transition-colors"
            >
              <Search className="w-5 h-5" />
            </button>
          </div>

          {/* Center - Logo */}
          <Link to="/" className="text-2xl font-light tracking-wider text-foreground">
            VESTON
          </Link>

          {/* Right side - Wishlist and Cart */}
          <div className="flex items-center space-x-4">
            <Link to="/wishlist" className="text-foreground hover:text-muted-foreground transition-colors relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">3</span>
            </Link>
            <Link to="/cart" className="text-foreground hover:text-muted-foreground transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">2</span>
            </Link>
          </div>
        </div>

        {/* Search bar - Expands when search icon is clicked */}
        {isSearchOpen && (
          <div className="border-t border-border py-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search for shirts, jeans, jackets..."
                className="w-full px-4 py-3 bg-transparent border border-border rounded-md focus:outline-none focus:border-foreground transition-colors text-sm"
                autoFocus
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
            </div>
          </div>
        )}

        {/* Category menu - Shows when hamburger is clicked */}
        {isMenuOpen && (
          <div className="border-t border-border py-4">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase py-2"
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