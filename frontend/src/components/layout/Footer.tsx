import { Brain } from "lucide-react";

function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t bg-slate-900 text-white"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-16 md:grid-cols-4">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3">
            <Brain className="h-8 w-8 text-blue-400" />

            <h2 className="text-2xl font-bold">
              Sahayak AI
            </h2>
          </div>

          <p className="mt-4 text-sm leading-7 text-slate-300">
            Smart Notice & Document Copilot that helps students
            understand notices, deadlines, required documents,
            and important information using Generative AI.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Quick Links
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>
              <a href="#" className="hover:text-white">
                Home
              </a>
            </li>

            <li>
              <a href="#features" className="hover:text-white">
                Features
              </a>
            </li>

            <li>
              <a href="#workspace" className="hover:text-white">
                Workspace
              </a>
            </li>

            <li>
              <a href="#faq" className="hover:text-white">
                FAQ
              </a>
            </li>
          </ul>
        </div>

        {/* Technology */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Technology
          </h3>

          <ul className="space-y-3 text-slate-300">
            <li>React + TypeScript</li>
            <li>Tailwind CSS</li>
            <li>FastAPI</li>
            <li>Google Gemini</li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="mb-5 text-lg font-semibold">
            Contact
          </h3>

          <div className="space-y-3 text-slate-300">
            <p>support@sahayakai.com</p>

            <p>GitHub</p>

            <p>LinkedIn</p>
          </div>
        </div>
      </div>

      <div className="border-t border-slate-700 py-6 text-center text-sm text-slate-400">
        © 2026 Sahayak AI. Built with ❤️ using React, FastAPI &
        Google Gemini.
      </div>
    </footer>
  );
}

export default Footer;