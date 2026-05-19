import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Terminal, Code, Settings } from 'lucide-react';
import DocsSidebar from '../components/DocsSidebar';
import CodeBlock from '../components/CodeBlock';
import EndpointCard from '../components/EndpointCard';

export default function Docs() {
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: '-20% 0px -60% 0px', // Adjust trigger zone
      }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)]">
      {/* Hero Section */}
      <div className="pt-24 pb-16 border-b border-[var(--color-brand-border)] relative overflow-hidden">
        {/* Abstract background design */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] left-[20%] w-96 h-96 bg-[var(--color-brand-blue)] rounded-full mix-blend-screen filter blur-[100px] opacity-30"></div>
          <div className="absolute bottom-[-20%] right-[10%] w-[30rem] h-[30rem] bg-indigo-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-6">
              API Documentation
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-brand-text-muted)] mb-10 leading-relaxed">
              Complete REST API documentation for managing proxy products, orders, account usage, and targeting options.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/api-keys" className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--color-brand-blue)] text-base font-medium rounded-md text-[var(--color-brand-blue)] bg-transparent hover:bg-[var(--color-brand-blue)] hover:text-white shadow-sm transition-all">
                <Settings className="h-5 w-5" />
                Manage API Keys
              </Link>
              <Link to="/dashboard" className="inline-flex items-center gap-2 px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-hover)] transition-all">
                <Terminal className="h-5 w-5" />
                Go to Dashboard
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Main Content Column */}
          <div className="lg:w-3/4 max-w-4xl order-2 lg:order-1">
            
            {/* Overview */}
            <section id="overview" className="mb-16 scroll-mt-24">
              <h2 className="text-3xl font-bold text-white mb-6 flex items-center gap-3">
                <Code className="h-8 w-8 text-[var(--color-brand-blue)]" />
                Overview
              </h2>
              <div className="prose prose-invert max-w-none text-[var(--color-brand-text)] space-y-4">
                <p>
                  Welcome to the ProxyHub API. This API allows customers to programmatically manage products, orders, usage statistics, and targeting options.
                </p>
                <p>
                  Our API is organized around REST. It uses predictable, resource-oriented URLs, accepts JSON-encoded request bodies, returns JSON-encoded responses, and uses standard HTTP response codes, authentication, and verbs.
                </p>
              </div>
            </section>

            {/* Authentication */}
            <section id="authentication" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-[var(--color-brand-border)] pb-2">Authentication</h2>
              <p className="text-[var(--color-brand-text)] mb-4">
                The ProxyHub API uses API keys to authenticate requests. You can view and manage your API keys in the <Link to="/api-keys" className="text-[var(--color-brand-blue)] hover:underline">API Keys</Link> section.
              </p>
              <p className="text-[var(--color-brand-text)] mb-4">
                Authentication to the API is performed via HTTP Bearer Auth. Provide your API key as the bearer token value in the Authorization header.
              </p>
              <CodeBlock 
                language="http"
                code="Authorization: Bearer YOUR_API_KEY"
              />
              <div className="bg-amber-900/20 border-l-4 border-amber-500 p-4 mt-6 rounded-r-md">
                <p className="text-sm text-amber-200">
                  <strong>Security Note:</strong> Your API keys carry many privileges, so be sure to keep them secure! Do not share your secret API keys in publicly accessible areas such as GitHub, client-side code, etc.
                </p>
              </div>
            </section>

            {/* Base URL */}
            <section id="base-url" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-[var(--color-brand-border)] pb-2">Base URL</h2>
              <p className="text-[var(--color-brand-text)] mb-4">
                All API requests should be prefixed with the following base URL:
              </p>
              <CodeBlock 
                language="bash"
                code="https://api.proxyhub.example/v1"
              />
            </section>

            {/* Rate Limits */}
            <section id="rate-limits" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-[var(--color-brand-border)] pb-2">Rate Limits</h2>
              <div className="bg-[var(--color-brand-card)] rounded-xl border border-[var(--color-brand-border)] p-6 flex flex-col md:flex-row gap-6 items-start md:items-center">
                <div className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] p-4 rounded-full">
                  <Terminal className="h-8 w-8 text-[var(--color-brand-blue)]" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-1">Standard Limits</h3>
                  <p className="text-[var(--color-brand-text)] mb-3">
                    To prevent abuse and ensure stability, the API is rate-limited to <strong className="text-white">100 requests per second</strong> per API key.
                  </p>
                  <p className="text-sm text-[var(--color-brand-text-muted)]">
                    If you exceed this limit, you will receive a <code className="bg-[var(--color-brand-bg)] px-1.5 py-0.5 rounded border border-[var(--color-brand-border)] text-[var(--color-brand-blue)]">429 Too Many Requests</code> response.
                  </p>
                </div>
              </div>
            </section>

            {/* Account Endpoint */}
            <section id="account" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--color-brand-border)] pb-2">Account Endpoint</h2>
              <EndpointCard 
                method="GET"
                path="/account"
                description="Retrieve details about your account, including current balance and overall status."
                requestCode={`curl -X GET "https://api.proxyhub.example/v1/account" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                responseCode={`{
  "id": "acc_123456789",
  "email": "user@example.com",
  "balance": 150.00,
  "currency": "USD",
  "status": "active",
  "created_at": "2023-01-15T10:30:00Z"
}`}
              />
            </section>

            {/* Products Endpoint */}
            <section id="products" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--color-brand-border)] pb-2">Products Endpoint</h2>
              <EndpointCard 
                method="GET"
                path="/products"
                description="List all available proxy products that can be ordered. Includes pricing and specifications."
                requestCode={`curl -X GET "https://api.proxyhub.example/v1/products" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                responseCode={`{
  "data": [
    {
      "id": "prod_res_1",
      "name": "Residential Proxies",
      "type": "residential",
      "price_per_gb": 4.50,
      "features": ["rotating", "sticky_sessions", "city_targeting"]
    },
    {
      "id": "prod_dc_1",
      "name": "Datacenter Proxies",
      "type": "datacenter",
      "price_per_ip": 1.20,
      "features": ["static", "unlimited_bandwidth"]
    }
  ],
  "has_more": false
}`}
              />
            </section>

            {/* Orders Endpoints */}
            <section id="orders" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--color-brand-border)] pb-2">Orders Endpoint</h2>
              <EndpointCard 
                method="POST"
                path="/orders"
                description="Create a new proxy order. Deducts funds from your account balance."
                requestCode={`curl -X POST "https://api.proxyhub.example/v1/orders" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "product_id": "prod_res_1",
    "quantity_gb": 10
  }'`}
                responseCode={`{
  "id": "ord_987654321",
  "product_id": "prod_res_1",
  "quantity_gb": 10,
  "status": "active",
  "total_cost": 45.00,
  "created_at": "2023-10-24T14:22:11Z"
}`}
              />
              <EndpointCard 
                method="GET"
                path="/orders/{id}"
                description="Retrieve the details of a specific order by its ID."
                requestCode={`curl -X GET "https://api.proxyhub.example/v1/orders/ord_987654321" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                responseCode={`{
  "id": "ord_987654321",
  "product_id": "prod_res_1",
  "quantity_gb": 10,
  "bandwidth_used_gb": 2.4,
  "status": "active",
  "total_cost": 45.00,
  "created_at": "2023-10-24T14:22:11Z"
}`}
              />
            </section>

            {/* Targeting Endpoints */}
            <section id="targeting" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-6 border-b border-[var(--color-brand-border)] pb-2">Targeting Endpoint</h2>
              <EndpointCard 
                method="GET"
                path="/targeting/countries"
                description="List all available countries for geo-targeting."
                requestCode={`curl -X GET "https://api.proxyhub.example/v1/targeting/countries" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                responseCode={`{
  "data": [
    { "code": "US", "name": "United States", "region": "Americas" },
    { "code": "GB", "name": "United Kingdom", "region": "Europe" },
    { "code": "DE", "name": "Germany", "region": "Europe" }
  ]
}`}
              />
              <EndpointCard 
                method="GET"
                path="/targeting/cities"
                description="List available cities for a specific country using query parameters."
                requestCode={`curl -X GET "https://api.proxyhub.example/v1/targeting/cities?country=US" \\
  -H "Authorization: Bearer YOUR_API_KEY"`}
                responseCode={`{
  "data": [
    { "id": "ny_nyc", "name": "New York", "state": "NY" },
    { "id": "ca_la", "name": "Los Angeles", "state": "CA" },
    { "id": "il_chi", "name": "Chicago", "state": "IL" }
  ]
}`}
              />
            </section>

            {/* Error Handling */}
            <section id="error-handling" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-[var(--color-brand-border)] pb-2">Error Handling</h2>
              <p className="text-[var(--color-brand-text)] mb-6">
                ProxyHub uses conventional HTTP response codes to indicate the success or failure of an API request. Codes in the 2xx range indicate success. Codes in the 4xx range indicate an error that failed given the information provided (e.g., a required parameter was omitted). Codes in the 5xx range indicate an error with our servers.
              </p>
              
              <div className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left">
                    <thead>
                      <tr className="bg-[var(--color-brand-bg)] border-b border-[var(--color-brand-border)]">
                        <th className="px-6 py-3 text-xs font-semibold text-[var(--color-brand-text-muted)] uppercase tracking-wider">Status Code</th>
                        <th className="px-6 py-3 text-xs font-semibold text-[var(--color-brand-text-muted)] uppercase tracking-wider">Meaning</th>
                        <th className="px-6 py-3 text-xs font-semibold text-[var(--color-brand-text-muted)] uppercase tracking-wider">Description</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[var(--color-brand-border)] text-sm">
                      <tr className="hover:bg-[var(--color-brand-bg)]/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-[var(--color-brand-blue)]">400</td>
                        <td className="px-6 py-4 font-medium text-white">Bad Request</td>
                        <td className="px-6 py-4 text-[var(--color-brand-text)]">The request was unacceptable, often due to missing a required parameter.</td>
                      </tr>
                      <tr className="bg-[var(--color-brand-bg)]/30 hover:bg-[var(--color-brand-bg)]/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-[var(--color-brand-blue)]">401</td>
                        <td className="px-6 py-4 font-medium text-white">Unauthorized</td>
                        <td className="px-6 py-4 text-[var(--color-brand-text)]">No valid API key provided.</td>
                      </tr>
                      <tr className="hover:bg-[var(--color-brand-bg)]/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-[var(--color-brand-blue)]">403</td>
                        <td className="px-6 py-4 font-medium text-white">Forbidden</td>
                        <td className="px-6 py-4 text-[var(--color-brand-text)]">The API key doesn't have permissions to perform the request.</td>
                      </tr>
                      <tr className="bg-[var(--color-brand-bg)]/30 hover:bg-[var(--color-brand-bg)]/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-[var(--color-brand-blue)]">404</td>
                        <td className="px-6 py-4 font-medium text-white">Not Found</td>
                        <td className="px-6 py-4 text-[var(--color-brand-text)]">The requested resource doesn't exist.</td>
                      </tr>
                      <tr className="hover:bg-[var(--color-brand-bg)]/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-[var(--color-brand-blue)]">429</td>
                        <td className="px-6 py-4 font-medium text-white">Too Many Requests</td>
                        <td className="px-6 py-4 text-[var(--color-brand-text)]">Too many requests hit the API too quickly. We recommend an exponential backoff of your requests.</td>
                      </tr>
                      <tr className="bg-[var(--color-brand-bg)]/30 hover:bg-[var(--color-brand-bg)]/50 transition-colors">
                        <td className="px-6 py-4 font-mono text-[var(--color-brand-blue)]">500, 502, 503, 504</td>
                        <td className="px-6 py-4 font-medium text-white">Server Error</td>
                        <td className="px-6 py-4 text-[var(--color-brand-text)]">Something went wrong on our end. (These are rare.)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* Backend Integration Notes */}
            <section id="backend-notes" className="mb-16 scroll-mt-24">
              <h2 className="text-2xl font-bold text-white mb-4 border-b border-[var(--color-brand-border)] pb-2">Backend Integration Notes</h2>
              <div className="bg-[var(--color-brand-card)] border border-[var(--color-brand-border)] rounded-xl p-6">
                <p className="text-[var(--color-brand-text)] leading-relaxed">
                  <strong>Note:</strong> This frontend currently uses static data. Backend developers can connect real endpoints later using <code className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] px-1.5 py-0.5 rounded text-sm text-[var(--color-brand-blue)]">fetch</code> or <code className="bg-[var(--color-brand-bg)] border border-[var(--color-brand-border)] px-1.5 py-0.5 rounded text-sm text-[var(--color-brand-blue)]">axios</code> inside the relevant components. Make sure to configure CORS appropriately on the server to accept requests from this application.
                </p>
              </div>
            </section>
            
          </div>

          {/* Sidebar Column */}
          <div className="lg:w-1/4 order-1 lg:order-2">
            <div className="sticky top-24 max-h-[calc(100vh-120px)] overflow-y-auto bg-[var(--color-brand-card)] p-6 rounded-xl border border-[var(--color-brand-border)]">
              <DocsSidebar activeSection={activeSection} />
            </div>
          </div>
          
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="relative rounded-2xl overflow-hidden bg-emerald-600 shadow-2xl p-12 md:p-16 text-center isolate">
          {/* Subtle dotted/grid background pattern */}
          <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] -z-10"></div>
          
          {/* Gradient overlay for depth */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/50 to-emerald-800/80 -z-10"></div>

          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
            Ready to Get Started?
          </h2>
          <p className="text-emerald-50 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            Create your first API key and start integrating ProxyHub into your application today.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              to="/api-keys" 
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-emerald-700 font-semibold rounded-lg hover:bg-emerald-50 shadow-sm transition-all transform hover:-translate-y-0.5"
            >
              Manage API Keys
            </Link>
            <Link 
              to="/contact" 
              className="w-full sm:w-auto px-8 py-3.5 bg-transparent border-2 border-emerald-300 text-white font-semibold rounded-lg hover:bg-emerald-700/50 hover:border-white transition-all transform hover:-translate-y-0.5"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
