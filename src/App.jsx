import { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
import HeroHire from './components/HeroHire';
import Benefits from './components/Benefits';
import TalentGrid from './components/TalentGrid';
import ProcessTimeline from './components/ProcessTimeline';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Respect system preference on first load
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDark(prefersDark);
  }, []);

  return (
    <div className={`${isDark ? 'dark' : ''}`}>
      <div className="min-h-screen bg-white text-zinc-900 antialiased transition-colors duration-500 dark:bg-black dark:text-zinc-50">
        <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur transition-colors duration-500 dark:border-zinc-800/60 dark:bg-zinc-950/70">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-tr from-orange-500 to-amber-400" />
              <span className="font-semibold">alphanext</span>
            </div>
            <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex dark:text-zinc-300">
              <a href="#categories" className="hover:text-zinc-900 dark:hover:text-white">Talent</a>
              <a href="#process" className="hover:text-zinc-900 dark:hover:text-white">Process</a>
              <a href="#get-started" className="hover:text-zinc-900 dark:hover:text-white">Get started</a>
            </nav>
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsDark((v) => !v)}
                aria-label="Toggle theme"
                className="inline-flex items-center justify-center rounded-md border border-zinc-200 bg-white/80 p-2 text-zinc-700 backdrop-blur transition-colors hover:bg-white dark:border-zinc-700 dark:bg-zinc-900/70 dark:text-zinc-200"
              >
                {isDark ? <Sun className="h-4 w-4 text-amber-400" /> : <Moon className="h-4 w-4 text-orange-600" />}
              </button>
              <a
                href="#get-started"
                className="hidden rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 md:inline-block dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                Hire Talents
              </a>
              <a
                href="#"
                className="rounded-md bg-orange-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm shadow-orange-600/20 transition-colors hover:bg-orange-500"
              >
                Sign in
              </a>
            </div>
          </div>
        </header>

        <main>
          <HeroHire />
          <Benefits />
          <TalentGrid />
          <ProcessTimeline />
        </main>

        <footer className="border-t border-zinc-200/60 py-10 text-sm text-zinc-600 transition-colors dark:border-zinc-800/60 dark:text-zinc-300">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row">
            <p>© {new Date().getFullYear()} alphanext. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Privacy</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Terms</a>
              <a href="#" className="hover:text-zinc-900 dark:hover:text-white">Contact</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
