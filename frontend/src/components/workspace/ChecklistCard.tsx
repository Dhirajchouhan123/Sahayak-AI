import { CheckCircle2, ClipboardCheck } from "lucide-react";
import { motion } from "framer-motion";

interface ChecklistCardProps {
  checklist: string[];
}

function ChecklistCard({
  checklist,
}: ChecklistCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <ClipboardCheck className="h-8 w-8 text-green-600" />

        <h3 className="text-2xl font-bold">
          Submission Checklist
        </h3>
      </div>

      <div className="mt-6 space-y-4">
        {checklist.length > 0 ? (
          checklist.map((task, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-green-50"
            >
              <CheckCircle2 className="h-5 w-5 text-green-600" />

              <span>{task}</span>
            </div>
          ))
        ) : (
          <p className="text-slate-500">
            Upload a document to generate a checklist.
          </p>
        )}
      </div>

      <div className="mt-6 border-t pt-4 text-sm text-slate-500">
        {checklist.length} Task
        {checklist.length !== 1 ? "s" : ""} Generated
      </div>
    </motion.div>
  );
}

export default ChecklistCard;