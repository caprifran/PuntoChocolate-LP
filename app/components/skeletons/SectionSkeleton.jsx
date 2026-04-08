/**
 * Reusable skeleton fallback for product sections (Helados, Chocolatería, Alfajores).
 *
 * @param {"left"|"right"} imagePosition – which side the hero image sits on
 * @param {boolean}        showCarousel  – render a horizontal card-carousel placeholder
 */
export default function SectionSkeleton({
  imagePosition = 'left',
  showCarousel = false,
}) {
  const isRight = imagePosition === 'right';

  return (
    <section className="py-24 bg-cream overflow-hidden animate-pulse">
      <div className="container mx-auto px-12">
        {/* ── Image + text row ── */}
        <div
          className={`flex flex-col ${
            isRight ? 'md:flex-row-reverse' : 'md:flex-row'
          } gap-12 items-end`}
        >
          {/* Image placeholder */}
          <div className="md:w-1/2 aspect-[4/5] rounded skeleton" />

          {/* Text placeholder */}
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

        {/* ── Carousel placeholder (optional) ── */}
        {showCarousel && (
          <div className="mt-24 flex gap-6 overflow-hidden">
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-56 h-72 rounded-xl skeleton"
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
