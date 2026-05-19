import PageHeader from '../components/PageHeader';
import { Mail, MessageCircle, HelpCircle } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)]">
      <PageHeader 
        title="Contact Us" 
        description="We're here to help. Get in touch with our support team or sales department."
      />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          
          <div>
            <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>
            <p className="text-[var(--color-brand-text)] mb-8">
              Whether you have a question about features, pricing, need a demo, or anything else, our team is ready to answer all your questions.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] rounded-lg">
                  <Mail className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Email Support</h3>
                  <p className="text-[var(--color-brand-text)]">support@proxyhub.example</p>
                  <p className="text-sm text-[var(--color-brand-text-muted)] mt-1">We aim to reply within 24 hours.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] rounded-lg">
                  <MessageCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Live Chat</h3>
                  <p className="text-[var(--color-brand-text)]">Available on your dashboard</p>
                  <p className="text-sm text-[var(--color-brand-text-muted)] mt-1">Mon-Fri, 9am - 5pm EST.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[var(--color-brand-blue)]/10 text-[var(--color-brand-blue)] rounded-lg">
                  <HelpCircle className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Documentation</h3>
                  <p className="text-[var(--color-brand-text)]">Check our detailed API docs</p>
                  <p className="text-sm text-[var(--color-brand-text-muted)] mt-1">Most questions are answered there.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-[var(--color-brand-card)] rounded-xl border border-[var(--color-brand-border)] p-8">
            <h3 className="text-xl font-semibold text-white mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-brand-text)] mb-1">Name</label>
                <input type="text" id="name" className="w-full rounded-md border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] text-white border px-4 py-2 focus:border-[var(--color-brand-blue)] focus:ring-[var(--color-brand-blue)] outline-none transition-colors" placeholder="John Doe" />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[var(--color-brand-text)] mb-1">Email</label>
                <input type="email" id="email" className="w-full rounded-md border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] text-white border px-4 py-2 focus:border-[var(--color-brand-blue)] focus:ring-[var(--color-brand-blue)] outline-none transition-colors" placeholder="john@example.com" />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-[var(--color-brand-text)] mb-1">Subject</label>
                <select id="subject" className="w-full rounded-md border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] text-white border px-4 py-2 focus:border-[var(--color-brand-blue)] focus:ring-[var(--color-brand-blue)] outline-none transition-colors">
                  <option>General Inquiry</option>
                  <option>Technical Support</option>
                  <option>Billing Question</option>
                  <option>Sales & Enterprise</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[var(--color-brand-text)] mb-1">Message</label>
                <textarea id="message" rows="4" className="w-full rounded-md border-[var(--color-brand-border)] bg-[var(--color-brand-bg)] text-white border px-4 py-2 focus:border-[var(--color-brand-blue)] focus:ring-[var(--color-brand-blue)] outline-none transition-colors" placeholder="How can we help you?"></textarea>
              </div>
              
              <button type="button" className="w-full bg-[var(--color-brand-blue)] hover:bg-[var(--color-brand-blue-hover)] text-white font-medium py-2 px-4 rounded-md transition-colors">
                Send Message
              </button>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
}
