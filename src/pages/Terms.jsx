import PageHeader from '../components/PageHeader';

export default function Terms() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)]">
      <PageHeader 
        title="Terms of Service" 
        description="Last updated: October 24, 2023"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[var(--color-brand-card)] rounded-xl border border-[var(--color-brand-border)] p-8 prose prose-invert max-w-none text-[var(--color-brand-text)]">
          <h2>1. Acceptance of Terms</h2>
          <p>
            By accessing and using ProxyHub ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service.
          </p>
          
          <h2>2. Description of Service</h2>
          <p>
            ProxyHub provides users with access to a network of proxies via an API. The Service may be updated or modified at our discretion without prior notice.
          </p>

          <h2>3. User Account and API Keys</h2>
          <p>
            To use the Service, you must create an account and generate API keys. You are responsible for maintaining the confidentiality of your account credentials and API keys. You agree to notify us immediately of any unauthorized use of your account.
          </p>
          
          <h2>4. Acceptable Use Policy</h2>
          <p>
            You agree not to use the Service for any unlawful or prohibited activities, including but not limited to:
          </p>
          <ul>
            <li>Distributing malware, viruses, or other harmful code.</li>
            <li>Engaging in unauthorized network scanning, probing, or vulnerability testing.</li>
            <li>Sending unsolicited communications (SPAM).</li>
            <li>Bypassing or modifying any security controls or limits.</li>
            <li>Any activity that violates the laws of your jurisdiction.</li>
          </ul>

          <h2>5. Billing and Refunds</h2>
          <p>
            The Service is billed on a prepaid basis or via usage limits depending on your plan. All fees are non-refundable unless otherwise required by law or explicitly stated in our refund policy.
          </p>

          <h2>6. Limitation of Liability</h2>
          <p>
            In no event shall ProxyHub be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your access to or use of or inability to access or use the Service.
          </p>
        </div>
      </div>
    </div>
  );
}
