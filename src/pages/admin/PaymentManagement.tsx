import { useState } from 'react';

const PaymentManagement = () => {
  const [payments] = useState([
    { id: 'PAY001', orderId: 'ORD123456789', amount: 124999, status: 'Completed', method: 'Razorpay', date: '2024-01-20' },
    { id: 'PAY002', orderId: 'ORD123456788', amount: 59990, status: 'Failed', method: 'UPI', date: '2024-01-19' },
    { id: 'PAY003', orderId: 'ORD123456787', amount: 29990, status: 'Refunded', method: 'Card', date: '2024-01-18' }
  ]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Payment Management</h1>
        <div className="bg-card border border-border rounded-lg p-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3">Payment ID</th>
                  <th className="text-left py-3">Order ID</th>
                  <th className="text-left py-3">Amount</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Method</th>
                  <th className="text-left py-3">Date</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {payments.map((payment) => (
                  <tr key={payment.id} className="border-b border-border">
                    <td className="py-3">{payment.id}</td>
                    <td className="py-3">{payment.orderId}</td>
                    <td className="py-3">₹{payment.amount.toLocaleString('en-IN')}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        payment.status === 'Completed' ? 'bg-success/10 text-success' :
                        payment.status === 'Failed' ? 'bg-destructive/10 text-destructive' :
                        'bg-warning/10 text-warning'
                      }`}>
                        {payment.status}
                      </span>
                    </td>
                    <td className="py-3">{payment.method}</td>
                    <td className="py-3">{payment.date}</td>
                    <td className="py-3">
                      <button className="text-primary hover:underline text-sm">View Details</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentManagement;