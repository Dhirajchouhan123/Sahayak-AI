import { useRef, useState } from "react";
import { UploadCloud, FileText } from "lucide-react";
import { motion } from "framer-motion";

import { Button } from "@/components/ui/button";
import api from "@/services/api";
import type { AnalysisResult } from "@/types/analysis";

interface UploadZoneProps {
  onAnalyze: (analysis: AnalysisResult) => void;
}

function UploadZone({ onAnalyze }: UploadZoneProps) {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [loading, setLoading] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10 MB

  const formatFileSize = (bytes: number) => {
    return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
  };

  const handleFileChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];

    console.log("Selected file:", file);

    if (!file) return;

    if (file.type !== "application/pdf") {
      alert("Only PDF files are allowed.");
      return;
    }

    if (file.size > MAX_FILE_SIZE) {
      alert("File size must be less than 10 MB.");
      return;
    }

    setSelectedFile(file);
  };

  const handleAnalyze = async () => {
    if (!selectedFile) return;

    try {
      setLoading(true);

      const formData = new FormData();
      formData.append("file", selectedFile);

      console.log("Uploading:", selectedFile.name);

      const response = await api.post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      console.log("API Response:", response.data);

      onAnalyze(response.data.analysis);
    } catch (error) {
      console.error("Upload Error:", error);
      alert("Failed to analyze document.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm"
    >
      <div className="flex flex-col items-center text-center">
        <UploadCloud className="h-16 w-16 text-blue-600" />

        <h3 className="mt-4 text-3xl font-bold">
          Upload Your Document
        </h3>

        <p className="mt-3 max-w-xl text-slate-600">
          Upload a PDF to generate summaries, detect deadlines,
          create checklists and chat with AI.
        </p>

        {/* Hidden File Input */}
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf"
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Select PDF Button */}
        <Button
          type="button"
          className="mt-8"
          onClick={() => fileInputRef.current?.click()}
        >
          Select PDF
        </Button>

        <div className="mt-8 w-full max-w-lg rounded-2xl border border-slate-200 bg-slate-50 p-5">
          {selectedFile ? (
            <div className="flex items-center gap-4">
              <FileText className="h-10 w-10 text-blue-600" />

              <div className="text-left">
                <p className="font-semibold">
                  {selectedFile.name}
                </p>

                <p className="text-sm text-slate-500">
                  Size: {formatFileSize(selectedFile.size)}
                </p>

                <p className="text-sm text-green-600">
                  Ready for AI Analysis
                </p>
              </div>
            </div>
          ) : (
            <p className="text-slate-500">
              No file selected
            </p>
          )}
        </div>

        <Button
          className="mt-8"
          disabled={!selectedFile || loading}
          onClick={handleAnalyze}
        >
          {loading ? "Analyzing..." : "Analyze Document"}
        </Button>
      </div>
    </motion.div>
  );
}

export default UploadZone;