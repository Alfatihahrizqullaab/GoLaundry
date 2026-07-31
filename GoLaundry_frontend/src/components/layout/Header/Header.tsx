import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Button from '../../common/Button/Button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Mengecek apakah kita sedang berada di halaman utama
  const isHomePage = location.pathname === '/';

  const [activeSection, setActiveSection] = useState('beranda');

  const navItems = [
    { name: 'Beranda', id: 'beranda' },
    { name: 'Fitur', id: 'fitur' },
    { name: 'Cara Kerja', id: 'cara-kerja' },
    { name: 'Paket Langganan', id: 'paket' },
    { name: 'FAQ', id: 'faq' },
  ];

  useEffect(() => {
    if (!isHomePage) return;

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    navItems.forEach((item) => {
      const element = document.getElementById(item.id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [isHomePage, navItems]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    setActiveSection(id);

    if (isHomePage) {
      e.preventDefault();
      const element = document.getElementById(id);
      
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        window.history.pushState(null, '', `/#${id}`);
      }
    }
    closeMenu();
  };

  useEffect(() => {
    if (isHomePage) {
      const hash = location.hash.replace('#', '');
      if (hash) {
        setActiveSection(hash);
      } else {
         setActiveSection('beranda');
      }
    }
  }, [isHomePage, location.hash]);

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          <div className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <svg className="w-5 h-5 lg:w-6 lg:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 21.5c-3.58 0-6.5-2.92-6.5-6.5 0-3.37 3.32-8.54 5.9-12.63.26-.4.82-.4 1.09 0 2.58 4.09 5.9 9.26 5.9 12.63 0 3.58-2.92 6.5-6.5 6.5zm0-17.14C10.15 7.37 7 11.66 7 15c0 2.76 2.24 5 5 5s5-2.24 5-5c0-3.34-3.15-7.63-5-10.64z" />
              </svg>
            </div>
            <span className="font-bold text-xl lg:text-2xl tracking-tight text-gray-900">
              Go<span className="text-blue-600">Laundry</span>
            </span>
          </div>

          {/* Nav Links (Desktop) */}
          <nav className="hidden md:flex md:space-x-4 lg:space-x-8">
            {navItems.map((item) => {
              // Cek apakah di halaman Home DAN section-nya aktif
              const isActive = isHomePage && activeSection === item.id;
              
              return (
                <Link 
                  key={item.id}
                  to={`/#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`text-sm lg:text-base font-medium transition-colors ${
                    isActive 
                      ? 'text-gray-900 font-bold' 
                      : 'text-gray-500 hover:text-gray-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          <div className="hidden md:flex items-center md:gap-3 lg:gap-6 shrink-0">
            <Link 
              to="/LoginOwnerPage" 
              className={`text-sm lg:text-base transition-colors ${
                location.pathname === '/LoginOwnerPage'
                  ? 'text-blue-600 font-bold' // Warna saat sedang di halaman Login (misal: Biru tebal)
                  : 'text-gray-700 font-medium hover:text-blue-600' // Warna normal (abu-abu gelap)
              }`}
              >
                Login
            </Link>
            <div className="transform md:scale-90 lg:scale-100 origin-right">
              <Button variant="primary" onClick={() => navigate('/RegistrationOwnerPage')}>Daftarkan Laundry</Button>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-500 hover:text-gray-900 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full left-0 shadow-lg pb-6">
          <nav className="flex flex-col px-4 pt-4 pb-2 space-y-3">
            {navItems.map((item) => {
              // Cek active state untuk versi mobile juga
              const isActive = isHomePage && activeSection === item.id;
              
              return (
                <Link 
                  key={item.id}
                  to={`/#${item.id}`} 
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`block px-2 py-1 rounded-md font-medium ${
                    isActive 
                      ? 'text-gray-900 bg-gray-100 font-bold' 
                      : 'text-gray-500 hover:text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="flex flex-col px-6 mt-4 space-y-4">
            <Link 
              to="/LoginOwnerPage" 
              onClick={closeMenu} 
              className={`text-center border border-gray-200 rounded-lg py-2 transition-colors ${
                location.pathname === '/LoginOwnerPage'
                  ? 'text-blue-600 font-bold bg-blue-50 border-blue-200' // Terang & Biru jika sedang aktif
                  : 'text-gray-700 font-medium hover:bg-gray-50'
              }`}
              >
                Login
            </Link>
            <Button variant="primary" className="w-full" onClick={() => { navigate('/RegistrationOwnerPage'); closeMenu(); }}>
              Daftarkan Laundry
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;