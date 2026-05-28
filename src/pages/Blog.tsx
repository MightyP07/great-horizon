import { motion } from "framer-motion";
import { Calendar, User, ArrowRight, Search } from "lucide-react";
import { useState } from "react";

const posts = [
  {
    title: "How Food Logistics Can End Hunger Faster Than Donations Alone",
    excerpt:
      "Most hunger problems are not about lack of food — but inefficiency in distribution systems.",
    author: "Editorial Team",
    date: "Jan 12, 2026",
    tag: "Insight",
  },
  {
    title: "Inside Our Community Food Distribution Network",
    excerpt:
      "A breakdown of how food moves from donors to communities in need across regions.",
    author: "Operations Desk",
    date: "Dec 28, 2025",
    tag: "Operations",
  },
  {
    title: "Why Local Volunteers Are the Backbone of Our Mission",
    excerpt:
      "Without community involvement, no large-scale humanitarian system survives long-term.",
    author: "Field Team",
    date: "Dec 10, 2025",
    tag: "Community",
  },
  {
    title: "Reducing Food Waste While Fighting Hunger",
    excerpt:
      "The paradox of global food systems and how redistribution solves both sides.",
    author: "Research Unit",
    date: "Nov 22, 2025",
    tag: "Research",
  },
];

function Blog() {
  const [query, setQuery] = useState("");

  const filtered = posts.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <main className="relative min-h-screen bg-white overflow-hidden pt-32 px-6">

      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-green-100 blur-3xl opacity-40 rounded-full" />

      <div className="relative max-w-6xl mx-auto">

        {/* HERO */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <span className="uppercase tracking-[0.25em] text-green-600 text-sm font-semibold">
            Blog & Insights
          </span>

          <h1 className="mt-5 text-5xl md:text-6xl font-bold text-[#021D05]">
            Ideas that
            <br />
            move systems.
          </h1>

          <p className="mt-6 text-gray-600 max-w-2xl mx-auto">
            We document what we learn from fighting hunger on the ground —
            from logistics to community impact.
          </p>
        </motion.div>

        {/* SEARCH */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-full max-w-md">
            <Search className="absolute left-4 top-3.5 text-gray-400" size={18} />

            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search articles..."
              className="
                w-full
                pl-10 pr-4 py-3
                rounded-xl
                border border-gray-200
                outline-none
                focus:border-green-500
                shadow-sm
              "
            />
          </div>
        </div>

        {/* FEATURED POST */}
        <motion.div
          whileHover={{ y: -6 }}
          className="
            mt-14
            p-8
            rounded-3xl
            bg-[#021D05]
            text-white
            relative
            overflow-hidden
          "
        >
          <div className="absolute top-0 right-0 w-60 h-60 bg-green-500/20 blur-3xl rounded-full" />

          <div className="relative">
            <span className="text-xs uppercase tracking-widest text-[#00FF7F]">
              Featured
            </span>

            <h2 className="mt-4 text-2xl md:text-3xl font-bold">
              The Future of Food Distribution in Africa
            </h2>

            <p className="mt-4 text-white/70 leading-relaxed max-w-2xl">
              How infrastructure, community networks, and technology are reshaping
              humanitarian food systems across developing regions.
            </p>

            <div className="mt-6 flex items-center gap-6 text-sm text-white/60">
              <span className="flex items-center gap-2">
                <User size={14} /> Editorial Team
              </span>
              <span className="flex items-center gap-2">
                <Calendar size={14} /> Feb 2026
              </span>
            </div>
          </div>
        </motion.div>

        {/* GRID POSTS */}
        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {filtered.map((post, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -6 }}
              className="
                group
                bg-white
                border border-gray-100
                rounded-3xl
                p-7
                shadow-sm
                hover:shadow-xl
                transition-all
                duration-300
              "
            >
              <span className="text-xs text-green-600 font-semibold">
                {post.tag}
              </span>

              <h3 className="mt-3 text-xl font-semibold text-[#021D05] group-hover:text-green-700 transition">
                {post.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm leading-relaxed">
                {post.excerpt}
              </p>

              <div className="mt-5 flex items-center justify-between text-xs text-gray-500">
                <span>{post.author}</span>
                <span>{post.date}</span>
              </div>

              <div className="mt-5 flex items-center gap-2 text-green-600 font-medium text-sm group-hover:gap-3 transition-all">
                Read more <ArrowRight size={16} />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </main>
  );
}

export default Blog;