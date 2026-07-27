import { Upload, BrainCircuit, FileText, MessageSquare } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    icon: Upload,
    title: "Upload Document",
    description:
      "Upload PDFs, scanned images, notices, circulars or official documents.",
  },
  {
    icon: BrainCircuit,
    title: "AI Processing",
    description:
      "OCR extracts text while AI understands context and important information.",
  },
  {
    icon: FileText,
    title: "Smart Analysis",
    description:
      "Generate summaries, detect deadlines and prepare personalized checklists.",
  },
  {
    icon: MessageSquare,
    title: "Chat with PDF",
    description:
      "Ask questions naturally and receive instant answers from your document.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="scroll-mt-24 py-28 bg-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900">
            How It Works
          </h2>

          <p className="mt-5 text-slate-600 text-xl max-w-2xl mx-auto">
            Upload your document and let Sahayak AI extract the
            information that matters most.
          </p>
        </motion.div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .5,
                delay: index * .15,
              }}
              className="relative bg-white rounded-3xl border border-slate-200 p-8 text-center shadow-sm hover:shadow-xl transition"
            >
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <step.icon className="h-8 w-8 text-blue-600" />
              </div>

              <h3 className="mt-6 text-xl font-semibold">
                {step.title}
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                {step.description}
              </p>

              <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-black text-white font-bold">
                  {index + 1}
                </div>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default HowItWorks;