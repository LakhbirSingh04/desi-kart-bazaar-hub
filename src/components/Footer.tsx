import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-bold text-primary mb-4">ShopKart</h3>
            <p className="text-muted-foreground mb-4">
              Your trusted e-commerce partner for quality products at the best prices across India.
            </p>
            <div className="flex space-x-4">
              <Facebook className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Twitter className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Instagram className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
              <Youtube className="w-5 h-5 text-muted-foreground hover:text-primary cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-muted-foreground hover:text-primary">About Us</Link></li>
              <li><Link to="/contact" className="text-muted-foreground hover:text-primary">Contact Us</Link></li>
              <li><Link to="/shipping" className="text-muted-foreground hover:text-primary">Shipping Info</Link></li>
              <li><Link to="/returns" className="text-muted-foreground hover:text-primary">Returns</Link></li>
              <li><Link to="/faq" className="text-muted-foreground hover:text-primary">FAQ</Link></li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h4 className="font-semibold mb-4">Customer Service</h4>
            <ul className="space-y-2">
              <li><Link to="/track-order" className="text-muted-foreground hover:text-primary">Track Your Order</Link></li>
              <li><Link to="/return-request" className="text-muted-foreground hover:text-primary">Return Request</Link></li>
              <li><Link to="/bulk-orders" className="text-muted-foreground hover:text-primary">Bulk Orders</Link></li>
              <li><Link to="/warranty" className="text-muted-foreground hover:text-primary">Warranty</Link></li>
              <li><Link to="/gift-cards" className="text-muted-foreground hover:text-primary">Gift Cards</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-4 h-4 text-primary mr-3" />
                <span className="text-muted-foreground">1800-123-4567</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-4 h-4 text-primary mr-3" />
                <span className="text-muted-foreground">support@shopkart.com</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 text-primary mr-3 mt-1" />
                <span className="text-muted-foreground">
                  123 Business Park,<br />
                  Bangalore, Karnataka 560001
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Payment Methods */}
        <div className="border-t border-border pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-muted-foreground">
                © 2024 ShopKart. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">We Accept:</span>
              <div className="flex space-x-2">
                <div className="bg-card border border-border rounded px-2 py-1 text-xs">Visa</div>
                <div className="bg-card border border-border rounded px-2 py-1 text-xs">Mastercard</div>
                <div className="bg-card border border-border rounded px-2 py-1 text-xs">UPI</div>
                <div className="bg-card border border-border rounded px-2 py-1 text-xs">Razorpay</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;