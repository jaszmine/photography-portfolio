import { useEffect, useState, useRef } from 'react';

const FloatingBlobs = () => {
  const [blobs, setBlobs] = useState([]);
  const animationRef = useRef(null);

  const colors = [
    { main: '#dfb73f', light: 'rgba(223, 183, 63, 0.3)' },  // yellow
    { main: '#80934e', light: 'rgba(128, 147, 78, 0.05)' },   // green
    // { main: '#86b4ae', light: 'rgba(134, 180, 174, 0.08)' }, // turquoise
    // { main: '#6b99b2', light: 'rgba(107, 153, 178, 0.1)' },  // blue
  ];

  // Initialize blobs with random positions
  useEffect(() => {
    const numBlobs = 10;
    const newBlobs = [];
    
    for (let i = 0; i < numBlobs; i++) {
      const color = colors[Math.floor(Math.random() * colors.length)];
      const size = Math.floor(Math.random() * 300) + 150;
      
      newBlobs.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        targetX: Math.random() * 100,
        targetY: Math.random() * 100,
        size: size,
        color: color.light,
        mainColor: color.main,
        // Speed of movement (lower = slower, higher = faster)
        speed: Math.random() * 0.02 + 0.005, // Random speed range: 0.005-0.025
      });
    }
    setBlobs(newBlobs);
  }, []);

  // Animate blobs towards random targets
  useEffect(() => {
    if (blobs.length === 0) return;

    // Set random targets every few seconds
    const targetInterval = setInterval(() => {
      setBlobs(prevBlobs =>
        prevBlobs.map(blob => ({
          ...blob,
          targetX: Math.random() * 100,
          targetY: Math.random() * 100,
        }))
      );
    }, 4000); // Change target every 4 seconds

    // Animation loop for smooth movement
    const animate = () => {
      setBlobs(prevBlobs =>
        prevBlobs.map(blob => {
          // Calculate direction to target
          let dx = blob.targetX - blob.x;
          let dy = blob.targetY - blob.y;
          
          // Move towards target
          let newX = blob.x + dx * blob.speed;
          let newY = blob.y + dy * blob.speed;
          
          // If very close to target, snap to it
          if (Math.abs(dx) < 0.5 && Math.abs(dy) < 0.5) {
            newX = blob.targetX;
            newY = blob.targetY;
          }
          
          return {
            ...blob,
            x: newX,
            y: newY,
          };
        })
      );
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    animationRef.current = requestAnimationFrame(animate);
    
    return () => {
      clearInterval(targetInterval);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [blobs.length]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {blobs.map((blob) => (
        <div
          key={blob.id}
          className="absolute rounded-full blur-3xl transition-colors duration-1000"
          style={{
            width: `${blob.size}px`,
            height: `${blob.size}px`,
            left: `${blob.x}%`,
            top: `${blob.y}%`,
            backgroundColor: blob.color,
            transform: 'translate(-50%, -50%)',
            boxShadow: `0 0 50px ${blob.mainColor}`,
            transition: 'left 0.05s linear, top 0.05s linear', // Smooth movement
          }}
        />
      ))}
    </div>
  );
};

export default FloatingBlobs;