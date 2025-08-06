import { Heart, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-light tracking-wide mb-4">MY WISHLIST</h1>
            <p className="text-muted-foreground mb-2">
              Save your favorite items for later
            </p>
            <span className="text-sm text-muted-foreground bg-muted px-3 py-1 rounded-full">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-24">
              <div className="bg-muted/30 w-32 h-32 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="w-16 h-16 text-muted-foreground" />
              </div>
              <h2 className="text-2xl font-light mb-4">Your wishlist is empty</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Start exploring our collection and add items you love to your wishlist
              </p>
              <Link 
                to="/" 
                className="inline-block bg-primary text-primary-foreground px-8 py-3 rounded-md hover:bg-primary/90 transition-colors tracking-wide text-sm font-medium"
              >
                EXPLORE PRODUCTS
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                  <div className="aspect-[3/4] overflow-hidden relative">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                  </div>
                  
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm p-2 rounded-full hover:bg-background shadow-lg transition-all duration-200 hover:scale-110"
                  >
                    <X className="w-4 h-4 text-muted-foreground" />
                  </button>

                  <div className="p-5">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-medium tracking-wide mb-3 group-hover:text-primary transition-colors line-clamp-2">
                        {item.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center space-x-3 mb-4">
                      <span className="text-xl font-semibold text-primary">{formatPrice(item.price)}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-5">
                      <span className="bg-muted px-2 py-1 rounded">Size: {item.size}</span>
                      <span className="bg-muted px-2 py-1 rounded">Color: {item.color}</span>
                    </div>

                    <button className="w-full bg-primary text-primary-foreground py-3 rounded-md hover:bg-primary/90 transition-all duration-200 flex items-center justify-center space-x-2 tracking-wide text-sm font-medium hover:shadow-lg">
                      <ShoppingCart className="w-4 h-4" />
                      <span>ADD TO CART</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;