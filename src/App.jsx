import HeroHire from './components/HeroHire';
import Benefits from './components/Benefits';
import TalentGrid from './components/TalentGrid';
import ProcessTimeline from './components/ProcessTimeline';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-zinc-900 antialiased dark:bg-zinc-950 dark:text-zinc-50">
      <header className="sticky top-0 z-50 border-b border-zinc-200/60 bg-white/80 backdrop-blur dark:border-zinc-800/60 dark:bg-zinc-950/70">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-2">
            <div className="h-3.5 w-3.5 rounded-full bg-gradient-to-tr from-blue-600 to-emerald-500" />
            <span className="font-semibold">alphanext</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-zinc-600 md:flex dark:text-zinc-300">
            <a href="#categories" className="hover:text-zinc-900 dark:hover:text-white">Talent</a>
            <a href="#process" className="hover:text-zinc-900 dark:hover:text-white">Process</a>
            <a href="#get-started" className="hover:text-zinc-900 dark:hover:text-white">Get started</a>
          </nav>
          <div className="flex items-center gap-3">
            <a
              href="#get-started"
              className="hidden rounded-md border border-zinc-200 bg-white px-3 py-1.5 text-sm font-medium text-zinc-900 hover:bg-zinc-50 md:inline-block dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
            >
              Hire Talents
            </a>
            <a
              href="#"
              className="rounded-md bg-blue-600 px-3.5 py-1.5 text-sm font-semibold text-white shadow-sm shadow-blue-600/20 hover:bg-blue-500"
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

      <footer className="border-t border-zinc-200/60 py-10 text-sm text-zinc-600 dark:border-zinc-800/60 dark:text-zinc-300">
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
  );
}
