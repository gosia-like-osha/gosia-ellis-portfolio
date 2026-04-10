import { StickyPillNav } from "./components/StickyPillNav";

export default function Home() {
  return (
    <div className="flex flex-col min-h-full bg-white text-[#15171c]">
      <StickyPillNav activeTab="highlights" />

      <header className="w-full">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[28px] flex items-start justify-between gap-6">
          <div className="pt-[6px] text-[31px] tracking-[-0.31px] font-semibold leading-[1.3] whitespace-nowrap">
            Gosia Ellis
          </div>
        </div>
      </header>

      <main className="w-full">
        <section
          id="highlights"
          className="max-w-[1440px] mx-auto px-6 lg:px-[100px] pt-[41px] pb-16"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            {/* Row 1 */}
            <div className="lg:col-span-4">
              <div className="h-[532px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>
            <div className="lg:col-span-8">
              <div className="h-[532px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>

            {/* Row 2 */}
            <div className="lg:col-span-8">
              <div className="h-[643px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>
            <div className="lg:col-span-4">
              <div className="h-[643px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>

            {/* Row 3 */}
            <div className="lg:col-span-7">
              <div className="h-[506px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>
            <div className="lg:col-span-5">
              <div className="h-[506px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>

            {/* Row 4 */}
            <div className="lg:col-span-6">
              <div className="h-[506px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>
            <div className="lg:col-span-6">
              <div className="h-[506px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>

            {/* Row 5 */}
            <div className="lg:col-span-6">
              <div className="h-[506px] w-full rounded-[40px] bg-[#f7f7f9] border border-[rgba(21,23,28,0.1)]" />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
