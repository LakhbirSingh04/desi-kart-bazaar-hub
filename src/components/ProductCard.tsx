import { Heart, Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

interface ProductCardProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  discount?: number;
  isBestseller?: boolean;
  inStock?: boolean;
}

const ProductCard = ({ 
  id, 
  title, 
  price, 
  originalPrice, 
  image, 
  rating, 
  reviews, 
  discount,
  isBestseller = false,
  inStock = true 
}: ProductCardProps) => {
  const [isWishlisted, setIsWishlisted] = useState(false);

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    // Add to cart logic here
    console.log(`Added product ${id} to cart`);
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    setIsWishlisted(!isWishlisted);
    console.log(`${isWishlisted ? 'Removed from' : 'Added to'} wishlist: ${id}`);
  };

  return (
    <div className="group relative bg-card border border-border rounded-lg overflow-hidden hover:shadow-lg transition-all duration-300">
      <Link to={`/product/${id}`}>
        {/* Badges */}
        <div className="absolute top-2 left-2 z-10 flex flex-col space-y-1">
          {discount && (
            <span className="bg-primary text-primary-foreground px-2 py-1 text-xs font-semibold rounded">
              {discount}% OFF
            </span>
          )}
          {isBestseller && (
            <span className="bg-accent text-accent-foreground px-2 py-1 text-xs font-semibold rounded">
              Bestseller
            </span>
          )}
          {!inStock && (
            <span className="bg-destructive text-destructive-foreground px-2 py-1 text-xs font-semibold rounded">
              Out of Stock
            </span>
          )}
        </div>

        {/* Wishlist button */}
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 z-10 p-2 bg-background/80 rounded-full hover:bg-background transition-colors"
        >
          <Heart
            className={`w-4 h-4 ${
              isWishlisted ? 'fill-primary text-primary' : 'text-muted-foreground'
            }`}
          />
        </button>

        {/* Product Image */}
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h3 className="font-medium text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {title}
          </h3>

          {/* Rating */}
          <div className="flex items-center mb-2">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-foreground ml-1">{rating}</span>
              <span className="text-sm text-muted-foreground ml-1">({reviews.toLocaleString()})</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2 mb-3">
            <span className="text-lg font-bold text-foreground">{formatPrice(price)}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                {formatPrice(originalPrice)}
              </span>
            )}
          </div>

        </div>
      </Link>
    </div>
  );
};

export default ProductCard;