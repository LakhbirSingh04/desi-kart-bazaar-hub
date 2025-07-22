import { useState } from 'react';
import { User, Package, Heart, MapPin, RotateCcw, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const Account = () => {
  const [activeTab, setActiveTab] = useState('orders');
  const [userProfile, setUserProfile] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@example.com',
    phone: '+91 9876543210'
  });
  const navigate = useNavigate();
  const { toast } = useToast();

  const orders = [
    {
      id: 'ORD123456789',
      date: '2024-01-15',
      status: 'Delivered',
      total: 124999,
      items: 2
    },
    {
      id: 'ORD123456788',
      date: '2024-01-10',
      status: 'In Transit',
      total: 59990,
      items: 1
    }
  ];

  const wishlistItems = [
    {
      id: '1',
      title: 'iPhone 15 Pro Max',
      price: 159999,
      image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=200'
    },
    {
      id: '2',
      title: 'Nike Air Jordan 1',
      price: 12999,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=200'
    }
  ];

  const addresses = [
    {
      id: '1',
      type: 'Home',
      name: 'John Doe',
      address: '123 Main Street, Bangalore, Karnataka 560001',
      phone: '+91 9876543210',
      isDefault: true
    },
    {
      id: '2',
      type: 'Office',
      name: 'John Doe',
      address: '456 Tech Park, Whitefield, Bangalore 560066',
      phone: '+91 9876543210',
      isDefault: false
    }
  ];

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  const handleTabClick = (tabId: string) => {
    if (tabId === 'wishlist') {
      navigate('/wishlist');
    } else {
      setActiveTab(tabId);
    }
  };

  const handleProfileSave = () => {
    toast({
      title: "Profile Updated",
      description: "Your profile changes have been saved successfully.",
    });
  };

  const tabs = [
    { id: 'orders', label: 'My Orders', icon: Package },
    { id: 'wishlist', label: 'Wishlist', icon: Heart },
    { id: 'addresses', label: 'Addresses', icon: MapPin },
    { id: 'returns', label: 'Returns', icon: RotateCcw },
    { id: 'profile', label: 'Profile', icon: User },
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">My Account</h1>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-card border border-border rounded-lg p-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center">
                  <User className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">{userProfile.firstName} {userProfile.lastName}</h3>
                  <p className="text-sm text-muted-foreground">{userProfile.email}</p>
                </div>
              </div>

              <nav className="space-y-2">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  return (
                    <button
                      key={tab.id}
                      onClick={() => handleTabClick(tab.id)}
                      className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                        activeTab === tab.id
                          ? 'bg-primary text-primary-foreground'
                          : 'hover:bg-muted'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <span>{tab.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-card border border-border rounded-lg p-6">
              {activeTab === 'orders' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">My Orders</h2>
                  <div className="space-y-4">
                    {orders.map((order) => (
                      <div key={order.id} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <h3 className="font-medium">Order #{order.id}</h3>
                            <p className="text-sm text-muted-foreground">
                              Placed on {order.date} • {order.items} items
                            </p>
                            <p className="text-lg font-semibold mt-2">{formatPrice(order.total)}</p>
                          </div>
                          <div className="text-right">
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                              order.status === 'Delivered' 
                                ? 'bg-success/10 text-success'
                                : 'bg-warning/10 text-warning'
                            }`}>
                              {order.status}
                            </span>
                            <div className="mt-2 space-x-2">
                              <button className="text-primary hover:underline text-sm">Track</button>
                              <button className="text-primary hover:underline text-sm">Reorder</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'wishlist' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">My Wishlist</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {wishlistItems.map((item) => (
                      <div key={item.id} className="border border-border rounded-lg p-4">
                        <div className="flex space-x-4">
                          <img
                            src={item.image}
                            alt={item.title}
                            className="w-20 h-20 object-cover rounded-md"
                          />
                          <div className="flex-1">
                            <h3 className="font-medium">{item.title}</h3>
                            <p className="text-lg font-semibold text-primary mt-2">
                              {formatPrice(item.price)}
                            </p>
                            <div className="mt-3 space-x-2">
                              <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm">
                                Add to Cart
                              </button>
                              <button className="text-destructive hover:underline text-sm">
                                Remove
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'addresses' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Saved Addresses</h2>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                      Add New Address
                    </button>
                  </div>
                  <div className="space-y-4">
                    {addresses.map((address) => (
                      <div key={address.id} className="border border-border rounded-lg p-4">
                        <div className="flex justify-between items-start">
                          <div>
                            <div className="flex items-center space-x-2 mb-2">
                              <h3 className="font-medium">{address.type}</h3>
                              {address.isDefault && (
                                <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs">
                                  Default
                                </span>
                              )}
                            </div>
                            <p className="font-medium">{address.name}</p>
                            <p className="text-muted-foreground">{address.address}</p>
                            <p className="text-muted-foreground">{address.phone}</p>
                          </div>
                          <div className="space-x-2">
                            <button className="text-primary hover:underline text-sm">Edit</button>
                            <button className="text-destructive hover:underline text-sm">Delete</button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'returns' && (
                <div>
                  <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-semibold">Return Requests</h2>
                    <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md">
                      New Return Request
                    </button>
                  </div>
                  <div className="text-center py-12">
                    <RotateCcw className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">No return requests</h3>
                    <p className="text-muted-foreground">
                      You haven't made any return requests yet.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'profile' && (
                <div>
                  <h2 className="text-2xl font-semibold mb-6">Profile Settings</h2>
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">First Name</label>
                        <input
                          type="text"
                          value={userProfile.firstName}
                          onChange={(e) => setUserProfile({...userProfile, firstName: e.target.value})}
                          className="w-full p-3 border border-border rounded-md bg-background"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Last Name</label>
                        <input
                          type="text"
                          value={userProfile.lastName}
                          onChange={(e) => setUserProfile({...userProfile, lastName: e.target.value})}
                          className="w-full p-3 border border-border rounded-md bg-background"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Email</label>
                      <input
                        type="email"
                        value={userProfile.email}
                        onChange={(e) => setUserProfile({...userProfile, email: e.target.value})}
                        className="w-full p-3 border border-border rounded-md bg-background"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">Phone</label>
                      <input
                        type="tel"
                        value={userProfile.phone}
                        onChange={(e) => setUserProfile({...userProfile, phone: e.target.value})}
                        className="w-full p-3 border border-border rounded-md bg-background"
                      />
                    </div>
                    <button 
                      onClick={handleProfileSave}
                      className="bg-primary text-primary-foreground px-6 py-3 rounded-md"
                    >
                      Save Changes
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Account;