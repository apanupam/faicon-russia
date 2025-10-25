import { useState } from "react";
import { IoChevronDownOutline } from "react-icons/io5";

const faqs = [
  {
    question: "1. What does Falcon Russia specialize in?",
    answer:
      "Falcon Russia specializes in the exploration, production, and global trading of oil, gas, and energy commodities. We also provide consultancy and logistical support for energy infrastructure and resource management."
  },
  {
    question: "2. Where are Falcon Russia’s operations based?",
    answer:
      "Our core operations are headquartered in Moscow, Russia, with partnerships and project collaborations across Europe, the Middle East, and Asia."
  },
  {
    question: "3. Does Falcon Russia supply to international clients?",
    answer:
      "Yes. Falcon Russia works with accredited international buyers and investors, ensuring smooth facilitation of energy trade and delivery across multiple continents."
  },
  {
    question: "4. How can potential partners or investors connect with Falcon Russia?",
    answer:
      "Interested organizations can reach us through our Contact Us page or via direct email at captain.nandi@hotmail.com. Our partnership team will respond with tailored engagement details."
  },
  {
    question: "5. What commodities does Falcon Russia trade in?",
    answer:
      "We trade in a broad range of commodities, including crude oil, natural gas, bitumen, coal, metal scrap, and aluminum products, maintaining strict quality standards and verified sourcing."
  },{
    question: "6. Does Falcon Russia manage logistics and shipping?",
    answer:
      "Yes. We provide end-to-end logistics support, including port delivery management, cargo handling, and international shipping coordination to ensure reliable and timely delivery."
  },{
    question: "7. How does Falcon Russia ensure environmental and operational safety?",
    answer:
      "We adhere to global safety protocols and environmental standards, integrating sustainability practices into every stage of exploration, processing, and delivery."
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-10 px-8 bg-white">
        <div className="container mx-auto grid grid-cols-3 gap-5">
            <div className="">
                <h5 className="text-xl font-medium text-[#4A5C6D] mb-3">Any Questions?</h5>
                <h2 className="text-8xl font-bold text-[#012A36]">FAQs</h2>
            </div>

            <div className="space-y-4 col-span-2">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className=""
                  >
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full flex justify-between items-center rounded-md px-4 py-4 text-left bg-[#EBF5FF] hover:bg-[#EBF5FF] transition"
                    >
                      <span className="font-semibold text-2xl text-[#012A36]">
                        {faq.question}
                      </span>
                      <IoChevronDownOutline
                        className={`w-5 h-5 text-gray-500 transform transition-transform duration-300 ${
                          openIndex === index ? "rotate-180" : ""
                        }`}
                      />
                    </button>
        
                    <div
                      className={`transition-all border border-[#D7EBFF] rounded-md  duration-300 overflow-hidden ${
                        openIndex === index ? "h-auto opacity-100 p-4 mt-2" : "opacity-0 h-0"
                      }`}
                    >
                      <div className="text-md text-[#012A36]">{faq.answer}</div>
                    </div>
                  </div>
                ))}
            </div>
        </div>
         
    </section>
  );
}
