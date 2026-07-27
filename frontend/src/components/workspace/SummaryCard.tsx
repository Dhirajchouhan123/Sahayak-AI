import { Brain, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface SummaryCardProps {
  summary: string;
}

function SummaryCard({ summary }: SummaryCardProps) {
  const wordCount = summary
    ? summary.trim().split(/\s+/).length
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <Brain className="h-8 w-8 text-blue-600" />

        <h3 className="text-2xl font-bold">
          AI Summary
        </h3>
      </div>

      <div className="mt-6 min-h-[150px]">
        {summary ? (
          <p className="leading-8 text-slate-700">
            {summary}
          </p>
        ) : (
          <p className="text-slate-500">
            Upload a document and click
            <strong> Analyze Document </strong>
            to generate an AI summary.
          </p>
        )}
      </div>

      <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm text-slate-500">
        <div className="flex items-center gap-2">
          <FileText className="h-4 w-4" />
          <span>{wordCount} Words</span>
        </div>

        <span className="font-medium text-green-600">
          AI Generated
        </span>
      </div>
    </motion.div>
  );
}

export default SummaryCard;