import { CheckCircle2 } from "lucide-react";
import { cn } from "../../../utils/cn";
import { pricing } from "../dataDummy/landingData";
import { div } from "framer-motion/client";

export const PricingSection = () => {
    return(
        <section id="paket" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Paket Langganan</h2>
                    <p className="text-gray-500 text-lg">Harga transparan tanpa biaya tersembunyi. Sesuaikan dengan kebutuhan bisnis Anda.</p>
                </div>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto items-center">
                {pricing.map((p, i) => (
                    <div key={i} className={cn("relative bg-white rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-2", p.popular ? "border-2 border-blue-600 shadow-xl shadow-blue-900/10 scale-105 z-10" : "border border-gray-200 shadow-md")}>
                        {p.popular &&  (<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wider">Paling Populer</div>)}
                        <div className="mb-8">
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">{p.name}</h3>
                            <div className="flex items-baseline gap-1 mb-2"><span className="text-4xl font-bold text-gray-900">{p.price}</span><span className="text-gray-500">{p.period}</span></div>
                            <p className="text-sm text-gray-500">{p.desc}</p>
                        </div>
                        <ul className="space-y-4 mb-8">
                            {p.features.map((f, j) => (<li key={j} className="flex items-start gap-3 text-sm"><CheckCircle2 size={18} className="text-blue-600 shrink-0" /><span className="text-gray-900">{f}</span></li>))}
                        </ul>
                        <button className={cn("w-full py-3 rounded-xl font-semibold transition-colors", p.popular ? "bg-blue-600 text-white hover:bg-blue-700" : "bg-blue-50 text-blue-600 hover:bg-blue-100")}>Berlangganan</button>
                    </div>
                ))}
            </div>
        </section>
    )
}