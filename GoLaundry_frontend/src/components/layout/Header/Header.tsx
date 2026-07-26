import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

const Header = () => {
  // State untuk mengontrol apakah menu mobile sedang terbuka atau tertutup
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Fungsi untuk menutup menu saat link diklik (opsional, tapi UX-nya lebih baik)
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.5c-3.58 0-6.5-2.92-6.5-6.5 0-3.37 3.32-8.54 5.9-12.63.26-.4.82-.4 1.09 0 2.58 4.09 5.9 9.26 5.9 12.63 0 3.58-2.92 6.5-6.5 6.5zm0-17.14C10.15 7.37 7 11.66 7 15c0 2.76 2.24 5 5 5s5-2.24 5-5c0-3.34-3.15-7.63-5-10.64z" />
              </svg>
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">
              Go<span className="text-blue-600">Laundry</span>
            </span>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex space-x-8">
            <a href="#beranda" className="text-gray-900 font-medium">Beranda</a>
            <a href="#fitur" className="text-gray-500 hover:text-gray-900">Fitur</a>
            <a href="#cara-kerja" className="text-gray-500 hover:text-gray-900">Cara Kerja</a>
            <a href="#paket" className="text-gray-500 hover:text-gray-900">Paket Langganan</a>
            <a href="#faq" className="text-gray-500 hover:text-gray-900">FAQ</a>
          </nav>

          {/* Actions (Desktop) */}
          <div className="hidden md:flex items-center gap-6">
            <Link to="/login" className="text-gray-900 font-medium hover:text-blue-600">Login</Link>
            <Button variant="primary">Daftarkan Laundry</Button>
          </div>

          {/* Mobile Menu Button (Hamburger Icon) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                // Icon Silang (Close)
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Icon Hamburger (Menu)
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown Panel */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg pb-6">
          <nav className="flex flex-col px-4 pt-4 pb-2 space-y-3">
            <a href="#beranda" onClick={closeMenu} className="text-gray-900 font-medium block px-2 py-1 rounded-md hover:bg-gray-50">Beranda</a>
            <a href="#fitur" onClick={closeMenu} className="text-gray-500 hover:text-gray-900 block px-2 py-1 rounded-md hover:bg-gray-50">Fitur</a>
            <a href="#cara-kerja" onClick={closeMenu} className="text-gray-500 hover:text-gray-900 block px-2 py-1 rounded-md hover:bg-gray-50">Cara Kerja</a>
            <a href="#paket" onClick={closeMenu} className="text-gray-500 hover:text-gray-900 block px-2 py-1 rounded-md hover:bg-gray-50">Paket Langganan</a>
            <a href="#faq" onClick={closeMenu} className="text-gray-500 hover:text-gray-900 block px-2 py-1 rounded-md hover:bg-gray-50">FAQ</a>
          </nav>
          
          {/* Actions for Mobile */}
          <div className="flex flex-col px-6 mt-4 space-y-4">
            <Link to="/login" onClick={closeMenu} className="text-center text-gray-900 font-medium border border-gray-200 rounded-lg py-2 hover:bg-gray-50">
              Login
            </Link>
            <Button variant="primary" className="w-full" onClick={closeMenu}>
              Daftarkan Laundry
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;