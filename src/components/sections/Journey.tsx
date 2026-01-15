const steps = [
  {
    title: "Jadwalkan tur",
    description: "Kunjungi sekolah dan temui tim guru kami.",
  },
  {
    title: "Kenalan dengan kurikulum",
    description: "Dapatkan rekomendasi kelas sesuai kebutuhan anak.",
  },
  {
    title: "Mulai perjalanan",
    description: "Gabung di kelas percobaan sebelum program reguler.",
  },
];

const Journey = () => {
  return (
    <section className="bg-white px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Journey
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
              Perjalanan mudah bersama Kinderra.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-text/70">
            Kami mendampingi orang tua sejak kunjungan pertama hingga anak siap
            beradaptasi di lingkungan baru.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.title} className="rounded-3xl bg-[#FFF9F3] p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary text-lg font-semibold text-white">
                {index + 1}
              </div>
              <h3 className="text-lg font-semibold text-text">{step.title}</h3>
              <p className="mt-2 text-sm text-text/70">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Journey;
