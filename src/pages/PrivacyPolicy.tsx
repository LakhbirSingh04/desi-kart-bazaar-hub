const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

        <div className="space-y-8 prose prose-slate max-w-none">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We collect information you provide directly, automatically through your use of our services, and from third parties.</p>
            
            <h3 className="text-xl font-semibold mb-3">Personal Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Name, email address, phone number, and postal address</li>
              <li>Payment information (processed securely by our payment partners)</li>
              <li>Account credentials and preferences</li>
              <li>Order history and transaction details</li>
            </ul>

            <h3 className="text-xl font-semibold mb-3">Usage Information</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Device information, IP address, and browser type</li>
              <li>Pages visited, search queries, and interaction data</li>
              <li>Location data (with your consent)</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. How We Use Your Information</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Process and fulfill your orders</li>
              <li>Provide customer support and respond to inquiries</li>
              <li>Send marketing communications (with your consent)</li>
              <li>Improve our services and develop new features</li>
              <li>Prevent fraud and ensure security</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Information Sharing</h2>
            <p className="text-muted-foreground mb-4">We do not sell your personal information. We may share information in these circumstances:</p>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>With service providers who help us operate our business</li>
              <li>With payment processors for transaction processing</li>
              <li>With delivery partners for order fulfillment</li>
              <li>When required by law or to protect our rights</li>
              <li>In case of business transfer or merger</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
            <p className="text-muted-foreground">We implement appropriate security measures to protect your information, including encryption, secure servers, and regular security assessments. However, no method of transmission over the internet is 100% secure.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Access, update, or delete your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Request data portability</li>
              <li>Withdraw consent where applicable</li>
              <li>File complaints with relevant authorities</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Cookies</h2>
            <p className="text-muted-foreground">We use cookies to enhance your experience, analyze usage, and provide personalized content. You can manage cookie preferences through your browser settings.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
            <p className="text-muted-foreground">For privacy-related questions, contact us at privacy@shopkart.com or call 1800-123-4567.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;