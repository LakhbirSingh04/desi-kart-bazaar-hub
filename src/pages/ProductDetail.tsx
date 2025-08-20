import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, ShoppingCart, Truck, RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';
import { useWishlist } from '../contexts/WishlistContext';
import { useCart } from '../contexts/CartContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';

const ProductDetail = () => {
  const { id } = useParams();
  const { isInWishlist, addToWishlist, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  
  const productId = parseInt(id || '1');
  const isWishlisted = isInWishlist(productId);

  const handleWishlistToggle = () => {
    const wishlistItem = {
      id: productId,
      name: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize || product.sizes[0],
      color: selectedColor || product.colors[0]
    };

    if (isWishlisted) {
      removeFromWishlist(productId);
    } else {
      addToWishlist(wishlistItem);
    }
  };

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert('Please select a size');
      return;
    }
    
    const cartItem = {
      id: productId,
      name: product.title,
      price: product.price,
      originalPrice: product.originalPrice,
      image: product.images[0],
      size: selectedSize,
      color: selectedColor
    };
    addToCart(cartItem);
  };

  const nextImage = () => {
    setSelectedImage((prev) => (prev + 1) % product.images.length);
  };

  const prevImage = () => {
    setSelectedImage((prev) => (prev - 1 + product.images.length) % product.images.length);
  };

  // Mock clothing product data
  const product = {
    id: productId.toString(),
    title: 'Premium Cotton Crew Neck T-Shirt',
    brand: 'Urban Style',
    price: 1299,
    originalPrice: 1899,
    discount: 32,
    rating: 4.3,
    reviews: 847,
    inStock: true,
    stockCount: 24,
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'XXL'],
    colors: ['Black', 'White', 'Navy Blue', 'Maroon', 'Grey'],
    images: [
      'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800',
      'https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=800',
      'https://images.unsplash.com/photo-1562157873-818bc0726f68?w=800',
      'https://images.unsplash.com/photo-1583743814966-8936f37f4a13?w=800'
    ],
    productDetails: {
      'Main Material': '100% Premium Cotton',
      'Stretchability': 'Slightly Stretchable',
      'Fit Type': 'Regular Fit',
      'Quantity': '1 Piece',
      'Neckline': 'Crew Neck',
      'Sleeve Type': 'Regular Sleeve',
      'Sleeve Length': 'Short Sleeve',
      'Length': 'Regular',
      'Pattern': 'Solid',
      'Occasion': 'Casual & Daily Wear',
      'Season': 'All Season',
      'Fabric Quality': 'Premium Grade'
    },
    specifications: {
      'Care Instructions': 'Machine wash cold, tumble dry low',
      'Country of Origin': 'India',
      'Manufacturer': 'Urban Style Apparel Pvt Ltd',
      'Net Quantity': '1 N'
    }
  };

  const reviews = [
    {
      id: 1,
      name: 'Arjun Singh',
      rating: 5,
      date: '2024-01-20',
      comment: 'Amazing quality t-shirt! The fabric is super soft and the fit is perfect. Highly recommended!',
      images: ['https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=100']
    },
    {
      id: 2,
      name: 'Neha Gupta',
      rating: 4,
      date: '2024-01-18',
      comment: 'Good quality cotton t-shirt. Color is exactly as shown. Size L fits well.',
      images: []
    },
    {
      id: 3,
      name: 'Rohit Kumar',
      rating: 5,
      date: '2024-01-15',
      comment: 'Excellent value for money. Bought 3 different colors. Very comfortable!',
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
                  className="w-full h-full object-cover rounded-lg border border-border transition-all duration-500 ease-in-out"
                />
              
                {/* Navigation arrows */}
                {product.images.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-all duration-300 hover:scale-105"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-background/80 backdrop-blur-sm p-2 rounded-full hover:bg-background transition-all duration-300 hover:scale-105"
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
            <p className="text-primary font-medium mb-2">{product.brand}</p>
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


            {/* Size Selector */}
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2">Size</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors ${
                      selectedSize === size ? 'bg-foreground text-background' : ''
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
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
              <button 
                onClick={handleAddToCart}
                className="flex-1 bg-foreground text-background py-3 px-6 rounded-lg font-medium hover:bg-foreground/90 transition-colors flex items-center justify-center space-x-2"
              >
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
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
                  <p className="text-xs text-muted-foreground">7 days return</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Product Details Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold mb-6">Product Information</h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            {/* Product Details */}
            <AccordionItem value="details" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Product Details
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {Object.entries(product.productDetails).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted/30 rounded-md">
                      <span className="font-medium text-sm">{key}</span>
                      <span className="text-muted-foreground text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Size Guide */}
            <AccordionItem value="size-guide" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Size Guide
              </AccordionTrigger>
              <AccordionContent>
                <div className="pt-4">
                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-border rounded-lg">
                      <thead>
                        <tr className="bg-muted/50">
                          <th className="border border-border p-3 text-left">Size</th>
                          <th className="border border-border p-3 text-left">Chest (inches)</th>
                          <th className="border border-border p-3 text-left">Length (inches)</th>
                          <th className="border border-border p-3 text-left">Shoulder (inches)</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr><td className="border border-border p-3">XS</td><td className="border border-border p-3">34-36</td><td className="border border-border p-3">26</td><td className="border border-border p-3">16</td></tr>
                        <tr className="bg-muted/25"><td className="border border-border p-3">S</td><td className="border border-border p-3">36-38</td><td className="border border-border p-3">27</td><td className="border border-border p-3">17</td></tr>
                        <tr><td className="border border-border p-3">M</td><td className="border border-border p-3">38-40</td><td className="border border-border p-3">28</td><td className="border border-border p-3">18</td></tr>
                        <tr className="bg-muted/25"><td className="border border-border p-3">L</td><td className="border border-border p-3">40-42</td><td className="border border-border p-3">29</td><td className="border border-border p-3">19</td></tr>
                        <tr><td className="border border-border p-3">XL</td><td className="border border-border p-3">42-44</td><td className="border border-border p-3">30</td><td className="border border-border p-3">20</td></tr>
                        <tr className="bg-muted/25"><td className="border border-border p-3">XXL</td><td className="border border-border p-3">44-46</td><td className="border border-border p-3">31</td><td className="border border-border p-3">21</td></tr>
                      </tbody>
                    </table>
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    💡 Tip: For the best fit, measure yourself and compare with our size chart. If you're between sizes, we recommend sizing up.
                  </p>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Fabric & Care */}
            <AccordionItem value="fabric-care" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Fabric & Care Instructions
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="space-y-4">
                    <h4 className="font-medium">Fabric Features</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Premium 100% cotton fabric</li>
                      <li>• Pre-shrunk for lasting fit</li>
                      <li>• Breathable and moisture-wicking</li>
                      <li>• Soft texture that improves with wash</li>
                      <li>• Durable construction with reinforced seams</li>
                      <li>• Fade-resistant colors</li>
                    </ul>
                  </div>
                  <div className="space-y-4">
                    <h4 className="font-medium">Care Instructions</h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Machine wash in cold water (30°C)</li>
                      <li>• Use mild detergent, avoid bleach</li>
                      <li>• Tumble dry on low heat or air dry</li>
                      <li>• Iron on medium heat if needed</li>
                      <li>• Do not dry clean</li>
                      <li>• Wash dark colors separately</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Manufacturing & Specifications */}
            <AccordionItem value="specifications" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Manufacturing & Specifications
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between p-3 bg-muted/30 rounded-md">
                      <span className="font-medium text-sm">{key}</span>
                      <span className="text-muted-foreground text-sm">{value}</span>
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Delivery & Returns */}
            <AccordionItem value="delivery-returns" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Delivery & Returns
              </AccordionTrigger>
              <AccordionContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center">
                      <Truck className="w-5 h-5 mr-2 text-primary" />
                      Delivery Information
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• Free delivery on orders above ₹499</li>
                      <li>• Standard delivery: 3-5 business days</li>
                      <li>• Express delivery: 1-2 business days (₹99)</li>
                      <li>• Same day delivery available in select cities</li>
                      <li>• Cash on delivery available</li>
                      <li>• Order tracking available</li>
                    </ul>
                  </div>
                  <div className="p-4 bg-muted/30 rounded-lg">
                    <h4 className="font-medium mb-3 flex items-center">
                      <RotateCcw className="w-5 h-5 mr-2 text-primary" />
                      Return Policy
                    </h4>
                    <ul className="space-y-2 text-muted-foreground text-sm">
                      <li>• 7-day easy return policy</li>
                      <li>• Free returns for defective products</li>
                      <li>• Tags must be attached for returns</li>
                      <li>• Refund processed within 5-7 business days</li>
                      <li>• Exchange available for size/fit issues</li>
                      <li>• Return pickup available</li>
                    </ul>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Customer Reviews */}
            <AccordionItem value="reviews" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-lg font-semibold hover:no-underline">
                Customer Reviews ({reviews.length})
              </AccordionTrigger>
              <AccordionContent>
                <div className="space-y-6 pt-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
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
                      <p className="text-muted-foreground text-sm mb-3">{review.comment}</p>
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
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;