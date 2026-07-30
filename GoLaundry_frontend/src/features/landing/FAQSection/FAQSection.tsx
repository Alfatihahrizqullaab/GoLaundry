import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "../../../utils/cn";
import { faqs } from "../dataDummy/landingData";



function FAQItem({q, a}:{q:string;a: string}){
    const [open, setOpen] = useState(false);
    return(
        <div className="border border-gray-200 rounded-xl overflow-hidden bg-white mb-4">
            <button className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none" onClick={() => setOpen(!open)}>
                <span className="font-semibold text-gray-900">{q}</span>
                <ChevronDown className={cn("transition-transform text-gray-500", open && "rotate-180")} size={20}></ChevronDown>
            </button>
            {open && (<div className="px-6 pb-4 text-gray-500">{a}</div>)}
        </div>
    );
}

export const FAQSection = () => {
    return(
        <section id="faq" className="py-24 bg-white border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
                    <p className="text-gray-500 text-lg">Pertanyaan yang sering diajukan mengenai GoLaundry.</p>
                </div>
                <div>
                    {faqs.map((faq, i) => (
                        <FAQItem key={i} q={faq.q} a={faq.a}></FAQItem>
                    ))}
                </div>
            </div>
        </section>
    )
}