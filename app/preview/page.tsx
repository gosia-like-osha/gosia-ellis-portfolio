import { StickyPillNav } from "../components/StickyPillNav";

/** First-pass workspace shell — image + chrome only; actions are non-functional. */
export default function PreviewPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-[#15171c]">
      <StickyPillNav activeTab="highlights" />

      <header className="w-full">
        <div className="mx-auto flex max-w-[1440px] items-start justify-between gap-6 px-6 pt-[28px] lg:px-[100px]">
          <div className="pt-[6px] text-[28px] font-semibold leading-[1.3] tracking-[-0.28px] whitespace-nowrap sm:text-[31px] sm:tracking-[-0.31px]">
            Gosia Ellis
          </div>
        </div>
      </header>

      <main className="w-full flex-1 pb-24 sm:pb-16">
        <div className="mx-auto max-w-[1440px] px-6 pt-[41px] lg:px-[100px]">
          <div className="relative flex min-h-[560px] flex-col items-center justify-center rounded-[32px] bg-[#f4f4f4] px-4 py-16 sm:min-h-[calc(100vh-12rem)] sm:rounded-[40px] sm:px-10 sm:py-20">
            {/* Floating toolbar */}
            <div
              className="absolute top-6 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1 rounded-[100px] border border-[rgba(21,23,28,0.08)] bg-white p-1.5 shadow-[0_12px_40px_rgba(21,23,28,0.06)] sm:top-10"
              role="toolbar"
              aria-label="Preview actions"
            >
              <button
                type="button"
                className="rounded-[100px] px-4 py-2 text-[14px] font-semibold tracking-[-0.14px] text-[#15171c] transition-colors hover:bg-[#f2f2f2]"
              >
                ↓ Export
              </button>
              <button
                type="button"
                className="rounded-[100px] bg-[#ebebeb] px-4 py-2 text-[14px] font-semibold tracking-[-0.14px] text-[#15171c]"
                aria-pressed="true"
              >
                ✨ Edit
              </button>
              <button
                type="button"
                className="rounded-[100px] px-3 py-2 text-[14px] font-semibold text-[#666] transition-colors hover:bg-[#f2f2f2] hover:text-[#15171c]"
                aria-label="More options"
              >
                ···
              </button>
            </div>

            {/* Canvas */}
            <div className="relative mt-10 flex w-full max-w-[420px] flex-col items-center sm:mt-6">
              <div className="relative w-full overflow-hidden rounded-[20px] shadow-[0_24px_80px_rgba(21,23,28,0.08)] ring-1 ring-[rgba(21,23,28,0.06)]">
                {/*
                  Plain <img>: next/image is a client boundary; with Turbopack dev, it can block
                  the route behind a stuck "Rendering" state (see next.config.ts images note).
                */}
                {/* eslint-disable-next-line @next/next/no-img-element -- intentional: avoid next/image + Turbopack dev hang */}
                <img
                  src="/images/about-photo.png"
                  alt="Preview"
                  width={800}
                  height={1200}
                  decoding="async"
                  fetchPriority="high"
                  className="h-auto w-full object-cover"
                />

                {/* Decorative hotspots (match reference layout) */}
                <span
                  className="pointer-events-none absolute top-[18%] left-[22%] size-10 rounded-full border border-white/50 bg-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] backdrop-blur-[2px]"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute bottom-[20%] left-1/2 size-10 -translate-x-1/2 rounded-full border border-white/50 bg-white/25 shadow-[0_0_0_1px_rgba(255,255,255,0.15)_inset] backdrop-blur-[2px]"
                  aria-hidden
                />

                {/* Prompt bar */}
                <div className="absolute right-3 bottom-4 left-3 sm:right-4 sm:bottom-5 sm:left-auto sm:max-w-[min(100%,320px)]">
                  <div className="flex items-center gap-2 rounded-[16px] border border-[rgba(21,23,28,0.08)] bg-white/95 px-3 py-2.5 shadow-[0_16px_48px_rgba(21,23,28,0.12)] backdrop-blur-md sm:px-3.5">
                    <span className="flex shrink-0 items-center gap-1.5 text-[#999]">
                      <span className="text-[18px] leading-none">+</span>
                      <span className="inline-flex size-6 items-center justify-center rounded-md bg-[#f2f2f2] text-[12px]" aria-hidden>
                        ▣
                      </span>
                    </span>
                    <p className="min-w-0 flex-1 truncate text-[14px] leading-[1.35] tracking-[-0.12px] text-[#15171c] sm:text-[15px]">
                      Change background to soft pink
                    </p>
                    <button
                      type="button"
                      className="flex size-9 shrink-0 items-center justify-center rounded-full bg-[#15171c] text-white transition-opacity hover:opacity-90"
                      aria-label="Send prompt"
                    >
                      <span className="-mt-0.5 text-[15px] leading-none">↑</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
