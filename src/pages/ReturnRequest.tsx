import { useState } from 'react';
import { Upload, Package, Camera } from 'lucide-react';

const ReturnRequest = () => {
  const [formData, setFormData] = useState({
    orderId: '',
    itemId: '',
    reason: '',
    description: '',
    images: [] as File[]
  });

  const recentOrders = [
    {
      id: 'ORD123456789',
      date: '2024-01-15',
      items: [
        { id: 'ITEM001', name: 'Samsung Galaxy S24 Ultra 5G', price: 124999 },
        { id: 'ITEM002', name: 'Wireless Charger', price: 2999 }
      ]
    },
    {
      id: 'ORD123456788',
      date: '2024-01-10',
      items: [
        { id: 'ITEM003', name: 'Sony WH-1000XM5 Headphones', price: 29990 }
      ]
    }
  ];

  const returnReasons = [
    'Defective/Damaged Product',
    'Wrong Item Delivered',
    'Not as Described',
    'Quality Issues',
    'Size/Fit Issues',
    'Changed Mind',
    'Other'
  ];

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    setFormData({...formData, images: [...formData.images, ...files]});
  };

  const removeImage = (index: number) => {
    const newImages = formData.images.filter((_, i) => i !== index);
    setFormData({...formData, images: newImages});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Return request submitted:', formData);
    alert('Return request submitted successfully!');
  };

  const formatPrice = (price: number) => `₹${price.toLocaleString('en-IN')}`;

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold mb-8">Return Request</h1>

        <div className="bg-card border border-border rounded-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Order Selection */}
            <div>
              <label className="block text-sm font-medium mb-2">Select Order</label>
              <select
                value={formData.orderId}
                onChange={(e) => {
                  setFormData({...formData, orderId: e.target.value, itemId: ''});
                }}
                className="w-full p-3 border border-border rounded-md bg-background"
                required
              >
                <option value="">Choose an order to return from...</option>
                {recentOrders.map(order => (
                  <option key={order.id} value={order.id}>
                    Order #{order.id} - {order.date}
                  </option>
                ))}
              </select>
            </div>

            {/* Item Selection */}
            {formData.orderId && (
              <div>
                <label className="block text-sm font-medium mb-2">Select Item to Return</label>
                <select
                  value={formData.itemId}
                  onChange={(e) => setFormData({...formData, itemId: e.target.value})}
                  className="w-full p-3 border border-border rounded-md bg-background"
                  required
                >
                  <option value="">Choose an item...</option>
                  {recentOrders
                    .find(order => order.id === formData.orderId)
                    ?.items.map(item => (
                      <option key={item.id} value={item.id}>
                        {item.name} - {formatPrice(item.price)}
                      </option>
                    ))}
                </select>
              </div>
            )}

            {/* Return Reason */}
            <div>
              <label className="block text-sm font-medium mb-2">Reason for Return</label>
              <select
                value={formData.reason}
                onChange={(e) => setFormData({...formData, reason: e.target.value})}
                className="w-full p-3 border border-border rounded-md bg-background"
                required
              >
                <option value="">Select a reason...</option>
                {returnReasons.map(reason => (
                  <option key={reason} value={reason}>{reason}</option>
                ))}
              </select>
            </div>

            {/* Description */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Detailed Description
              </label>
              <textarea
                value={formData.description}
                onChange={(e) => setFormData({...formData, description: e.target.value})}
                rows={4}
                className="w-full p-3 border border-border rounded-md bg-background resize-none"
                placeholder="Please provide detailed information about the issue..."
                required
              />
            </div>

            {/* Image Upload */}
            <div>
              <label className="block text-sm font-medium mb-2">
                Upload Images (Optional)
              </label>
              <div className="border-2 border-dashed border-border rounded-lg p-6 text-center">
                <Camera className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
                <p className="text-muted-foreground mb-4">
                  Upload photos to help us understand the issue better
                </p>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="bg-primary text-primary-foreground px-6 py-2 rounded-md cursor-pointer hover:bg-primary/90 transition-colors inline-flex items-center space-x-2"
                >
                  <Upload className="w-4 h-4" />
                  <span>Choose Files</span>
                </label>
              </div>

              {/* Image Preview */}
              {formData.images.length > 0 && (
                <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4">
                  {formData.images.map((image, index) => (
                    <div key={index} className="relative">
                      <img
                        src={URL.createObjectURL(image)}
                        alt={`Upload ${index + 1}`}
                        className="w-full h-24 object-cover rounded-md border border-border"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(index)}
                        className="absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-6 h-6 text-xs hover:bg-destructive/90"
                      >
                        ×
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Important Notes */}
            <div className="bg-muted/50 border border-border rounded-lg p-4">
              <h4 className="font-medium mb-2">Important Notes:</h4>
              <ul className="text-sm text-muted-foreground space-y-1">
                <li>• Return requests must be made within 30 days of delivery</li>
                <li>• Items must be in original condition with all tags attached</li>
                <li>• Refund will be processed within 5-7 business days after item receipt</li>
                <li>• You'll receive a return pickup confirmation via email/SMS</li>
              </ul>
            </div>

            {/* Submit Button */}
            <div className="flex space-x-4">
              <button
                type="submit"
                className="flex-1 bg-primary text-primary-foreground py-3 px-6 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                Submit Return Request
              </button>
              <button
                type="button"
                className="flex-1 border border-border py-3 px-6 rounded-lg font-medium hover:bg-muted transition-colors"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>

        {/* Help Section */}
        <div className="mt-8 text-center">
          <p className="text-sm text-muted-foreground mb-2">
            Need help with your return?
          </p>
          <div className="flex justify-center space-x-4 text-sm">
            <span className="text-primary cursor-pointer hover:underline">Chat with us</span>
            <span className="text-muted-foreground">•</span>
            <span className="text-muted-foreground">Call: 1800-123-4567</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReturnRequest;