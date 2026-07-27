import { Button } from "@/components/ui/button";
import { Upload, Play, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}

        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700"
        >
          <Sparkles className="h-4 w-4" />
          AI Powered Document Intelligence
        </motion.div>

        {/* Heading */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="max-w-5xl text-5xl font-extrabold leading-tight text-slate-900 md:text-7xl"
        >
          Transform Complex Documents
          <br />
          Into Clear Actions
        </motion.h1>

        {/* Description */}

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-3xl text-lg leading-8 text-slate-600"
        >
          Upload government notices, scholarship PDFs, college circulars,
          hostel documents, bank letters or scanned images and instantly
          receive AI summaries, important deadlines, required documents,
          personalized checklists and an intelligent document assistant.
        </motion.p>

        {/* Buttons */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.45 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <Button
            size="lg"
            className="rounded-xl px-8 py-6 text-base"
          >
            <Upload className="mr-2 h-5 w-5" />
            Upload Document
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="rounded-xl px-8 py-6 text-base"
          >
            <Play className="mr-2 h-5 w-5" />
            Watch Demo
          </Button>
        </motion.div>

        {/* Feature Pills */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4 text-sm"
        >
          {[
            "AI Summary",
            "Deadlines",
            "Checklist",
            "Chat with PDF",
          ].map((item) => (
            <span
              key={item}
              className="rounded-full border border-slate-200 bg-white px-5 py-2 font-medium text-slate-700 shadow-sm"
            >
              ✓ {item}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;