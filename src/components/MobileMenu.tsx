import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";

type NavChild = {
  label: string;
  path: string;
};

type NavItem = {
  label: string;
  path?: string;
  children?: NavChild[];
};

type MobileMenuProps = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const navItems: NavItem[] = [
  {
    label: "Food Bank",
    children: [
      { label: "Welcome", path: "/" },
      { label: "Our Impact", path: "/impact" },
      { label: "Our Leadership", path: "/about#leadership" },
      { label: "Hunger Heroes", path: "/about#heroes" },
      { label: "Mission & Vision", path: "/about#mission" },
      { label: "Press Kit", path: "/about#press-kit" },
    ],
  },
  { label: "About Us", path: "/about" },
  {
    label: "Make Donations",
    children: [
      { label: "Vehicle Donation", path: "/vehicle-donation" },
      { label: "Money Donation", path: "/money-donation" },
      { label: "Food Donation", path: "/food-donation" },
    ],
  },
  {
    label: "Get Involved",
    children: [
      { label: "Volunteer with Us", path: "/volunteer" },
      { label: "Become a Partner", path: "/partner" },
      { label: "Student Internships", path: "/internships" },
    ],
  },
  { label: "FAQs", path: "/faq" },
  { label: "Blog", path: "/blog" },
  { label: "Contact", path: "/contact" },
];

export default function MobileMenu({ open, setOpen }: MobileMenuProps) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* BACKDROP */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          />

          {/* TOP SLIDE PANEL */}
          <motion.div
            className="
              fixed top-0 left-0 w-full
              bg-white text-[#021D05]
              z-[10000]
              shadow-2xl
              rounded-b-3xl
              max-h-[90vh]
              overflow-y-auto
            "
            initial={{ y: "-100%" }}
            animate={{ y: 0 }}
            exit={{ y: "-100%" }}
            transition={{ duration: 0.35, ease: "easeOut" }}
          >
            <div className="p-6 sm:p-8 flex flex-col gap-6">

              {/* TOP BAR */}
              <div className="flex justify-between items-center border-b pb-4">
                <h2 className="text-xl font-bold">Menu</h2>

                <button onClick={() => setOpen(false)}>
                  <X size={28} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-3">
                {navItems.map((item, i) => (
                  <div key={i} className="border-b border-gray-200 pb-3">

                    {item.children ? (
                      <>
                        <button
                          onClick={() =>
                            setActive(active === i ? null : i)
                          }
                          className="flex justify-between w-full py-3 font-medium"
                        >
                          {item.label}
                          <ChevronDown
                            className={`transition-transform ${
                              active === i ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {active === i && (
                          <div className="pl-3 flex flex-col gap-2 pb-2">
                            {item.children.map((child, idx) => (
                              <Link
                                key={idx}
                                href={child.path}
                                onClick={() => setOpen(false)}
                                className="text-sm text-gray-600 hover:text-black"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        href={item.path as string}
                        onClick={() => setOpen(false)}
                        className="block py-3 font-medium"
                      >
                        {item.label}
                      </Link>
                    )}

                  </div>
                ))}
              </div>

            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}