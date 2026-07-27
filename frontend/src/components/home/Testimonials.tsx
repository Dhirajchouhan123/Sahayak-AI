import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "MNIT Jaipur Student",
    review:
      "Sahayak AI summarized my scholarship PDF in seconds. I immediately knew the important dates and required documents.",
  },
  {
    name: "Priya Singh",
    role: "Engineering Student",
    review:
      "The checklist feature saved me so much time. I didn't miss a single hostel document during admission.",
  },
  {
    name: "Aman Verma",
    role: "UPSC Aspirant",
    review:
      "I use Sahayak AI to understand government notifications quickly. It's much easier than reading lengthy PDFs.",
  },
];

function Testimonials() {
  return (
    <section className="py-28 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="text-5xl font-bold text-slate-900">
            Loved by Students & Professionals
          </h2>

          <p className="mt-5 text-slate-600 max-w-2xl mx-auto text-xl">
            Thousands of users simplify their important documents with Sahayak AI.
          </p>
        </motion.div>

        <div className="grid gap-8 mt-20 md:grid-cols-2 lg:grid-cols-3">

          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.2,
              }}
              whileHover={{
                y: -8,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl transition"
            >
              <div className="flex gap-1 text-yellow-500">
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
                <Star fill="currentColor" size={20} />
              </div>

              <p className="mt-6 text-slate-600 leading-8">
                "{item.review}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="h-14 w-14 rounded-full bg-blue-100 flex items-center justify-center text-xl font-bold text-blue-700">
                  {item.name.charAt(0)}
                </div>

                <div>
                  <h4 className="font-semibold text-lg">
                    {item.name}
                  </h4>

                  <p className="text-slate-500 text-sm">
                    {item.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;