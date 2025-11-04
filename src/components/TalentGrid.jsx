import { motion } from 'framer-motion';

const categories = [
  {
    name: 'Software Engineering',
    tags: ['Full‑stack', 'Frontend', 'Backend', 'Mobile', 'DevOps'],
    color: 'from-blue-500/15 to-blue-500/5',
  },
  {
    name: 'Design',
    tags: ['Product Design', 'UX Research', 'UI', 'Brand'],
    color: 'from-fuchsia-500/15 to-fuchsia-500/5',
  },
  {
    name: 'Product & Strategy',
    tags: ['Product Manager', 'Program Manager', 'BizOps'],
    color: 'from-emerald-500/15 to-emerald-500/5',
  },
  {
    name: 'Data & AI',
    tags: ['Data Science', 'ML Engineer', 'Analytics', 'MLOps'],
    color: 'from-indigo-500/15 to-indigo-500/5',
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900`}
            >
              <div className={`pointer-events-none absolute inset-0 bg-gradient-to-br ${c.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`} />
              <div className="relative z-10">
                <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">{c.name}</h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur transition-colors hover:border-zinc-300 dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
