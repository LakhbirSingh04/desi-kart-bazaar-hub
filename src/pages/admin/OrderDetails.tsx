import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, User, MapPin, Phone, Mail, CreditCard, Package, Truck, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const OrderDetails = () => {
  const { orderId } = useParams();
  const { toast } = useToast();
  
  // Mock order data - in real app, this would come from API
  const [orderData] = useState({
    id: 'ORD123456789',
    customer: {
      name: 'John Doe',
      email: 'john.doe@email.com',
      phone: '+91 9876543210',
      address: {
        street: '123 MG Road',
        city: 'Bangalore',
        state: 'Karnataka',
        zipCode: '560001',
        country: 'India'
      }
    },
    items: [
      {
        id: 1,
        name: 'Premium Cotton Shirt',
        size: 'L',
        color: 'Blue',
        quantity: 2,
        price: 1999,
        image: '/placeholder.svg'
      },
      {
        id: 2,
        name: 'Formal Trousers',
        size: '32',
        color: 'Black',
        quantity: 1,
        price: 2499,
        image: '/placeholder.svg'
      }
    ],
    totalAmount: 6497,
    orderDate: '2024-01-20',
    status: 'Processing',
    paymentStatus: 'Paid',
    paymentMethod: 'Credit Card',
    shippingStatus: 'Preparing',
    trackingNumber: 'TRK123456789'
  });

  const [shippingStatus, setShippingStatus] = useState(orderData.shippingStatus);

  const handleStatusUpdate = (newStatus: string) => {
    setShippingStatus(newStatus);
    toast({
      title: "Status Updated",
      description: `Order status changed to ${newStatus}`,
    });
  };

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Paid': return 'text-success bg-success/10';
      case 'Pending': return 'text-warning bg-warning/10';
      case 'Failed': return 'text-destructive bg-destructive/10';
      case 'Shipped': return 'text-info bg-info/10';
      case 'Delivered': return 'text-success bg-success/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-4 mb-8">
          <Link to="/admin" className="text-muted-foreground hover:text-foreground">
            <ArrowLeft className="w-6 h-6" />
          </Link>
          <div>
            <h1 className="text-3xl font-bold">Order Details</h1>
            <p className="text-muted-foreground">Order #{orderData.id}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Order Items */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6">Order Items</h3>
              <div className="space-y-4">
                {orderData.items.map((item) => (
                  <div key={item.id} className="flex gap-4 p-4 border border-border rounded-md">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div className="flex-1">
                      <h4 className="font-medium">{item.name}</h4>
                      <p className="text-sm text-muted-foreground">Size: {item.size} | Color: {item.color}</p>
                      <p className="text-sm text-muted-foreground">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatPrice(item.price)}</p>
                      <p className="text-sm text-muted-foreground">each</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-border mt-6 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">Total Amount:</span>
                  <span className="text-xl font-bold">{formatPrice(orderData.totalAmount)}</span>
                </div>
              </div>
            </div>

            {/* Customer Information */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
                <User className="w-5 h-5" />
                Customer Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium mb-2">Contact Details</h4>
                  <div className="space-y-2 text-sm">
                    <p className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {orderData.customer.name}
                    </p>
                    <p className="flex items-center gap-2">
                      <Mail className="w-4 h-4" />
                      {orderData.customer.email}
                    </p>
                    <p className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      {orderData.customer.phone}
                    </p>
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2 flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    Shipping Address
                  </h4>
                  <div className="text-sm text-muted-foreground">
                    <p>{orderData.customer.address.street}</p>
                    <p>{orderData.customer.address.city}, {orderData.customer.address.state}</p>
                    <p>{orderData.customer.address.zipCode}</p>
                    <p>{orderData.customer.address.country}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Order Status & Payment */}
          <div className="space-y-6">
            {/* Payment Status */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <CreditCard className="w-5 h-5" />
                Payment Information
              </h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(orderData.paymentStatus)}`}>
                    {orderData.paymentStatus}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Method:</span>
                  <span className="text-sm">{orderData.paymentMethod}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Date:</span>
                  <span className="text-sm">{orderData.orderDate}</span>
                </div>
              </div>
            </div>

            {/* Shipping Status */}
            <div className="bg-card border border-border rounded-lg p-6">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Package className="w-5 h-5" />
                Shipping Status
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Current Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(shippingStatus)}`}>
                    {shippingStatus}
                  </span>
                </div>
                
                {orderData.trackingNumber && (
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tracking:</span>
                    <span className="text-sm font-mono">{orderData.trackingNumber}</span>
                  </div>
                )}

                <div className="space-y-2">
                  <h4 className="text-sm font-medium">Update Status:</h4>
                  <div className="flex flex-col gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusUpdate('Preparing')}
                      disabled={shippingStatus === 'Preparing'}
                    >
                      Preparing
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusUpdate('Shipped')}
                      disabled={shippingStatus === 'Shipped' || shippingStatus === 'Delivered'}
                      className="flex items-center gap-2"
                    >
                      <Truck className="w-4 h-4" />
                      Mark as Shipped
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleStatusUpdate('Delivered')}
                      disabled={shippingStatus === 'Delivered'}
                      className="flex items-center gap-2"
                    >
                      <CheckCircle className="w-4 h-4" />
                      Mark as Delivered
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderDetails;