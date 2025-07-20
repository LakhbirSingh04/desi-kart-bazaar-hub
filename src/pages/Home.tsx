import { useState } from 'react';
import { Filter, Grid, List, ChevronDown } from 'lucide-react';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [sortBy, setSortBy] = useState('popularity');
  const [filters, setFilters] = useState({
    category: '',
    priceRange: '',
    brand: '',
    rating: '',
    discount: false
  });

  // Men's fashion product data
  const products = [
    {
      id: '1',
      title: 'Oversized Cotton Shirt',
      price: 2499,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500',
      rating: 4.8,
      reviews: 347,
      discount: 38,
      isBestseller: true,
      inStock: true
    },
    {
      id: '2',
      title: 'Slim Fit Denim Jeans',
      price: 3999,
      originalPrice: 5999,
      image: 'https://images.unsplash.com/photo-1542272604-787c3835535d?w=500',
      rating: 4.6,
      reviews: 523,
      discount: 33,
      inStock: true
    },
    {
      id: '3',
      title: 'Premium Leather Jacket',
      price: 12999,
      originalPrice: 19999,
      image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500',
      rating: 4.9,
      reviews: 189,
      discount: 35,
      isBestseller: true,
      inStock: true
    },
    {
      id: '4',
      title: 'Casual Polo T-Shirt',
      price: 1299,
      originalPrice: 1999,
      image: 'https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=500',
      rating: 4.4,
      reviews: 692,
      discount: 35,
      inStock: true
    },
    {
      id: '5',
      title: 'Formal White Shirt',
      price: 2799,
      originalPrice: 3999,
      image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500',
      rating: 4.7,
      reviews: 445,
      discount: 30,
      inStock: true
    },
    {
      id: '6',
      title: 'Cargo Pants',
      price: 3499,
      originalPrice: 4999,
      image: 'https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=500',
      rating: 4.5,
      reviews: 278,
      discount: 30,
      inStock: false
    }
  ];

  const categories = [
    'All', 'Shirts', 'T-Shirts', 'Jeans', 'Jackets', 'Formal Wear', 'Casual Wear', 'Accessories'
  ];

  const brands = [
    'All Brands', 'Zara', 'H&M', 'Uniqlo', 'Nike', 'Adidas', 'Levi\'s', 'Tommy Hilfiger'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="relative bg-background py-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-7xl font-light tracking-tight mb-6">
              Elevate Your
              <span className="block font-semibold bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
                Style
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-12 font-light">
              Discover premium menswear that defines modern masculinity
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
              <button className="bg-primary text-primary-foreground px-8 py-4 text-lg font-medium tracking-wide hover:bg-primary/90 transition-all duration-300">
                SHOP NEW ARRIVALS
              </button>
              <button className="border border-primary text-primary px-8 py-4 text-lg font-medium tracking-wide hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                VIEW COLLECTIONS
              </button>
            </div>
          </div>
        </div>
        {/* Decorative elements */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-muted/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-muted/10 rounded-full blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="w-full lg:w-64 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="font-semibold mb-4 flex items-center">
                <Filter className="w-5 h-5 mr-2" />
                Filters
              </h3>
              
              {/* Category Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Category</label>
                <select
                  value={filters.category}
                  onChange={(e) => setFilters({...filters, category: e.target.value})}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>

              {/* Price Range */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Price Range</label>
                <select
                  value={filters.priceRange}
                  onChange={(e) => setFilters({...filters, priceRange: e.target.value})}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  <option value="">All Prices</option>
                  <option value="0-5000">Under ₹5,000</option>
                  <option value="5000-10000">₹5,000 - ₹10,000</option>
                  <option value="10000-25000">₹10,000 - ₹25,000</option>
                  <option value="25000-50000">₹25,000 - ₹50,000</option>
                  <option value="50000+">Above ₹50,000</option>
                </select>
              </div>

              {/* Brand Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Brand</label>
                <select
                  value={filters.brand}
                  onChange={(e) => setFilters({...filters, brand: e.target.value})}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  {brands.map(brand => (
                    <option key={brand} value={brand}>{brand}</option>
                  ))}
                </select>
              </div>

              {/* Rating Filter */}
              <div className="mb-6">
                <label className="block text-sm font-medium mb-2">Customer Rating</label>
                <select
                  value={filters.rating}
                  onChange={(e) => setFilters({...filters, rating: e.target.value})}
                  className="w-full p-2 border border-border rounded-md bg-background"
                >
                  <option value="">All Ratings</option>
                  <option value="4+">4★ & above</option>
                  <option value="3+">3★ & above</option>
                  <option value="2+">2★ & above</option>
                </select>
              </div>

              {/* Discount Filter */}
              <div className="mb-6">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={filters.discount}
                    onChange={(e) => setFilters({...filters, discount: e.target.checked})}
                    className="mr-2"
                  />
                  <span className="text-sm font-medium">On Sale Only</span>
                </label>
              </div>
            </div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Toolbar */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
              <h2 className="text-2xl font-bold">
                Featured Products ({products.length} items)
              </h2>
              
              <div className="flex items-center gap-4">
                {/* Sort By */}
                <div className="flex items-center">
                  <label className="text-sm font-medium mr-2">Sort by:</label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                    className="p-2 border border-border rounded-md bg-background"
                  >
                    <option value="popularity">Popularity</option>
                    <option value="price-low">Price: Low to High</option>
                    <option value="price-high">Price: High to Low</option>
                    <option value="rating">Customer Rating</option>
                    <option value="newest">Newest First</option>
                  </select>
                </div>

                {/* View Mode */}
                <div className="flex border border-border rounded-md">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 ${viewMode === 'grid' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 ${viewMode === 'list' ? 'bg-primary text-primary-foreground' : 'bg-background'}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Products Grid */}
            <div className={`grid gap-6 ${
              viewMode === 'grid' 
                ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                : 'grid-cols-1'
            }`}>
              {products.map(product => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2">
                <button className="px-3 py-2 border border-border rounded-md hover:bg-muted">
                  Previous
                </button>
                <button className="px-3 py-2 bg-primary text-primary-foreground rounded-md">
                  1
                </button>
                <button className="px-3 py-2 border border-border rounded-md hover:bg-muted">
                  2
                </button>
                <button className="px-3 py-2 border border-border rounded-md hover:bg-muted">
                  3
                </button>
                <button className="px-3 py-2 border border-border rounded-md hover:bg-muted">
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;