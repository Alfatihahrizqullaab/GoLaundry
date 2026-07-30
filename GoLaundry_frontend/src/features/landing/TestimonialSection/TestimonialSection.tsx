import { Star } from "lucide-react";
import { testimonials } from "../dataDummy/landingData";

export const TestimonialsSection = () => {
    return(
        <section className="py-24 bg-gray-50 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Di Percaya ratusan Owner</h2>
                    <p className="text-gray-500 text-lg">Lihat bagaimana GoLaundry membantu mereka mengembangkan bisnis.</p>
                </div>
                <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {testimonials.map((t, i) => (
                        <div key={i} className="bg-white p-8 rounded-2xl border border-gray-200 shadow-sm">
                            <div className="flex text-yellow-400 mb-4">
                                <Star size={16} fill="currentColor"></Star>
                                <Star size={16} fill="currentColor"></Star>
                                <Star size={16} fill="currentColor"></Star>
                                <Star size={16} fill="currentColor"></Star>
                                <Star size={16} fill="currentColor"></Star>
                            </div>
                            <p className="text-gray-700 mb-6 line-clamp-4">{t.text}</p>
                            <div className="flex items-center gap-4">
                                <img src={t.img} alt={t.name} className="w-12 h-12 rounded-full object-cover" />
                                <div><div className="font-semibold text-sm text-gray-900">{t.name}</div><div className="text-xs text-gray-500">{t.shop}</div></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}