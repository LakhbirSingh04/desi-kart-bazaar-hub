import { RotateCcw, CheckCircle, XCircle, Clock, Package } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Returns & Refunds</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We want you to be completely satisfied with your purchase. 
            Learn about our hassle-free return and refund policies.
          </p>
        </div>

        {/* Return Policy Overview */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">7-Day Return</h3>
            <p className="text-muted-foreground">
              Easy returns within 7 days of delivery for most items
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Package className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Free Pickup</h3>
            <p className="text-muted-foreground">
              Free doorstep pickup for returns and exchanges
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6 text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <RotateCcw className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Quick Refund</h3>
            <p className="text-muted-foreground">
              Refunds processed within 3-5 business days
            </p>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">How to Return an Item</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                1
              </div>
              <h3 className="font-semibold mb-2">Request Return</h3>
              <p className="text-sm text-muted-foreground">
                Go to "My Orders" and click "Return" next to the item
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                2
              </div>
              <h3 className="font-semibold mb-2">Schedule Pickup</h3>
              <p className="text-sm text-muted-foreground">
                Choose a convenient time slot for pickup
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                3
              </div>
              <h3 className="font-semibold mb-2">Pack & Handover</h3>
              <p className="text-sm text-muted-foreground">
                Pack the item in original packaging and hand over to our partner
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">
                4
              </div>
              <h3 className="font-semibold mb-2">Get Refund</h3>
              <p className="text-sm text-muted-foreground">
                Receive refund within 3-5 business days after quality check
              </p>
            </div>
          </div>
        </div>

        {/* Return Categories */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">What Can Be Returned?</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Clothing & Fashion</h3>
                  <p className="text-muted-foreground">
                    All clothing items with tags intact. Must be unworn and in original condition.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Electronics</h3>
                  <p className="text-muted-foreground">
                    Unopened items with original packaging, accessories, and warranty cards.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Home & Lifestyle</h3>
                  <p className="text-muted-foreground">
                    Unused items in original packaging. Some assembly may be required for return.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-green-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Books & Media</h3>
                  <p className="text-muted-foreground">
                    Physical books and media in original condition without damage.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6">Non-Returnable Items</h2>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Personal Care</h3>
                  <p className="text-muted-foreground">
                    Cosmetics, skincare, and personal hygiene products for safety reasons.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Food & Beverages</h3>
                  <p className="text-muted-foreground">
                    Perishable items and consumables cannot be returned for health reasons.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Customized Products</h3>
                  <p className="text-muted-foreground">
                    Personalized or made-to-order items cannot be returned.
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <XCircle className="w-6 h-6 text-red-600 mt-1" />
                <div>
                  <h3 className="font-semibold mb-2">Digital Products</h3>
                  <p className="text-muted-foreground">
                    Downloaded software, e-books, and digital content.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Refund Information */}
        <div className="bg-muted/50 rounded-lg p-8">
          <h2 className="text-3xl font-bold mb-6">Refund Information</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Refund Timeline</h3>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span>Credit/Debit Cards</span>
                  <span className="text-primary font-semibold">3-5 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Net Banking</span>
                  <span className="text-primary font-semibold">3-5 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>UPI</span>
                  <span className="text-primary font-semibold">1-2 business days</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Wallet Refund</span>
                  <span className="text-primary font-semibold">Instant</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">Important Notes</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Refunds are processed to the original payment method</li>
                <li>• Bank processing times may vary</li>
                <li>• For COD orders, refund via bank transfer</li>
                <li>• Shipping charges are non-refundable unless item is defective</li>
                <li>• Quality check required before refund processing</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;