import Link from 'next/link';

export default function NotFound() {
  return (
    <main id="main-content" className="grid min-h-[75svh] place-items-center px-5 pb-20 pt-32 text-center">
      <div>
        <p className="font-mono text-sm text-cyan-300">404 / NOT_FOUND</p>
        <h1 className="mt-5 text-5xl font-black text-white sm:text-7xl">This route does not exist.</h1>
        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">The link may be outdated, or the page may have moved. The homepage and work index are the best recovery points.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href="/" className="button-primary">Return home</Link>
          <Link href="/work" className="button-secondary">Browse work</Link>
        </div>
      </div>
    </main>
  );
}
