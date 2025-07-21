import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, Shield, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';

const ProductDetail = () => {
  const { id } = useParams();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  const productId = parseInt(id || '1');
  const isWishlisted = isInWishlist(productId);

  const handleWishlistToggle = () => {
    const wishlistItem = {
      id: productId,
      name: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: 'M', // Default size
      color: 'Default'
    };

    if (isWishlisted) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Mock product data
  const product = {
    id: productId.toString(),
    title: 'Samsung Galaxy S24 Ultra 5G (Titanium Gray, 256GB)',
    price: 124999,
    originalPrice: 134999,
    discount: 7,
    rating: 4.5,
    reviews: 2547,
    inStock: true,
    stockCount: 12,
    images: [
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800',
      'https://images.unsplash.com/photo-1512499617640-c74ae3a79d37?w=800',
      'https://images.unsplash.com/photo-1574944985070-8f3ebc6b79d2?w=800',
      'https://images.unsplash.com/photo-1580910051074-3eb694886505?w=800'
    ],
    description: 'Experience the pinnacle of mobile innovation with the Samsung Galaxy S24 Ultra 5G. Featuring an advanced camera system, powerful Snapdragon processor, and stunning 6.8-inch Dynamic AMOLED display.',
    specifications: {
      'Display': '6.8" Dynamic AMOLED 2X, 3120 x 1440 pixels',
      'Processor': 'Qualcomm Snapdragon 8 Gen 3',
      'RAM': '12GB',
      'Storage': '256GB',
      'Camera': '200MP Main + 50MP Periscope + 10MP Telephoto + 12MP Ultra Wide',
      'Battery': '5000mAh with 45W Fast Charging',
      'OS': 'Android 14 with One UI 6.1'
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Rahul Sharma',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent phone! Camera quality is outstanding and battery life is great.',
      images: ['https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100']
    },
    {
      id: 2,
      name: 'Priya Patel',
      rating: 4,
      date: '2024-01-10',
      comment: 'Very fast performance, loving the display quality. Slightly expensive but worth it.',
      images: []
    }
  ];

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Images */}
          <div className="max-w-md mx-auto lg:max-w-none">
            <div className="relative mb-4">
              <div className="aspect-square max-w-sm mx-auto lg:max-w-md">
                <img
                  src={product.images[selectedImage]}
                  alt={product.title}
                  className="w-full h-full object-cover rounded-lg border border-border"
                />
              
                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-colors"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                
                {/* Image indicators */}
                {product.images.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-1">
                    {product.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedImage(index)}
                        className={`w-2 h-2 rounded-full transition-colors ${
                          selectedImage === index ? 'bg-foreground' : 'bg-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
            
            {/* Rating */}
            <div className="flex items-center mb-4">
              <div className="flex items-center">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="ml-1 font-medium">{product.rating}</span>
                <span className="ml-2 text-muted-foreground">
                  ({product.reviews.toLocaleString()} reviews)
                </span>
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="flex items-center space-x-3">
                <span className="text-3xl font-bold text-primary">
                  {formatPrice(product.price)}
                </span>
                <span className="text-xl text-muted-foreground line-through">
                  {formatPrice(product.originalPrice)}
                </span>
                <span className="bg-primary text-primary-foreground px-2 py-1 rounded text-sm font-semibold">
                  {product.discount}% OFF
                </span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">
                Inclusive of all taxes
              </p>
            </div>

            {/* Stock Status */}
            <div className="mb-6">
              {product.inStock ? (
                <div className="flex items-center text-success">
                  <div className="w-2 h-2 bg-success rounded-full mr-2"></div>
                  <span>In Stock ({product.stockCount} available)</span>
                </div>
              ) : (
                <div className="flex items-center text-destructive">
                  <div className="w-2 h-2 bg-destructive rounded-full mr-2"></div>
                  <span>Out of Stock</span>
                </div>
              )}
            </div>

            {/* Quantity Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Quantity</label>
              <div className="flex items-center space-x-3">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-muted"
                >
                  -
                </button>
                <span className="w-16 text-center font-medium">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="w-10 h-10 border border-border rounded-md flex items-center justify-center hover:bg-muted"
                >
                  +
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex space-x-4 mb-8">
              <button className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2">
                <ShoppingCart className="w-5 h-5" />
                <span>Add to Cart</span>
              </button>
              <button
                onClick={handleWishlistToggle}
                className={`p-3 border border-border rounded-lg hover:bg-muted transition-colors ${
                  isWishlisted ? 'bg-foreground text-background' : ''
                }`}
              >
                <Heart className={`w-5 h-5 ${isWishlisted ? 'fill-current' : ''}`} />
              </button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <Truck className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Free Delivery</p>
                  <p className="text-xs text-muted-foreground">Above ₹499</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <RotateCcw className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Easy Returns</p>
                  <p className="text-xs text-muted-foreground">30 days return</p>
                </div>
              </div>
              <div className="flex items-center space-x-3 p-4 bg-muted/50 rounded-lg">
                <Shield className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium text-sm">Warranty</p>
                  <p className="text-xs text-muted-foreground">1 year official</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs Section */}
        <div className="mt-16">
          <div className="border-b border-border">
            <nav className="flex space-x-8">
              {['description', 'specifications', 'reviews'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize ${
                    activeTab === tab
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="py-8">
            {activeTab === 'description' && (
              <div className="prose max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  {product.description}
                </p>
              </div>
            )}

            {activeTab === 'specifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {Object.entries(product.specifications).map(([key, value]) => (
                  <div key={key} className="flex justify-between p-4 bg-muted/50 rounded-lg">
                    <span className="font-medium">{key}</span>
                    <span className="text-muted-foreground">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="space-y-6">
                {reviews.map((review) => (
                  <div key={review.id} className="border border-border rounded-lg p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="font-medium">{review.name}</h4>
                        <div className="flex items-center mt-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < review.rating
                                  ? 'fill-yellow-400 text-yellow-400'
                                  : 'text-muted-foreground'
                              }`}
                            />
                          ))}
                        </div>
                      </div>
                      <span className="text-sm text-muted-foreground">{review.date}</span>
                    </div>
                    <p className="text-muted-foreground mb-4">{review.comment}</p>
                    {review.images.length > 0 && (
                      <div className="flex space-x-2">
                        {review.images.map((image, index) => (
                          <img
                            key={index}
                            src={image}
                            alt="Review"
                            className="w-16 h-16 object-cover rounded-md border border-border"
                          />
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;