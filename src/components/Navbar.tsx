import { ChevronDown } from "lucide-react";
import { Link } from "wouter";

type NavChild = {
  label: string;
  path: string;
};

type NavItem = {
  number: string;
  label: string;
  path?: string;
  dropdown?: boolean;
  children?: NavChild[];
};

const navItems: NavItem[] = [
  {
    number: "01",
    label: "Food Bank",
    dropdown: true,
    children: [
      { label: "Welcome", path: "/" },
      { label: "Our Impact", path: "/impact" },
      { label: "Our Leadership", path: "/about#leadership" },
      { label: "Hunger Heroes", path: "/about#heroes" },
      { label: "Mission & Vision", path: "/about#mission" },
      { label: "Press Kit", path: "/about#press-kit" },
    ],
  },
  {
    number: "02",
    label: "About Us",
    path: "/about",
  },
  {
    number: "03",
    label: "Make Donations",
    dropdown: true,
    children: [
      { label: "Vehicle Donation", path: "/vehicle-donation" },
      { label: "Money Donation", path: "/money-donation" },
      { label: "Food Donation", path: "/food-donation" },
    ],
  },
  {
    number: "04",
    label: "Get Involved",
    dropdown: true,
    children: [
      { label: "Volunteer with Us", path: "/volunteer" },
      { label: "Become a Partner", path: "/partner" },
      { label: "Student Internships", path: "/internships" },
    ],
  },
  { number: "05", label: "FAQs", path: "/faq" },
  { number: "06", label: "Blog", path: "/blog" },
  { number: "07", label: "Contact", path: "/contact" },
];

function Navbar() {
  return (
    <nav className="hidden lg:flex items-center gap-8 xl:gap-10">
      {navItems.map((item, i) => (
        <div
          key={i}
          className="relative flex flex-col items-center group cursor-pointer"
        >
          {/* NUMBER */}
          <span className="text-[11px] text-white/60 tracking-widest">
            {item.number}
          </span>

          {/* LABEL */}
          {item.dropdown ? (
            <div className="flex items-center gap-1">
              <span className="text-white text-sm font-medium whitespace-nowrap">
                {item.label}
              </span>

              <ChevronDown
                size={14}
                className="text-white transition-transform duration-300 group-hover:rotate-180"
              />
            </div>
          ) : (
            <Link href={item.path ?? "/"}>
              <span className="text-white text-sm font-medium hover:text-green-400 transition">
                {item.label}
              </span>
            </Link>
          )}

          {/* DROPDOWN */}
          {item.dropdown && (
            <div
              className="
              absolute top-[170%] left-1/2 -translate-x-1/2
              min-w-[220px]
              bg-white rounded-xl shadow-xl
              py-3
              opacity-0 invisible translate-y-2
              group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
              transition-all duration-300
              z-50
            "
            >
              {item.children?.map((child, idx) => (
                <Link
                  key={idx}
                  href={child.path}
                  className="
                    block px-5 py-3 text-sm text-black
                    hover:bg-gray-100 hover:text-[#008000]
                    transition
                  "
                >
                  {child.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
}

export default Navbar;