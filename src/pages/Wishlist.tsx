import { Heart, ShoppingCart, X, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';

const Wishlist = () => {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  const handleAddToCart = (item: any) => {
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      originalPrice: item.originalPrice,
      image: item.image,
      size: item.size,
      color: item.color
    });
    removeFromWishlist(item.id);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-medium text-foreground mb-2">
            Wishlist
          </h1>
        </div>

        {wishlistItems.length === 0 ? (
          <div className="text-center py-20">
            <div className="mb-8">
              <Heart className="w-16 h-16 text-muted-foreground/40 mx-auto mb-4" />
            </div>
            <h2 className="text-xl font-medium mb-4">Your wishlist is empty</h2>
            <p className="text-muted-foreground mb-8">
              Save items you love to come back to them later.
            </p>
            <Link 
              to="/" 
              className="inline-flex items-center bg-primary text-primary-foreground px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Start Shopping
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {wishlistItems.map((item) => (
              <div 
                key={item.id} 
                className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container */}
                <div className="aspect-[3/4] bg-muted/20 relative overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromWishlist(item.id)}
                    className="absolute top-2 right-2 w-6 h-6 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <X className="w-3 h-3 text-muted-foreground hover:text-foreground" />
                  </button>

                  {/* Shopping Bag Icon */}
                  <button
                    onClick={() => handleAddToCart(item)}
                    className="absolute bottom-2 right-2 w-8 h-8 bg-background/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-background transition-colors"
                  >
                    <ShoppingCart className="w-4 h-4 text-foreground" />
                  </button>
                </div>

                {/* Product Info */}
                <div className="p-4">
                  <Link to={`/product/${item.id}`} className="block">
                    <h3 className="text-sm font-medium text-foreground mb-2 hover:text-primary transition-colors">
                      {item.name}
                    </h3>
                  </Link>
                  
                  <div className="text-base font-semibold text-foreground">
                    {formatPrice(item.price)}
                  </div>

                  {/* Color Indicator */}
                  <div className="flex items-center mt-2">
                    <div 
                      className="w-4 h-4 rounded-full border border-border" 
                      style={{ backgroundColor: item.color.toLowerCase() === 'white' ? '#ffffff' : item.color.toLowerCase() === 'black' ? '#000000' : item.color.toLowerCase() === 'blue' ? '#3b82f6' : '#94a3b8' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;