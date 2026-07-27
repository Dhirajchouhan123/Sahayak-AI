import { Brain, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  {
    title: "Features",
    href: "#features",
  },
  {
    title: "How It Works",
    href: "#how-it-works",
  },
  
  {
    title: "Contact",
    href: "#contact",
  },
];

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-lg">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

        {/* Logo */}
        <a href="/" className="flex items-center gap-3">
          <Brain className="h-8 w-8 text-blue-600" />

          <div>
            <h1 className="text-xl font-bold text-slate-900">
              Sahayak AI
            </h1>

            <p className="text-xs text-slate-500">
              Smart Document Copilot
            </p>
          </div>
        </a>

        {/* Navigation */}

        <nav className="hidden gap-8 md:flex">
          {navLinks.map((item) => (
            <a
              key={item.title}
              href={item.href}
              className="text-sm font-medium text-slate-600 transition hover:text-blue-600"
            >
              {item.title}
            </a>
          ))}
        </nav>

        {/* CTA */}

        <Button className="rounded-xl px-6">
          <Upload className="mr-2 h-4 w-4" />
          Upload
        </Button>

      </div>
    </header>
  );
}

export default Navbar;