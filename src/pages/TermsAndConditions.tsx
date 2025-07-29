const TermsAndConditions = () => {
  return (
    <div className="min-h-screen bg-background py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8">Terms and Conditions</h1>
        <p className="text-muted-foreground mb-8">Last updated: January 2024</p>

        <div className="space-y-8 prose prose-slate max-w-none">
          <section>
            <h2 className="text-2xl font-bold mb-4">1. Acceptance of Terms</h2>
            <p className="text-muted-foreground">By accessing and using ShopKart, you accept and agree to be bound by these Terms and Conditions. If you do not agree, please do not use our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">2. Use of the Platform</h2>
            <h3 className="text-xl font-semibold mb-3">Eligibility</h3>
            <p className="text-muted-foreground mb-4">You must be at least 18 years old to use our services. Minors may use the platform under parental supervision.</p>
            
            <h3 className="text-xl font-semibold mb-3">Account Responsibilities</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Provide accurate and current information</li>
              <li>Maintain security of your account credentials</li>
              <li>Notify us immediately of unauthorized access</li>
              <li>Accept responsibility for all activities under your account</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">3. Orders and Payments</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>All orders are subject to acceptance and availability</li>
              <li>Prices are subject to change without notice</li>
              <li>Payment must be received before order processing</li>
              <li>We reserve the right to cancel orders for any reason</li>
              <li>You agree to pay all applicable taxes and shipping charges</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">4. Shipping and Delivery</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Delivery times are estimates and not guaranteed</li>
              <li>Risk of loss transfers upon delivery to the carrier</li>
              <li>Delivery requires signature and valid identification</li>
              <li>We are not liable for delays caused by external factors</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">5. Returns and Refunds</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Returns accepted within 7 days of delivery</li>
              <li>Items must be in original condition with tags</li>
              <li>Refunds processed within 3-5 business days</li>
              <li>Customer responsible for return shipping unless item is defective</li>
              <li>Certain items are non-returnable as specified</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">6. Intellectual Property</h2>
            <p className="text-muted-foreground">All content on ShopKart, including text, graphics, logos, and software, is our property or licensed to us. You may not reproduce, distribute, or create derivative works without permission.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">7. Prohibited Uses</h2>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
              <li>Violating any applicable laws or regulations</li>
              <li>Impersonating others or providing false information</li>
              <li>Interfering with platform security or functionality</li>
              <li>Using automated systems to access the platform</li>
              <li>Uploading malicious code or harmful content</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">8. Limitation of Liability</h2>
            <p className="text-muted-foreground">ShopKart's liability is limited to the maximum extent permitted by law. We are not liable for indirect, incidental, or consequential damages arising from your use of our services.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">9. Indemnification</h2>
            <p className="text-muted-foreground">You agree to indemnify ShopKart against any claims, damages, or expenses arising from your violation of these terms or applicable law.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">10. Governing Law</h2>
            <p className="text-muted-foreground">These terms are governed by Indian law. Any disputes will be resolved in the courts of Bangalore, Karnataka.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">11. Changes to Terms</h2>
            <p className="text-muted-foreground">We may update these terms at any time. Continued use of our services constitutes acceptance of revised terms.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground">For questions about these terms, contact us at legal@shopkart.com or call 1800-123-4567.</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;