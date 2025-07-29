import { Truck, Clock, MapPin, Shield, Package, CreditCard } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Shipping Information</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Fast, reliable, and secure delivery across India. Learn about our shipping options, 
            delivery times, and policies.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Truck className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Standard Delivery</h3>
            <p className="text-muted-foreground mb-4">3-5 business days</p>
            <p className="text-2xl font-bold text-primary">FREE</p>
            <p className="text-sm text-muted-foreground">On orders above ₹499</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Express Delivery</h3>
            <p className="text-muted-foreground mb-4">1-2 business days</p>
            <p className="text-2xl font-bold text-primary">₹99</p>
            <p className="text-sm text-muted-foreground">Available in major cities</p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Same Day Delivery</h3>
            <p className="text-muted-foreground mb-4">Within 24 hours</p>
            <p className="text-2xl font-bold text-primary">₹199</p>
            <p className="text-sm text-muted-foreground">Select locations only</p>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Delivery Areas</h2>
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Pan-India Delivery</h3>
                  <p className="text-muted-foreground">
                    We deliver to all states and union territories across India, 
                    including remote areas through our extensive logistics network.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Secure Packaging</h3>
                  <p className="text-muted-foreground">
                    All products are carefully packed with protective materials 
                    to ensure they reach you in perfect condition.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CreditCard className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Cash on Delivery</h3>
                  <p className="text-muted-foreground">
                    Pay when your order arrives. COD available for orders up to ₹50,000 
                    with additional charges of ₹40.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Delivery Timeline</h2>
            <div className="bg-muted/50 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Metro Cities</span>
                  <span className="text-primary font-semibold">1-3 days</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Tier 1 Cities</span>
                  <span className="text-primary font-semibold">2-4 days</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Tier 2 Cities</span>
                  <span className="text-primary font-semibold">3-5 days</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-border">
                  <span className="font-medium">Tier 3 Cities</span>
                  <span className="text-primary font-semibold">4-6 days</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-medium">Remote Areas</span>
                  <span className="text-primary font-semibold">5-8 days</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Shipping Policies */}
        <div className="bg-card border border-border rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Shipping Policies</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Order Processing</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Orders are processed within 24 hours of placement</li>
                <li>• Orders placed on weekends are processed on Monday</li>
                <li>• You'll receive tracking information via SMS and email</li>
                <li>• Order modifications possible within 1 hour of placement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Shipping Charges</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Free shipping on orders above ₹499</li>
                <li>• Standard shipping: ₹50 for orders below ₹499</li>
                <li>• Express delivery: ₹99 additional charge</li>
                <li>• COD charges: ₹40 (applicable on COD orders)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Delivery Attempts</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• 3 delivery attempts will be made</li>
                <li>• Customer will be contacted before each attempt</li>
                <li>• Package returns to warehouse after failed attempts</li>
                <li>• Re-delivery charges may apply for subsequent attempts</li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Special Items</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Large items may require special handling</li>
                <li>• Fragile items are packed with extra care</li>
                <li>• Installation services available for select products</li>
                <li>• Age verification required for certain products</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;