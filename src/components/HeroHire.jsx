import { motion } from 'framer-motion';
import Spline from '@splinetool/react-spline';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

const item = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

export default function HeroHire() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="relative z-10"
          >
            <motion.span
              variants={item}
              className="inline-flex items-center rounded-full border border-orange-200 bg-white/80 px-3 py-1 text-xs font-medium text-orange-700 backdrop-blur dark:border-orange-700/50 dark:bg-zinc-900/70 dark:text-orange-300"
            >
              Alphanext Talent Network
            </motion.span>
            <motion.h1
              variants={item}
              className="mt-5 text-4xl font-semibold leading-tight tracking-tight text-zinc-900 md:text-5xl dark:text-white"
            >
              Hire world-class tech talents on demand
            </motion.h1>
            <motion.p
              variants={item}
              className="mt-5 max-w-xl text-base leading-relaxed text-zinc-600 md:text-lg dark:text-zinc-300"
            >
              Scale your team with vetted engineers, designers, product managers, and data experts. Lightning-fast matching, flexible contracts, and a seamless hiring experience.
            </motion.p>

            <motion.div variants={item} className="mt-8 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.98 }}
                href="#get-started"
                className="inline-flex items-center justify-center rounded-lg bg-orange-600 px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_30px_rgba(234,88,12,0.35)] transition-colors hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-400 focus:ring-offset-2 dark:focus:ring-offset-zinc-900"
              >
                Request Talent
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href="#process"
                className="inline-flex items-center justify-center rounded-lg border border-zinc-300 bg-white/90 px-5 py-3 text-sm font-semibold text-zinc-900 backdrop-blur transition-colors hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/80 dark:text-white dark:hover:bg-zinc-900"
              >
                Talk to us
              </motion.a>
            </motion.div>

            <motion.div variants={item} className="mt-8 flex items-center gap-6 text-xs text-zinc-500 dark:text-zinc-400">
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-orange-500" />
                <span>Vetted in 5+ dimensions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-amber-500" />
                <span>Avg. match under 72 hours</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="relative h-[460px] w-full rounded-2xl border border-zinc-200/70 bg-gradient-to-b from-white to-zinc-50 p-1 shadow-xl dark:border-zinc-800/70 dark:from-zinc-950 dark:to-black"
          >
            <div className="absolute inset-0 rounded-2xl">
              <Spline
                scene="https://prod.spline.design/Ujidb4bmigoHT4IV/scene.splinecode"
                style={{ width: '100%', height: '100%' }}
              />
            </div>
            {/* Glow rings */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl">
              <div className="absolute -inset-8 rounded-[28px] opacity-70 mix-blend-screen">
                <div className="absolute inset-0 animate-[pulse_5s_ease-in-out_infinite] rounded-[28px] bg-[radial-gradient(800px_260px_at_10%_-10%,rgba(245,158,11,0.18),transparent),radial-gradient(600px_240px_at_90%_120%,rgba(234,88,12,0.16),transparent)]" />
              </div>
            </div>

            {/* Border highlight on hover */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-transparent transition duration-500 hover:ring-orange-500/30" />
          </motion.div>
        </div>
      </div>

      {/* background accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[-10%] h-72 w-72 -translate-x-1/2 rounded-full bg-orange-500/20 blur-3xl dark:bg-orange-500/10" />
        <div className="absolute right-[-10%] bottom-[-10%] h-72 w-72 rounded-full bg-amber-500/20 blur-3xl dark:bg-amber-500/10" />
      </div>
    </section>
  );
}
