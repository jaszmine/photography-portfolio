import { motion } from 'framer-motion';
import { categories } from '../../data/images';

const CategoryFilter = ({ activeCategory, onSelect }) => {
  const allCategories = [
    { id: 'all', name: 'All Work', priority: 0, gradient: 'from-dark-grey to-dark-light' },
    ...categories
  ];

  const getCategoryGradient = (categoryId) => {
    const category = allCategories.find(c => c.id === categoryId);
    return category?.gradient || 'from-dark-grey to-dark-light';
  };

  return (
    <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12">
      {allCategories.map((category) => (
        <motion.button
          key={category.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => onSelect(category.id)}
          className={`relative px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 overflow-hidden group ${
            activeCategory === category.id
              ? 'text-white'
              : 'text-dark-grey/70 hover:text-dark-grey bg-beige-dark/50'
          }`}
        >
          {/* Background gradient for active state */}
          {activeCategory === category.id && (
            <motion.div
              layoutId="activeCategory"
              className={`absolute inset-0 bg-gradient-to-r ${getCategoryGradient(category.id)}`}
              transition={{ type: "spring", duration: 0.5 }}
            />
          )}
          
          {/* Grain overlay for active state */}
          {activeCategory === category.id && (
            <div className="absolute inset-0 bg-grain-noise opacity-20 pointer-events-none" />
          )}
          
          {/* Text */}
          <span className="relative z-10">
            {category.name}
          </span>
        </motion.button>
      ))}
    </div>
  );
};

export default CategoryFilter;