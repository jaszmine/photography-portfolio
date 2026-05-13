import { useState, useEffect, useCallback } from 'react';
import { useSearchParams } from 'react-router-dom'; // Add this import
import { motion } from 'framer-motion';
import CategoryFilter from '../components/ui/CategoryFilter';
import GalleryGrid from '../components/ui/GalleryGrid';
import { images, getImagesByCategory, categories, rescrambleAll } from '../data/images';

const Portfolio = () => {
  const [searchParams, setSearchParams] = useSearchParams(); // Add this
  const [activeCategory, setActiveCategory] = useState('all');
  const [filteredImages, setFilteredImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [scrambleKey, setScrambleKey] = useState(0);

  // Read category from URL on component mount
  useEffect(() => {
    const categoryParam = searchParams.get('category');
    if (categoryParam && categories.some(cat => cat.id === categoryParam)) {
      setActiveCategory(categoryParam);
    }
  }, [searchParams]);

  // Update URL when category changes
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
    // Update URL without refreshing the page
    if (categoryId === 'all') {
      setSearchParams({});
    } else {
      setSearchParams({ category: categoryId });
    }
  };

  const handleRescramble = useCallback(() => {
    if (activeCategory === 'all') {
      rescrambleAll();
      setScrambleKey(prev => prev + 1);
    }
  }, [activeCategory]);

  useEffect(() => {
    setIsLoading(true);
    
    const timeout = setTimeout(() => {
      if (activeCategory === 'all') {
        setFilteredImages(getImagesByCategory('all', true));
      } else {
        setFilteredImages(getImagesByCategory(activeCategory, false));
      }
      setIsLoading(false);
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [activeCategory, scrambleKey]);

  // Get current category's gradient for header
  const currentCategory = categories.find(c => c.id === activeCategory);
  const headerGradient = currentCategory?.gradient || 'from-dark-grey to-dark-light';

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-br ${headerGradient} opacity-90`} />
        <div className="absolute inset-0 bg-grain-noise opacity-20" />
        
        <div className="container-custom relative z-10 text-center text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-display font-bold mb-4">
              {activeCategory === 'all' ? 'Portfolio' : currentCategory?.name}
            </h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              {activeCategory === 'all' 
                ? 'Exploring the world through my lens - a collection of moments, emotions, and stories'
                : `A collection of ${currentCategory?.name.toLowerCase()} photography capturing authentic moments`
              }
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-16 md:py-20">
        <div className="container-custom">
          {/* Category Filter */}
          <CategoryFilter 
            activeCategory={activeCategory} 
            onSelect={handleCategoryChange} 
          />

          {/* Rescramble button for 'all' category */}
          {activeCategory === 'all' && (
            <div className="flex justify-end mb-6">
              <button
                onClick={handleRescramble}
                className="text-sm text-dark-grey/60 hover:text-accent-yellow transition-colors flex items-center gap-2"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                Shuffle Order
              </button>
            </div>
          )}

          {/* Gallery Grid */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20">
              <div className="w-12 h-12 border-4 border-accent-yellow border-t-transparent rounded-full animate-spin" />
            </div>
          ) : filteredImages.length === 0 ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-dark-grey/60 text-lg">No images found in this category.</p>
            </motion.div>
          ) : (
            <GalleryGrid images={filteredImages} />
          )}

          {/* Image count */}
          {!isLoading && filteredImages.length > 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center mt-12 text-dark-grey/50 text-sm"
            >
              {filteredImages.length} {filteredImages.length === 1 ? 'image' : 'images'}
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Portfolio;