import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { motion } from "framer-motion";

const faqItems = [
  {
    question: "What file formats are supported?",
    answer: "Currently, Sahayak AI supports PDF documents. More formats will be added in future updates.",
  },
  {
    question: "Is my uploaded document secure?",
    answer: "Yes. Your document is securely processed and is only used to generate AI insights.",
  },
  {
    question: "Can I chat with my uploaded PDF?",
    answer: "Absolutely! After analysis, you can ask questions and receive AI-powered answers based on your document.",
  },
  {
    question: "Does Sahayak AI detect deadlines automatically?",
    answer: "Yes. It identifies important dates and deadlines from your uploaded document.",
  },
  {
    question: "Which AI model powers Sahayak AI?",
    answer: "Sahayak AI uses Google's Gemini model for document understanding and intelligent responses.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-4xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-slate-600">
            Everything you need to know about Sahayak AI.
          </p>
        </motion.div>

        <div className="mt-12 space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              <button
                className="flex w-full items-center justify-between p-6 text-left"
                onClick={() => toggleFAQ(index)}
              >
                <span className="font-semibold">
                  {item.question}
                </span>

                {openIndex === index ? (
                  <ChevronUp />
                ) : (
                  <ChevronDown />
                )}
              </button>

              {openIndex === index && (
                <div className="border-t px-6 py-5 text-slate-600">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FAQ;