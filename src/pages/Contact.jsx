import { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 1500);
  };

  const contactInfo = [
    { label: 'Email', value: 'jaszmine.defranco@gmail.com', href: 'mailto:jaszmine.defranco@gmail.com' },
    { label: 'Phone', value: '+1 (614) 769-2255', href: 'tel:+16147692255' },
    { label: 'Location', value: 'Austin / Dallas', href: '#' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden bg-gradient-to-br from-accent-yellow/5 via-accent-green/5 to-accent-blue/5">
        <div className="absolute inset-0 bg-grain-noise opacity-20" />
        
        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-6">
              Let's Create
              <span className="text-accent-blue"> Together</span>
            </h1>
            <p className="text-lg text-dark-grey/70">
              Have a project in mind? I'd love to hear about it. 
              Whether it's a graduation, portrait session, or creative collaboration, 
              let's bring your vision to life.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-1"
            >
              <div className="sticky top-24">
                <h2 className="text-2xl font-display font-bold mb-6">Get in Touch</h2>
                <p className="text-dark-grey/60 mb-8">
                  I typically respond within 24-48 hours. Let's start a conversation!
                </p>
                
                <div className="space-y-6">
                  {contactInfo.map((item, index) => (
                    <a
                      key={index}
                      href={item.href}
                      className="flex items-center gap-4 group hover:translate-x-2 transition-transform duration-300"
                    >
                      <div className="w-12 h-12 rounded-full bg-accent-blue/10 flex items-center justify-center group-hover:bg-accent-blue/20 transition-colors">
                        <div className="w-5 h-5 rounded-full bg-accent-blue/30" />
                      </div>
                      <div>
                        <p className="text-sm text-dark-grey/50">{item.label}</p>
                        <p className="text-dark-grey font-medium">{item.value}</p>
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-dark-grey mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:border-accent-blue focus:outline-none transition-colors bg-white/50"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-dark-grey mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:border-accent-blue focus:outline-none transition-colors bg-white/50"
                      placeholder="hello@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-dark-grey mb-2">
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:border-accent-blue focus:outline-none transition-colors bg-white/50"
                    placeholder="Photography Inquiry"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-dark-grey mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={6}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-beige-dark focus:border-accent-blue focus:outline-none transition-colors bg-white/50 resize-none"
                    placeholder="Tell me about your project, vision, or any questions you have..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {/* Success Message */}
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="p-4 rounded-lg bg-green-500/10 border border-green-500/20 text-green-600"
                  >
                    Thank you! Your message has been sent. I'll get back to you soon.
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-beige-dark/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-display font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-dark-grey/70">Quick answers to common questions</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div>
              <h3 className="font-display font-semibold mb-2">How long does a photoshoot take?</h3>
              <p className="text-dark-grey/60 text-sm">Typically 1-3 hours depending on the occasion and location.</p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-2">When will I receive my photos?</h3>
              <p className="text-dark-grey/60 text-sm">You'll receive edited photos within 2-3 weeks after the shoot.</p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-2">Do you travel for shoots?</h3>
              <p className="text-dark-grey/60 text-sm">Yes! I'm currently available for Texas-based shoots.</p>
            </div>
            <div>
              <h3 className="font-display font-semibold mb-2">What's your pricing?</h3>
              <p className="text-dark-grey/60 text-sm">My rate is $100/hr, with custom quotes available for larger or smaller projects. Contact me for a custom quote.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;