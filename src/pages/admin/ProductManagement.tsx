import { useState } from 'react';
import { Plus, Edit, Trash2, Search } from 'lucide-react';

const ProductManagement = () => {
  const [products] = useState([
    { id: '1', name: 'Samsung Galaxy S24 Ultra', price: 124999, stock: 45, status: 'Active' },
    { id: '2', name: 'Apple MacBook Air M2', price: 89999, stock: 23, status: 'Active' },
    { id: '3', name: 'Sony WH-1000XM5', price: 29990, stock: 67, status: 'Low Stock' }
  ]);

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Product Management</h1>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg flex items-center space-x-2">
            <Plus className="w-4 h-4" />
            <span>Add Product</span>
          </button>
        </div>

        <div className="bg-card border border-border rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <input
                type="text"
                placeholder="Search products..."
                className="pl-10 pr-4 py-2 border border-border rounded-md bg-background"
              />
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3">Product Name</th>
                  <th className="text-left py-3">Price</th>
                  <th className="text-left py-3">Stock</th>
                  <th className="text-left py-3">Status</th>
                  <th className="text-left py-3">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-b border-border">
                    <td className="py-3">{product.name}</td>
                    <td className="py-3">₹{product.price.toLocaleString('en-IN')}</td>
                    <td className="py-3">{product.stock}</td>
                    <td className="py-3">
                      <span className={`px-2 py-1 rounded-full text-xs ${
                        product.status === 'Active' ? 'bg-success/10 text-success' : 'bg-warning/10 text-warning'
                      }`}>
                        {product.status}
                      </span>
                    </td>
                    <td className="py-3">
                      <div className="flex space-x-2">
                        <button className="text-primary hover:text-primary/80">
                          <Edit className="w-4 h-4" />
                        </button>
                        <button className="text-destructive hover:text-destructive/80">
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
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

export default ProductManagement;