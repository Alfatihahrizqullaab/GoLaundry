import { Link } from "react-router-dom";

export const CTASection = () => {
    return(
        <section className="py-20 bg-blue-600 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
                <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-700 rounded-full blur-3xl opacity-50"></div>
                <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30"></div>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center text-white">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Siap Mengembangkan Bisnis Laundry Anda?</h2>
                <p className="text-blue-100 text-lg md:text-xl max-w-2xl mx-auto mb-10">Bergabunglah dengan ratusan owner laundry lainnya dan rasakan kemudahan mengelola bisnis bersama GoLaundry.</p>
                <Link to="/register" className="inline-flex justify-center items-center gap-2 bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 hover:scale-105 transition-all shadow-xl shadow-black/10">
                    Daftarkan Laundry Sekarang
                </Link>
            </div>
            
        </section>
    )
}