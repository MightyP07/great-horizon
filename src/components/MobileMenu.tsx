import { useState } from "react";
import { X, ChevronDown } from "lucide-react";
import { Link } from "wouter";

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

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/60">
      {/* PANEL */}
      <div className="absolute right-0 top-0 h-full w-[85%] bg-[#021D05] p-6 flex flex-col gap-6">
        {/* TOP */}
        <div className="flex justify-between items-center">
          <h2 className="text-white text-xl font-bold">Menu</h2>

          <button onClick={() => setOpen(false)} className="text-white">
            <X size={28} />
          </button>
        </div>

        {/* LINKS */}
        <div className="flex flex-col gap-3">
          {navItems.map((item, i) => (
            <div key={i} className="border-b border-white/10 pb-3">
              {item.children ? (
                <>
                  <button
                    onClick={() => setActive(active === i ? null : i)}
                    className="flex justify-between w-full text-white py-2"
                  >
                    {item.label}
                    <ChevronDown
                      className={`transition-transform ${
                        active === i ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {active === i && (
                    <div className="pl-4 mt-2 flex flex-col gap-2">
                      {item.children.map((child, idx) => (
                        <Link
                          key={idx}
                          href={child.path}
                          onClick={() => setOpen(false)}
                          className="text-white/70 text-sm"
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
                  className="block text-white py-2"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}