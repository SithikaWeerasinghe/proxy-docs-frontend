import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Plus, Minus } from 'lucide-react';
import { faqs } from '../../data/faqs';

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="bg-white py-24 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#121118] tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-[#525252]">
            Can&apos;t find an answer? <Link to="/contact" className="text-[#05C067] font-bold hover:underline">Contact our team</Link>
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index} 
                className={`border rounded-2xl transition-all duration-300 ${isOpen ? 'border-[#05C067] bg-white shadow-md' : 'border-gray-200 bg-[#FAFAFA] hover:border-gray-300'}`}
              >
                <button 
                  className="w-full flex items-center justify-between p-6 focus:outline-none"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className={`text-lg font-bold text-left ${isOpen ? 'text-[#121118]' : 'text-[#525252]'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 ml-4 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${isOpen ? 'bg-[#05C067] text-white' : 'bg-gray-200 text-[#525252]'}`}>
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </div>
                </button>
                
                <div 
                  className={`px-6 transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <p className="text-[#525252] leading-relaxed border-t border-gray-100 pt-4">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
