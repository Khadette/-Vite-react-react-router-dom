import { NavLink } from 'react-router-dom';
 
// Navigation links data — easy to extend
const navLinks = [
  { to: '/',        label: 'Home'    },
  { to: '/about',   label: 'About'   },
  { to: '/contact', label: 'Contact' },
];
 
function Navbar() {
  // This function is passed to NavLink's className prop.
  // React Router calls it with { isActive: true/false }.
  const linkClass = ({ isActive }) =>
    isActive
      ? 'text-blue-600 font-semibold border-b-2 border-blue-600 pb-1'
      : 'text-gray-600 hover:text-blue-600 transition-colors duration-200';
 
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
      <nav className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
 
          {/* Logo / Brand */}
          <NavLink to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">MP</span>
            </div>
            <span className="text-xl font-bold text-gray-900">MyPortfolio</span>
          </NavLink>
 
          {/* Desktop Navigation Links */}
          <ul className="hidden md:flex items-center gap-8 list-none m-0 p-0">
            {navLinks.map(link => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.to === '/'}  // 'end' prevents '/' from matching /about
                  className={linkClass}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
 
          {/* CTA Button */}
          <NavLink
            to="/contact"
            className="hidden md:block bg-blue-600 text-white px-4 py-2 rounded-lg
                        text-sm font-medium hover:bg-blue-700 transition-colors duration-200"
          >
            Hire Me
          </NavLink>
 
          {/* Mobile Menu Button (hamburger — no state needed, CSS only) */}
          <button className="md:hidden p-2 rounded-md text-gray-600 hover:text-blue-600">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
 
        </div>
      </nav>
    </header>
  );
}
 
export default Navbar;