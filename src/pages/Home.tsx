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

  // Dummy product data
  const products = [
    {
      id: '1',
      title: 'Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256GB)',
      price: 124999,
      originalPrice: 134999,
      image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      rating: 4.5,
      reviews: 2547,
      discount: 7,
      isBestseller: true,
      inStock: true
    },
    {
      id: '2',
      title: 'Apple MacBook Air M2 Chip (13-inch, 8GB RAM, 256GB SSD)',
      price: 89999,
      originalPrice: 119999,
      image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=500',
      rating: 4.7,
      reviews: 1823,
      discount: 25,
      isBestseller: true,
      inStock: true
    },
    {
      id: '3',
      title: 'Sony WH-1000XM5 Wireless Noise Canceling Headphones',
      price: 29990,
      originalPrice: 34990,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500',
      rating: 4.6,
      reviews: 945,
      discount: 14,
      inStock: true
    },
    {
      id: '4',
      title: 'Nike Air Max 270 React Men\'s Running Shoes',
      price: 12995,
      originalPrice: 14995,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500',
      rating: 4.3,
      reviews: 567,
      discount: 13,
      inStock: false
    },
    {
      id: '5',
      title: 'LG 55" 4K Ultra HD Smart OLED TV (OLED55C3PSA)',
      price: 149999,
      originalPrice: 199999,
      image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500',
      rating: 4.4,
      reviews: 234,
      discount: 25,
      inStock: true
    },
    {
      id: '6',
      title: 'Canon EOS R6 Mark II Mirrorless Camera with 24-105mm Lens',
      price: 239999,
      originalPrice: 269999,
      image: 'https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=500',
      rating: 4.8,
      reviews: 156,
      discount: 11,
      isBestseller: true,
      inStock: true
    }
  ];

  const categories = [
    'All Categories', 'Electronics', 'Fashion', 'Home & Kitchen', 
    'Books', 'Sports', 'Beauty', 'Automotive'
  ];

  const brands = [
    'All Brands', 'Samsung', 'Apple', 'Sony', 'Nike', 
    'LG', 'Canon', 'OnePlus', 'Xiaomi'
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Banner */}
      <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Shop Smart, Shop <span className="text-primary">ShopKart</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover amazing deals on electronics, fashion, and more!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <span className="bg-primary text-primary-foreground px-6 py-2 rounded-full">
                ✨ Free Delivery Above ₹499
              </span>
              <span className="bg-accent text-accent-foreground px-6 py-2 rounded-full">
                🚀 Same Day Delivery Available
              </span>
              <span className="bg-warning text-warning-foreground px-6 py-2 rounded-full">
                💰 Up to 70% Off
              </span>
            </div>
          </div>
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