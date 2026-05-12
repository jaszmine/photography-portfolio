import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/about', label: 'About' },
    { path: '/contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-beige-light/95 backdrop-blur-md shadow-sm' : 'bg-beige-light/80 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo - Original Temp */}
          {/* <Link to="/" className="group flex items-center gap-2">
            <span className="text-2xl font-display font-bold tracking-tighter text-dark-grey">
              <span className="text-accent-blue">JD</span> Photography
            </span>
          </Link> */}

          {/* Logo */}
          <Link to="/" className="group flex items-center gap-3">
            {/* Logo Image */}
            <img 
              src="/JD-photography_logo.png" 
              alt="JD Photography Logo" 
              className="w-8 h-8 md:w-10 md:h-10 object-contain"
            />
            
            {/* Logo Text */}
            <span className="text-2xl font-display font-bold tracking-tighter text-dark-grey">
              Photography
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className="relative text-dark-grey/80 hover:text-dark-grey transition-colors duration-300 font-medium group"
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-accent-blue transition-all duration-300 ${
                  location.pathname === item.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-beige-dark transition-colors"
            aria-label="Toggle menu"
          >
            <span className="text-2xl">{isOpen ? '✕' : '☰'}</span>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-beige-dark">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`block py-3 px-4 rounded-lg transition-colors ${
                  location.pathname === item.path
                    ? 'bg-accent-blue/10 text-accent-blue'
                    : 'text-dark-grey/80 hover:text-dark-grey hover:bg-beige-dark/50'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;