export const categories = [
  { id: 'graduation', name: 'Graduation', priority: 1, gradient: 'from-accent-yellow to-accent-yellow' },
  { id: 'landscape', name: 'Landscape', priority: 2, gradient: 'from-accent-green to-accent-green' },
  { id: 'portraits', name: 'Portrait/Events', priority: 3, gradient: 'from-accent-turqoise to-accent-turqoise' },
  { id: 'travel', name: 'Travel', priority: 4, gradient: 'from-accent-blue to-accent-blue' },
  { id: 'liminal', name: 'Liminal', priority: 5, gradient: 'from-accent-blue to-dark-grey' }
];

export const images = [

  // Graduation (high priority)
  { id: 1,                                            // Unique number
      category: 'graduation',                         // match folder name
      src: '/images/graduation/grad-1.jpg',           // Path to image
      alt: 'Graduation ceremony celebration',         // SEO description
      title: 'Accomplished',                          // Display title
      width: 3178,                                    // Original width
      height: 3972,                                   // Original height
      priority: false },                               // true = loads first (hero images)
  { id: 2, category: 'graduation', src: '/images/graduation/grad-2.jpg', alt: 'Graduate Portrait', title: 'Reflecting Pools', width: 5798, height: 3865, priority: true },
  { id: 3, category: 'graduation', src: '/images/graduation/grad-3.JPEG', alt: 'Joyful graduation moment', title: 'Caps Off', width: 6000, height: 4000, priority: false },
  { id: 4, category: 'graduation', src: '/images/graduation/grad-4.jpg', alt: 'Graduating Class Ring', title: 'Class Ring', width: 3944, height: 2629, priority: false },
  { id: 5, category: 'graduation', src: '/images/graduation/grad-5.JPG', alt: 'Graduate Portrait', title: 'The Achievement', width: 5787, height: 3858, priority: false },
  { id: 6, category: 'graduation', src: '/images/graduation/grad-6.JPG', alt: 'Proud graduate portrait', title: 'Moment of Pride', width: 4000, height: 6000, priority: false },
  { id: 7, category: 'graduation', src: '/images/graduation/grad-7.jpg', alt: 'Graduate Portrait', title: 'Experience', width: 1485, height: 2227, priority: false },
  { id: 8, category: 'graduation', src: '/images/graduation/grad-8.JPG', alt: 'Graduate Portrait', title: 'Graduate Portrait', width: 6000, height: 4000, priority: false },
  { id: 9, category: 'graduation', src: '/images/graduation/grad-9.JPG', alt: 'Joyful graduation moment', title: 'Next Up', width: 1352, height: 2028, priority: false },

  // Landscape (high priority)
  { id: 5, category: 'landscape', src: '/images/landscape/landscape-1.jpg', alt: 'Research building', title: 'Afternoon Research', width: 1080, height: 1350, priority: true },
  { id: 6, category: 'landscape', src: '/images/landscape/landscape-2.jpg', alt: 'Total eclipse', title: 'Total Eclipse', width: 3098, height: 2065, priority: false },
  { id: 7, category: 'landscape', src: '/images/landscape/landscape-3.jpg', alt: 'Wisteria under a bridge', title: 'Wisteria', width: 5184, height: 3456, priority: false },
  { id: 8, category: 'landscape', src: '/images/landscape/landscape-4.jpg', alt: 'The Austin Paramount Theatre', title: 'Paramount', width: 3261, height: 4077, priority: false },
  { id: 9, category: 'landscape', src: '/images/landscape/landscape-5.jpg', alt: 'Plant growth beneath a bridge', title: 'No Trolls', width: 5184, height: 3456, priority: false },
  { id: 10, category: 'landscape', src: '/images/landscape/landscape-6.png', alt: 'Dallas Omni Hotel pegasus statue', title: 'Pegasus', width: 2397, height: 1600, priority: true },
  { id: 11, category: 'landscape', src: '/images/landscape/landscape-7.jpeg', alt: 'The Austin Sail building', title: 'Sail', width: 5184, height: 3456, priority: false },
  { id: 12, category: 'landscape', src: '/images/landscape/landscape-8.png', alt: 'Plant patches at Enchanted Rock', title: 'Other Worlds', width: 2400, height: 1599, priority: false },
  { id: 13, category: 'landscape', src: '/images/landscape/landscape-9.jpg', alt: 'Blood Moon', title: 'Blood Moon', width: 5079, height: 3386, priority: true },
  
  // Portrait/Events (high priority)
  { id: 14, category: 'portraits', src: '/images/portraits/portrait-1.jpg', alt: 'Portrait on top of hill', title: 'Sunbeams', width: 1684, height: 2528, priority: true },
  { id: 15, category: 'portraits', src: '/images/portraits/portrait-2.JPG', alt: 'Portrait from a distance', title: 'Beyond', width: 6000, height: 4000, priority: false },
  { id: 16, category: 'portraits', src: '/images/portraits/portrait-3.JPG', alt: 'Married couple & their rings', title: 'Guess What!', width: 6000, height: 4000, priority: false },
  { id: 17, category: 'portraits', src: '/images/portraits/portrait-4.jpg', alt: 'Wedding bands on bouquet', title: 'Rings', width: 4000, height: 6000, priority: true },
  { id: 18, category: 'portraits', src: '/images/portraits/portrait-5.jpg', alt: 'Married couple together', title: 'Together', width: 2982, height: 3727, priority: false },
  
  // Travel
  { id: 19, category: 'travel', src: '/images/travel/travel-1.jpg', alt: 'Storm at White Sands National Park', title: 'White Sands', width: 6000, height: 4000 },
  { id: 20, category: 'travel', src: '/images/travel/travel-2.jpg', alt: 'Lincoln National Forest Valley', title: 'The Valley', width: 5276, height: 3517 },
  { id: 21, category: 'travel', src: '/images/travel/travel-3.jpg', alt: 'Enchanted Rock', title: 'Enchanted Valley', width: 5184, height: 3456 },
  { id: 22, category: 'travel', src: '/images/travel/travel-4.jpg', alt: 'Lincoln National Forest Historic Train Tracks', title: 'Tracks', width: 6000, height: 4000 },
  
  // Liminal
  { id: 23, category: 'liminal', src: '/images/liminal/liminal-1.jpg', alt: 'Sectioned ceiling', title: 'Upside Down', width: 5184, height: 3456 },
  { id: 24, category: 'liminal', src: '/images/liminal/liminal-2.png', alt: 'Laundromat', title: 'Laundry & Taxes', width: 2400, height: 1599 },
  { id: 25, category: 'liminal', src: '/images/liminal/liminal-3.jpg', alt: 'Lake with dam', title: 'Once', width: 4000, height: 6000 },
  { id: 26, category: 'liminal', src: '/images/liminal/liminal-4.png', alt: 'Road through an underpass', title: 'Underpass', width: 2400, height: 1602 },
  { id: 27, category: 'liminal', src: '/images/liminal/liminal-5.jpg', alt: 'Empty classroom with projector on', title: 'Projections', width: 4918, height: 3278 },
  { id: 28, category: 'liminal', src: '/images/liminal/liminal-6.png', alt: 'Gate at night', title: 'Gate', width: 2400, height: 1598 },
  { id: 29, category: 'liminal', src: '/images/liminal/liminal-7.jpeg', alt: 'Empty hallway', title: 'Physics', width: 3456, height: 5184 },
  { id: 30, category: 'liminal', src: '/images/liminal/liminal-8.jpg', alt: 'Rainy bench light reflections', title: 'Reflections', width: 5184, height: 3456 },
  { id: 31, category: 'liminal', src: '/images/liminal/liminal-9.png', alt: 'Empty hallway at night', title: 'Beyond', width: 3456, height: 5184 },
];

