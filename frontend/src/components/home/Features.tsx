import FeatureCard from "./FeatureCard";

import {
  FileText,
  CalendarClock,
  CheckCircle2,
  Languages,
  MessageSquare,
  ScanText,
} from "lucide-react";

function Features() {
  return (
    <section
      id="features"
      className="bg-white py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="text-center">
          <h2 className="text-5xl font-bold text-slate-900">
            Why Choose Sahayak AI?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
            Everything you need to understand important documents
            without spending hours reading them.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          <FeatureCard
            icon={<FileText size={28} />}
            title="AI Summary"
            description="Generate concise summaries from long government notices, circulars and official PDFs."
          />

          <FeatureCard
            icon={<CalendarClock size={28} />}
            title="Deadline Detection"
            description="Automatically identify submission dates, fee deadlines and important timelines."
          />

          <FeatureCard
            icon={<CheckCircle2 size={28} />}
            title="Checklist Generator"
            description="Receive a personalized checklist of required documents and next actions."
          />

          <FeatureCard
            icon={<MessageSquare size={28} />}
            title="Chat with Document"
            description="Ask questions naturally and receive answers directly from your uploaded document."
          />

          <FeatureCard
            icon={<ScanText size={28} />}
            title="OCR Support"
            description="Works with scanned PDFs and document images using Optical Character Recognition."
          />

          <FeatureCard
            icon={<Languages size={28} />}
            title="Multilingual AI"
            description="Understand documents written in English, Hindi and more with AI-powered translation."
          />

        </div>
      </div>
    </section>
  );
}

export default Features;