import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';

export default function ApiKeys() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)]">
      <PageHeader 
        title="API Keys" 
      />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="bg-[var(--color-brand-card)] rounded-xl border border-[var(--color-brand-border)] p-12 text-center">
          <p className="text-xl text-[var(--color-brand-text)] mb-8">
            API key management interface will be connected by backend developers later.
          </p>
          <Link 
            to="/docs" 
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-hover)] transition-all"
          >
            Back to Documentation
          </Link>
        </div>
      </div>
    </div>
  );
}
