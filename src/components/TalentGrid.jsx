import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Software Engineering',
    tags: ['Full‑stack', 'Frontend', 'Backend', 'Mobile', 'DevOps'],
    accent: 'from-orange-500/15 to-orange-500/5',
  },
  {
    name: 'Design',
    tags: ['Product Design', 'UX Research', 'UI', 'Brand'],
    accent: 'from-amber-500/15 to-amber-500/5',
  },
  {
    name: 'Product & Strategy',
    tags: ['Product Manager', 'Program Manager', 'BizOps'],
    accent: 'from-orange-400/15 to-orange-400/5',
  },
  {
    name: 'Data & AI',
    tags: ['Data Science', 'ML Engineer', 'Analytics', 'MLOps'],
    accent: 'from-amber-400/15 to-amber-400/5',
  },
];

export default function TalentGrid() {
  return (
    <section id="categories" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-zinc-900 md:text-3xl dark:text-white"
          >
            Talent we place
          </motion.h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            Handpicked professionals ready to embed with your team.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {categories.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-[0_12px_40px_rgba(234,88,12,0.15)] dark:border-zinc-800 dark:bg-zinc-900`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.accent} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{c.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-zinc-200 bg-white/80 px-3 py-1 text-xs font-medium text-zinc-800 backdrop-blur transition-all hover:border-orange-300 hover:text-orange-700 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200 dark:hover:border-orange-500/60 dark:hover:text-orange-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-orange-500/25" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
