import { useState } from 'react';
import { Search, Heart, ShoppingCart, User, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const categories = [
    'New Arrivals', 'Shirts', 'T-Shirts', 'Jeans', 'Jackets', 'Formal', 'Accessories', 'Sale'
  ];

  return (
    <nav className="bg-background border-b border-border sticky top-0 z-50 backdrop-blur-sm bg-background/95">
      {/* Main navbar */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-6">
          {/* Logo */}
          <Link to="/" className="text-2xl font-light tracking-wider text-foreground">
            VESTON
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center space-x-8">
            {categories.map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
              >
                {category}
              </Link>
            ))}
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-6">
            <div className="hidden md:block">
              <div className="relative">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-64 px-4 py-2 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-sm"
                />
                <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
            </div>
            
            <Link to="/account" className="text-muted-foreground hover:text-foreground transition-colors">
              <User className="w-5 h-5" />
            </Link>
            <Link to="/wishlist" className="text-muted-foreground hover:text-foreground transition-colors relative">
              <Heart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">3</span>
            </Link>
            <Link to="/cart" className="text-muted-foreground hover:text-foreground transition-colors relative">
              <ShoppingCart className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-foreground text-background text-xs rounded-full w-4 h-4 flex items-center justify-center text-[10px]">2</span>
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

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border py-6">
            <div className="flex flex-col space-y-6">
              <div className="relative mb-4">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search..."
                  className="w-full px-4 py-2 bg-transparent border-b border-border focus:outline-none focus:border-foreground transition-colors text-sm"
                />
                <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              </div>
              {categories.map((category) => (
                <Link
                  key={category}
                  to={`/category/${category.toLowerCase().replace(' ', '-')}`}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide uppercase"
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