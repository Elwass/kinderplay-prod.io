const Environment = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-16">
      <div className="mx-auto grid max-w-6xl items-center gap-10 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-5">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
            Environment
          </p>
          <h2 className="text-3xl font-semibold text-text md:text-4xl">
            Ruang belajar yang hangat dan aman.
          </h2>
          <p className="text-sm leading-relaxed text-text/70">
            Setiap sudut dirancang agar anak merasa nyaman bereksplorasi, dengan area
            bermain yang terang, sudut baca yang tenang, serta ruang kelas yang mendukung
            kolaborasi.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Natural light & soft palettes",
              "Outdoor sensory garden",
              "Child-safe furniture",
              "Learning corners",
            ].map((item) => (
              <div key={item} className="rounded-2xl bg-[#FFF9F3] p-4 text-sm text-text/70">
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -right-4 -top-4 h-32 w-32 rounded-full bg-primary/20" />
          <div className="absolute -left-6 bottom-0 h-20 w-20 rounded-full bg-blue/70" />
          <div className="relative rounded-[32px] border border-[#F1E6DB] bg-[#FFF9F3] p-6">
            <div className="space-y-4">
              <div className="h-40 rounded-3xl bg-white shadow-inner" />
              <div className="h-24 rounded-3xl bg-white shadow-inner" />
              <div className="flex gap-4">
                <div className="h-16 flex-1 rounded-3xl bg-white shadow-inner" />
                <div className="h-16 flex-1 rounded-3xl bg-white shadow-inner" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Environment;
