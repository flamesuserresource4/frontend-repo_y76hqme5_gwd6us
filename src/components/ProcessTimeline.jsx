import { motion } from 'framer-motion';
import { Search, Filter, MessageSquare, BadgeCheck } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: 'Define your needs',
    desc: 'Share role requirements, scope, and timelines in a short intake call.',
  },
  {
    icon: Filter,
    title: 'Curated shortlist',
    desc: 'Receive a tailored list of vetted candidates matched to your stack and culture.',
  },
  {
    icon: MessageSquare,
    title: 'Interviews made easy',
    desc: 'We coordinate interviews, manage feedback, and streamline offers.',
  },
  {
    icon: BadgeCheck,
    title: 'Start with confidence',
    desc: 'Flexible contracts, frictionless onboarding, and ongoing support.',
  },
];

export default function ProcessTimeline() {
  return (
    <section id="process" className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-zinc-900 md:text-3xl dark:text-white"
          >
            How hiring works
          </motion.h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A streamlined process that keeps momentum and never compromises quality.
          </p>
        </div>

        <div className="relative mt-12">
          {/* animated progress line */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="pointer-events-none absolute left-1/2 top-1/2 hidden h-1 w-[70%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-orange-500 via-amber-400 to-orange-500 md:block"
          />

          <div className="grid gap-6 md:grid-cols-4">
            {steps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 16, rotate: -1 }}
                whileInView={{ opacity: 1, y: 0, rotate: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.55, delay: i * 0.08 }}
                className="group relative flex flex-col rounded-2xl border border-zinc-200 bg-white p-6 text-center shadow-sm transition-colors hover:border-orange-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-orange-500/40"
              >
                <div className="mx-auto inline-flex rounded-2xl bg-orange-500/10 p-3 text-orange-600 ring-1 ring-orange-500/20 transition-colors group-hover:bg-orange-500/15 dark:text-orange-400">
                  <s.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-zinc-900 dark:text-white">{s.title}</h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">{s.desc}</p>
                <div className="mt-4 text-xs font-medium text-orange-600 dark:text-orange-400">Step {i + 1}</div>
                <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-orange-500/25" />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          id="get-started"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-orange-200/40 bg-gradient-to-br from-orange-500/10 to-amber-400/10 p-6 text-center backdrop-blur dark:border-orange-500/20"
        >
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">Ready to meet your next hire?</h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-300">
            Tell us what you need and we’ll curate a shortlist tailored to your stack, culture, and timelines.
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#"
              className="rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(234,88,12,0.35)] transition-colors hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
            >
              Get started
            </a>
            <a
              href="#"
              className="rounded-lg border border-zinc-300 bg-white/90 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-900"
            >
              Book a call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
