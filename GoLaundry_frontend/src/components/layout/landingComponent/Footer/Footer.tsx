const Footer = () => {
  return (
    <footer className="bg-white pt-16 pb-8 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 21.5c-3.58 0-6.5-2.92-6.5-6.5 0-3.37 3.32-8.54 5.9-12.63.26-.4.82-.4 1.09 0 2.58 4.09 5.9 9.26 5.9 12.63 0 3.58-2.92 6.5-6.5 6.5z"/></svg>
              </div>
              <span className="font-bold text-xl text-gray-900">Go<span className="text-blue-600">Laundry</span></span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Platform manajemen laundry all-in-one yang membantu mendigitalisasi dan mengembangkan bisnis laundry Anda menjadi lebih efisien.</p>
            <div className="flex gap-4 text-gray-400">
              <span>FB</span> <span>TW</span> <span>IG</span> <span>IN</span>
            </div>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Produk</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Fitur</li>
              <li>Paket Langganan</li>
              <li>Testimoni</li>
              <li>Pembaruan</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Perusahaan</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Tentang Kami</li>
              <li>Karir</li>
              <li>Blog</li>
              <li>Kontak</li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-gray-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li>Syarat & Ketentuan</li>
              <li>Kebijakan Privasi</li>
              <li>Keamanan Data</li>
            </ul>
          </div>
        </div>
        <div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 GoLaundry. Hak Cipta Dilindungi.</p>
          <p>Made with ❤️ for Laundry Owners</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;