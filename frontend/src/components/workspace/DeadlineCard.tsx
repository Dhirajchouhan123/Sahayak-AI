import { CalendarDays, Clock3 } from "lucide-react";
import { motion } from "framer-motion";

interface DeadlineCardProps {
  deadlines: string[];
}

function DeadlineCard({ deadlines }: DeadlineCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
    >
      <div className="flex items-center gap-3">
        <CalendarDays className="h-8 w-8 text-red-500" />

        <h3 className="text-2xl font-bold">
          Important Deadlines
        </h3>
      </div>

      <div className="mt-6 space-y-4">
        {deadlines.length > 0 ? (
          deadlines.map((deadline, index) => (
            <div
              key={index}
              className="flex items-start gap-3 rounded-xl border border-slate-200 p-4 hover:bg-slate-50 transition"
            >
              <Clock3 className="mt-1 h-5 w-5 text-red-500" />

              <div>
                <p className="font-medium">
                  {deadline}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-slate-500">
            Upload a document to detect deadlines.
          </p>
        )}
      </div>

      <div className="mt-6 border-t pt-4 text-sm text-slate-500">
        {deadlines.length} Deadline{deadlines.length !== 1 ? "s" : ""} Found
      </div>
    </motion.div>
  );
}

export default DeadlineCard;