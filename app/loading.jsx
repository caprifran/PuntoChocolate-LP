export default function Loading() {
  return (
    <main className="flex flex-col w-full relative min-h-screen bg-cream text-choco">
      {/* ── Navbar skeleton ── */}
      <nav className="sticky top-0 z-50 w-full h-16 bg-cream/90 backdrop-blur border-b border-choco/10 flex items-center justify-between px-6 md:px-12">
        <div className="h-8 w-8 rounded-full skeleton" />
        <div className="hidden md:flex gap-6">
          {[80, 64, 96, 72, 112].map((w, i) => (
            <div key={i} className="h-3 rounded skeleton" style={{ width: w }} />
          ))}
        </div>
        <div className="h-5 w-5 rounded skeleton md:hidden" />
      </nav>

      {/* ── Hero skeleton ── */}
      <section className="relative w-full h-[calc(100vh-64px)] skeleton">
        <div className="absolute bottom-0 inset-x-0 flex flex-col items-center gap-4 px-4 pb-12">
          <div className="h-4 w-32 rounded skeleton-light" />
          <div className="h-10 w-72 md:w-[28rem] rounded skeleton-light" />
          <div className="h-10 w-48 md:w-80 rounded skeleton-light" />
          <div className="h-12 w-44 rounded-full skeleton-light mt-2" />
        </div>
      </section>

      {/* ── Content sections ── */}
      <div className="flex flex-col w-full gap-3">
        {/* Section 1 — image left, text right (Helados) */}
        <section className="py-24 bg-cream overflow-hidden">
          <div className="container mx-auto px-12">
            <div className="flex flex-col md:flex-row gap-12 items-end">
              <div className="md:w-1/2 aspect-[4/5] rounded skeleton" />
              <div className="md:w-1/2 pb-12 flex flex-col gap-4">
                <div className="h-3 w-28 rounded skeleton" />
                <div className="h-8 w-full max-w-sm rounded skeleton" />
                <div className="h-8 w-3/4 max-w-xs rounded skeleton" />
                <div className="h-4 w-full max-w-md rounded skeleton mt-4" />
                <div className="h-4 w-5/6 max-w-md rounded skeleton" />
                <div className="h-4 w-2/3 max-w-md rounded skeleton" />
                <div className="h-px w-24 bg-choco/20 mt-4" />
              </div>
            </div>

            {/* Carousel placeholder */}
            <div className="mt-24 flex gap-6 overflow-hidden">
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="flex-shrink-0 w-56 h-72 rounded-xl skeleton" />
              ))}
            </div>
          </div>
        </section>

        {/* Section 2 — image right, text left (Chocolatería) */}
        <section className="py-24 bg-cream overflow-hidden">
          <div className="container mx-auto px-12">
            <div className="flex flex-col md:flex-row-reverse gap-12 items-end">
              <div className="md:w-1/2 aspect-[4/5] rounded skeleton" />
              <div className="md:w-1/2 pb-12 flex flex-col gap-4">
                <div className="h-3 w-24 rounded skeleton" />
                <div className="h-8 w-full max-w-xs rounded skeleton" />
                <div className="h-8 w-2/3 max-w-xs rounded skeleton" />
                <div className="h-4 w-full max-w-md rounded skeleton mt-4" />
                <div className="h-4 w-5/6 max-w-md rounded skeleton" />
                <div className="h-4 w-2/3 max-w-md rounded skeleton" />
                <div className="h-px w-24 bg-choco/20 mt-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 — Alfajores (mirrors section 1 layout) */}
        <section className="py-24 bg-cream overflow-hidden">
          <div className="container mx-auto px-12">
            <div className="flex flex-col md:flex-row gap-12 items-end">
              <div className="md:w-1/2 aspect-[4/5] rounded skeleton" />
              <div className="md:w-1/2 pb-12 flex flex-col gap-4">
                <div className="h-3 w-28 rounded skeleton" />
                <div className="h-8 w-full max-w-sm rounded skeleton" />
                <div className="h-8 w-3/4 max-w-xs rounded skeleton" />
                <div className="h-4 w-full max-w-md rounded skeleton mt-4" />
                <div className="h-4 w-5/6 max-w-md rounded skeleton" />
                <div className="h-px w-24 bg-choco/20 mt-4" />
              </div>
            </div>
          </div>
        </section>

        {/* Footer skeleton */}
        <footer className="bg-choco w-full border-t border-cream/20 flex flex-col items-center px-12 py-16 gap-10">
          <div className="flex items-center gap-4">
            <div className="h-10 w-10 rounded-full skeleton-light" />
            <div className="h-6 w-44 rounded skeleton-light" />
          </div>
          <div className="flex flex-col items-center gap-3">
            <div className="h-3 w-64 rounded skeleton-light" />
            <div className="h-3 w-48 rounded skeleton-light" />
          </div>
          <div className="w-full border-t border-cream/20 mt-4 pt-6 flex justify-center gap-4">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="h-8 w-8 rounded-full skeleton-light" />
            ))}
          </div>
        </footer>
      </div>
    </main>
  );
}
