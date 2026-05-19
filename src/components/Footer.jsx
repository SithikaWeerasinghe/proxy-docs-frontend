import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-[var(--color-brand-bg)] text-[var(--color-brand-text-muted)] py-8 border-t border-[var(--color-brand-border)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          
          {/* Left Side */}
          <div className="text-sm">
            &copy; 2025 ProxyHub. All rights reserved.
          </div>
          
          {/* Right Side Links */}
          <div>
            <ul className="flex flex-wrap items-center gap-6">
              <li>
                <Link to="/privacy" className="text-sm hover:text-[var(--color-brand-blue)] transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-sm hover:text-[var(--color-brand-blue)] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm hover:text-[var(--color-brand-blue)] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
}
