import { steps } from "../dataDummy/landingData";

export const HowItWorksSection = () => {
    return(
        <section id="cara-kerja" className="py-24 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Cara kerja GoLaundry</h2>
                    <p className="text-gray-500 text-lg">Mulai digitalisasi laundry anda hanya dalam 5 langkah mudah.</p>
                </div>
                <div className="relative max-w-4xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
                        {steps.map((step,i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-14 h-14 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4 border-4 border-white shadow-md">{i + 1}</div>
                                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                                <p className="text-xs text-gray-500">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}