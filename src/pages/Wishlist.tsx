import { Heart, ShoppingCart, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;
  const calculateDiscount = (original: number, current: number) => 
    Math.round(((original - current) / original) * 100);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Elegant Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-full mb-6">
              <Heart className="w-10 h-10 text-primary" />
            </div>
            <h1 className="text-5xl font-light tracking-wider mb-4 text-foreground">
              My Wishlist
            </h1>
            <p className="text-lg text-muted-foreground mb-6 max-w-2xl mx-auto leading-relaxed">
              Curate your perfect collection of desired items
            </p>
            <div className="inline-flex items-center bg-muted/50 backdrop-blur-sm rounded-full px-6 py-2 border border-border/50">
              <span className="text-sm font-medium text-muted-foreground">
                {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'} saved
              </span>
            </div>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-32">
              <div className="relative mb-8">
                <div className="w-40 h-40 bg-gradient-to-br from-muted/30 to-muted/10 rounded-full mx-auto flex items-center justify-center backdrop-blur-sm border border-border/30">
                  <Heart className="w-20 h-20 text-muted-foreground/60" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary/20 rounded-full animate-pulse"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-pulse delay-300"></div>
              </div>
              <h2 className="text-3xl font-light mb-4 tracking-wide">Your wishlist awaits</h2>
              <p className="text-muted-foreground mb-10 max-w-md mx-auto text-lg leading-relaxed">
                Discover and save the items that catch your eye. Start building your perfect collection.
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center bg-primary text-primary-foreground px-8 py-4 rounded-full hover:bg-primary/90 transition-all duration-300 tracking-wide font-medium hover:shadow-lg hover:scale-105"
              >
                <Star className="w-5 h-5 mr-2" />
                Start Exploring
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {wishlistItems.map((item, index) => (
                <div 
                  key={item.id} 
                  className="group relative bg-card/50 backdrop-blur-sm border border-border/50 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:scale-[1.02] hover:border-border animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {/* Image Container */}
                  <div className="aspect-[3/4] overflow-hidden relative bg-gradient-to-br from-muted/20 to-muted/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    {/* Discount Badge */}
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {calculateDiscount(item.originalPrice, item.price)}% OFF
                    </div>
                    
                    {/* Remove Button */}
                    <button
                      onClick={() => removeFromWishlist(item.id)}
                      className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2.5 rounded-full hover:bg-background shadow-lg transition-all duration-200 hover:scale-110 hover:shadow-xl group/btn"
                    >
                      <X className="w-4 h-4 text-muted-foreground group-hover/btn:text-destructive transition-colors" />
                    </button>
                  </div>

                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <Link to={`/product/${item.id}`} className="block group/link">
                      <h3 className="font-medium tracking-wide text-lg leading-snug group-hover/link:text-primary transition-colors duration-200 line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>
                    
                    {/* Price Section */}
                    <div className="flex items-center space-x-3">
                      <span className="text-2xl font-semibold text-primary">{formatPrice(item.price)}</span>
                      <span className="text-sm text-muted-foreground line-through decoration-2">
                        {formatPrice(item.originalPrice)}
                      </span>
                    </div>

                    {/* Product Details */}
                    <div className="flex items-center space-x-3">
                      <div className="bg-muted/60 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground">
                        Size: {item.size}
                      </div>
                      <div className="bg-muted/60 px-3 py-1.5 rounded-lg text-xs font-medium text-muted-foreground">
                        {item.color}
                      </div>
                    </div>

                    {/* Add to Cart Button */}
                    <button className="w-full bg-primary text-primary-foreground py-3.5 rounded-xl hover:bg-primary/90 transition-all duration-300 flex items-center justify-center space-x-2 tracking-wide font-medium hover:shadow-lg hover:shadow-primary/20 group/cart">
                      <ShoppingCart className="w-4 h-4 group-hover/cart:scale-110 transition-transform" />
                      <span>Add to Cart</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Continue Shopping Section */}
          {wishlistItems.length > 0 && (
            <div className="text-center mt-20 pt-12 border-t border-border/30">
              <p className="text-muted-foreground mb-6 text-lg">
                Looking for something else?
              </p>
              <Link 
                to="/" 
                className="inline-flex items-center text-primary hover:text-primary/80 transition-colors font-medium tracking-wide story-link"
              >
                Continue Shopping
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;