import { MapPin, Users, Star, Shield } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">About ShopKart</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Your trusted e-commerce partner for quality products at the best prices across India.
            We're committed to providing an exceptional shopping experience with authentic products and reliable service.
          </p>
        </div>

        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Founded in 2020, ShopKart began with a simple mission: to make quality shopping 
                accessible to everyone across India. What started as a small team of passionate 
                individuals has grown into one of India's most trusted e-commerce platforms.
              </p>
              <p>
                We believe that great products shouldn't come with great compromises. That's why 
                we work directly with manufacturers and trusted suppliers to bring you authentic 
                products at competitive prices.
              </p>
              <p>
                Today, we serve millions of customers across India, offering everything from 
                fashion and electronics to home essentials and more.
              </p>
            </div>
          </div>
          <div className="aspect-square bg-muted rounded-lg flex items-center justify-center">
            <img 
              src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600" 
              alt="Our warehouse" 
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">2M+</h3>
            <p className="text-muted-foreground">Happy Customers</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Star className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">50K+</h3>
            <p className="text-muted-foreground">Products</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">500+</h3>
            <p className="text-muted-foreground">Cities Served</p>
          </div>
          <div className="text-center">
            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-primary" />
            </div>
            <h3 className="text-2xl font-bold mb-2">4.8/5</h3>
            <p className="text-muted-foreground">Customer Rating</p>
          </div>
        </div>

        {/* Mission & Values */}
        <div className="bg-muted/50 rounded-lg p-8 mb-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-muted-foreground">
                To democratize commerce by providing quality products at affordable prices, 
                while building trust through transparency, reliability, and exceptional customer service.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Our Values</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>• Customer-first approach in everything we do</li>
                <li>• Transparency in pricing and policies</li>
                <li>• Quality assurance on all products</li>
                <li>• Fast and reliable delivery</li>
                <li>• Sustainable business practices</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-8">Meet Our Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Rajesh Kumar", role: "CEO & Founder", image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300" },
              { name: "Priya Sharma", role: "CTO", image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300" },
              { name: "Amit Patel", role: "Head of Operations", image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300" }
            ].map((member, index) => (
              <div key={index} className="text-center">
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
                />
                <h4 className="font-bold mb-1">{member.name}</h4>
                <p className="text-muted-foreground">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;