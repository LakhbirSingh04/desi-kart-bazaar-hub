import { useState } from 'react';
import { TrendingUp, Users, ShoppingCart, DollarSign, Eye, BarChart3, PieChart, Activity } from 'lucide-react';

const Analytics = () => {
  const [timeRange, setTimeRange] = useState('30d');

  const metrics = [
    {
      title: 'Total Revenue',
      value: '₹12,45,678',
      change: '+18.2%',
      icon: DollarSign,
      color: 'text-green-600'
    },
    {
      title: 'Page Views',
      value: '54,328',
      change: '+12.1%',
      icon: Eye,
      color: 'text-blue-600'
    },
    {
      title: 'Conversion Rate',
      value: '3.4%',
      change: '+0.8%',
      icon: TrendingUp,
      color: 'text-purple-600'
    },
    {
      title: 'Active Users',
      value: '8,457',
      change: '+15.3%',
      icon: Users,
      color: 'text-orange-600'
    }
  ];

  const topPages = [
    { path: '/', views: 15420, conversions: 245 },
    { path: '/products', views: 8930, conversions: 189 },
    { path: '/category/shirts', views: 6754, conversions: 156 },
    { path: '/category/jeans', views: 5432, conversions: 123 },
    { path: '/category/jackets', views: 4321, conversions: 98 }
  ];

  const salesData = [
    { month: 'Jan', sales: 45000 },
    { month: 'Feb', sales: 52000 },
    { month: 'Mar', sales: 48000 },
    { month: 'Apr', sales: 61000 },
    { month: 'May', sales: 55000 },
    { month: 'Jun', sales: 67000 }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Analytics & Reports</h1>
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

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <div key={index} className="bg-card border border-border rounded-lg p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{metric.title}</p>
                    <p className="text-2xl font-bold">{metric.value}</p>
                    <p className="text-sm text-success">{metric.change}</p>
                  </div>
                  <Icon className={`w-8 h-8 ${metric.color}`} />
                </div>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Sales Chart */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <BarChart3 className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Monthly Sales</h3>
            </div>
            <div className="space-y-4">
              {salesData.map((item, index) => (
                <div key={index} className="flex items-center justify-between">
                  <span className="text-sm font-medium">{item.month}</span>
                  <div className="flex items-center gap-3 flex-1 mx-4">
                    <div className="w-full bg-muted rounded-full h-2">
                      <div
                        className="bg-primary h-2 rounded-full"
                        style={{ width: `${(item.sales / 70000) * 100}%` }}
                      />
                    </div>
                    <span className="text-sm text-muted-foreground">₹{item.sales.toLocaleString()}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Top Pages */}
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-6">
              <Activity className="w-5 h-5" />
              <h3 className="text-lg font-semibold">Top Performing Pages</h3>
            </div>
            <div className="space-y-4">
              {topPages.map((page, index) => (
                <div key={index} className="flex items-center justify-between p-3 border border-border rounded-md">
                  <div>
                    <p className="font-medium text-sm">{page.path}</p>
                    <p className="text-xs text-muted-foreground">{page.views.toLocaleString()} views</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-semibold">{page.conversions}</p>
                    <p className="text-xs text-muted-foreground">conversions</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Additional Reports */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <PieChart className="w-5 h-5 text-blue-600" />
              <h3 className="font-semibold">Traffic Sources</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Direct</span>
                <span className="text-sm font-medium">45%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Google</span>
                <span className="text-sm font-medium">32%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Social Media</span>
                <span className="text-sm font-medium">15%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Email</span>
                <span className="text-sm font-medium">8%</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <ShoppingCart className="w-5 h-5 text-green-600" />
              <h3 className="font-semibold">Order Status</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">Completed</span>
                <span className="text-sm font-medium">1,234</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Processing</span>
                <span className="text-sm font-medium">89</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Shipped</span>
                <span className="text-sm font-medium">156</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Cancelled</span>
                <span className="text-sm font-medium">23</span>
              </div>
            </div>
          </div>

          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <h3 className="font-semibold">Growth Metrics</h3>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm">User Growth</span>
                <span className="text-sm font-medium text-success">+15.3%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Revenue Growth</span>
                <span className="text-sm font-medium text-success">+18.2%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Order Growth</span>
                <span className="text-sm font-medium text-success">+12.5%</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm">Return Rate</span>
                <span className="text-sm font-medium text-warning">2.1%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;