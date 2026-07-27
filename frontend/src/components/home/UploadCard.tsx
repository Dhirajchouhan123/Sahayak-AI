import { UploadCloud, FileText, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

function UploadCard() {
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-5xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-3xl border border-slate-200 bg-white p-10 shadow-xl"
        >
          <div className="flex flex-col items-center text-center">

            <div className="rounded-full bg-blue-100 p-5">
              <UploadCloud className="h-12 w-12 text-blue-600" />
            </div>

            <h2 className="mt-6 text-3xl font-bold text-slate-900">
              Upload Your Document
            </h2>

            <p className="mt-4 max-w-2xl text-slate-600">
              Drag & drop your document or browse from your device.
              We support PDF, Images, DOCX and scanned government documents.
            </p>

            <Button
              className="mt-8 rounded-xl px-8 py-6 text-base"
              size="lg"
            >
              Browse Files
            </Button>

            <div className="mt-10 grid w-full gap-6 md:grid-cols-3">

              <div className="rounded-2xl border p-6">
                <FileText className="mx-auto h-10 w-10 text-blue-600" />
                <h3 className="mt-4 font-semibold">
                  AI Summary
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Instantly generate a concise summary of lengthy documents.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <UploadCloud className="mx-auto h-10 w-10 text-green-600" />
                <h3 className="mt-4 font-semibold">
                  Important Deadlines
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Detect submission dates, fees and important timelines.
                </p>
              </div>

              <div className="rounded-2xl border p-6">
                <ShieldCheck className="mx-auto h-10 w-10 text-purple-600" />
                <h3 className="mt-4 font-semibold">
                  Personalized Checklist
                </h3>
                <p className="mt-2 text-sm text-slate-500">
                  Get required documents and next steps automatically.
                </p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default UploadCard;