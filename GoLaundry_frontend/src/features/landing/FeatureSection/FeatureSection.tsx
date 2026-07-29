import { motion } from "framer-motion";
import { features } from "../dataDummy/landingData";

export const FeatureSection = () => {
    return(
        <section id="fitur" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Mengapa memilih GoLaundry</h2>
                    <p className="text-gray-500 text-lg">Platform komprehensif yang didesain khusus untuk menjawab semua kebutuhan operasional bisnis laundry Anda.</p>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((f, i) => (
                        <motion.div key={i} initial={{opacity: 0, y: 20}} whileInView={{opacity:1, y:0}} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-gray-100 p-6 rounded-2xl hover:shadow-lg transition-shadow">
                            <div className="w-12 h-12 rounded-xl bg-white shadow-sm border border-gray-100 flex items-center justify-center mb-4">{f.icon}</div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{f.title}</h3>
                            <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}