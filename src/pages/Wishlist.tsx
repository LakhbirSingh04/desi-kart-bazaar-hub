import { Heart, ShoppingCart, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background pt-8 pb-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-2xl font-light tracking-wide">WISHLIST</h1>
            <span className="text-sm text-muted-foreground">
              {wishlistItems.length} {wishlistItems.length === 1 ? 'item' : 'items'}
            </span>
          </div>

          {wishlistItems.length === 0 ? (
            <div className="text-center py-16">
              <Heart className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-muted-foreground mb-4">Your wishlist is empty</p>
              <Link 
                to="/" 
                className="inline-block bg-foreground text-background px-8 py-3 hover:bg-foreground/90 transition-colors tracking-wide text-sm font-medium"
              >
                CONTINUE SHOPPING
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wishlistItems.map((item) => (
                <div key={item.id} className="group relative bg-background border border-border hover:shadow-lg transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>

                  <div className="p-4">
                    <Link to={`/product/${item.id}`}>
                      <h3 className="font-medium tracking-wide mb-2 group-hover:text-muted-foreground transition-colors">
                        {item.name}
                      </h3>
                    </Link>
                    
                    <div className="flex items-center space-x-2 mb-3">
                      <span className="text-lg font-medium">{formatPrice(item.price)}</span>
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    </div>

                    <div className="flex items-center space-x-4 text-xs text-muted-foreground mb-4">
                      <span>Size: {item.size}</span>
                      <span>Color: {item.color}</span>
                    </div>

                    <button className="w-full bg-foreground text-background py-3 hover:bg-foreground/90 transition-colors flex items-center justify-center space-x-2 tracking-wide text-sm font-medium">
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