import { useState } from "react";
import Navbar from "./Navbar";
import MobileMenu from "./MobileMenu.tsx";
import { Menu } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="
      fixed top-0 left-0 w-full z-[9999]
      bg-[#021D05]/90 backdrop-blur-md
      border-b border-white/10
    ">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex items-center justify-between">

        {/* LOGO */}
        <h1 className="text-white text-xl sm:text-2xl font-bold">
          Great Horizon
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden lg:flex">
          <Navbar />
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(true)}
          className="lg:hidden text-white"
        >
          <Menu size={30} />
        </button>

      </div>

      {/* MOBILE MENU */}
      <MobileMenu open={open} setOpen={setOpen} />

    </header>
  );
}

export default Header;