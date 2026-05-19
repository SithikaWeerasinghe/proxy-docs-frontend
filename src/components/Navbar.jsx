import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Hexagon } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[var(--color-brand-bg)] border-b border-[var(--color-brand-border)] shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="bg-[var(--color-brand-card)] p-1.5 rounded-lg border border-[var(--color-brand-border)] group-hover:border-[var(--color-brand-blue)] transition-colors">
                <Hexagon className="h-6 w-6 text-[var(--color-brand-blue)]" />
              </div>
              <span className="font-bold text-xl tracking-tight text-white">ProxyHub</span>
            </Link>
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              to="/docs"
              className={`text-sm font-medium transition-colors ${
                isActive('/docs')
                  ? 'text-[var(--color-brand-blue)]'
                  : 'text-[var(--color-brand-text-muted)] hover:text-white'
              }`}
            >
              Documentation
            </Link>
            
            <div className="flex items-center gap-4 border-l border-[var(--color-brand-border)] pl-6">
              <Link
                to="/api-keys"
                className="inline-flex items-center justify-center px-4 py-2 border border-[var(--color-brand-blue)] text-sm font-medium rounded-md text-[var(--color-brand-blue)] bg-transparent hover:bg-[var(--color-brand-blue)] hover:text-white shadow-sm transition-all"
              >
                API Keys
              </Link>
              <Link
                to="/dashboard"
                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-hover)] shadow-sm transition-all"
              >
                Dashboard
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[var(--color-brand-text-muted)] hover:text-white hover:bg-[var(--color-brand-card)] focus:outline-none"
            >
              {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-[var(--color-brand-card)] border-b border-[var(--color-brand-border)]">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link
              to="/docs"
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive('/docs')
                  ? 'bg-[var(--color-brand-border)] text-[var(--color-brand-blue)]'
                  : 'text-[var(--color-brand-text-muted)] hover:bg-[var(--color-brand-border)] hover:text-white'
              }`}
            >
              Documentation
            </Link>
            <div className="mt-4 pt-4 border-t border-[var(--color-brand-border)] flex flex-col gap-3 px-3">
              <Link
                to="/api-keys"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 border border-[var(--color-brand-blue)] text-base font-medium rounded-md text-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue)] hover:text-white transition-all"
              >
                API Keys
              </Link>
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-white bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-hover)] transition-all"
              >
                Dashboard
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
