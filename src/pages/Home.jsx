import { motion } from 'framer-motion';
import { Camera, Map, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import GalleryGrid from '../components/ui/GalleryGrid';
import { images, getPrioritizedCategories } from '../data/images';
import FloatingBlobs from '../components/ui/FloatingBlobs';

const Home = () => {
  const featuredImages = images.filter(img => img.priority === true).slice(0, 6);

  const stats = [
    { icon: Camera, value: '500+', label: 'Projects Completed', color: 'accent-orange' },
    { icon: Users, value: '200+', label: 'Happy Clients', color: 'accent-green' },
    { icon: Map, value: '30+', label: 'Locations', color: 'accent-blue' },
  ];

  return (
    <div className="overflow-hidden">
        {/* <FloatingBlobs />   */}

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
        {/* Animated floating elements */}
        {/* <div className="absolute top-20 left-10 w-72 h-72 bg-accent-yellow/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent-blue/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} /> */}
        
        <div className="container-custom relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            {/* <div className="container-custom relative z-10 text-center">
                <div className="flex justify-center h-16 md:h-20 sm: mb-18 md:mb-14 lg:mb-18">
                    <Link to="/" className="group flex items-center gap-3">
                        <img 
                        src="/JD-photography_logo.png" 
                        alt="JD Photography Logo" 
                        className="w-40 h-40 sm:w-20 md:w-40 md:h-40 object-contain"
                        />
                        
                        <span className="text-xl sm:text-3xl md:text-5xl lg:text-8xl font-display font-bold tracking-tighter text-dark-grey">
                        Photography
                        </span>
                    </Link>
                    <br />
                </div>
            </div> */}

            <div className="container-custom relative z-10 text-center">
              <div className="py-4 sm:py-6 md:py-8">
                {/* Logo - Stacked on mobile, side by side on tablet+ */}
                <Link to="/" className="group inline-flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
                  {/* Logo Image */}
                  <img 
                    src="/JD-photography_logo.png" 
                    alt="JD Photography Logo" 
                    className="w-20 h-20 sm:w-28 sm:h-28 md:w-36 md:h-36 lg:w-40 lg:h-40 object-contain"
                  />
                  
                  {/* Logo Text */}
                  <span className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-display font-bold tracking-tighter text-dark-grey">
                    Photography
                  </span>
                </Link>
              </div>
            </div>

            <h1 className="text-2xl sm:text-4xl md:text-5xl font-display font-gowun font-bold text-dark-grey mb-6 mt-6 tracking-tighter">
              Capturing <span className="text-accent-blue">Moments That Matter</span>
            </h1>
            <p className="text-lg md:text-xl text-dark-grey/70 max-w-2xl mx-auto mb-8 font-body">
              Visual storytelling through a unique lens. Exploring the beauty in every frame, 
              from graduation celebrations to breathtaking landscapes.
            </p>
            <Link to="/portfolio" className="btn-primary">
              View Portfolio
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20 bg-beige-dark/30">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What I Capture</h2>
            <p className="text-dark-grey/70 max-w-2xl mx-auto">
              Specializing in authentic moments across various genres.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {getPrioritizedCategories().map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                // className={`relative overflow-hidden rounded-2xl p-8 text-center group cursor-pointer bg-gradient-to-br ${category.gradient}`}
              >
                <Link 
                    to={`/portfolio?category=${category.id}`}
                    className={`relative overflow-hidden rounded-2xl p-8 text-center group cursor-pointer bg-gradient-to-br ${category.gradient} block`}
                >
                    {/* arrow indicator */}
                    <div className="absolute inset-0 bg-grain-noise opacity-20" />
                    <h3 className="text-2xl font-display font-bold text-white mb-2 relative z-10">
                        {category.name}
                    </h3>
                    <p className="text-white/80 text-sm relative z-10">
                        Explore {category.name.toLowerCase()} portfolio.
                    </p>

                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                    </div>

                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-20">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">Featured Work</h2>
            <p className="text-dark-grey/70 max-w-2xl mx-auto">
              A glimpse into my recent projects and favorite captures.
            </p>
          </motion.div>

          <GalleryGrid images={featuredImages} columns={{ mobile: 1, tablet: 2, desktop: 2, large: 3 }} />
          
          <div className="text-center mt-12">
            <Link to="/portfolio" className="btn-primary">
              View Full Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-20 bg-dark-grey text-white">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <stat.icon className={`w-12 h-12 text-${stat.color} mx-auto mb-4`} />
                <div className="text-4xl font-display font-bold mb-2">{stat.value}</div>
                <div className="text-white/60 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-accent-pink/10 via-accent-orange/5 to-accent-purple/10">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Capture Your Moments?
            </h2>
            <p className="text-dark-grey/70 max-w-2xl mx-auto mb-8">
              Whether it's a graduation, portrait session, or special event, <br />
              I'd love to hear your vision.
            </p>
            <Link to="/contact" className="btn-primary">
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;