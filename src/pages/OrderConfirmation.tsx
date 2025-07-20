import { CheckCircle, Download, Truck, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';

const OrderConfirmation = () => {
  const orderDetails = {
    orderId: 'ORD123456789',
    date: '2024-01-20',
    total: 184989,
    estimatedDelivery: '2024-01-25',
    paymentMethod: 'Razorpay',
    items: [
      { id: '1', title: 'Samsung Galaxy S24 Ultra 5G', price: 124999, quantity: 1 },
      { id: '2', title: 'Sony WH-1000XM5 Headphones', price: 29990, quantity: 2 }
    ]
  };

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4 max-w-2xl">
        {/* Success Header */}
        <div className="text-center mb-8">
          <CheckCircle className="w-16 h-16 text-success mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-success mb-2">Order Confirmed!</h1>
          <p className="text-muted-foreground">
            Thank you for your purchase. Your order has been confirmed and will be shipped soon.
          </p>
        </div>

        {/* Order Details Card */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Order #{orderDetails.orderId}</h2>
              <p className="text-muted-foreground">Placed on {orderDetails.date}</p>
            </div>
            <button className="flex items-center space-x-2 text-primary hover:text-primary/80">
              <Download className="w-4 h-4" />
              <span>Download Invoice</span>
            </button>
          </div>

          {/* Order Items */}
          <div className="space-y-4 mb-6">
            <h3 className="font-semibold">Items Ordered</h3>
            {orderDetails.items.map(item => (
              <div key={item.id} className="flex justify-between items-center py-3 border-b border-border last:border-b-0">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                </div>
                <p className="font-medium">{formatPrice(item.price * item.quantity)}</p>
              </div>
            ))}
          </div>

          {/* Total */}
          <div className="border-t border-border pt-4">
            <div className="flex justify-between text-lg font-bold">
              <span>Total Paid</span>
              <span>{formatPrice(orderDetails.total)}</span>
            </div>
            <p className="text-sm text-muted-foreground mt-1">
              Payment Method: {orderDetails.paymentMethod}
            </p>
          </div>
        </div>

        {/* Delivery Information */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <h3 className="font-semibold mb-4 flex items-center">
            <Truck className="w-5 h-5 mr-2" />
            Delivery Information
          </h3>
          <div className="flex items-center space-x-3 p-4 bg-success/10 border border-success/20 rounded-lg">
            <Calendar className="w-5 h-5 text-success" />
            <div>
              <p className="font-medium text-success">Estimated Delivery</p>
              <p className="text-sm text-success-foreground">{orderDetails.estimatedDelivery}</p>
            </div>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            You'll receive tracking information via email and SMS once your order is shipped.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to={`/track-order?orderId=${orderDetails.orderId}`}
            className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors text-center"
          >
            Track Your Order
          </Link>
          <Link
            to="/"
            className="flex-1 border border-border py-3 px-6 rounded-lg font-medium hover:bg-muted transition-colors text-center"
          >
            Continue Shopping
          </Link>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Need help with your order?
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <Link to="/contact" className="text-primary hover:underline">Contact Support</Link>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Call: 1800-123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderConfirmation;