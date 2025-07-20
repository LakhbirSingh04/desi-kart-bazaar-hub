import { useState } from 'react';
import { Search, Package, Truck, CheckCircle, MapPin } from 'lucide-react';

const OrderTracking = () => {
  const [orderId, setOrderId] = useState('');
  const [trackingData, setTrackingData] = useState(null);

  const mockTrackingData = {
    orderId: 'ORD123456789',
    status: 'In Transit',
    estimatedDelivery: '2024-01-25',
    currentLocation: 'Delhi Sorting Facility',
    timeline: [
      {
        status: 'Order Placed',
        date: '2024-01-20',
        time: '10:30 AM',
        completed: true,
        description: 'Your order has been confirmed'
      },
      {
        status: 'Payment Confirmed',
        date: '2024-01-20',
        time: '10:32 AM',
        completed: true,
        description: 'Payment has been processed successfully'
      },
      {
        status: 'Order Shipped',
        date: '2024-01-21',
        time: '2:15 PM',
        completed: true,
        description: 'Your order has been shipped from our warehouse'
      },
      {
        status: 'In Transit',
        date: '2024-01-22',
        time: '9:00 AM',
        completed: true,
        description: 'Package is on the way to your delivery address'
      },
      {
        status: 'Out for Delivery',
        date: '2024-01-25',
        time: 'Expected',
        completed: false,
        description: 'Package will be delivered today'
      },
      {
        status: 'Delivered',
        date: '2024-01-25',
        time: 'Expected',
        completed: false,
        description: 'Package delivered successfully'
      }
    ],
    items: [
      {
        id: '1',
        name: 'Samsung Galaxy S24 Ultra 5G',
        quantity: 1,
        price: 124999,
        image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200'
      }
    ],
    shippingAddress: {
      name: 'John Doe',
      address: '123 Main Street, Bangalore, Karnataka 560001',
      phone: '+91 9876543210'
    }
  };

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (orderId) {
      setTrackingData(mockTrackingData);
    }
  };

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8 text-center">Track Your Order</h1>

        {/* Search Form */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <form onSubmit={handleTrack} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <input
                type="text"
                value={orderId}
                onChange={(e) => setOrderId(e.target.value)}
                placeholder="Enter your order ID (e.g., ORD123456789)"
                className="w-full p-3 border border-border rounded-md bg-background"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-primary-foreground px-8 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors flex items-center space-x-2"
            >
              <Search className="w-4 h-4" />
              <span>Track Order</span>
            </button>
          </form>
        </div>

        {trackingData && (
          <div className="space-y-8">
            {/* Order Status Overview */}
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6">
                <div>
                  <h2 className="text-2xl font-semibold mb-2">
                    Order #{trackingData.orderId}
                  </h2>
                  <div className="flex items-center space-x-4">
                    <span className="bg-warning text-warning-foreground px-3 py-1 rounded-full text-sm font-medium">
                      {trackingData.status}
                    </span>
                    <span className="text-muted-foreground">
                      Current Location: {trackingData.currentLocation}
                    </span>
                  </div>
                </div>
                <div className="text-right mt-4 md:mt-0">
                  <p className="text-sm text-muted-foreground">Estimated Delivery</p>
                  <p className="text-lg font-semibold text-success">
                    {trackingData.estimatedDelivery}
                  </p>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="relative">
                <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-muted">
                  <div 
                    className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-primary transition-all duration-500"
                    style={{ width: '66%' }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Order Timeline</h3>
              <div className="space-y-6">
                {trackingData.timeline.map((event, index) => (
                  <div key={index} className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      event.completed 
                        ? 'bg-success text-success-foreground' 
                        : 'bg-muted text-muted-foreground'
                    }`}>
                      {event.completed ? (
                        <CheckCircle className="w-4 h-4" />
                      ) : (
                        <div className="w-2 h-2 bg-current rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                        <h4 className={`font-medium ${
                          event.completed ? 'text-foreground' : 'text-muted-foreground'
                        }`}>
                          {event.status}
                        </h4>
                        <span className={`text-sm ${
                          event.completed ? 'text-muted-foreground' : 'text-muted-foreground'
                        }`}>
                          {event.date} {event.time !== 'Expected' && `at ${event.time}`}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {event.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Order Items */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-6">Items in this Order</h3>
              <div className="space-y-4">
                {trackingData.items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(item.price)}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Shipping Address */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <MapPin className="w-5 h-5 mr-2" />
                Delivery Address
              </h3>
              <div>
                <p className="font-medium">{trackingData.shippingAddress.name}</p>
                <p className="text-muted-foreground">{trackingData.shippingAddress.address}</p>
                <p className="text-muted-foreground">{trackingData.shippingAddress.phone}</p>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-muted/50 border border-border rounded-lg p-6 text-center">
              <h3 className="font-semibold mb-2">Need Help?</h3>
              <p className="text-muted-foreground mb-4">
                If you have any questions about your order, our customer support team is here to help.
              </p>
              <div className="flex justify-center space-x-4">
                <button className="bg-primary text-primary-foreground px-6 py-2 rounded-md hover:bg-primary/90 transition-colors">
                  Chat with Support
                </button>
                <span className="flex items-center text-muted-foreground">
                  📞 1800-123-4567
                </span>
              </div>
            </div>
          </div>
        )}

        {!trackingData && (
          <div className="text-center py-12">
            <Package className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Enter your order ID above to track your package</h3>
            <p className="text-muted-foreground">
              You can find your order ID in your order confirmation email
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderTracking;