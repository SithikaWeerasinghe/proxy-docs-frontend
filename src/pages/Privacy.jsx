import PageHeader from '../components/PageHeader';

export default function Privacy() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)]">
      <PageHeader 
        title="Privacy Policy" 
        description="Last updated: October 24, 2023"
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[var(--color-brand-card)] rounded-xl border border-[var(--color-brand-border)] p-8 prose prose-invert max-w-none text-[var(--color-brand-text)]">
          <h2>1. Introduction</h2>
          <p>
            Welcome to ProxyHub. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights.
          </p>
          
          <h2>2. Data We Collect</h2>
          <p>
            We may collect, use, store and transfer different kinds of personal data about you which we have grouped together follows:
          </p>
          <ul>
            <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
            <li><strong>Contact Data</strong> includes billing address, email address and telephone numbers.</li>
            <li><strong>Financial Data</strong> includes payment card details (processed securely by our payment providers).</li>
            <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location.</li>
            <li><strong>Usage Data</strong> includes information about how you use our website, API, products and services.</li>
          </ul>

          <h2>3. How We Use Your Data</h2>
          <p>
            We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
          </p>
          <ul>
            <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
            <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
            <li>Where we need to comply with a legal or regulatory obligation.</li>
          </ul>

          <h2>4. Data Security</h2>
          <p>
            We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know.
          </p>
          
          <h2>5. Contact Us</h2>
          <p>
            If you have any questions about this privacy policy or our privacy practices, please contact us at privacy@proxyhub.example.
          </p>
        </div>
      </div>
    </div>
  );
}
