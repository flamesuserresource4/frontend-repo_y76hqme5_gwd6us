import { motion } from 'framer-motion';
import { UserCheck, Shield, Clock, Globe } from 'lucide-react';

const benefits = [
  {
    icon: UserCheck,
    title: 'Deeply Vetted Talent',
    desc: 'Candidates assessed across technical, communication, and problem-solving dimensions.',
  },
  {
    icon: Clock,
    title: 'Speed without Compromise',
    desc: 'Get shortlists in under 72 hours and start within days, not months.',
  },
  {
    icon: Shield,
    title: 'Risk-free Engagement',
    desc: 'Flexible contracts, simple billing, and a satisfaction guarantee.',
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Fit',
    desc: 'Time-zone aligned professionals across 30+ countries and industries.',
  },
];

export default function Benefits() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6 }}
            className="text-2xl font-semibold text-zinc-900 md:text-3xl dark:text-white"
          >
            Why teams choose Alphanext
          </motion.h2>
          <p className="mt-3 text-zinc-600 dark:text-zinc-300">
            A curated network and a hiring experience designed for speed, quality, and confidence.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {benefits.map((b, i) => (
            <motion.div
              key={b.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-colors hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-blue-600/10 p-3 text-blue-600 ring-1 ring-blue-600/20 group-hover:scale-105 transition-transform">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{b.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 mix-blend-overlay transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-10 rotate-12 bg-gradient-to-br from-blue-500/10 via-emerald-500/10 to-fuchsia-500/10 blur-2xl" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
