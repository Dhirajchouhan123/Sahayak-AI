import { useState } from "react";
import { motion } from "framer-motion";

import UploadZone from "./UploadZone";
import SummaryCard from "./SummaryCard";
import DeadlineCard from "./DeadlineCard";
import RequiredDocsCard from "./RequiredDocsCard";
import ChecklistCard from "./ChecklistCard";
import ChatPanel from "./ChatPanel";

import type { AnalysisResult } from "@/types/analysis";

function Workspace() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);

  const handleAnalyze = (result: AnalysisResult) => {
    console.log("Workspace received:");
    console.log(result);

    setAnalysis(result);
  };
  return (
    <section className="bg-slate-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-center text-5xl font-bold">
            AI Workspace
          </h2>

          <p className="mt-4 text-center text-slate-600">
            Upload your document and let AI analyze it.
          </p>
        </motion.div>

        <div className="mt-12">
          <UploadZone onAnalyze={handleAnalyze} />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <SummaryCard
            summary={analysis?.summary ?? ""}
          />

          <DeadlineCard
            deadlines={analysis?.deadlines ?? []}
          />

          <RequiredDocsCard
            documents={analysis?.documents ?? []}
          />

          <ChecklistCard
            checklist={analysis?.checklist ?? []}
          />
        </div>

        <div className="mt-8">
          <ChatPanel />
        </div>
      </div>
    </section>
  );
}

export default Workspace;