// Fisher-Yates shuffle algorithm for randomizing
const shuffleArray = (array) => {
  const shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

// Store the original order and scrambled order
let originalOrder = [...images];
let scrambledOrder = shuffleArray(images);

// Helper function to get images by category
// export const getImagesByCategory = (category) => {
//   if (category === 'all') return images;
//   return images.filter(img => img.category === category);
// };

// Function to get images based on category with scrambling for 'all'
export const getImagesByCategory = (category, shouldScramble = true) => {
  if (category === 'all') {
    // Return scrambled order, but reshuffle occasionally for variety
    if (shouldScramble) {
      // Option 1: Return current scrambled order
      // return scrambledOrder;
      
      // Option 2: Return fresh scramble every time
      return shuffleArray(images);
    }
    return images;
  }
  // For specific categories, return filtered images in original order
  return images.filter(img => img.category === category);
};

// Function to rescramble the 'all' category (call when want fresh order)
export const rescrambleAll = () => {
  scrambledOrder = shuffleArray(images);
  return scrambledOrder;
};

// Get prioritized categories (first three)
export const getPrioritizedCategories = () => {
  return categories.filter(cat => cat.priority <= 3);
};

// Get placeholder images for demo 
export const getPlaceholderImage = (category, id) => {
  const colors = {
    graduation: 'FF5A5F',
    landscape: 'FFC857',
    portraits: 'FF8A3D',
    travel: '6A5ACD',
    liminal: '2E1A47'
  };
  return `https://placehold.co/${colors[category]}/FFFFFF/png?text=${category}+${id}`;
};