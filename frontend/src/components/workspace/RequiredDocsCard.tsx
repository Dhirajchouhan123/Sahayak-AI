import { FileBadge2, FileText } from "lucide-react";
import { motion } from "framer-motion";

interface RequiredDocsCardProps {
  documents: string[];
}

function RequiredDocsCard({
  documents,
}: RequiredDocsCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <FileBadge2 className="h-8 w-8 text-indigo-600" />

        <h3 className="text-2xl font-bold">
          Required Documents
        </h3>
      </div>

      <div className="mt-6 space-y-4">
        {documents.length > 0 ? (
          documents.map((document, index) => (
            <div
              key={index}
              className="flex items-center gap-3 rounded-xl border border-slate-200 p-4 transition hover:bg-slate-50"
            >
              <FileText className="h-5 w-5 text-indigo-600" />

              <p>{document}</p>
            </div>
          ))
        ) : (
          <p className="text-slate-500">
            Upload a document to detect required documents.
          </p>
        )}
      </div>

      <div className="mt-6 border-t pt-4 text-sm text-slate-500">
        {documents.length} Document
        {documents.length !== 1 ? "s" : ""} Required
      </div>
    </motion.div>
  );
}

export default RequiredDocsCard;