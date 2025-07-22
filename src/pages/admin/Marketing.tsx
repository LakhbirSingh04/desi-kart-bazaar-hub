import { useState } from 'react';
import { Mail, Users, TrendingUp, Send, Calendar, Target, Zap, BarChart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const Marketing = () => {
  const { toast } = useToast();
  const [activeTab, setActiveTab] = useState('campaigns');

  const campaigns = [
    {
      id: 1,
      name: 'Summer Sale 2024',
      type: 'Email',
      status: 'Active',
      sent: 15420,
      opened: 8930,
      clicked: 1245,
      startDate: '2024-06-01'
    },
    {
      id: 2,
      name: 'New Arrivals',
      type: 'SMS',
      status: 'Scheduled',
      sent: 0,
      opened: 0,
      clicked: 0,
      startDate: '2024-06-15'
    },
    {
      id: 3,
      name: 'Abandoned Cart Recovery',
      type: 'Email',
      status: 'Active',
      sent: 8760,
      opened: 4320,
      clicked: 876,
      startDate: '2024-05-20'
    }
  ];

  const automations = [
    {
      id: 1,
      name: 'Welcome Series',
      trigger: 'New User Registration',
      status: 'Active',
      subscribers: 2450
    },
    {
      id: 2,
      name: 'Birthday Offers',
      trigger: 'Customer Birthday',
      status: 'Active',
      subscribers: 1200
    },
    {
      id: 3,
      name: 'Win-back Campaign',
      trigger: 'No Purchase in 90 days',
      status: 'Paused',
      subscribers: 890
    }
  ];

  const segments = [
    { name: 'VIP Customers', count: 245, criteria: 'Lifetime Value > ₹50,000' },
    { name: 'New Customers', count: 1520, criteria: 'First Purchase < 30 days' },
    { name: 'Frequent Buyers', count: 890, criteria: 'Orders > 5 in last 6 months' },
    { name: 'Inactive Users', count: 2340, criteria: 'No Login > 60 days' }
  ];

  const handleCreateCampaign = () => {
    toast({
      title: "Campaign Created",
      description: "New marketing campaign has been created successfully",
    });
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Active': return 'text-success bg-success/10';
      case 'Scheduled': return 'text-info bg-info/10';
      case 'Paused': return 'text-warning bg-warning/10';
      default: return 'text-muted-foreground bg-muted/10';
    }
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Marketing Automation</h1>
          <Button onClick={handleCreateCampaign} className="flex items-center gap-2">
            <Send className="w-4 h-4" />
            Create Campaign
          </Button>
        </div>

        {/* Metrics Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-5 h-5 text-blue-600" />
              <span className="text-sm text-muted-foreground">Total Emails Sent</span>
            </div>
            <p className="text-2xl font-bold">45,678</p>
            <p className="text-sm text-success">+12.5% this month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <TrendingUp className="w-5 h-5 text-green-600" />
              <span className="text-sm text-muted-foreground">Open Rate</span>
            </div>
            <p className="text-2xl font-bold">24.3%</p>
            <p className="text-sm text-success">+2.1% this month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Target className="w-5 h-5 text-purple-600" />
              <span className="text-sm text-muted-foreground">Click Rate</span>
            </div>
            <p className="text-2xl font-bold">5.8%</p>
            <p className="text-sm text-success">+0.5% this month</p>
          </div>
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-5 h-5 text-orange-600" />
              <span className="text-sm text-muted-foreground">Subscribers</span>
            </div>
            <p className="text-2xl font-bold">12,456</p>
            <p className="text-sm text-success">+156 this month</p>
          </div>
        </div>

        {/* Tab Navigation */}
        <div className="flex space-x-1 mb-6 bg-muted rounded-lg p-1">
          <button
            onClick={() => setActiveTab('campaigns')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'campaigns' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Campaigns
          </button>
          <button
            onClick={() => setActiveTab('automations')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'automations' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Automations
          </button>
          <button
            onClick={() => setActiveTab('segments')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === 'segments' ? 'bg-background shadow-sm' : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Segments
          </button>
        </div>

        {/* Campaigns Tab */}
        {activeTab === 'campaigns' && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-6">Active Campaigns</h3>
            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div key={campaign.id} className="flex items-center justify-between p-4 border border-border rounded-md">
                  <div>
                    <h4 className="font-medium">{campaign.name}</h4>
                    <p className="text-sm text-muted-foreground">{campaign.type} • Started {campaign.startDate}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm font-semibold">{campaign.sent.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Sent</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold">{campaign.opened.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Opened</p>
                    </div>
                    <div className="text-center">
                      <p className="text-sm font-semibold">{campaign.clicked.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Clicked</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(campaign.status)}`}>
                      {campaign.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Automations Tab */}
        {activeTab === 'automations' && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <Zap className="w-5 h-5" />
              Marketing Automations
            </h3>
            <div className="space-y-4">
              {automations.map((automation) => (
                <div key={automation.id} className="flex items-center justify-between p-4 border border-border rounded-md">
                  <div>
                    <h4 className="font-medium">{automation.name}</h4>
                    <p className="text-sm text-muted-foreground">Trigger: {automation.trigger}</p>
                  </div>
                  <div className="flex items-center gap-6">
                    <div className="text-center">
                      <p className="text-sm font-semibold">{automation.subscribers.toLocaleString()}</p>
                      <p className="text-xs text-muted-foreground">Subscribers</p>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(automation.status)}`}>
                      {automation.status}
                    </span>
                    <Button variant="outline" size="sm">
                      Edit
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Segments Tab */}
        {activeTab === 'segments' && (
          <div className="bg-card border border-border rounded-lg p-6">
            <h3 className="text-lg font-semibold mb-6 flex items-center gap-2">
              <BarChart className="w-5 h-5" />
              Customer Segments
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {segments.map((segment, index) => (
                <div key={index} className="p-4 border border-border rounded-md">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-medium">{segment.name}</h4>
                    <span className="text-lg font-bold">{segment.count.toLocaleString()}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{segment.criteria}</p>
                  <div className="mt-3 flex gap-2">
                    <Button variant="outline" size="sm">
                      View
                    </Button>
                    <Button variant="outline" size="sm">
                      Create Campaign
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Marketing;