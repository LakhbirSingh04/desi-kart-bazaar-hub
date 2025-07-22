import { useState } from 'react';
import { Download, FileText, Calendar, IndianRupee } from 'lucide-react';

const TaxReports = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('monthly');
  const [selectedYear, setSelectedYear] = useState('2024');

  const taxData = {
    totalSales: 1245000,
    totalTax: 224100,
    gstCollected: 224100,
    tdsDeducted: 12450,
    netTaxLiability: 211650
  };

  const monthlyReports = [
    { month: 'January 2024', sales: 125000, gst: 22500, tds: 1250, file: 'jan_2024_tax.pdf' },
    { month: 'February 2024', sales: 135000, gst: 24300, tds: 1350, file: 'feb_2024_tax.pdf' },
    { month: 'March 2024', sales: 145000, gst: 26100, tds: 1450, file: 'mar_2024_tax.pdf' },
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Tax & Accounting Reports</h1>
        
        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Total Sales</p>
                <p className="text-2xl font-bold">₹{taxData.totalSales.toLocaleString('en-IN')}</p>
              </div>
              <IndianRupee className="w-8 h-8 text-primary" />
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">GST Collected</p>
                <p className="text-2xl font-bold">₹{taxData.gstCollected.toLocaleString('en-IN')}</p>
              </div>
              <FileText className="w-8 h-8 text-success" />
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">TDS Deducted</p>
                <p className="text-2xl font-bold">₹{taxData.tdsDeducted.toLocaleString('en-IN')}</p>
              </div>
              <Calendar className="w-8 h-8 text-warning" />
            </div>
          </div>
          
          <div className="bg-card border border-border rounded-lg p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Net Tax Liability</p>
                <p className="text-2xl font-bold">₹{taxData.netTaxLiability.toLocaleString('en-IN')}</p>
              </div>
              <IndianRupee className="w-8 h-8 text-destructive" />
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-lg p-6 mb-8">
          <div className="flex flex-wrap gap-4 items-center">
            <div>
              <label className="block text-sm font-medium mb-2">Period</label>
              <select
                value={selectedPeriod}
                onChange={(e) => setSelectedPeriod(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="monthly">Monthly</option>
                <option value="quarterly">Quarterly</option>
                <option value="yearly">Yearly</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm font-medium mb-2">Year</label>
              <select
                value={selectedYear}
                onChange={(e) => setSelectedYear(e.target.value)}
                className="px-3 py-2 border border-border rounded-md bg-background"
              >
                <option value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
              </select>
            </div>
            
            <div className="flex-1"></div>
            
            <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg flex items-center space-x-2">
              <Download className="w-4 h-4" />
              <span>Export All Reports</span>
            </button>
          </div>
        </div>

        {/* Reports Table */}
        <div className="bg-card border border-border rounded-lg p-6">
          <h2 className="text-xl font-semibold mb-4">Tax Reports</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3">Period</th>
                  <th className="text-left py-3">Total Sales</th>
                  <th className="text-left py-3">GST Collected</th>
                  <th className="text-left py-3">TDS Deducted</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {monthlyReports.map((report, index) => (
                  <tr key={index} className="border-b border-border">
                    <td className="py-3">{report.month}</td>
                    <td className="py-3">₹{report.sales.toLocaleString('en-IN')}</td>
                    <td className="py-3">₹{report.gst.toLocaleString('en-IN')}</td>
                    <td className="py-3">₹{report.tds.toLocaleString('en-IN')}</td>
                    <td className="py-3">
                      <button className="text-primary hover:underline text-sm mr-2">
                        View
                      </button>
                      <button className="text-primary hover:underline text-sm">
                        Download
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Tax Filing Reminders */}
        <div className="bg-card border border-border rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-4">Upcoming Tax Deadlines</h2>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-warning/10 border border-warning/20 rounded-lg">
              <div>
                <p className="font-medium">GST Return Filing - GSTR-3B</p>
                <p className="text-sm text-muted-foreground">Due: 20th February 2024</p>
              </div>
              <span className="text-warning font-medium">5 days left</span>
            </div>
            
            <div className="flex items-center justify-between p-4 bg-destructive/10 border border-destructive/20 rounded-lg">
              <div>
                <p className="font-medium">TDS Return Filing - 24Q</p>
                <p className="text-sm text-muted-foreground">Due: 31st January 2024</p>
              </div>
              <span className="text-destructive font-medium">Overdue</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaxReports;