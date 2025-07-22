import { useState } from 'react';
import { Plus, Edit, Trash2, Search, X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const ProductManagement = () => {
  const [products, setProducts] = useState([
    { id: '1', name: 'Samsung Galaxy S24 Ultra', price: 124999, stock: 45, status: 'Active' },
    { id: '2', name: 'Apple MacBook Air M2', price: 89999, stock: 23, status: 'Active' },
    { id: '3', name: 'Sony WH-1000XM5', price: 29990, stock: 67, status: 'Low Stock' }
  ]);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [newProduct, setNewProduct] = useState({ name: '', price: '', stock: '', status: 'Active' });
  const { toast } = useToast();

  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }
    
    const product = {
      id: (products.length + 1).toString(),
      name: newProduct.name,
      price: parseInt(newProduct.price),
      stock: parseInt(newProduct.stock),
      status: newProduct.status
    };
    
    setProducts([...products, product]);
    setNewProduct({ name: '', price: '', stock: '', status: 'Active' });
    setShowAddModal(false);
    toast({
      title: "Success",
      description: "Product added successfully",
    });
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setNewProduct({
      name: product.name,
      price: product.price.toString(),
      stock: product.stock.toString(),
      status: product.status
    });
    setShowAddModal(true);
  };

  const handleUpdateProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.stock) {
      toast({
        title: "Error",
        description: "Please fill all fields",
        variant: "destructive",
      });
      return;
    }

    setProducts(products.map(p => 
      p.id === editingProduct.id 
        ? { ...p, name: newProduct.name, price: parseInt(newProduct.price), stock: parseInt(newProduct.stock), status: newProduct.status }
        : p
    ));
    setEditingProduct(null);
    setNewProduct({ name: '', price: '', stock: '', status: 'Active' });
    setShowAddModal(false);
    toast({
      title: "Success",
      description: "Product updated successfully",
    });
  };

  const handleDeleteProduct = (id) => {
    setProducts(products.filter(p => p.id !== id));
    toast({
      title: "Success",
      description: "Product deleted successfully",
    });
  };

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Product Management</h1>
          <button 
            onClick={() => setShowAddModal(true)}
            className="bg-primary text-primary-foreground px-6 py-2 rounded-lg flex items-center space-x-2"
          >
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
                        <button 
                          onClick={() => handleEditProduct(product)}
                          className="text-primary hover:text-primary/80"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button 
                          onClick={() => handleDeleteProduct(product.id)}
                          className="text-destructive hover:text-destructive/80"
                        >
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

        {/* Add/Edit Product Modal */}
        {showAddModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
            <div className="bg-card border border-border rounded-lg p-6 max-w-md w-full">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-semibold">
                  {editingProduct ? 'Edit Product' : 'Add New Product'}
                </h3>
                <button onClick={() => {
                  setShowAddModal(false);
                  setEditingProduct(null);
                  setNewProduct({ name: '', price: '', stock: '', status: 'Active' });
                }}>
                  <X className="w-5 h-5" />
                </button>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Product Name</label>
                  <input
                    type="text"
                    value={newProduct.name}
                    onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background"
                    placeholder="Enter product name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Price (₹)</label>
                  <input
                    type="number"
                    value={newProduct.price}
                    onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background"
                    placeholder="Enter price"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Stock</label>
                  <input
                    type="number"
                    value={newProduct.stock}
                    onChange={(e) => setNewProduct({ ...newProduct, stock: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background"
                    placeholder="Enter stock quantity"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Status</label>
                  <select
                    value={newProduct.status}
                    onChange={(e) => setNewProduct({ ...newProduct, status: e.target.value })}
                    className="w-full p-2 border border-border rounded-md bg-background"
                  >
                    <option value="Active">Active</option>
                    <option value="Low Stock">Low Stock</option>
                    <option value="Out of Stock">Out of Stock</option>
                  </select>
                </div>
                <div className="flex space-x-2 pt-4">
                  <button
                    onClick={editingProduct ? handleUpdateProduct : handleAddProduct}
                    className="flex-1 bg-primary text-primary-foreground py-2 rounded-md"
                  >
                    {editingProduct ? 'Update Product' : 'Add Product'}
                  </button>
                  <button
                    onClick={() => {
                      setShowAddModal(false);
                      setEditingProduct(null);
                      setNewProduct({ name: '', price: '', stock: '', status: 'Active' });
                    }}
                    className="flex-1 border border-border py-2 rounded-md"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductManagement;