import { useState } from 'react';
import { getPlaceholderImage } from '../../data/images';

const ImageCard = ({ image, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [imgSrc, setImgSrc] = useState(image.src || getPlaceholderImage(image.category, image.id));

  const handleError = () => {
    // Fallback to placeholder if image fails to load
    setImgSrc(getPlaceholderImage(image.category, image.id));
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-xl cursor-pointer bg-dark-grey/5"
      onClick={onClick}
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Lazy loading image */}
        <img
          src={imgSrc}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={image.priority ? 'eager' : 'lazy'}
          className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          onError={handleError}
        />
        
        {/* Skeleton loader */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-beige-dark to-beige-light animate-pulse" />
        )}
        
        {/* Overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-dark-grey/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Title overlay on hover */}
        <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-full group-hover:translate-y-0 transition-transform duration-500">
          <h3 className="text-white font-display text-xl mb-1">{image.title}</h3>
          <p className="text-white/80 text-sm capitalize">{image.category}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageCard;