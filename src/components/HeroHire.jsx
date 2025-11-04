import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function HeroHire() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="relative z-10"
          >
            <span className="inline-flex items-center rounded-full border border-zinc-200 bg-white/70 px-3 py-1 text-xs font-medium text-zinc-700 backdrop-blur dark:border-zinc-800 dark:bg-zinc-900/70 dark:text-zinc-300">
              Alphanext Talent Network
            </span>
            <h1 className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl dark:text-white">
              Hire world-class tech talents on demand
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-300">
              Scale your team with vetted engineers, designers, product managers and data experts. Fast matching, flexible contracts, and a seamless hiring experience.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-600/20 transition-colors hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              >
                Request Talent
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#process"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white/80 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition-colors hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-900"
              >
                Talk to us
              </motion.a>
            </div>

            <div className="mt-8 flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-emerald-500" />
                <span>Vetted in 5+ dimensions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-blue-500" />
                <span>Avg. match under 72 hours</span>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[440px] w-full rounded-2xl border border-zinc-200/70 bg-gradient-to-b from-white to-zinc-50 p-1 shadow-xl dark:border-zinc-800/70 dark:from-zinc-900 dark:to-zinc-950"
          >
            <div className="absolute inset-0 rounded-2xl">
              <Spline
                scene="https://prod.spline.design/qQUip0dJPqrrPryE/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Iridescent overlay */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-60 mix-blend-overlay">
              <div className="absolute -inset-1 animate-pulse-slow rounded-3xl bg-[radial-gradient(1200px_400px_at_10%_-20%,rgba(59,130,246,0.25),transparent),radial-gradient(800px_300px_at_90%_120%,rgba(16,185,129,0.2),transparent)]" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* background accents */}
      <div className="pointer-events-none absolute inset-0 opacity-60">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/20 blur-3xl dark:bg-blue-500/10" />
        <div className="absolute right-[-10%] bottom-[-10%] h-72 w-72 rounded-full bg-emerald-500/20 blur-3xl dark:bg-emerald-500/10" />
      </div>
    </section>
  );
}
