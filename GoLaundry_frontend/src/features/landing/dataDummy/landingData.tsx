import {
    BarChart3, Clock, Users, DollarSign, Settings, Smartphone,
    Zap, Shield
} from 'lucide-react';


export const features = [
    { icon: <Settings className='text-blue-500' />, title: "Manajemen Laundry", desc: "Kelola semua outlet dan oprasional dari satu dashboard" },
    { icon: <Smartphone className="text-green-500" />, title: "Pemesanan Online", desc: "Customer dapat memesan langsung via aplikasi atau web." },
    { icon: <Clock className="text-orange-500" />, title: "Update Status Real-time", desc: "Lacak status pengerjaan secara transparan." },
    { icon: <BarChart3 className="text-purple-500" />, title: "Dashboard Analitik", desc: "Pantau performa bisnis dengan grafik interaktif." },
    { icon: <Users className="text-pink-500" />, title: "Pengelolaan Karyawan", desc: "Atur shift, absensi, dan hak akses karyawan." },
    { icon: <Zap className="text-yellow-500" />, title: "Pengelolaan Kasir", desc: "Sistem POS khusus laundry yang terintegrasi." },
    { icon: <DollarSign className="text-emerald-500" />, title: "Laporan Pendapatan", desc: "Laporan keuangan otomatis dan akurat." },
    { icon: <Shield className="text-indigo-500" />, title: "Paket Fleksibel", desc: "Sesuaikan sistem dengan skala bisnis Anda." }
];

export const steps = [
    { title: "Daftar Akun & Toko", desc: "Isi formulir pendaftaran dengan detail bisinis laundry anda" },
    { title: "Verifikasi Admin", desc: "Tim kami akan memverifikasi data Anda dalam 1x24 jam." },
    { title: "Login Dashboard", desc: "Akses penuh ke dashboard manajemen GoLaundry." },
    { title: "Atur Layanan", desc: "Tambahkan layanan, harga, dan akun karyawan." },
    { title: "Mulai Beroperasi", desc: "Terima pesanan online dan kelola operasional dengan mudah." }
];

export const pricing = [
    { name: "Basic", price: "Rp 99.000", period: "/bulan", desc: "Cocok untuk laundry pemula dengan 1 outlet.", features: ["1 Outlet", "Maks 5 Karyawan", "Manajemen Pesanan Dasar", "Akses Kasir (POS)", "Dukungan via Email"], popular: false },
    { name: "Professional", price: "Rp 249.000", period: "/bulan", desc: "Pilihan terbaik untuk bisnis yang sedang berkembang.", features: ["Hingga 3 Outlet", "Karyawan Tidak Terbatas", "Dashboard Analitik Lengkap", "Pemesanan Online Customer", "Dukungan Prioritas 24/7"], popular: true },
    { name: "Enterprise", price: "Custom", period: "", desc: "Solusi khusus untuk jaringan franchise laundry.", features: ["Outlet Tidak Terbatas", "White-label Aplikasi", "Custom API Integration", "Dedicated Account Manager", "Training On-site"], popular: false }
];

export const testimonials = [
    { name: "Budi Santoso", shop: "Budi Clean Laundry", text: "Sejak pakai GoLaundry, omset naik 30% karena customer lebih mudah pesan dan pantau status cucian mereka. Laporan keuangannya juga sangat membantu!", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&auto=format" },
    { name: "Siti Aminah", shop: "Kinclong Express", text: "Dulu sering repot rekap nota manual, sekarang semua otomatis. Karyawan juga lebih disiplin karena ada sistem absensi di aplikasinya.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&h=150&fit=crop&auto=format" },
    { name: "Andi Wijaya", shop: "Wash & Go", text: "Tampilan dashboardnya sangat modern dan mudah dipahami. Support tim GoLaundry juga sangat cepat kalau ada kendala. Sangat direkomendasikan!", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&auto=format" }
];

export const faqs = [
    { q: "Apakah GoLaundry gratis?", a: "Kami menyediakan masa percobaan gratis selama 14 hari. Setelah itu, Anda dapat memilih paket langganan yang sesuai dengan kebutuhan bisnis Anda." },
    { q: "Berapa lama proses verifikasi toko?", a: "Proses verifikasi toko biasanya memakan waktu maksimal 1x24 jam hari kerja." },
    { q: "Apakah laporan bisnis hanya tersedia pada paket premium?", a: "Laporan dasar tersedia di semua paket. Namun, laporan analitik mendalam dan prediksi tren hanya ada di paket Professional dan Enterprise." },
    { q: "Bagaimana cara customer melakukan pemesanan online?", a: "Customer dapat memesan melalui halaman web khusus outlet Anda yang kami sediakan, atau mendownload aplikasi customer GoLaundry." }
];


