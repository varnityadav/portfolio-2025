export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex flex-col items-center justify-center p-6 font-sans">
      <div className="max-w-3xl w-full">
        <header className="mb-12">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight bg-linear-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Varnit Yadav
          </h1>
          <p className="text-xl text-slate-400 mt-4 font-medium">
            15-Year-Old Developer & Creative Designer
          </p>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-blue-500 transition-all cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Project One</h3>
            <p className="text-slate-400 text-sm">A cool web application built with Next.js and Tailwind.</p>
          </div>
          <div className="p-6 rounded-2xl bg-slate-900 border border-slate-800 hover:border-purple-500 transition-all cursor-pointer">
            <h3 className="text-xl font-bold mb-2">Project Two</h3>
            <p className="text-slate-400 text-sm">Mobile responsive design project focusing on UI/UX.</p>
          </div>
        </section>

        <footer className="mt-16 pt-8 border-t border-slate-900">
          <p className="text-slate-500">© 2026 • Built with VS Code</p>
        </footer>
      </div>
    </main>
  );
}