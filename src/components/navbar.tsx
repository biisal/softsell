import { useState } from "react";
import { Button } from "./ui/button";
import GradientText from "./gradient-text";

export function Navbar() {



  return (
    <nav
      className={`sticky backdrop-blur-lg top-0 left-0 w-full  border-white/40 border-b-1 z-50 transition-all duration-300 bg-transparent py-5`}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <div className="flex items-center">
          <GradientText as="span" className="text-2xl font-bold bg-gradient-to-r from-green-400 to-emerald-600 bg-clip-text text-transparent">
            SoftSell
          </GradientText>
        </div>

        <div className="hidden md:flex items-center space-x-10">
          <NavLink href="#home">Home</NavLink>
          <NavLink href="#how-it-works">How It Works</NavLink>
          <NavLink href="#why-us">Why Us</NavLink>
          <NavLink href="#testimonials">Testimonials</NavLink>
          <NavLink href="#contact">Contact</NavLink>
        </div>

        <div className="flex items-center space-x-4">
          <Button
            variant="ghost"
            className=""
          >
            Login
          </Button>
          <Button className="">
            Get Started
          </Button>
          <div className="md:hidden">
            <MobileMenuButton />
          </div>
        </div>
      </div>
    </nav>
  );
}

// NavLink component for consistent styling
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="text-white/80 hover:text-green-400 transition-colors duration-300"
    >
      {children}
    </a>
  );
}

// Mobile menu button with animation
function MobileMenuButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-50 flex items-center p-2"
        aria-label="Toggle mobile menu"
      >
        <div className="relative flex w-6 h-5 flex-col justify-between overflow-hidden">
          <span
            className={`h-0.5 w-6 bg-white rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? "translate-y-2 rotate-45" : ""
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded-lg transition-all duration-300 ease-in-out ${isOpen ? "opacity-0" : "opacity-100"
              }`}
          />
          <span
            className={`h-0.5 w-6 bg-white rounded-lg transform transition-all duration-300 ease-in-out ${isOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
          />
        </div>
      </button>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="fixed top-0 left-0 w-full h-screen inset-0 bg-black/90 backdrop-blur-lg flex flex-col pt-20 pl-4 z-40">
          <div className="flex flex-col items-start space-y-2 text-2xl">
            <NavLink href="#home">Home</NavLink>
            <NavLink href="#how-it-works">How It Works</NavLink>
            <NavLink href="#why-us">Why Us</NavLink>
            <NavLink href="#testimonials">Testimonials</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      )}
    </>
  );
}
