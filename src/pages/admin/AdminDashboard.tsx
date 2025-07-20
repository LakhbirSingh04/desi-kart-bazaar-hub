import { useState } from 'react';
import { Package, Users, ShoppingCart, TrendingUp, DollarSign, RotateCcw } from 'lucide-react';

const AdminDashboard = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const stats = [
    {
      title: 'Total Orders',
      value: '2,547',
      change: '+12.5%',
      icon: ShoppingCart,
      color: 'text-blue-600'
    },
    {
      title: 'Revenue',
      value: '₹45,67,890',
      change: '+8.2%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Products',
      value: '1,234',
      change: '+3.1%',
      icon: Package,
      color: 'text-purple-600'
    },
    {
      title: 'Customers',
      value: '8,457',
      change: '+15.3%',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const recentOrders = [
    {
      id: 'ORD123456789',
      customer: 'John Doe',
      amount: 124999,
      status: 'Processing',
      date: '2024-01-20'
    },
    {
      id: 'ORD123456788',
      customer: 'Jane Smith',
      amount: 59990,
      status: 'Shipped',
      date: '2024-01-20'
    },
    {
      id: 'ORD123456787',
      customer: 'Bob Johnson',
      amount: 29990,
      status: 'Delivered',
      date: '2024-01-19'
    }
  ];

  const topProducts = [
    {
      name: 'Samsung Galaxy S24 Ultra',
      sales: 156,
      revenue: 19479844
    },
    {
      name: 'Apple MacBook Air M2',
      sales: 89,
      revenue: 8009911
    },
    {
      name: 'Sony WH-1000XM5',
      sales: 234,
      revenue: 7017660
    }
  ];

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <select
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
            className="p-2 border border-border rounded-md bg-background"
          >
            <option value="7d">Last 7 days</option>
            <option value="30d">Last 30 days</option>
            <option value="90d">Last 90 days</option>
            <option value="1y">Last year</option>
          </select>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-success">{stat.change}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${stat.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Orders */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-6">Recent Orders</h3>
            <div className="space-y-4">
              {recentOrders.map((order) => (
                <div key={order.id} className="flex items-center justify-between p-4 border border-border rounded-md">
                  <div>
                    <p className="font-medium">{order.id}</p>
                    <p className="text-sm text-muted-foreground">{order.customer}</p>
                    <p className="text-sm text-muted-foreground">{order.date}</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">{formatPrice(order.amount)}</p>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      order.status === 'Processing' ? 'bg-warning/10 text-warning' :
                      order.status === 'Shipped' ? 'bg-info/10 text-info' :
                      'bg-success/10 text-success'
                    }`}>
                      {order.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-6">Top Products</h3>
            <div className="space-y-4">
              {topProducts.map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 border border-border rounded-md">
                  <div>
                    <p className="font-medium">{product.name}</p>
                    <p className="text-sm text-muted-foreground">{product.sales} units sold</p>
                  </div>
                  <p className="font-semibold">{formatPrice(product.revenue)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <h3 className="text-lg font-semibold mb-6">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <button className="bg-primary text-primary-foreground p-4 rounded-lg hover:bg-primary/90 transition-colors">
              Add New Product
            </button>
            <button className="bg-accent text-accent-foreground p-4 rounded-lg hover:bg-accent/90 transition-colors">
              Manage Inventory
            </button>
            <button className="bg-warning text-warning-foreground p-4 rounded-lg hover:bg-warning/90 transition-colors">
              Process Returns
            </button>
            <button className="bg-info text-info-foreground p-4 rounded-lg hover:bg-info/90 transition-colors">
              View Reports
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;