import { useState } from 'react';
import { CreditCard, Truck, MapPin, Phone, Mail } from 'lucide-react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    email: '',
    phone: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    state: '',
    pincode: '',
    paymentMethod: 'razorpay'
  });

  const [isPincodeValid, setIsPincodeValid] = useState(true);

  const cartItems = [
    { id: '1', title: 'Samsung Galaxy S24 Ultra 5G', price: 124999, quantity: 1 },
    { id: '2', title: 'Sony WH-1000XM5 Headphones', price: 29990, quantity: 2 }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const shipping = 0;
  const tax = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + tax;

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  const validatePincode = (pincode: string) => {
    const isValid = /^[1-9][0-9]{5}$/.test(pincode);
    setIsPincodeValid(isValid);
    return isValid;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Process order
    console.log('Order placed:', formData);
  };

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Contact Information */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Mail className="w-5 h-5 mr-2" />
                  Contact Information
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="email"
                    placeholder="Email address"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="p-3 border border-border rounded-md bg-background"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="p-3 border border-border rounded-md bg-background"
                    required
                  />
                </div>
              </div>

              {/* Shipping Address */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <Truck className="w-5 h-5 mr-2" />
                  Shipping Address
                </h3>
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First name"
                      value={formData.firstName}
                      onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                      className="p-3 border border-border rounded-md bg-background"
                      required
                    />
                    <input
                      type="text"
                      placeholder="Last name"
                      value={formData.lastName}
                      onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                      className="p-3 border border-border rounded-md bg-background"
                      required
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={(e) => setFormData({...formData, address: e.target.value})}
                    className="w-full p-3 border border-border rounded-md bg-background"
                    required
                  />
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <input
                      type="text"
                      placeholder="City"
                      value={formData.city}
                      onChange={(e) => setFormData({...formData, city: e.target.value})}
                      className="p-3 border border-border rounded-md bg-background"
                      required
                    />
                    <select
                      value={formData.state}
                      onChange={(e) => setFormData({...formData, state: e.target.value})}
                      className="p-3 border border-border rounded-md bg-background"
                      required
                    >
                      <option value="">Select State</option>
                      <option value="Andhra Pradesh">Andhra Pradesh</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Delhi">Delhi</option>
                    </select>
                    <div>
                      <input
                        type="text"
                        placeholder="PIN Code"
                        value={formData.pincode}
                        onChange={(e) => {
                          setFormData({...formData, pincode: e.target.value});
                          if (e.target.value.length === 6) {
                            validatePincode(e.target.value);
                          }
                        }}
                        className={`w-full p-3 border rounded-md bg-background ${
                          isPincodeValid ? 'border-border' : 'border-destructive'
                        }`}
                        required
                      />
                      {!isPincodeValid && (
                        <p className="text-destructive text-sm mt-1">Invalid PIN code</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-lg font-semibold mb-4 flex items-center">
                  <CreditCard className="w-5 h-5 mr-2" />
                  Payment Method
                </h3>
                <div className="space-y-3">
                  <label className="flex items-center p-3 border border-border rounded-md cursor-pointer hover:bg-muted/50">
                    <input
                      type="radio"
                      name="payment"
                      value="razorpay"
                      checked={formData.paymentMethod === 'razorpay'}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-medium">Razorpay (Recommended)</p>
                      <p className="text-sm text-muted-foreground">Credit/Debit Cards, UPI, Net Banking, Wallets</p>
                    </div>
                  </label>
                  <label className="flex items-center p-3 border border-border rounded-md cursor-pointer hover:bg-muted/50">
                    <input
                      type="radio"
                      name="payment"
                      value="cod"
                      checked={formData.paymentMethod === 'cod'}
                      onChange={(e) => setFormData({...formData, paymentMethod: e.target.value})}
                      className="mr-3"
                    />
                    <div>
                      <p className="font-medium">Cash on Delivery</p>
                      <p className="text-sm text-muted-foreground">Pay when your order is delivered</p>
                    </div>
                  </label>
                </div>
              </div>
            </form>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6 sticky top-4">
              <h3 className="text-lg font-semibold mb-6">Order Summary</h3>
              
              {/* Items */}
              <div className="space-y-4 mb-6">
                {cartItems.map(item => (
                  <div key={item.id} className="flex justify-between">
                    <div>
                      <p className="font-medium text-sm">{item.title}</p>
                      <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                    </div>
                    <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
                  </div>
                ))}
              </div>

              <hr className="border-border mb-4" />

              {/* Totals */}
              <div className="space-y-2 mb-6">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span className="text-success">FREE</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax (GST)</span>
                  <span>{formatPrice(tax)}</span>
                </div>
                <hr className="border-border" />
                <div className="flex justify-between text-lg font-bold">
                  <span>Total</span>
                  <span>{formatPrice(total)}</span>
                </div>
              </div>

              {/* Place Order Button */}
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Place Order
              </button>

              {/* Security Note */}
              <div className="mt-4 p-3 bg-muted/50 rounded-lg">
                <p className="text-xs text-muted-foreground text-center">
                  🔒 Your payment information is secure and encrypted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;