const programs = [
  {
    title: "Toddler Class",
    age: "Ages 2-3",
    description:
      "Rutinitas lembut yang membangun rasa aman, kemandirian, dan kemampuan sosial awal.",
  },
  {
    title: "Pre-K Class",
    age: "Ages 3-4",
    description:
      "Pembelajaran aktif lewat seni, sains sederhana, dan permainan terstruktur.",
  },
  {
    title: "Kindergarten",
    age: "Ages 4-6",
    description:
      "Kegiatan kolaboratif yang mempersiapkan anak untuk transisi ke sekolah dasar.",
  },
];

const Programs = () => {
  return (
    <section className="bg-beige px-6 py-16 md:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-wrap items-center justify-between gap-6">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.2em] text-primary">
              Programs
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-text md:text-4xl">
              Program belajar sesuai tahap perkembangan.
            </h2>
          </div>
          <p className="max-w-md text-sm leading-relaxed text-text/70">
            Kurikulum kami fleksibel dan disesuaikan dengan kesiapan setiap anak untuk
            memberikan pengalaman belajar yang menyenangkan.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program) => (
            <article key={program.title} className="rounded-3xl bg-white p-6 shadow-sm">
              <div className="mb-4 inline-flex rounded-full bg-primary/15 px-3 py-1 text-xs font-semibold text-primary">
                {program.age}
              </div>
              <h3 className="text-xl font-semibold text-text">{program.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-text/70">
                {program.description}
              </p>
              <div className="mt-6 h-2 w-16 rounded-full bg-blue" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Programs;
