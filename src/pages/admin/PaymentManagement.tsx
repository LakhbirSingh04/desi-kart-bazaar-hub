import { useState } from 'react';
import { X } from 'lucide-react';

const PaymentManagement = () => {
  const [payments] = useState([
    { 
      id: 'PAY001', 
      orderId: 'ORD123456789', 
      amount: 124999, 
      status: 'Completed', 
      method: 'Razorpay', 
      date: '2024-01-20',
      transactionId: 'razorpay_12345',
      customerEmail: 'john@example.com',
      gatewayFee: 2999
    },
    { 
      id: 'PAY002', 
      orderId: 'ORD123456788', 
      amount: 59990, 
      status: 'Failed', 
      method: 'UPI', 
      date: '2024-01-19',
      transactionId: 'upi_67890',
      customerEmail: 'jane@example.com',
      gatewayFee: 0
    },
    { 
      id: 'PAY003', 
      orderId: 'ORD123456787', 
      amount: 29990, 
      status: 'Refunded', 
      method: 'Card', 
      date: '2024-01-18',
      transactionId: 'card_54321',
      customerEmail: 'mike@example.com',
      gatewayFee: 899
    }
  ]);
  const [selectedPayment, setSelectedPayment] = useState(null);

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
                      <button 
                        onClick={() => setSelectedPayment(payment)}
                        className="text-primary hover:underline text-sm"
                      >
                        View Details
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Payment Details Modal */}
        {selectedPayment && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">Payment Details</h3>
                <button onClick={() => setSelectedPayment(null)}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Payment ID:</span>
                  <span>{selectedPayment.id}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Order ID:</span>
                  <span>{selectedPayment.orderId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Transaction ID:</span>
                  <span className="text-sm">{selectedPayment.transactionId}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Customer Email:</span>
                  <span className="text-sm">{selectedPayment.customerEmail}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Amount:</span>
                  <span>₹{selectedPayment.amount.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Gateway Fee:</span>
                  <span>₹{selectedPayment.gatewayFee.toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Net Amount:</span>
                  <span>₹{(selectedPayment.amount - selectedPayment.gatewayFee).toLocaleString('en-IN')}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Status:</span>
                  <span className={`px-2 py-1 rounded-full text-xs ${
                    selectedPayment.status === 'Completed' ? 'bg-success/10 text-success' :
                    selectedPayment.status === 'Failed' ? 'bg-destructive/10 text-destructive' :
                    'bg-warning/10 text-warning'
                  }`}>
                    {selectedPayment.status}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Date:</span>
                  <span>{selectedPayment.date}</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PaymentManagement;