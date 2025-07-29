import { ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const faqCategories = [
    {
      title: "Orders & Payment",
      items: [
        {
          question: "How do I place an order?",
          answer: "Browse our products, add items to cart, proceed to checkout, fill in your details, and choose your payment method. You'll receive a confirmation email once your order is placed successfully."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit/debit cards, net banking, UPI payments, digital wallets, and cash on delivery (COD) for eligible orders."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Orders can be modified or cancelled within 1 hour of placement. After that, you can return the item once it's delivered as per our return policy."
        },
        {
          question: "How do I track my order?",
          answer: "You'll receive a tracking link via SMS and email once your order is shipped. You can also track your order in the 'My Orders' section of your account."
        }
      ]
    },
    {
      title: "Shipping & Delivery",
      items: [
        {
          question: "What are the shipping charges?",
          answer: "Shipping is free for orders above ₹499. For orders below ₹499, standard shipping charges of ₹50 apply. Express delivery is available for ₹99 additional charge."
        },
        {
          question: "How long does delivery take?",
          answer: "Standard delivery takes 3-5 business days. Express delivery takes 1-2 business days. Same-day delivery is available in select cities for ₹199."
        },
        {
          question: "Do you deliver to my location?",
          answer: "We deliver pan-India including remote areas. Check product pages for specific delivery availability to your PIN code."
        },
        {
          question: "What if I'm not available during delivery?",
          answer: "Our delivery partner will attempt delivery 3 times and contact you before each attempt. You can also reschedule delivery through the tracking link."
        }
      ]
    },
    {
      title: "Returns & Refunds",
      items: [
        {
          question: "What is your return policy?",
          answer: "We offer easy returns within 7 days of delivery for most items. Items must be in original condition with tags intact."
        },
        {
          question: "How do I return an item?",
          answer: "Go to 'My Orders', select the item you want to return, choose the reason, and schedule a pickup. Our partner will collect the item from your doorstep for free."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 3-5 business days after we receive and verify the returned item. The amount will be credited to your original payment method."
        },
        {
          question: "Are there any items that cannot be returned?",
          answer: "Personal care items, food & beverages, customized products, and digital items cannot be returned for safety and hygiene reasons."
        }
      ]
    },
    {
      title: "Account & Security",
      items: [
        {
          question: "How do I create an account?",
          answer: "Click on 'Sign Up' at the top of the page, enter your details, and verify your email address or mobile number. You can also create an account during checkout."
        },
        {
          question: "I forgot my password. What should I do?",
          answer: "Click on 'Forgot Password' on the login page, enter your email address, and follow the instructions in the reset email we send you."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your personal and payment information. We never share your data with third parties without consent."
        },
        {
          question: "Can I change my delivery address?",
          answer: "You can add or modify delivery addresses in the 'My Account' section. For ongoing orders, address changes are possible only within 1 hour of placing the order."
        }
      ]
    },
    {
      title: "Products & Pricing",
      items: [
        {
          question: "Are the products genuine?",
          answer: "Yes, all our products are 100% authentic and sourced directly from manufacturers or authorized distributors. We guarantee the authenticity of every item."
        },
        {
          question: "Why are prices different from other websites?",
          answer: "Our prices may vary due to promotional offers, bulk purchasing benefits, or exclusive partnerships with brands. We strive to offer the best prices in the market."
        },
        {
          question: "Do you offer warranties on products?",
          answer: "Yes, all products come with manufacturer warranties as applicable. Warranty terms and duration vary by product and are mentioned on the product page."
        },
        {
          question: "Can I get a bulk discount?",
          answer: "Yes, we offer special pricing for bulk orders. Contact our sales team at sales@shopkart.com with your requirements for a custom quote."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Find quick answers to common questions about shopping with ShopKart. 
            Can't find what you're looking for? Contact our support team.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-card border border-border rounded-lg p-6">
              <h2 className="text-2xl font-bold mb-6">{category.title}</h2>
              
              <div className="space-y-4">
                {category.items.map((item, itemIndex) => {
                  const globalIndex = categoryIndex * 100 + itemIndex;
                  const isOpen = openItems.includes(globalIndex);
                  
                  return (
                    <div key={itemIndex} className="border border-border rounded-lg">
                      <button
                        onClick={() => toggleItem(globalIndex)}
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-muted/50 transition-colors"
                      >
                        <span className="font-medium">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <ChevronDown className="w-5 h-5 text-muted-foreground" />
                        )}
                      </button>
                      
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-muted-foreground leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-16 text-center bg-primary/5 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted-foreground mb-6">
            Our customer support team is here to help you with any questions or concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Contact Support
            </a>
            <a 
              href="tel:1800-123-4567" 
              className="border border-border px-6 py-3 rounded-lg font-medium hover:bg-muted transition-colors"
            >
              Call 1800-123-4567
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;