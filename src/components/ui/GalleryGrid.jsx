import { motion } from 'framer-motion';
import ImageCard from './ImageCard';
import Lightbox from './Lightbox';
import { useState } from 'react';

const GalleryGrid = ({ images, columns = { mobile: 1, tablet: 2, desktop: 3, large: 4 } }) => {
  const [selectedImage, setSelectedImage] = useState(null);

  const getGridClass = () => {
    const classes = [];
    if (columns.mobile === 1) classes.push('grid-cols-1');
    if (columns.tablet === 2) classes.push('sm:grid-cols-2');
    if (columns.desktop === 3) classes.push('md:grid-cols-3');
    if (columns.large === 4) classes.push('lg:grid-cols-4');
    return classes.join(' ');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className={`grid gap-6 ${getGridClass()}`}
      >
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            variants={itemVariants}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
          >
            <ImageCard
              image={image}
              onClick={() => setSelectedImage(image)}
            />
          </motion.div>
        ))}
      </motion.div>

      {selectedImage && (
        <Lightbox
          image={selectedImage}
          images={images}
          onClose={() => setSelectedImage(null)}
        />
      )}
    </>
  );
};

export default GalleryGrid;