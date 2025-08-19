import { ShoppingCart, Minus, Plus, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../contexts/CartContext';

const Cart = () => {
  const { cartItems, updateQuantity, removeFromCart, cartTotal } = useCart();

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  const subtotal = cartTotal;
  const shipping = subtotal > 499 ? 0 : 99;
  const tax = Math.round(subtotal * 0.18); // 18% GST
  const total = subtotal + shipping + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4 text-center">
          <ShoppingCart className="w-24 h-24 text-muted-foreground mx-auto mb-8" />
          <h2 className="text-3xl font-bold mb-4">Your cart is empty</h2>
          <p className="text-muted-foreground mb-8">
            Looks like you haven't added anything to your cart yet.
          </p>
          <Link
            to="/"
            className="bg-foreground text-background px-8 py-3 rounded-lg font-medium hover:bg-foreground/90 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-xl font-bold mb-6">Shopping Cart ({cartItems.length} items)</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}-${item.color}`} className="bg-card border border-border rounded-lg p-4 shadow-sm">
                <div className="flex gap-4">
                  {/* Product Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 flex-shrink-0">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover rounded-md"
                    />
                  </div>

                  {/* Product Details */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-base sm:text-lg mb-2 truncate">{item.name}</h3>
                    
                    <div className="flex flex-wrap gap-2 text-xs text-muted-foreground mb-3">
                      <span className="bg-muted px-2 py-1 rounded">Size: {item.size}</span>
                      <span className="bg-muted px-2 py-1 rounded">Color: {item.color}</span>
                    </div>
                    
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-lg font-bold text-primary">
                        {formatPrice(item.price)}
                      </span>
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(item.originalPrice)}
                      </span>
                    </div>

                    <div className="flex items-center justify-between gap-4">
                      {/* Quantity Controls */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-medium">Qty:</span>
                        <div className="flex items-center border border-border rounded">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="p-1.5 hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="px-3 py-1.5 text-sm font-medium">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="p-1.5 hover:bg-muted transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-destructive hover:text-destructive/80 transition-colors p-1"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Checkout Section */}
          <div className="lg:col-span-1">
            <div className="sticky top-4">
              {/* Minimalist Total & Checkout */}
              <div className="flex items-center justify-between gap-6 p-6 bg-background/80 backdrop-blur-sm rounded-2xl border border-border/50">
                <div>
                  <p className="text-sm text-muted-foreground font-medium">Total</p>
                  <p className="text-2xl font-bold text-foreground">{formatPrice(total)}</p>
                </div>
                <Link
                  to="/checkout"
                  className="bg-foreground text-background px-8 py-3 rounded-xl font-semibold hover:bg-foreground/90 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
                >
                  Checkout
                </Link>
              </div>

              {/* Free Shipping Notice */}
              {subtotal < 499 && (
                <div className="mt-4 p-4 bg-gradient-to-r from-primary/5 to-transparent rounded-xl border-l-2 border-primary">
                  <p className="text-sm text-primary font-medium">
                    Add {formatPrice(499 - subtotal)} more for free shipping
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;