import { motion } from 'framer-motion';
import { Rocket, Shield, Clock, Globe } from 'lucide-react';

const benefits = [
  {
    icon: Rocket,
    title: 'Elite, Vetted Talent',
    desc: 'Multistage assessments across technical depth, comms, and problem solving.',
  },
  {
    icon: Clock,
    title: 'Speed without Tradeoffs',
    desc: 'Shortlists in 72 hours. Start in days, not months — with quality preserved.',
  },
  {
    icon: Shield,
    title: 'Risk-free Engagements',
    desc: 'Flexible contracts, transparent billing, and a satisfaction-first policy.',
  },
  {
    icon: Globe,
    title: 'Global Reach, Local Fit',
    desc: 'Time-zone aligned experts across 30+ countries and industries.',
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
              initial={{ opacity: 0, y: 14, rotateX: -6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              whileHover={{ y: -6, rotateX: 2 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.55, delay: i * 0.05, ease: 'easeOut' }}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-[0_12px_40px_rgba(234,88,12,0.18)] dark:border-zinc-800 dark:bg-zinc-900"
            >
              <div className="relative z-10">
                <div className="mb-4 inline-flex rounded-xl bg-orange-600/10 p-3 text-orange-600 ring-1 ring-orange-600/20 transition-transform group-hover:scale-105">
                  <b.icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-semibold text-zinc-900 dark:text-white">{b.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-300">{b.desc}</p>
              </div>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <div className="absolute -inset-10 rotate-12 bg-[conic-gradient(from_0deg,rgba(251,146,60,0.18),rgba(234,88,12,0.18),transparent_60%)] blur-2xl" />
              </div>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition group-hover:ring-orange-500/30" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
