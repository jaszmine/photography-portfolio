import { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Lightbox = ({ image, images, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(images.findIndex(img => img.id === image.id));
  const [currentImage, setCurrentImage] = useState(image);

  useEffect(() => {
    setCurrentIndex(images.findIndex(img => img.id === image.id));
    setCurrentImage(image);
  }, [image, images]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') prevImage();
      if (e.key === 'ArrowRight') nextImage();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex]);

  const nextImage = () => {
    const nextIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(nextIndex);
    setCurrentImage(images[nextIndex]);
  };

  const prevImage = () => {
    const prevIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(prevIndex);
    setCurrentImage(images[prevIndex]);
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = currentImage.src;
    link.download = `${currentImage.title}.jpg`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-lg flex items-center justify-center"
        onClick={onClose}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Close lightbox"
        >
          <X size={32} />
        </button>

        {/* Download button */}
        <button
          onClick={handleDownload}
          className="absolute top-4 right-20 z-10 p-2 text-white/80 hover:text-white transition-colors"
          aria-label="Download image"
        >
          <Download size={24} />
        </button>

        {/* Previous button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          className="absolute left-4 z-10 p-2 text-white/80 hover:text-white transition-colors touch-manipulation"
          aria-label="Previous image"
        >
          <ChevronLeft size={40} />
        </button>

        {/* Next button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          className="absolute right-4 z-10 p-2 text-white/80 hover:text-white transition-colors touch-manipulation"
          aria-label="Next image"
        >
          <ChevronRight size={40} />
        </button>

        {/* Image container */}
        <div 
          className="relative max-w-[90vw] max-h-[90vh] cursor-pointer"
          onClick={(e) => e.stopPropagation()}
        >
          <motion.img
            key={currentImage.id}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            src={currentImage.src}
            alt={currentImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl"
          />
          
          {/* Image info */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
            <h3 className="text-white font-display text-2xl mb-2">{currentImage.title}</h3>
            <p className="text-white/80 text-sm capitalize mb-1">{currentImage.category}</p>
            <p className="text-white/60 text-xs">
              {currentIndex + 1} / {images.length}
            </p>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Lightbox;