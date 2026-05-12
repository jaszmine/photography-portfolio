import { Link } from 'react-router-dom';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const categoryLinks = [
        { id: 'graduation', name: 'Graduation', path: '/portfolio?category=graduation' },
        { id: 'landscape', name: 'Landscape', path: '/portfolio?category=landscape' },
        { id: 'portraits', name: 'Portrait/Events', path: '/portfolio?category=portraits' },
        { id: 'travel', name: 'Travel', path: '/portfolio?category=travel' },
        { id: 'liminal', name: 'Liminal', path: '/portfolio?category=liminal' },
    ];

    return (
        <footer className="bg-dark-grey text-white/80 mt-20">
        <div className="container-custom py-12 md:py-16">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            {/* Brand Column */}
            <div className="space-y-4">
                <div className="flex items-center gap-2">
                <span className="text-2xl font-display font-bold text-white">
                    <span className="text-accent-blue">JD</span> Photography
                </span>
                </div>
                <p className="text-sm text-white/60">
                Capturing life's most precious moments through the lens of artistry and emotion.
                </p>
            </div>

            {/* Quick Links */}
            <div>
                <h3 className="font-display font-semibold text-white mb-4">Quick Links</h3>
                <ul className="space-y-2">
                <li>
                    <Link to="/" className="text-white/60 hover:text-accent-blue transition-colors text-sm">
                    Home
                    </Link>
                </li>
                <li>
                    <Link to="/portfolio" className="text-white/60 hover:text-accent-blue transition-colors text-sm">
                    Portfolio
                    </Link>
                </li>
                <li>
                    <Link to="/about" className="text-white/60 hover:text-accent-blue transition-colors text-sm">
                    About
                    </Link>
                </li>
                <li>
                    <Link to="/contact" className="text-white/60 hover:text-accent-blue transition-colors text-sm">
                    Contact
                    </Link>
                </li>
                </ul>
            </div>

            {/* Categories */}
            <div>
                <h3 className="font-display font-semibold text-white mb-4">Categories</h3>
                <ul className="space-y-2">
                    {categoryLinks.map((category) => (
                        <li key={category.id}>
                            <Link 
                            to={category.path}
                            className="text-white/60 hover:text-accent-blue transition-colors text-sm block"
                            >
                            {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Contact Info */}
            <div>
                <h3 className="font-display font-semibold text-white mb-4">Contact</h3>
                <ul className="space-y-2">
                <li className="text-white/60 text-sm">jaszmine.defranco@gmail.com</li>
                <li className="text-white/60 text-sm">Austin / Dallas</li>
                </ul>
            </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-white/10 pt-8 text-center text-sm text-white/40">
            <p>&copy; {currentYear} JD Photography. All rights reserved.</p>
            </div>
        </div>
        </footer>
    );
};

export default Footer;