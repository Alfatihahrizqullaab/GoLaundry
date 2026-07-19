import { Link } from 'react-router-dom';
import Button from '../../common/Button/Button';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.5c-3.58 0-6.5-2.92-6.5-6.5 0-3.37 3.32-8.54 5.9-12.63.26-.4.82-.4 1.09 0 2.58 4.09 5.9 9.26 5.9 12.63 0 3.58-2.92 6.5-6.5 6.5zm0-17.14C10.15 7.37 7 11.66 7 15c0 2.76 2.24 5 5 5s5-2.24 5-5c0-3.34-3.15-7.63-5-10.64z"/></svg>
            </div>
            <span className="font-bold text-2xl tracking-tight text-gray-900">Go<span className="text-blue-600">Laundry</span></span>
          </div>

          {/* Nav Links */}
          <nav className="hidden md:flex space-x-8">
            <a href="#beranda" className="text-gray-900 font-medium">Beranda</a>
            <a href="#fitur" className="text-gray-500 hover:text-gray-900">Fitur</a>
            <a href="#cara-kerja" className="text-gray-500 hover:text-gray-900">Cara Kerja</a>
            <a href="#paket" className="text-gray-500 hover:text-gray-900">Paket Langganan</a>
            <a href="#faq" className="text-gray-500 hover:text-gray-900">FAQ</a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-6">
            <Link to="/login" className="text-gray-900 font-medium hover:text-blue-600">Login</Link>
            <Button variant="primary">Daftarkan Laundry</Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;