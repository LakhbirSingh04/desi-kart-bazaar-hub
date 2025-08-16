import { RotateCcw, CheckCircle, XCircle, Clock, Package } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Returns & Refunds Policy</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We want you to be completely satisfied with your purchase. 
            Learn about our hassle-free return and refund policies.
          </p>
        </div>

        {/* Return Policy Overview */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Returns, Refunds, Cancellations</h2>
          <h3 className="text-2xl font-semibold mb-6">No-Questions-Asked Return Policy</h3>
          <p className="text-muted-foreground mb-8 text-lg">
            We believe in making your shopping experience as stress-free as possible, ensuring your complete satisfaction with every purchase. 
            That's why we are thrilled to introduce our brand-new 10-Day No Questions Asked Return Policy. 
            Here's all you need to know about our hassle-free return policy:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-muted/30 border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">10-Day Return</h3>
              <p className="text-muted-foreground">
                Easy returns within 10 days of delivery for most items
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Free Pickup</h3>
              <p className="text-muted-foreground">
                Free doorstep pickup for returns and exchanges
              </p>
            </div>

            <div className="bg-muted/30 border border-border rounded-lg p-6 text-center">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <RotateCcw className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">Quick Refund</h3>
              <p className="text-muted-foreground">
                Refunds processed within 7 business days
              </p>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Easy Returns Process</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Raise Return Request</h3>
              <p className="text-sm text-muted-foreground">
                Raise a return/replacement request within 10 days from the date of delivery. 
                Please raise a request here with order and contact details.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Review Period</h3>
              <p className="text-sm text-muted-foreground">
                Give us 3 working days to review your return request.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Pickup Arrangement</h3>
              <p className="text-sm text-muted-foreground">
                After reviewing your return request, we will send our courier partner to pick up the products delivered to you.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Self-Ship Option</h3>
              <p className="text-sm text-muted-foreground">
                In case our reverse pickup service is not available at your location, you will need to self-ship the product via any reliable courier partner. 
                We will reimburse the courier charges, either in your bank account or UPI.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">
                5
              </div>
              <h3 className="font-semibold mb-2">Refund Processing</h3>
              <p className="text-sm text-muted-foreground">
                After your product(s) is received, we will initiate the refund accordingly.
              </p>
            </div>
          </div>
        </div>

        {/* Refund Information */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
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

        {/* Shipping Section */}
        <div className="bg-card border border-border rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6">Shipping</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">What is the cost of shipping?</h3>
              <p className="text-muted-foreground mb-6">
                A shipping charge is applicable to all orders under Rs. 499.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">How long will it take for the order to reach me?</h3>
              <p className="text-muted-foreground mb-4">
                Please refer to the order details page for estimated shipping and delivery timelines for your orders. 
                From the time of shipping, it takes 7-10 days for orders to reach you.
              </p>
              <p className="text-muted-foreground mb-6">
                If you have placed an order with multiple items, please note that your items may arrive in multiple shipments. 
                The estimated delivery times are indicative, and, on some occasions, there might be some unavoidable delays beyond our control. 
                We will keep you informed in case of any delays.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-4">What can I do if my order dispatch is delayed?</h3>
              <p className="text-muted-foreground mb-6">
                We will try our best to get your products to you within the estimated delivery times. 
                If the package has not reached you by the expected delivery date, please write to us at contact page - Contact 
                and we will try our best to resolve your issues.
              </p>
              
              <h3 className="text-xl font-semibold mb-4">My order has been shipped. Can I track it?</h3>
              <p className="text-muted-foreground mb-4">
                Once your order has been dispatched, you will receive an email or SMS with the details of the tracking number 
                and the courier company that is processing your order.
              </p>
              <p className="text-muted-foreground">
                Also, you can go to My Accounts → Orders and track order status from the details page. 
                You can track the status of your package 24 hours after your order is dispatched from our warehouse.
              </p>
            </div>
          </div>
        </div>

        {/* Additional Return Information */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">How are returns processed?</h3>
            <p className="text-muted-foreground mb-4">
              Once you request to return a product, a pickup is organised for the item. Our courier partners will come to pick up the item 
              within 5-7 business days after your return request has been received. This item is then brought back to our warehouse and a refund is initiated.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Can I cancel my order?</h3>
            <p className="text-muted-foreground mb-4">
              Please email us at [company email] with the heading "ORDER CANCELLATION", and we will help you in cancelling the order.
            </p>
            <p className="text-sm text-muted-foreground">
              **[company name] reserves the right to cancel any order without pre-confirming the customer at any time and may verify any order 
              before shipping the same to the customer that may include having a verbal or written confirmation from the customer.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">How will I receive the refund?</h3>
            <p className="text-muted-foreground">
              In case of prepaid orders, money will be returned to the bank account/credit/debit card or where the payment was made from 
              within 7 business working days. For Cash on Delivery orders customers will be required to provide bank details where they would like to receive the refund.
            </p>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">Refund Timeline</h3>
            <p className="text-muted-foreground mb-4">
              We will process your refund within 7 business days in case of cancellation of an order. In case of returns, we will refund the money 
              after the product has been received by our warehouse and post completion of quality check.
            </p>
            <p className="text-muted-foreground">
              Please note, this entire process takes 2 weeks after the return has been picked up.
            </p>
          </div>
        </div>

        <div className="bg-muted/50 rounded-lg p-6 mb-16">
          <h3 className="text-xl font-semibold mb-4">Can I return part of my order?</h3>
          <p className="text-muted-foreground">
            Yes. You can return any products that are eligible for returns within 10 days of delivery.
          </p>
        </div>

      </div>
    </div>
  );
};

export default Returns;